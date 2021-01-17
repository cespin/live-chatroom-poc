/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
