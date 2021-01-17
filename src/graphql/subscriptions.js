/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
