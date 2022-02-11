import { combineReducers } from 'redux';
import { chatReducer } from './chatReducer';
import { userReducer } from './userReducer';
const reducer = combineReducers({
  chatReducer,
  userReducer,
});
export type RootState = ReturnType<typeof reducer>;
export default reducer;
