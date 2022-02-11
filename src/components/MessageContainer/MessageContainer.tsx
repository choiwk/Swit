import { useCallback, useEffect, useRef } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { deleteMessage, deleteMessageAction } from 'redux/actions/chatAction';
import { message } from 'types/message';
import { RootState } from 'redux/reducer';
import { reduxUser } from 'types/reduxTypes';
import './MessageContainer.scss';
import Message from './Message';
import ChatInput from 'components/ChatInput/ChatInput';

interface reduxProps {
  chat: message[];
  user: reduxUser;
  deleteMessage: (message: message) => deleteMessageAction;
}

function MessageContainer({ user, chat, deleteMessage }: reduxProps) {
  const deleteHandler = useCallback(
    (message: message) => (e: React.MouseEvent<HTMLButtonElement>) => {
      deleteMessage(message);
    },
    [chat]
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [chat]);

  return (
    <div className='message-container'>
      {chat.map((message: message, idx) => {
        return <Message key={idx} message={message} deleteHandler={deleteHandler} />;
      })}
      <ChatInput />
    </div>
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
)(MessageContainer);
