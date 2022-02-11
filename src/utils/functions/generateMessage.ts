import { message } from 'types/message';
import { getDate } from './getDate';
import { reduxUser } from 'types/reduxTypes';
import { User } from 'types/user';
export const generateMessage = (user: User, input: string): message => {
  let message = {
    userId: user.userId,
    userName: user.userName,
    profileImage: user.profileImage,
    content: input,
    date: getDate(new Date()),
  };

  return message;
};
