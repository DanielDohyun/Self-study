import React, { useState, useEffect } from 'react';
import './Post.scss';
import Avatar from '@material-ui/core/Avatar';
import { db } from '../../firebase';

function Post({ postId, username, caption, imgUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubscribe;
        if(postId) {
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()));
            });
        }
        
        return() => {
            unsubscribe();
        };
      
    }, [postId]); 

    const postComment = (e) => {

    }

    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt="post uploader" src="/static/iamges/avatar/1.jpg"/>
                <h3>{username}</h3>
            </div>
            
            <img className="post__img" src={imgUrl} alt="" />
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>

            <form className="post__commentBox">
                <input
                    className="post__input"
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
                <button
                    className="post__btn"
                    disabled={!comment}
                    type="submit"
                    onClick={postComment}
                >
                    Post    
                </button>    
            </form>
        </div>
    )
}

export default Post;
