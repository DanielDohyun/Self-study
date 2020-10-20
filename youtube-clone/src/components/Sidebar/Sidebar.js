import React from 'react'
import './Sidebar.scss';
import SidebarRow from '../SiderbarRow/SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      
    </div>
  )
}

export default Sidebar
