import React, { useState, useEffect } from 'react';
import './App.scss';
import Post from './components/Post/Post';
import { db } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  // useEffect = runs a piece of code based on a spe condi
  useEffect(()=> {
    
    // if you leave the [] blank, it will run once when the page refreshes
    // if you put posts inside of [], it will run everytime when posts changes
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
         <div style={modalStyle} className={classes.paper}>
         <h2>I am a modal</h2>  
         </div>
      </Modal>

      <Button onClick={() => setOpen(true)}>Sign Up</Button>

      <div className="app__header">
        <img className="app__logo" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png" alt="insta" />
      </div>

      {
        posts.map(({ id, post }) => (
          <Post key={id} username={post?.username} caption={post?.caption} imgUrl={post?.imgUrl} />
        ))
      }

    
    </div>
  );
}

export default App;
