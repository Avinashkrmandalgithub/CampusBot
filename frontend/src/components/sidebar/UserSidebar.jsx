import { MessageSquare, Settings, GraduationCap } from "lucide-react";
import SidebarItem from "./SidebarItem";

const UserSidebar = ({ closeMobile }) => {
  return (
    <aside className="w-64 h-full bg-[#0a0518] border-r border-white/10 flex flex-col p-4">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="bg-cyan-500 p-2 rounded-lg">
          <GraduationCap size={22} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-purple-300">CampusBot</h1>
          <p className="text-[11px] text-gray-400">User Panel</p>
        </div>
      </div>

      <nav className="space-y-2">
        <SidebarItem
          icon={MessageSquare}
          label="Chat"
          to="/chat"
          onClick={closeMobile}
        />
        <SidebarItem
          icon={Settings}
          label="Settings"
          to="/settings"
          onClick={closeMobile}
        />
      </nav>
    </aside>
  );
};

export default UserSidebar;
