import React, { useState, useEffect } from 'react';
import './App.scss';
import Post from './components/Post/Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'dan',
      caption: 'hello',
      imgUrl: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/14112506/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg",
    },
    {
      username: 'dan',
      caption: 'hello',
      imgUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png',
    }
  ]);

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
