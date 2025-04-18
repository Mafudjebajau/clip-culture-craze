
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, PlusSquare, MessageCircle, User } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: "/", icon: <Home className="h-6 w-6" />, label: "Home" },
    { path: "/discover", icon: <Search className="h-6 w-6" />, label: "Discover" },
    { path: "/upload", icon: <PlusSquare className="h-8 w-8" />, label: "" },
    { path: "/inbox", icon: <MessageCircle className="h-6 w-6" />, label: "Inbox" },
    { path: "/profile", icon: <User className="h-6 w-6" />, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black z-10">
      <div className="flex justify-around items-center h-16 px-2 border-t border-gray-800">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center ${
              isActive(item.path) ? "text-white" : "text-gray-500"
            }`}
          >
            {item.path === "/upload" ? (
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-1 rounded-lg">
                {item.icon}
              </div>
            ) : (
              item.icon
            )}
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
