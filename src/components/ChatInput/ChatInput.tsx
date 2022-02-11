import React, { useState, useCallback, useRef } from 'react';
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
  const [areaHeight, setAreaHeight] = useState<string>('');

  const areaRef = useRef<any>();

  const textResize = useCallback(() => {
    const textArea = areaRef.current;
    textArea.height = textArea.scrollHeight + 'px';
    if (textArea.height !== areaHeight) {
      setAreaHeight(areaRef.current.height);
    }
  }, [areaHeight]);

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
          ref={areaRef}
          className='chat-input'
          onKeyPress={onKeyPressHandler}
          onChange={onChangeHandler}
          onKeyDown={textResize}
          value={message}
          style={{ height: areaHeight, minHeight: '45px' }}
        ></textarea>
        <div className='btn-container'>
          <button className='send-btn' type='submit'>
            <HiPaperAirplane size={24} color='#fff' style={{ transform: 'rotate(90deg)' }} />
          </button>
        </div>
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
