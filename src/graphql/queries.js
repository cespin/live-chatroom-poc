/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        conversations {
          nextToken
          startedAt
        }
        id
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      conversations {
        items {
          createdAt
          id
          hostID
          name
          _version
          _deleted
          _lastChangedAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      id
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        conversations {
          nextToken
          startedAt
        }
        id
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConversations = /* GraphQL */ `
  query SyncConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConversations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        createdAt
        id
        hostID
        host {
          id
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        name
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      createdAt
      id
      hostID
      host {
        conversations {
          nextToken
          startedAt
        }
        id
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      messages {
        items {
          authorID
          content
          conversationID
          createdAt
          id
          isSent
          recipientID
          sender
          _version
          _deleted
          _lastChangedAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      name
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        hostID
        host {
          id
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        name
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        authorID
        author {
          id
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        content
        conversationID
        conversation {
          createdAt
          id
          hostID
          name
          _version
          _deleted
          _lastChangedAt
          updatedAt
          owner
        }
        createdAt
        id
        isSent
        recipientID
        recipient {
          id
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        sender
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      authorID
      author {
        conversations {
          nextToken
          startedAt
        }
        id
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      content
      conversationID
      conversation {
        createdAt
        id
        hostID
        host {
          id
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        messages {
          nextToken
          startedAt
        }
        name
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      createdAt
      id
      isSent
      recipientID
      recipient {
        conversations {
          nextToken
          startedAt
        }
        id
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      sender
      _version
      _deleted
      _lastChangedAt
      updatedAt
      owner
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        authorID
        author {
          id
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        content
        conversationID
        conversation {
          createdAt
          id
          hostID
          name
          _version
          _deleted
          _lastChangedAt
          updatedAt
          owner
        }
        createdAt
        id
        isSent
        recipientID
        recipient {
          id
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        sender
        _version
        _deleted
        _lastChangedAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
