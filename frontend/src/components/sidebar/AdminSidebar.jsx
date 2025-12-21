import {
  MessageSquare,
  LayoutDashboard,
  HelpCircle,
  Newspaper,
  Calendar,
  Settings,
  GraduationCap,
  ChevronLeft,
} from "lucide-react";
import SidebarItem from "./SidebarItem.jsx";

const AdminSidebar = () => {
  return (
    <aside className="w-64 border-r border-white/10 flex flex-col p-4 bg-[#0a0518]">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-10 px-2">
        <div className="bg-cyan-500 p-1.5 rounded-lg">
          <GraduationCap size={24} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-purple-300">CampusBot</h1>
          <p className="text-[10px] text-gray-500">Admin Panel</p>
        </div>
      </div>

      {/* Admin Actions */}
      <nav className="flex-1 space-y-2">
        <SidebarItem icon={MessageSquare} label="Chat" to="/chat" />
        <SidebarItem icon={LayoutDashboard} label="Dashboard" to="/dashboard" />
        <SidebarItem icon={HelpCircle} label="FAQs" to="/faqs" />
        <SidebarItem icon={Newspaper} label="News" to="/news" />
        <SidebarItem icon={Calendar} label="Events" to="/events" />
        <SidebarItem icon={Settings} label="Settings" to="/settings" />
      </nav>

      <button className="p-2 hover:bg-white/5 rounded-full w-fit mt-auto">
        <ChevronLeft size={20} className="text-gray-500" />
      </button>
    </aside>
  );
};

export default AdminSidebar;
