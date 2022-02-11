import { useState } from 'react';

import { RiHome5Fill } from 'react-icons/ri';
import { FaBell, FaStar, FaUserFriends } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoMdDocument } from 'react-icons/io';
import { GrSearch } from 'react-icons/gr';

import './style.scss';
import { MainLogo } from 'assets/assets';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducer';

function Navbar() {
  const [text, setText] = useState('');

  const profileImage = useSelector((state: RootState) => state.userReducer.isLoggin.profileImage);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setText(e.target.value)
  }
  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <div className='home-btn'>
          <a href='#'><RiHome5Fill size={18} /> </a></div>
        <span className='divider'/>
        <div className='logo'><img src={MainLogo} alt='logo'/></div>
      </div>
      <div className='nav-right'>
        <ul className='link-container'>
          <li> <a href='#'> <FaBell size={18}/> </a></li>
          <li> <a href='#'> <MdOutlineAlternateEmail size={18}/></a> </li>
          <li> <a href='#'> <FaStar size={18}/></a></li>
          <li> <a href='#'> <IoMdDocument size={18}/></a> </li>
          <li> <a href='#'> <FaUserFriends size={20}/></a> </li>
        </ul>
        <form className='search' onSubmit={onSubmit}>
          <div className='search-icon'>
            <GrSearch />
            </div>
          <input type='text' value={text} placeholder='Search'  onChange={onChange} className='search-input' />
        </form>
        <div className='profile'>
          <img src={profileImage} alt='프로필'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;