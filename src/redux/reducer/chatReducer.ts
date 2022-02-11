import { chatReducerAction, POST_MESSAGE, DELETE_MESSAGE } from 'redux/actions/chatAction';
import { message } from '../../types/message';
import { chatData } from 'utils/constants/chatData';
const initialState: message[] = [...chatData];

export const chatReducer = (state = initialState, action: chatReducerAction): message[] => {
  switch (action.type) {
    case POST_MESSAGE: {
      return [...state, action.message];
    }
    case DELETE_MESSAGE: {
      return state.filter((message: message) => message !== action.message);
    }
    default:
      return initialState;
  }
};
