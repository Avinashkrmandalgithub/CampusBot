import { useState, useEffect } from "react";
import {
  MessageSquare,
  Settings,
  UserCog,
  ChevronLeft,
  BotMessageSquare,
  Sparkles,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

const UserSidebar = ({ closeMobile }) => {
  const [collapsed, setCollapsed] = useState(false);

  //  Safe screen-size detection
  useEffect(() => {
    setCollapsed(window.innerWidth < 1024);
  }, []);

  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-64"}
        h-full bg-[#0a0518]
        border-r border-white/10
        flex flex-col p-4
        transition-all duration-300
      `}
    >
      {/* Logo (same as Admin) */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="relative">
          <div className="bg-linear-to-br from-cyan-400 to-purple-600 p-2 rounded-xl">
            <BotMessageSquare size={24} className="text-white" />
          </div>
          <Sparkles
            size={14}
            className="absolute -top-1 -right-1 text-cyan-300 animate-pulse"
          />
        </div>

        {!collapsed && (
          <div>
            <h1 className="text-lg font-extrabold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CampusBot
            </h1>
            <p className="text-[11px] text-gray-400">User Panel</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-2">
        <SidebarItem
          icon={MessageSquare}
          label="Chat"
          to="/chat"
          collapsed={collapsed}
          onClick={closeMobile}
        />

        <SidebarItem
          icon={Settings}
          label="Settings"
          to="/settings"
          collapsed={collapsed}
          onClick={closeMobile}
        />

        <SidebarItem
          icon={UserCog}
          label="Admin Login"
          to="/admin-login"
          collapsed={collapsed}
          onClick={closeMobile}
        />
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed((p) => !p)}
        className="mt-auto p-2 rounded-full hover:bg-white/5 flex justify-center"
      >
        <ChevronLeft
          size={20}
          className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
        />
      </button>
    </aside>
  );
};

export default UserSidebar;
