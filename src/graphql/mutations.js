/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      status
      userID
      user {
        id
        name
        pix
        status
        email
        lastOnlineAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      chatroomID
      replyToMessageID
      _version
      _deleted
      _lastChangedAt
      createdAt
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
      id
      content
      status
      userID
      user {
        id
        name
        pix
        status
        email
        lastOnlineAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      chatroomID
      replyToMessageID
      _version
      _deleted
      _lastChangedAt
      createdAt
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
      id
      content
      status
      userID
      user {
        id
        name
        pix
        status
        email
        lastOnlineAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      chatroomID
      replyToMessageID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      newMessage
      chatType
      LastMessage {
        id
        content
        status
        userID
        user {
          id
          name
          pix
          status
          email
          lastOnlineAt
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        chatroomID
        replyToMessageID
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
          replyToMessageID
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      newMessage
      chatType
      LastMessage {
        id
        content
        status
        userID
        user {
          id
          name
          pix
          status
          email
          lastOnlineAt
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        chatroomID
        replyToMessageID
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
          replyToMessageID
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      newMessage
      chatType
      LastMessage {
        id
        content
        status
        userID
        user {
          id
          name
          pix
          status
          email
          lastOnlineAt
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        chatroomID
        replyToMessageID
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
          replyToMessageID
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      pix
      status
      email
      lastOnlineAt
      Messages {
        items {
          id
          content
          status
          userID
          chatroomID
          replyToMessageID
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
      id
      name
      pix
      status
      email
      lastOnlineAt
      Messages {
        items {
          id
          content
          status
          userID
          chatroomID
          replyToMessageID
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
      id
      name
      pix
      status
      email
      lastOnlineAt
      Messages {
        items {
          id
          content
          status
          userID
          chatroomID
          replyToMessageID
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
      id
      chatroomID
      userID
      chatroom {
        id
        newMessage
        chatType
        LastMessage {
          id
          content
          status
          userID
          chatroomID
          replyToMessageID
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
        id
        name
        pix
        status
        email
        lastOnlineAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
      id
      chatroomID
      userID
      chatroom {
        id
        newMessage
        chatType
        LastMessage {
          id
          content
          status
          userID
          chatroomID
          replyToMessageID
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
        id
        name
        pix
        status
        email
        lastOnlineAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
      id
      chatroomID
      userID
      chatroom {
        id
        newMessage
        chatType
        LastMessage {
          id
          content
          status
          userID
          chatroomID
          replyToMessageID
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      user {
        id
        name
        pix
        status
        email
        lastOnlineAt
        Messages {
          nextToken
          startedAt
        }
        chatrooms {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
