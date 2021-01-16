/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_ATTENDEES_ARN
	STORAGE_ATTENDEES_NAME
	STORAGE_MEETINGS_ARN
	STORAGE_MEETINGS_NAME
Amplify Params - DO NOT EDIT *//*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB({
    region: process.env.REGION,
    apiVersion: '2012-08-10',
    maxRetries: 3,
    httpOptions: {
        timeout: 5000
    }
});
const chime = new AWS.Chime({ region: 'us-east-1' }); // Must be in us-east-1
chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com/console');
const {STORAGE_MEETINGS_NAME, STORAGE_ATTENDEES_NAME} = process.env;

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
});

const simplifyTitle = title => {
    // Strip out most symbolic characters and whitespace and make case insensitive,
    // but preserve any Unicode characters outside of the ASCII range.
    return (title || '').replace(/[\s()!@#$%^&*`~_=+{}|\\;:'",.<>/?\[\]-]+/gu, '').toLowerCase() || null;
};

const getMeeting = async (meetingTitle) => {
    const filter = {
        TableName: STORAGE_MEETINGS_NAME,
        Key: {
            'Title': {
                S: meetingTitle
            },
        },
    };

    console.info("getMeeting > filter:", JSON.stringify(filter, null, 2));

    const result = await ddb.getItem(filter).promise();

    console.info("getMeeting > result:", JSON.stringify(result, null, 2));

    if (!result.Item) {
        return null;
    }
    const meetingData = JSON.parse(result.Item.Data.S);
    meetingData.PlaybackURL = result.Item.PlaybackURL.S;
    try {
        await chime.getMeeting({
            MeetingId: meetingData.Meeting.MeetingId
        }).promise();
    } catch (err) {
        console.info("getMeeting > try/catch:", JSON.stringify(err, null, 2));
        return null;
    }
    return meetingData;
};

const oneDayFromNow = () => Math.floor(Date.now() / 1000) + 60 * 60 * 24;

const putMeeting = async(title, playbackURL, meetingInfo) => {
    await ddb.putItem({
        TableName: STORAGE_MEETINGS_NAME,
        Item: {
            'Title': { S: title },
            'PlaybackURL': { S: playbackURL },
            'Data': { S: JSON.stringify(meetingInfo) },
            'TTL': {
                N: '' + oneDayFromNow()
            }
        }
    }).promise();
};

const putAttendee = async(title, attendeeId, name) => {
    await ddb.putItem({
        TableName: STORAGE_ATTENDEES_NAME,
        Item: {
            'AttendeeId': {
                S: `${title}/${attendeeId}`
            },
            'Name': { S: name },
            'TTL': {
                N: '' + oneDayFromNow()
            }
        }
    }).promise();
};

const uuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});

const endMeeting = async(title) => {
    const meetingInfo = await getMeeting(title);

    try {
        await chime.deleteMeeting({
            MeetingId: meetingInfo.Meeting.MeetingId,
        }).promise();
    } catch (err) {
        console.info("endMeeting > try/catch:", JSON.stringify(err, null, 2));
        // return null;
    }

    const params = {
        TableName: STORAGE_MEETINGS_NAME,
        Key: {
            'Title': {
                S: title
            },
        },
    };

    console.info("deleteMeeting > params:", JSON.stringify(params, null, 2));

    const result = await ddb.delete(params).promise();

    console.info("deleteMeeting > result:", JSON.stringify(result, null, 2));

    return result;
};

const getAttendee = async(title, attendeeId) => {
    const result = await ddb.getItem({
        TableName: STORAGE_ATTENDEES_NAME,
        Key: {
            'AttendeeId': {
                S: `${title}/${attendeeId}`
            }
        }
    }).promise();
    if (!result.Item) {
        return 'Unknown';
    }
    return result.Item.Name.S;
};

