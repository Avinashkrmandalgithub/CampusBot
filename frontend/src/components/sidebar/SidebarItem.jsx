import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon: Icon, label, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 p-3 rounded-lg transition-all ${
          isActive
            ? "bg-[#2d2159] text-purple-300 border-r-4 border-cyan-400"
            : "text-gray-400 hover:bg-white/5"
        }`
      }
    >
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
