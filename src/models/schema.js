export const schema = {
    "models": {},
    "enums": {},
    "nonModels": {
        "Message": {
            "name": "Message",
            "fields": {
                "author": {
                    "name": "author",
                    "isArray": false,
                    "type": {
                        "nonModel": "User"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "conversationId": {
                    "name": "conversationId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "isSent": {
                    "name": "isSent",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "recipient": {
                    "name": "recipient",
                    "isArray": false,
                    "type": {
                        "nonModel": "User"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sender": {
                    "name": "sender",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "User": {
            "name": "User",
            "fields": {
                "cognitoId": {
                    "name": "cognitoId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "conversations": {
                    "name": "conversations",
                    "isArray": false,
                    "type": {
                        "nonModel": "UserConverstationsConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "messages": {
                    "name": "messages",
                    "isArray": false,
                    "type": {
                        "nonModel": "MessageConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "registered": {
                    "name": "registered",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "UserConverstationsConnection": {
            "name": "UserConverstationsConnection",
            "fields": {
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "userConversations": {
                    "name": "userConversations",
                    "isArray": true,
                    "type": {
                        "nonModel": "UserConversations"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "UserConversations": {
            "name": "UserConversations",
            "fields": {
                "associated": {
                    "name": "associated",
                    "isArray": true,
                    "type": {
                        "nonModel": "UserConversations"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "conversation": {
                    "name": "conversation",
                    "isArray": false,
                    "type": {
                        "nonModel": "Conversation"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "conversationId": {
                    "name": "conversationId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": {
                        "nonModel": "User"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "userId": {
                    "name": "userId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Conversation": {
            "name": "Conversation",
            "fields": {
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "messages": {
                    "name": "messages",
                    "isArray": false,
                    "type": {
                        "nonModel": "MessageConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "MessageConnection": {
            "name": "MessageConnection",
            "fields": {
                "messages": {
                    "name": "messages",
                    "isArray": true,
                    "type": {
                        "nonModel": "Message"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "bc1653f128753c8eca7796c607633881"
};