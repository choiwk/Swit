import { connect } from 'react-redux';
import { message } from 'types/message';
import { RootState } from 'redux/reducer';
import { reduxUser } from 'types/reduxTypes';
import './Message.scss';

interface reduxProps {
  message: message;
  user: reduxUser;
  deleteHandler: (message: message) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Message({ message, user, deleteHandler }: reduxProps) {
  const content = message.content.split('\n');
  console.log(message);
  return (
    <div className='Message-Wraper'>
      <div className='chat-message-profile'>
        <img src={message.profileImage} alt='chat-profile-image' />
      </div>
      <div className='chat-message-content'>
        <div className='chat-message-header'>
          <span className='chat-message-header-name'>
            {message.userName} {user.userName === message.userName && <span>*</span>}
          </span>

          <span className='chat-message-header-sub'>{message.date}</span>
        </div>
        {content.map((line, idx) => {
          return <p key={idx}>{line}</p>;
        })}
      </div>
      <div className='chat-float-button'>
        <div>
          <button type='button' onClick={deleteHandler(message)}>
            삭제
          </button>
        </div>
        <div>
          <button type='button' onClick={deleteHandler(message)}>
            답장
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect((state: RootState) => ({
  user: state.userReducer.isLoggin,
}))(Message);
