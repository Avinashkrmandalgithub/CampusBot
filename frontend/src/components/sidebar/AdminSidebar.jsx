import { useAdminAuthStore } from "../../store/useAdminAuthStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SidebarItem from "./SidebarItem";
import {
  MessageSquare,
  LayoutDashboard,
  HelpCircle,
  Newspaper,
  Calendar,
  Settings,
  BotMessageSquare,
  Sparkles,
  ChevronLeft,
  UserCog,
  GraduationCap,
  LogOut,
} from "lucide-react";

const AdminSidebar = ({ closeMobile }) => {
  const { logoutAdmin } = useAdminAuthStore();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(window.innerWidth < 1024);

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
      {/* Logo */}
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
            <p className="text-[11px] text-gray-400">Admin Panel</p>
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
          icon={LayoutDashboard}
          label="Dashboard"
          to="/dashboard"
          collapsed={collapsed}
          onClick={closeMobile}
        />
        <SidebarItem
          icon={HelpCircle}
          label="FAQs"
          to="/faqs"
          collapsed={collapsed}
          onClick={closeMobile}
        />
        <SidebarItem
          icon={GraduationCap}
          label="University Info"
          to="/university"
          collapsed={collapsed}
          onClick={closeMobile}
        />

        <SidebarItem
          icon={Newspaper}
          label="News"
          to="/news"
          collapsed={collapsed}
          onClick={closeMobile}
        />
        <SidebarItem
          icon={Calendar}
          label="Events"
          to="/events"
          collapsed={collapsed}
          onClick={closeMobile}
        />
        {/* <SidebarItem
          icon={UserCog}
          label="Admin Login"
          to="/admin-login"
          collapsed={collapsed}
          onClick={closeMobile}
        /> */}
        <SidebarItem
          icon={Settings}
          label="Settings"
          to="/settings"
          collapsed={collapsed}
          onClick={closeMobile}
        />

        <button
          onClick={async () => {
            await logoutAdmin();
            navigate("/admin-login");
          }}
          className="
    mt-4 flex items-center gap-2
    text-red-400 hover:text-red-300
    px-3 py-2 rounded-lg
    hover:bg-white/5
    transition
  "
        >
          <LogOut size={16} />
          {!collapsed && <span className="text-sm">Logout</span>}
        </button>
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
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

export default AdminSidebar;
