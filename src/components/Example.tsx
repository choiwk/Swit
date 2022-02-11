import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { deleteMessage, deleteMessageAction } from 'redux/actions/chatAction';
import { message } from 'types/message';
import { RootState } from 'redux/reducer';
import { reduxUser } from 'types/reduxTypes';

interface reduxProps {
  chat: message[];
  user: reduxUser;
  deleteMessage: (message: message) => deleteMessageAction;
}

function Example({ user, chat, deleteMessage }: reduxProps) {
  const onClickHandler = useCallback(
    (message: message) => (e: React.MouseEvent<HTMLButtonElement>) => {
      deleteMessage(message);
    },
    [chat]
  );
  return (
    <>
      {chat.map((message) => {
        let content = message.content.split('\n');
        console.log(content);
        return (
          <div key={message.date}>
            {user.userName === message.userName && <p>(나)</p>}
            <p>{message.date}</p>
            {content.map((line) => {
              return <li key={line}>{line}</li>;
            })}
            <button type='button' onClick={onClickHandler(message)}>
              삭제
            </button>
          </div>
        );
      })}
    </>
  );
}

export default connect(
  (state: RootState) => ({
    chat: state.chatReducer,
    user: state.userReducer.isLoggin,
  }),
  (dispatch: Dispatch) => ({
    deleteMessage: (message: message) => dispatch(deleteMessage(message)),
  })
)(Example);
