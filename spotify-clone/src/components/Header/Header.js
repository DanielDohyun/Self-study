import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts"
                    type="text"
                />    
            </div>
            <div className="header__right">
                <Avatar src="" alt="avatar img" />
                <h4>daniel</h4>
            </div>
        </div>
    )
}

export default Header;
