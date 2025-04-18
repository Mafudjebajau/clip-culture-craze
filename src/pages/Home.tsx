
import React from "react";
import { useNavigate } from "react-router-dom";
import VideoFeed from "@/components/VideoFeed";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-black">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <VideoFeed />
      </main>
    </div>
  );
};

export default Home;
