export type ChatParticipant = {
  _id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
  lastSeen: string;
};

export type ChatMessage = {
  _id: string;
  text?: string;
  type: 'text' | 'image' | 'video' | 'audio' | 'file' | 'system';
  createdAt: string;
  sender: {
    _id: string;
    name: string;
  };
};

export type ChatListItem = {
  _id: string;
  type: 'direct' | 'group';
  name?: string;
  participants: ChatParticipant[];
  lastMessage?: ChatMessage;
  lastMessageAt?: string;
  unreadCount: number;
};
