// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, User, UserConverstationsConnection, UserConversations, Conversation, MessageConnection } = initSchema(schema);

export {
  Message,
  User,
  UserConverstationsConnection,
  UserConversations,
  Conversation,
  MessageConnection
};