import React, { useState } from 'react';
import { HiPaperAirplane } from 'react-icons/hi';
import '../ChatInput/ChatInput.scss';

function ChatInput() {
  return (
    <div className='input-container'>
      <form>
        <textarea className='chat-input' />
        <button className='send-btn' type='submit'>
          <HiPaperAirplane size={24} color='#fff' style={{ transform: 'rotate(90deg)' }} />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
