import React from 'react';
import Header from '../Header/Header';
import './Body.scss';

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />
        </div>
    )
}

export default Body;
