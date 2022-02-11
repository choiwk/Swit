import { message } from '../types/message';

export const POST_MESSAGE = 'POST_MESSAGE' as const;
export const DELETE_MESSAGE = 'DELETE_MESSAGE' as const;

interface postMessageAction {
  type: typeof POST_MESSAGE;
  message: message;
}

export const postMessage = (message: message): postMessageAction => {
  return { type: POST_MESSAGE, message };
};

interface deleteMessageAction {
  type: typeof DELETE_MESSAGE;
  message: message;
}

export const deleteMessage = (message: message): deleteMessageAction => {
  return { type: DELETE_MESSAGE, message };
};

export type reducerAction = postMessageAction | deleteMessageAction;
