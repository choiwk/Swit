import { message } from 'types/message';
import { getDate } from './getDate';
export const generateMessage = (input: string): message => {
  let message = {
    userId: '현재 로그인',
    userName: '현재 로그인 이름',
    profileImage: '이미지 경로',
    content: input,
    date: getDate(new Date()),
  };
  return message;
};
