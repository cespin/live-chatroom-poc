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
          id
          hostID
          name
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
      id
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
        id
        hostID
        host {
          id
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
        createdAt
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
      id
      hostID
      host {
        conversations {
          nextToken
          startedAt
        }
        id
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
          id
          isSent
          recipientID
          sender
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
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
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
        id
        hostID
        host {
          id
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
        createdAt
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
          id
          hostID
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        id
        isSent
        recipientID
        recipient {
          id
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
        createdAt
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
        id
        hostID
        host {
          id
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
        createdAt
        updatedAt
        owner
      }
      id
      isSent
      recipientID
      recipient {
        conversations {
          nextToken
          startedAt
        }
        id
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
      createdAt
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
          id
          hostID
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        id
        isSent
        recipientID
        recipient {
          id
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
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
