import React, { useState } from 'react'
import './Header.scss';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">

      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" />
        </Link>
      </div>
    
      <div className="header__input">
        {/* use value to connect with the state */}
        <input 
          onChange={e => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search" 
          type="text" 
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputBtn" />
        </Link>
      </div>
      
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar 
          alt="Dog"
          src="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_311/3-2-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
        />
      </div>
      
    </div>
  )
}

export default Header
