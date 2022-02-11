import { User } from 'types/user';
import { signInAction, signOutAction } from 'redux/actions/userAction';
import { postMessageAction, deleteMessageAction } from 'redux/actions/chatAction';
import { message } from './message';

export type reduxUser = User | { userId: ''; userName: ''; profileImage: '' };
export type reduxSignIn = (name: string) => signInAction;

export type reduxSignOut = () => signOutAction;

export interface userReduxProps {
  user: User | {};
  signIn: (name: string) => signInAction;
  signOut: () => signOutAction;
}

export type reduxChat = message[];

export type reduxPostMessage = (message: message) => postMessageAction;

export type reduxDeleteMessage = (message: message) => deleteMessageAction;

export interface chatReduxProps {
  chat: reduxChat;
  postMessage: reduxPostMessage;
  deleteMessage: reduxDeleteMessage;
}
