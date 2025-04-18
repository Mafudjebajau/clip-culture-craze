
import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";

const TRENDING_TAGS = [
  "#summerfun", "#dance", "#comedy", "#fashion", "#makeup", "#food", 
  "#travel", "#fitness", "#pets", "#music", "#viral", "#challenge"
];

const SUGGESTED_ACCOUNTS = [
  { id: "1", username: "@dance_queen", name: "Sophia Dance", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", followers: "2.4M" },
  { id: "2", username: "@food_lover", name: "Mike's Kitchen", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", followers: "1.2M" },
  { id: "3", username: "@travel_guy", name: "Alex Adventures", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", followers: "985K" },
  { id: "4", username: "@fitness_jane", name: "Jane Fitness", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80", followers: "1.8M" },
];

// Mock trending videos
const TRENDING_VIDEOS = Array(8).fill(null).map((_, i) => ({
  id: `trending-${i}`,
  thumbnail: `https://picsum.photos/400/500?random=${i + 10}`,
  views: Math.floor(Math.random() * 5000000) + 1000000,
  username: `@user${i}`,
}));

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const clearSearch = () => {
    setSearchTerm("");
    setIsSearching(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsSearching(e.target.value.length > 0);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-16">
      {/* Search Bar */}
      <div className="p-4 sticky top-0 bg-black z-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="bg-gray-900 pl-10 pr-10 py-6 text-white border-none rounded-full"
            placeholder="Search accounts, videos, or hashtags"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {isSearching && (
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={clearSearch}
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>
      </div>

      {isSearching ? (
        <div className="p-4">
          <p className="text-gray-400 text-sm mb-2">No results found for "{searchTerm}"</p>
        </div>
      ) : (
        <div className="p-4">
          {/* Trending Hashtags */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Trending Hashtags</h2>
            <div className="flex flex-wrap gap-2">
              {TRENDING_TAGS.map((tag) => (
                <div
                  key={tag}
                  className="bg-gray-900 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Accounts */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Suggested Accounts</h2>
            <div className="space-y-4">
              {SUGGESTED_ACCOUNTS.map((account) => (
                <div key={account.id} className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <img
                      src={account.avatar}
                      alt={account.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{account.username}</p>
                    <p className="text-sm text-gray-400">{account.name}</p>
                  </div>
                  <div className="text-xs text-gray-400">{account.followers} followers</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Videos */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Trending Now</h2>
            <div className="grid grid-cols-2 gap-2">
              {TRENDING_VIDEOS.map((video) => (
                <div key={video.id} className="relative rounded-lg overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt="Video thumbnail"
                    className="w-full aspect-[9/16] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-xs">{video.username}</p>
                    <p className="text-xs flex items-center">
                      <span>{formatNumber(video.views)} views</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Navbar />
    </div>
  );
};

export default Discover;
