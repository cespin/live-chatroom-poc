import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Message {
  readonly author?: User;
  readonly content: string;
  readonly conversationId: string;
  readonly createdAt?: string;
  readonly id: string;
  readonly isSent?: boolean;
  readonly recipient?: User;
  readonly sender?: string;
  constructor(init: ModelInit<Message>);
}

export declare class User {
  readonly cognitoId: string;
  readonly conversations?: UserConverstationsConnection;
  readonly id: string;
  readonly messages?: MessageConnection;
  readonly username: string;
  readonly registered?: boolean;
  constructor(init: ModelInit<User>);
}

export declare class UserConverstationsConnection {
  readonly nextToken?: string;
  readonly userConversations?: (UserConversations | null)[];
  constructor(init: ModelInit<UserConverstationsConnection>);
}

export declare class UserConversations {
  readonly associated?: (UserConversations | null)[];
  readonly conversation?: Conversation;
  readonly conversationId: string;
  readonly user?: User;
  readonly userId: string;
  constructor(init: ModelInit<UserConversations>);
}

export declare class Conversation {
  readonly createdAt?: string;
  readonly id: string;
  readonly messages?: MessageConnection;
  readonly name: string;
  constructor(init: ModelInit<Conversation>);
}

export declare class MessageConnection {
  readonly messages?: (Message | null)[];
  readonly nextToken?: string;
  constructor(init: ModelInit<MessageConnection>);
}

