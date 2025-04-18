
import React from "react";
import { Bell, MessageCircle, UserPlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";

// Mock notification data
const NOTIFICATIONS = [
  { 
    id: "1", 
    type: "like", 
    user: "@sophia_lee", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 
    content: "liked your video",
    time: "2h ago",
  },
  { 
    id: "2", 
    type: "comment", 
    user: "@mike_jones", 
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 
    content: "commented: \"Great video! 🔥\"",
    time: "5h ago",
  },
  { 
    id: "3", 
    type: "follow", 
    user: "@alex_travel", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 
    content: "started following you",
    time: "1d ago",
  },
  { 
    id: "4", 
    type: "mention", 
    user: "@fitness_guru", 
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80", 
    content: "mentioned you in a comment",
    time: "2d ago",
  },
];

// Mock messages data
const MESSAGES = [
  { 
    id: "1", 
    user: "Sophia Lee", 
    username: "@sophia_lee", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 
    lastMessage: "Hey, I loved your latest video! How did you edit it?",
    time: "2h ago",
    unread: true,
  },
  { 
    id: "2", 
    user: "Mike Jones", 
    username: "@mike_jones", 
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 
    lastMessage: "Let's collaborate on a video soon!",
    time: "1d ago",
    unread: false,
  },
  { 
    id: "3", 
    user: "Alex Travel", 
    username: "@alex_travel", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 
    lastMessage: "Thanks for following back!",
    time: "3d ago",
    unread: false,
  },
];

const Inbox = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-16">
      {/* Header */}
      <div className="p-4">
        <h1 className="text-xl font-semibold">Inbox</h1>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="w-full bg-black border-b border-gray-800">
          <TabsTrigger value="notifications" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-white">
            <Bell className="h-5 w-5 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-white">
            <MessageCircle className="h-5 w-5 mr-2" />
            Messages
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="notifications" className="p-4 space-y-4">
          {NOTIFICATIONS.map((notification) => (
            <div key={notification.id} className="flex items-start">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img
                  src={notification.avatar}
                  alt={notification.user}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p>
                  <span className="font-semibold">{notification.user}</span>{" "}
                  {notification.content}
                </p>
                <p className="text-xs text-gray-400">{notification.time}</p>
              </div>
              {notification.type === "follow" && (
                <button className="bg-primary hover:bg-primary/90 text-white text-sm px-4 py-1 rounded-full">
                  Follow
                </button>
              )}
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="messages" className="p-4 space-y-4">
          {MESSAGES.map((message) => (
            <div key={message.id} className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3 relative">
                <img
                  src={message.avatar}
                  alt={message.user}
                  className="w-full h-full object-cover"
                />
                {message.unread && (
                  <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-black"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-semibold">{message.user}</p>
                  <p className="text-xs text-gray-400">{message.time}</p>
                </div>
                <p className="text-sm text-gray-300 truncate">{message.lastMessage}</p>
              </div>
            </div>
          ))}

          <div className="mt-8 flex flex-col items-center justify-center text-center">
            <div className="bg-gray-900 p-4 rounded-full mb-3">
              <UserPlus className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="font-semibold mb-1">New Messages</h3>
            <p className="text-sm text-gray-400 mb-3">Send private messages to your friends</p>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full">
              Send Message
            </button>
          </div>
        </TabsContent>
      </Tabs>

      <Navbar />
    </div>
  );
};

export default Inbox;
