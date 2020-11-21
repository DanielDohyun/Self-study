import React, { useState, useEffect } from 'react';
import './App.scss';
import Post from './components/Post/Post';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import ImgUpload from './components/ImgUpload/ImgUpload';

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

  // open for signup and opensignin for sign in
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
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

  const signUp = (e) => {
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch(e => alert(e.message));

    setOpen(false);
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .catch(e => alert(e.message));

    setOpenSignIn(false);
  };

  return (
    <div className="app">

      {user?.displayName ? (
        <ImgUpload username={user.displayName}/>

      ): (
        <h3>Sorry you need to login to upload</h3>
      )}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
         <div style={modalStyle} className={classes.paper}>
          <form className="app__form">
            <center>
              <img
                className="app__headerImg"
                src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
                alt=""
              />
            </center>

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

              <Button type="submit" onClick={signUp}>Sign Up</Button>

          </form>
         </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
         <div style={modalStyle} className={classes.paper}>
          <form className="app__form">
            <center>
              <img
                className="app__headerImg"
                src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
                alt=""
              />
            </center>

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

              <Button type="submit" onClick={signIn}>Sign In</Button>

          </form>
         </div>
      </Modal>

      <div className="app__header">
        <img className="app__logo" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png" alt="insta" />
      </div>

      {/* if user is signed in => show logout button. else show signup+ signin btn */}
      {user ? (
      <Button type="submit" onClick={() => auth.signOut() }>Logout</Button>

      ): (
        <div className="app__loginContainer">
          <Button type="submit" onClick={() => setOpenSignIn(true)}>Sign In</Button>
          <Button type="submit" onClick={() => setOpen(true)}>Sign Up</Button>
        </div>
      )}

      {
        posts.map(({ id, post }) => (
          <Post key={id} username={post?.username} caption={post?.caption} imgUrl={post?.imgUrl} />
        ))
      }

    </div>
  );
}

export default App;
