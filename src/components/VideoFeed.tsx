
import React, { useState } from "react";
import VideoCard from "@/components/VideoCard";

// Temporary mock data until we connect to a backend
const MOCK_VIDEOS = [
  {
    id: "1",
    url: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-waving-her-hair-in-a-convertible-car-43193-large.mp4",
    username: "@sophia_lee",
    description: "Enjoying the summer vibes! 🌞 #summer #roadtrip",
    likes: 1243,
    comments: 85,
    shares: 29,
    song: "Summer Vibes - DJ Sunshine",
  },
  {
    id: "2",
    url: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4",
    username: "@glam_artist",
    description: "New makeup look ✨ #makeup #glam",
    likes: 8943,
    comments: 231,
    shares: 121,
    song: "Glitter & Gold - Rebecca Johnson",
  },
  {
    id: "3",
    url: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
    username: "@nature_lover",
    description: "Nature's beauty 🌸 #nature #spring",
    likes: 4572,
    comments: 98,
    shares: 65,
    song: "Natural World - Earth Tones",
  },
];

const VideoFeed = () => {
  const [videos, setVideos] = useState(MOCK_VIDEOS);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const handleScroll = (index: number) => {
    setActiveVideoIndex(index);
  };

  return (
    <div className="h-full snap-y snap-mandatory overflow-y-scroll">
      {videos.map((video, index) => (
        <div key={video.id} className="snap-start h-full w-full">
          <VideoCard 
            video={video} 
            isActive={index === activeVideoIndex} 
            onVideoVisible={() => handleScroll(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoFeed;
