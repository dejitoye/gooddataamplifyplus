/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      content
      status
      userID
      chatroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      content
      status
      userID
      chatroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      content
      status
      userID
      chatroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      newMessage
      chatType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LastMessage {
        id
        content
        status
        userID
        chatroomID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Messages {
        items {
          id
          content
          status
          userID
          chatroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ChatRoomUsers {
        items {
          id
          chatroomID
          userID
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
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      newMessage
      chatType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LastMessage {
        id
        content
        status
        userID
        chatroomID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Messages {
        items {
          id
          content
          status
          userID
          chatroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ChatRoomUsers {
        items {
          id
          chatroomID
          userID
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
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      newMessage
      chatType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LastMessage {
        id
        content
        status
        userID
        chatroomID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Messages {
        items {
          id
          content
          status
          userID
          chatroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ChatRoomUsers {
        items {
          id
          chatroomID
          userID
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
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      pix
      status
      lastOnlineAt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
        items {
          id
          content
          status
          userID
          chatroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      chatrooms {
        items {
          id
          chatroomID
          userID
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
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      pix
      status
      lastOnlineAt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
        items {
          id
          content
          status
          userID
          chatroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      chatrooms {
        items {
          id
          chatroomID
          userID
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
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      pix
      status
      lastOnlineAt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Messages {
        items {
          id
          content
          status
          userID
          chatroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      chatrooms {
        items {
          id
          chatroomID
          userID
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
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      id
      chatroomID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatroom {
        id
        newMessage
        chatType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        LastMessage {
          id
          content
          status
          userID
          chatroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Messages {
          nextToken
          startedAt
        }
        ChatRoomUsers {
          nextToken
          startedAt
        }
      }
      user {
        id
        name
        pix
        status
        lastOnlineAt
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      id
      chatroomID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatroom {
        id
        newMessage
        chatType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        LastMessage {
          id
          content
          status
          userID
          chatroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Messages {
          nextToken
          startedAt
        }
        ChatRoomUsers {
          nextToken
          startedAt
        }
      }
      user {
        id
        name
        pix
        status
        lastOnlineAt
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      id
      chatroomID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      chatroom {
        id
        newMessage
        chatType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        LastMessage {
          id
          content
          status
          userID
          chatroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Messages {
          nextToken
          startedAt
        }
        ChatRoomUsers {
          nextToken
          startedAt
        }
      }
      user {
        id
        name
        pix
        status
        lastOnlineAt
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
      }
    }
  }
`;
