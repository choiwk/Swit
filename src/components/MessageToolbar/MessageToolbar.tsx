import { BiChevronDown } from 'react-icons/bi';
import './MessageToolbar.scss';

interface GreetingProps {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function MessageToolbar() {
  return ( 
    <>
      <div className='toolbar-wraper'>
        <div className='toolbar-title'>
          <div className='btn-star'>★ </div>
          <div className='title'>General</div>
          <div>
            <BiChevronDown size='24' id='down-icon' />
          </div>
        </div>
        <div className='toolbar-buttons'>
          <div>
            <div>
              <i id='chaticon' />
            </div>
            <div className='chat-wrapper'>
              <span id='chat-text'>Chat</span>
            </div>
          </div>
          <div className='ideation-wrapper'>
            <div>
              <i id='ideation-icon' />
            </div>
            <div>
              <span id='ideation-text'>Ideation</span>
            </div>
          </div>
        </div>
        <div className='toolbar-side'>
          <div className='getline'>
            <i id='members-icon' />
            <span>3</span>
          </div>
          <div className='getline'>
            <i id='pin-icon' />
            <span>0</span>
          </div>
          <div>
            <i id='tab-icon' />
            <span>3</span>
          </div>
        </div>
      </div>
    </>
  );
}
