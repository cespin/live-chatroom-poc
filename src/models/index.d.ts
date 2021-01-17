import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly conversations?: (Conversation | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Conversation {
  readonly id: string;
  readonly createdAt: string;
  readonly host?: User;
  readonly messages?: (Message | null)[];
  readonly name: string;
  constructor(init: ModelInit<Conversation>);
  static copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation>) => MutableModel<Conversation> | void): Conversation;
}

export declare class Message {
  readonly id: string;
  readonly author?: User;
  readonly content: string;
  readonly conversation?: Conversation;
  readonly createdAt: string;
  readonly isSent?: boolean;
  readonly recipient?: User;
  readonly sender?: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}