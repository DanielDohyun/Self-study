import React, { useState } from 'react';
import './App.scss';
import Post from './components/Post/Post';

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

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__logo" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png" alt="insta" />
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imgUrl={post.imgUrl} />
        ))
      }

    
    </div>
  );
}

export default App;
