import React from 'react';
import './Post.scss';
import Avatar from '@material-ui/core/Avatar';

function Post({ username, caption, imgUrl }) {

    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt="post uploader" src="/static/iamges/avatar/1.jpg"/>
                <h3>{username}</h3>
            </div>
            
            <img className="post__img" src={imgUrl} alt="" />
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post;
