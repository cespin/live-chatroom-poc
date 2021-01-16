/* eslint-disable-line */ const aws = require('aws-sdk');

exports.handler = async (event, context, callback) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });

  const addUserParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  if (event.request.userAttributes.email.endsWith("espin.xyz") || event.request.userAttributes.email.endsWith("mavtek.com")) {
    addUserParams.GroupName = "Hosts";
  }

  try {
    await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
    callback(null, event);
  } catch (e) {
    callback(e);
  }
};
