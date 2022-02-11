import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HiPaperAirplane } from 'react-icons/hi';
import { message } from 'types/message';
import { RootState } from 'redux/reducer';
import { postMessage, deleteMessage, postMessageAction, deleteMessageAction } from 'redux/actions';
import { generateMessage } from 'utils/functions/generateMessage';
import '../ChatInput/ChatInput.scss';

interface reduxProps {
  chat: message[];
  postMessage: (message: message) => postMessageAction;
  deleteMessage: (message: message) => deleteMessageAction;
}
function ChatInput({ chat, postMessage, deleteMessage }: reduxProps) {
  const [message, setMessage] = useState<string>('');

  const validMessage = (send: message) => {
    if (message.trim().split('<br>').join('') !== '') {
      console.log(message.trim().split('<br>').join(''));
      postMessage(send);
      setMessage('');
    }
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    validMessage(generateMessage(message));
  };

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      console.log('제출');
      validMessage(generateMessage(message));
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className='input-container'>
      <form className='form' onSubmit={onSubmitHandler}>
        <textarea
          className='chat-input'
          onKeyPress={onKeyPressHandler}
          onChange={onChangeHandler}
          value={message}
        ></textarea>
        <button type='submit' className='send-btn'>
          <HiPaperAirplane size={24} color='#fff' style={{ transform: 'rotate(90deg)' }} />
        </button>
      </form>
    </div>
  );
}

export default connect(
  (state: RootState) => ({
    chat: state.chatReducer,
  }),
  (dispatch: Dispatch) => ({
    postMessage: (message: message) => dispatch(postMessage(message)),
    deleteMessage: (message: message) => dispatch(deleteMessage(message)),
  })
)(ChatInput);
