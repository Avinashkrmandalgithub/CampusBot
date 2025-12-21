import { MessageSquare, Settings, GraduationCap } from "lucide-react";
import SidebarItem from "./SidebarItem";

const UserSidebar = () => {
  return (
    <aside className="w-64 border-r border-white/10 flex flex-col p-4 bg-[#0a0518]">
      <div className="flex items-center space-x-2 mb-10 px-2">
        <div className="bg-cyan-500 p-1.5 rounded-lg">
          <GraduationCap size={24} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-purple-300">CampusBot</h1>
          <p className="text-[10px] text-gray-500">User Panel</p>
        </div>
      </div>

      {/* User Allowed Actions */}
      <nav className="space-y-2">
        <SidebarItem icon={MessageSquare} label="Chat" to="/chat" />
        <SidebarItem icon={Settings} label="Settings" to="/settings" />
      </nav>
    </aside>
  );
};

export default UserSidebar;
