/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
