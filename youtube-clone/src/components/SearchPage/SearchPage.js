import React from 'react';
import './SearchPage.scss';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image
                channel
                verified
                subs
                noOfVideos
                description
            />

            <hr />

            <VideoRow
                image
                channel
                views
                subs
                timestamp
                title
                description
            />
        </div>
    )
}

export default SearchPage
