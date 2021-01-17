/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
