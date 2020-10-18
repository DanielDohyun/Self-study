import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


function Header() {
  return (
    <div className="header">

      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" />
      </div>
    
      <div className="header__mid">
        <input type="text" />
        <SearchIcon />
      </div>
      
      <div className="header__right">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar 
          alt="Dog"
          src="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_311/3-2-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
        />
      </div>
      
    </div>
    
  )
}

export default Header
