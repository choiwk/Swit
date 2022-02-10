import React from 'react';
import { connect, DefaultRootState } from 'react-redux';
import { postMessage, deleteMessage } from 'redux/actions';
import { message } from 'redux/types/message';

interface reduxProps {
  state: DefaultRootState;
  postMessage: (message: message) => void;
  deleteMessage: (message: message) => void;
}
function Example({ state, postMessage, deleteMessage }: reduxProps) {
  return <></>;
}

export default connect(
  (state) => ({
    state,
  }),
  (dispatch) => ({
    postMessage: (message: message) => dispatch(postMessage(message)),
    deleteMessage: (message: message) => dispatch(deleteMessage(message)),
  })
)(Example);
