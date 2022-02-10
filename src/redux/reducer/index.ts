import { combineReducers } from 'redux';
import { message } from '../types/message';
import { reducerAction, POST_MESSAGE, DELETE_MESSAGE } from 'redux/actions';

const initialState: message[] = []; // 초기에 데이터 넣을 곳

const chatReducer = (state = initialState, action: reducerAction): message[] => {
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

const reducer = combineReducers({
  chatReducer,
});
export type RootState = ReturnType<typeof reducer>;
export default reducer;
