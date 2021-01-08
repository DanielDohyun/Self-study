import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../../Datalayer';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();

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
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                {/* ? = optional chaining. so it does not break whenever there is no username */}
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