app.post('/join', async (req, res) => {
    let payload;

    try {
        payload = req.body;
    } catch (err) {
        console.log("join req > parse payload:", JSON.stringify(err, null, 2));
        res.status(500).send(JSON.stringify(err));
        return Promise.resolve();
    }

    if (!payload || !payload.title || !payload.name) {
        console.log("join > missing required fields: Must provide title and name");
        res.status(400).send("Must provide title and name");
        return Promise.resolve();
    }

    if (payload.role === 'host' && !payload.playbackURL) {
        console.log("join > missing required field: Must provide playbackURL");
        res.status(400).send("Must provide playbackURL");
        return Promise.resolve();
    }

    const title = simplifyTitle(payload.title);
    const name = payload.name;
    const region = payload.region || 'us-east-1';
    let meetingInfo = await getMeeting(title);

    // If meeting does not exist and role equal to "host" then create meeting room
    if (!meetingInfo && payload.role === 'host') {
        const request = {
            ClientRequestToken: uuid(),
            MediaRegion: region
        };
        console.info('join req > Creating new meeting: ' + JSON.stringify(request, null, 2));
        meetingInfo = await chime.createMeeting(request).promise();
        meetingInfo.PlaybackURL = payload.playbackURL;
        await putMeeting(title, payload.playbackURL, meetingInfo);
    }

    console.info("join req > meetingInfo:", JSON.stringify(meetingInfo, null, 2));

    console.info('join req > Adding new attendee');
    const attendeeInfo = (await chime.createAttendee({
        MeetingId: meetingInfo.Meeting.MeetingId,
        ExternalUserId: uuid(),
    }).promise());

    console.info("join req > attendeeInfo:", JSON.stringify(attendeeInfo, null, 2));

    await putAttendee(title, attendeeInfo.Attendee.AttendeeId, name);

    const joinInfo = {
        JoinInfo: {
            Title: title,
            PlaybackURL: meetingInfo.PlaybackURL,
            Meeting: meetingInfo.Meeting,
            Attendee: attendeeInfo.Attendee
        },
    };

    console.info("join req > joinInfo:", JSON.stringify(joinInfo, null, 2));
    res.json(joinInfo)
});

app.get('/attendee', async (req, res) => {

    if (!req.query.title || !req.query.attendeeId) {
        console.log("attendee req > missing required fields: Must provide title and attendeeId");
        res.status(400).send("Must provide title and attendeeId");
        return Promise.resolve();
    }

    const title = simplifyTitle(req.query.title);
    const attendeeId = req.query.attendeeId;
    const attendeeInfo = {
        AttendeeInfo: {
            AttendeeId: attendeeId,
            Name: await getAttendee(title, attendeeId)
        }
    };

    console.info("attendee event > response: %j", res);
    res.json(attendeeInfo);
});

app.get('/end', async (req, res) => {
    console.log("end event:", JSON.stringify(req, null, 2));

    if (!req.query.title) {
        console.log("end event > missing required fields: Must provide title");
        res.status(400).send("Must provide title");
        return Promise.resolve();
    }

    const title = simplifyTitle(req.query.title);
    console.info("end event > res:", JSON.stringify(res, null, 2));
    res.json(endMeeting(title));
});

/**********************
 * Example get method *
 **********************/

app.get('/', function (req, res) {
    // Add your code here
    res.json({success: 'get call succeed!', url: req.url});
});

app.get('//*', function (req, res) {
    // Add your code here
    res.json({success: 'get call succeed!', url: req.url});
});

/****************************
 * Example post method *
 ****************************/

app.post('/', function (req, res) {
    // Add your code here
    res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('//*', function (req, res) {
    // Add your code here
    res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
 * Example put method *
 ****************************/

app.put('/', function (req, res) {
    // Add your code here
    res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('//*', function (req, res) {
    // Add your code here
    res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
 * Example delete method *
 ****************************/

app.delete('/', function (req, res) {
    // Add your code here
    res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('//*', function (req, res) {
    // Add your code here
    res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function () {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
