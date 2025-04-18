
import React, { useRef, useEffect, useState } from "react";
import { Heart, MessageCircle, Share2, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const [isVideoError, setIsVideoError] = useState(false);
  const { toast } = useToast();

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
      if (isActive && !isVideoError) {
        videoRef.current.play()
          .catch(err => {
            console.error("Error playing video:", err);
            setIsVideoError(true);
            toast({
              title: "Erro ao reproduzir vídeo",
              description: "Não foi possível carregar o vídeo.",
              variant: "destructive"
            });
          });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, isVideoError, toast]);

  // URLs de fallback para vídeos locais em caso de falha dos URLs remotos
  const fallbackVideos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4"
  ];

  // Selecionar um vídeo de fallback com base no ID (para que seja consistente)
  const getFallbackUrl = () => {
    const index = parseInt(video.id) % fallbackVideos.length;
    return fallbackVideos[index] || fallbackVideos[0];
  };

  return (
    <div className="relative h-full w-full bg-black">
      {isVideoError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
          <p className="text-center p-4">
            Não foi possível carregar o vídeo.<br/>
            <span className="text-gray-400 text-sm">ID: {video.id}</span>
          </p>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={video.url}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          poster="/placeholder.svg"
          onError={() => {
            console.log("Video error, trying fallback...");
            if (videoRef.current) {
              videoRef.current.src = getFallbackUrl();
              videoRef.current.load();
              if (isActive) {
                videoRef.current.play().catch(err => {
                  console.error("Fallback video error:", err);
                  setIsVideoError(true);
                });
              }
            }
          }}
        />
      )}
      
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
