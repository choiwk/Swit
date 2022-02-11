import React, { useState, useRef, useEffect } from 'react';
import { HiPaperAirplane } from 'react-icons/hi';

import './TextArea.scss';
const TextArea = () => {
  const [areaHeight, setAreaHeight] = useState<String>();
  const areaRef = useRef<HTMLTextAreaElement | null>(null);

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAreaHeight(event.target.value);
  };

  useEffect(() => {
    if (areaRef && areaRef.current) {
      areaRef.current.style.height = '0px';
      const scrollHeight = areaRef.current.scrollHeight;
      areaRef.current.style.height = scrollHeight + 'px';
    }
  }, [areaHeight]);

  return (
    <div className='input-container'>
      <textarea
        className='chat-input'
        placeholder='write a message..'
        ref={areaRef}
        onChange={textAreaChange}
        style={{ minHeight: '45px' }}
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
