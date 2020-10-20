import React from 'react'
import './RecommendedVideos.scss'
import VideoCard from '../VideoCard/VideoCard';

function RecommendedVideos() {
  return (
    <div className="recommend">
      <h2>Recommended</h2>
      <div className="recommended__videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

      </div>
    </div>
  )
}

export default RecommendedVideos
