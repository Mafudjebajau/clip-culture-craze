
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings, Grid3X3, Bookmark, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const navigate = useNavigate();
  
  // Mock user data
  const user = {
    username: "@david_smith",
    displayName: "David Smith",
    followers: 1234,
    following: 567,
    likes: 12300,
    bio: "Digital creator | Photography & Travel 🌍 | Based in NYC",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  };

  // Mock video data
  const mockVideos = Array(9).fill(null).map((_, i) => ({
    id: `video-${i}`,
    thumbnail: `https://picsum.photos/300/400?random=${i}`,
    views: Math.floor(Math.random() * 10000),
  }));

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-16">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">{user.displayName}</h1>
        <button>
          <Settings className="h-6 w-6" />
        </button>
      </div>

      {/* Profile Info */}
      <div className="px-4 mb-6">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
            <img src={user.avatar} alt={user.displayName} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-lg font-semibold">{user.username}</h2>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-6 my-4">
          <div className="flex flex-col items-center">
            <span className="font-bold">{user.following}</span>
            <span className="text-sm text-gray-400">Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">{user.followers}</span>
            <span className="text-sm text-gray-400">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">{user.likes}</span>
            <span className="text-sm text-gray-400">Likes</span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-center text-sm mb-4">{user.bio}</p>

        {/* Edit Profile Button */}
        <div className="flex justify-center">
          <Button variant="outline" className="text-white border-gray-600 w-full max-w-xs">
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="w-full bg-transparent border-b border-gray-800">
          <TabsTrigger value="videos" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-white">
            <Grid3X3 className="h-5 w-5" />
          </TabsTrigger>
          <TabsTrigger value="liked" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-white">
            <Heart className="h-5 w-5" />
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-white">
            <Bookmark className="h-5 w-5" />
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos" className="mt-0">
          <div className="grid grid-cols-3 gap-1">
            {mockVideos.map((video) => (
              <div key={video.id} className="aspect-[9/16] relative">
                <img 
                  src={video.thumbnail} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 text-xs flex items-center">
                  <Heart className="h-3 w-3 mr-1 fill-white" />
                  <span>{video.views}</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="liked" className="mt-0">
          <div className="h-40 flex items-center justify-center text-gray-500">
            <p>Videos you've liked will appear here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="mt-0">
          <div className="h-40 flex items-center justify-center text-gray-500">
            <p>Saved videos will appear here</p>
          </div>
        </TabsContent>
      </Tabs>

      <Navbar />
    </div>
  );
};

export default Profile;
