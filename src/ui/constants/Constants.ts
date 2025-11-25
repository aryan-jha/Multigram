import { ChatListItem } from '@data/types/chatListItemType';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import { useAppTheme } from '@ui/hooks/useAppTheme';
import {I18nManager, Platform} from 'react-native';

/**
 * This file contains all the constants used in the application
 */
export const HIT_SLOP_10 = {top: 10, right: 10, bottom: 10, left: 10};
export const HIT_SLOP_VERTICAL_10 = {top: 10, right: 0, bottom: 10, left: 0};
export const HIT_SLOP_0 = {top: 0, right: 0, bottom: 0, left: 0};
export const HIT_SLOP_12 = {top: 12, right: 12, bottom: 12, left: 12};
export const HIT_SLOP_20 = {top: 20, right: 20, bottom: 20, left: 20};

export const DAYS_CONSTANT = 'days';
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_FORMAT_MDY = 'MM-DD-YYYY';

export const isRTL = I18nManager.isRTL;

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const isWeb = Platform.OS === 'web';

export const COLOR = useAppTheme();
 

export const modalBottomSheet: NativeStackNavigationOptions = {
  presentation: 'transparentModal',
  animation: 'slide_from_bottom',
  headerShown: false,
};

export const KEYBOARDTYPE = {
  urlType: 'url',
  default: 'default',
  phonePad: 'phone-pad',
  numericType: 'numeric',
  numberType: 'number-pad',
  decimalType: 'decimal-pad',
  emailType: 'email-address',
};

export const chatListData: ChatListItem[] = [
  {
    _id: "1",
    type: "direct",
    participants: [
      {
        _id: "u1",
        name: "Emma Johnson",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        isOnline: true,
        lastSeen: "2025-11-01T09:15:00Z",
      },
    ],
    lastMessage: {
      _id: "m1",
      text: "Hey! How was your trip?",
      type: "text",
      createdAt: "2025-11-01T09:10:00Z",
      sender: { _id: "u1", name: "Emma Johnson" },
    },
    lastMessageAt: "2025-11-01T09:10:00Z",
    unreadCount: 2,
  },
  {
    _id: "2",
    type: "direct",
    participants: [
      {
        _id: "u2",
        name: "Liam Smith",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        isOnline: false,
        lastSeen: "2025-10-31T21:42:00Z",
      },
    ],
    lastMessage: {
      _id: "m2",
      text: "Can you send me the files?",
      type: "text",
      createdAt: "2025-10-31T21:42:00Z",
      sender: { _id: "u2", name: "Liam Smith" },
    },
    lastMessageAt: "2025-10-31T21:42:00Z",
    unreadCount: 0,
  },
  {
    _id: "3",
    type: "direct",
    participants: [
      {
        _id: "u3",
        name: "Olivia Brown",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        isOnline: false,
        lastSeen: "2025-10-31T20:00:00Z",
      },
    ],
    lastMessage: {
      _id: "m3",
      text: "This message was deleted",
      type: "system",
      createdAt: "2025-10-31T19:55:00Z",
      sender: { _id: "u3", name: "Olivia Brown" },
    },
    lastMessageAt: "2025-10-31T19:55:00Z",
    unreadCount: 0,
  },
  {
    _id: "4",
    type: "direct",
    participants: [
      {
        _id: "u4",
        name: "Noah Davis",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        isOnline: true,
        lastSeen: "2025-11-01T08:00:00Z",
      },
    ],
    lastMessage: {
      _id: "m4",
      text: "Typing...",
      type: "system",
      createdAt: "2025-11-01T08:58:00Z",
      sender: { _id: "u4", name: "Noah Davis" },
    },
    lastMessageAt: "2025-11-01T08:58:00Z",
    unreadCount: 5,
  },
  {
    _id: "5",
    type: "group",
    name: "Weekend Trip 🏖️",
    participants: [
      {
        _id: "u5",
        name: "Ava Wilson",
        avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
        isOnline: false,
        lastSeen: "2025-10-31T23:00:00Z",
      },
      {
        _id: "u6",
        name: "Ethan Walker",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        isOnline: true,
        lastSeen: "2025-11-01T07:15:00Z",
      },
    ],
    lastMessage: {
      _id: "m5",
      text: "Got it, thanks!",
      type: "text",
      createdAt: "2025-10-31T23:20:00Z",
      sender: { _id: "u5", name: "Ava Wilson" },
    },
    lastMessageAt: "2025-10-31T23:20:00Z",
    unreadCount: 0,
  },
  {
    _id: "6",
    type: "direct",
    participants: [
      {
        _id: "u7",
        name: "William Martinez",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        isOnline: true,
        lastSeen: "2025-11-01T09:00:00Z",
      },
    ],
    lastMessage: {
      _id: "m6",
      text: "Meeting at 3pm?",
      type: "text",
      createdAt: "2025-11-01T08:50:00Z",
      sender: { _id: "u7", name: "William Martinez" },
    },
    lastMessageAt: "2025-11-01T08:50:00Z",
    unreadCount: 1,
  },
  {
    _id: "7",
    type: "direct",
    participants: [
      {
        _id: "u8",
        name: "Sophia Garcia",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        isOnline: false,
        lastSeen: "2025-10-31T22:00:00Z",
      },
    ],
    lastMessage: {
      _id: "m7",
      text: "See you soon!",
      type: "text",
      createdAt: "2025-10-31T21:55:00Z",
      sender: { _id: "u8", name: "Sophia Garcia" },
    },
    lastMessageAt: "2025-10-31T21:55:00Z",
    unreadCount: 0,
  },
  {
    _id: "8",
    type: "group",
    name: "Project Alpha",
    participants: [
      {
        _id: "u9",
        name: "James Anderson",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        isOnline: false,
        lastSeen: "2025-10-30T18:30:00Z",
      },
      {
        _id: "u10",
        name: "Charlotte Taylor",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        isOnline: true,
        lastSeen: "2025-11-01T08:30:00Z",
      },
    ],
    lastMessage: {
      _id: "m8",
      text: "Call me when you’re free.",
      type: "text",
      createdAt: "2025-11-01T07:55:00Z",
      sender: { _id: "u9", name: "James Anderson" },
    },
    lastMessageAt: "2025-11-01T07:55:00Z",
    unreadCount: 3,
  },
  {
    _id: "9",
    type: "direct",
    participants: [
      {
        _id: "u11",
        name: "Mia Thompson",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        isOnline: false,
        lastSeen: "2025-10-31T16:30:00Z",
      },
    ],
    lastMessage: {
      _id: "m9",
      text: "This message was deleted",
      type: "system",
      createdAt: "2025-10-31T16:25:00Z",
      sender: { _id: "u11", name: "Mia Thompson" },
    },
    lastMessageAt: "2025-10-31T16:25:00Z",
    unreadCount: 0,
  },
  {
    _id: "10",
    type: "group",
    name: "UI/UX Team 💡",
    participants: [
      {
        _id: "u12",
        name: "Benjamin Lee",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        isOnline: true,
        lastSeen: "2025-11-01T09:05:00Z",
      },
      {
        _id: "u13",
        name: "Amelia Clark",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        isOnline: false,
        lastSeen: "2025-10-31T20:30:00Z",
      },
    ],
    lastMessage: {
      _id: "m10",
      text: "Let’s grab lunch tomorrow.",
      type: "text",
      createdAt: "2025-11-01T07:00:00Z",
      sender: { _id: "u13", name: "Amelia Clark" },
    },
    lastMessageAt: "2025-11-01T07:00:00Z",
    unreadCount: 4,
  },
];
