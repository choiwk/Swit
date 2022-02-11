import React from 'react';
import { Dispatch } from 'redux';
import { connect, useSelector, useDispatch, DefaultRootState } from 'react-redux';
import { postMessage, deleteMessage, postMessageAction, deleteMessageAction } from 'redux/actions';
import { message } from 'redux/types/message';
import { RootState } from 'redux/reducer';

interface reduxProps {
  chat: message[];
  postMessage: (message: message) => postMessageAction;
  deleteMessage: (message: message) => deleteMessageAction;
}

function Example({ chat, postMessage, deleteMessage }: reduxProps) {
  return <></>;
}
// function Example() {
//   const chat = useSelector((state: RootState) => state.chatReducer);
//   const dispatch = useDispatch();
//   return <></>;
// }

export default connect(
  (state: RootState) => ({
    chat: state.chatReducer,
  }),
  (dispatch: Dispatch) => ({
    postMessage: (message: message) => dispatch(postMessage(message)),
    deleteMessage: (message: message) => dispatch(deleteMessage(message)),
  })
)(Example);
