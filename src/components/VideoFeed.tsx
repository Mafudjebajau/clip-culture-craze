
import React, { useState } from "react";
import VideoCard from "@/components/VideoCard";

// URLs de vídeo atualizados para exemplos que funcionam com maior probabilidade
const MOCK_VIDEOS = [
  {
    id: "1",
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    username: "@sophia_lee",
    description: "Aproveitando as vibrações do verão! 🌞 #verão #viagem",
    likes: 1243,
    comments: 85,
    shares: 29,
    song: "Vibes de Verão - DJ Sunshine",
  },
  {
    id: "2",
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    username: "@glam_artist",
    description: "Novo look de maquiagem ✨ #makeup #glam",
    likes: 8943,
    comments: 231,
    shares: 121,
    song: "Glitter & Gold - Rebecca Johnson",
  },
  {
    id: "3",
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    username: "@nature_lover",
    description: "A beleza da natureza 🌸 #natureza #primavera",
    likes: 4572,
    comments: 98,
    shares: 65,
    song: "Mundo Natural - Earth Tones",
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
