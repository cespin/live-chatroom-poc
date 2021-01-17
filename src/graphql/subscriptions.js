/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
