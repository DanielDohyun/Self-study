import React from 'react';
import './SearchPage.scss';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from '../ChannelRow/ChannelRow';

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
        </div>
    )
}

export default SearchPage
