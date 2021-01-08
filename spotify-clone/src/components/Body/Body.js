import React from 'react';
import { useDataLayerValue } from '../../Datalayer';
import Header from '../Header/Header';
import './Body.scss';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from '../SongRow/SongRow';

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch]  = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>

                <div className="body__songs">
                    <div className="body__icons">
                        <PlayCircleFilledIcon className="body__shuffle" />
                        <FavoriteIcon fontSize="large" />
                        <MoreHorizIcon  />
                    </div>

                    {/* list of songs */}
                    {discover_weekly?.tracks.items.map(item => {
                        <SongRow track={item.track} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default Body;
