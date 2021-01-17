import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly cognitoId: string;
  readonly username: string;
  readonly registered?: boolean;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Conversation {
  readonly id: string;
  readonly createdAt?: string;
  readonly name: string;
  constructor(init: ModelInit<Conversation>);
  static copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation>) => MutableModel<Conversation> | void): Conversation;
}

export declare class Message {
  readonly id: string;
  readonly content: string;
  readonly createdAt?: string;
  readonly isSent?: boolean;
  readonly sender?: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}