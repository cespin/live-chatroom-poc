// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Conversation, Message } = initSchema(schema);

export {
  User,
  Conversation,
  Message
};