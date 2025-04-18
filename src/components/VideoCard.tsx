
import React, { useRef, useEffect } from "react";
import { Heart, MessageCircle, Share2, Music } from "lucide-react";

interface VideoProps {
  video: {
    id: string;
    url: string;
    username: string;
    description: string;
    likes: number;
    comments: number;
    shares: number;
    song: string;
  };
  isActive: boolean;
  onVideoVisible: () => void;
}

const VideoCard = ({ video, isActive, onVideoVisible }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onVideoVisible();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [onVideoVisible]);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(err => console.error("Error playing video:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <div className="relative h-full w-full bg-black">
      <video
        ref={videoRef}
        src={video.url}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex justify-between items-end">
          <div className="text-white">
            <p className="font-semibold mb-1">{video.username}</p>
            <p className="text-sm mb-2">{video.description}</p>
            <div className="flex items-center text-xs">
              <Music className="h-3 w-3 mr-1" />
              <p>{video.song}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <button className="flex flex-col items-center text-white">
              <div className="bg-black/20 p-2 rounded-full">
                <Heart className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1">{video.likes}</span>
            </button>
            
            <button className="flex flex-col items-center text-white">
              <div className="bg-black/20 p-2 rounded-full">
                <MessageCircle className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1">{video.comments}</span>
            </button>
            
            <button className="flex flex-col items-center text-white">
              <div className="bg-black/20 p-2 rounded-full">
                <Share2 className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1">{video.shares}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
