import React, { useState, useCallback } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HiPaperAirplane } from 'react-icons/hi';
import { message } from 'types/message';
import { RootState } from 'redux/reducer';
import { postMessage } from 'redux/actions/chatAction';
import { generateMessage } from 'utils/functions/generateMessage';
import { reduxUser, reduxPostMessage } from 'types/reduxTypes';
import { User } from 'types/user';
import '../ChatInput/ChatInput.scss';

interface reduxProps {
  user: reduxUser;
  postMessage: reduxPostMessage;
}
function ChatInput({ user, postMessage }: reduxProps) {
  const [message, setMessage] = useState<string>('');

  const validMessage = (send: message) => {
    if (message.trim().split('<br>').join('') !== '') {
      console.log(message.trim().split('<br>').join(''));
      postMessage(send);
      setMessage('');
    }
  };

  const onSubmitHandler = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      validMessage(generateMessage(user as User, message));
    },
    [message, user]
  );

  const onKeyPressHandler = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        console.log('제출', generateMessage(user as User, message));

        validMessage(generateMessage(user as User, message));
      }
    },
    [message, user]
  );

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value);
    },
    [message]
  );

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
    user: state.userReducer.isLoggin,
  }),
  (dispatch: Dispatch) => ({
    postMessage: (message: message) => dispatch(postMessage(message)),
  })
)(ChatInput);
