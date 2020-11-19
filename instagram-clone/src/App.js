import React, { useState, useEffect } from 'react';
import './App.scss';
import Post from './components/Post/Post';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';

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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
        
      } else {
        setUser(null);
      }
    })

    return () => {
      //perform some cleanup before you refire useEffect
      unsubscribe();
    }
  }, [user, username]);

  const signUp = (e) => {
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch(e => alert(e.message))
  };

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
          <form>
            <center  className="app__form">
              <img
                className="app__headerImg"
                src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
                alt=""
              />

              <Input
                placeholder="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />

              <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              /> 

              <Button onClick={signUp}>Sign Up</Button>

            </center>
          </form>
         </div>
      </Modal>

      <Button type="submit" onClick={() => setOpen(true)}>Sign Up</Button>

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
