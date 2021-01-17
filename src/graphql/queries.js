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
        cognitoId
        conversations {
          createdAt
          id
          name
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        id
        username
        registered
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      cognitoId
      conversations {
        createdAt
        id
        messages {
          content
          createdAt
          id
          isSent
          sender
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        name
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      id
      username
      registered
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        cognitoId
        conversations {
          createdAt
          id
          name
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        id
        username
        registered
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
        messages {
          content
          createdAt
          id
          isSent
          sender
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        name
        _version
        _deleted
        _lastChangedAt
        updatedAt
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
      messages {
        author {
          cognitoId
          id
          username
          registered
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        content
        conversation {
          createdAt
          id
          name
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        createdAt
        id
        isSent
        recipient {
          cognitoId
          id
          username
          registered
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        sender
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      name
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
        messages {
          content
          createdAt
          id
          isSent
          sender
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        name
        _version
        _deleted
        _lastChangedAt
        updatedAt
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
        author {
          cognitoId
          id
          username
          registered
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        content
        conversation {
          createdAt
          id
          name
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        createdAt
        id
        isSent
        recipient {
          cognitoId
          id
          username
          registered
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        sender
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      author {
        cognitoId
        conversations {
          createdAt
          id
          name
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        id
        username
        registered
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      content
      conversation {
        createdAt
        id
        messages {
          content
          createdAt
          id
          isSent
          sender
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        name
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      createdAt
      id
      isSent
      recipient {
        cognitoId
        conversations {
          createdAt
          id
          name
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        id
        username
        registered
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      sender
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
        author {
          cognitoId
          id
          username
          registered
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        content
        conversation {
          createdAt
          id
          name
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        createdAt
        id
        isSent
        recipient {
          cognitoId
          id
          username
          registered
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        sender
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
