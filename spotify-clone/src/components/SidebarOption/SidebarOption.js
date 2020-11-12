import React from 'react';
import './SidebarOption.scss';

function SidebarOption({ title, Icon }) {
    return (
        <div className="sidebarOption">
            <p>{title}</p>
        </div>
    )
}

export default SidebarOption
