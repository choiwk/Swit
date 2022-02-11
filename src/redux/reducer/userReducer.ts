import { User } from 'types/user';
import { userReducerAction, SIGN_IN, SIGN_OUT } from 'redux/actions/userAction';
import { userData, defaultUser } from 'utils/constants/userData';

interface userState {
  userList: User[];
  isLoggin: User;
}
const initialState = {
  userList: userData,
  isLoggin: { userId: '', userName: '', profileImage: '' },
};
export const userReducer = (state = initialState, action: userReducerAction): userState => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        isLoggin: state.userList.filter((user) => user.userName === action.name)[0],
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        isLoggin: { userId: '', userName: '', profileImage: '' },
      };
    }
    default:
      return state;
  }
};
