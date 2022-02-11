import React, { useState, useRef, useCallback } from 'react';
import { HiPaperAirplane } from 'react-icons/hi';

import './TextArea.scss';
const TextArea = () => {
  const [areaHeight, setAreaHeight] = useState<string>('');

  const areaRef = useRef<any>();

  const textResize = useCallback(() => {
    const textArea = areaRef.current;
    textArea.height = textArea.scrollHeight + 'px';
    if (textArea.height !== areaHeight) {
      setAreaHeight(areaRef.current.height);
    }
  }, [areaHeight]);

  return (
    <div className='input-container'>
      <textarea
        className='chat-input'
        ref={areaRef}
        onKeyUp={textResize}
        onKeyDown={textResize}
        style={{ height: areaHeight, minHeight: '45px' }}
      />
      <div className='btn-container'>
        <button className='send-btn' type='submit'>
          <HiPaperAirplane size={24} color='#fff' style={{ transform: 'rotate(90deg)' }} />
        </button>
      </div>
    </div>
  );
};

export default TextArea;
