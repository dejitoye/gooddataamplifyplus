// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MessageStatus = {
  "SENT": "SENT",
  "DELIVERED": "DELIVERED",
  "READ": "READ"
};

const RoomType = {
  "GROUP": "GROUP",
  "SINGLE": "SINGLE"
};

const { Message, ChatRoom, ChatRoomUser, User } = initSchema(schema);

export {
  Message,
  ChatRoom,
  ChatRoomUser,
  User,
  MessageStatus,
  RoomType
};