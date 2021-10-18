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

const { Message, User, ChatRoomUser, ChatRoom } = initSchema(schema);

export {
  Message,
  User,
  ChatRoomUser,
  ChatRoom,
  MessageStatus,
  RoomType
};