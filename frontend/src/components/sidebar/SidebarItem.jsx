import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon: Icon, label, to, collapsed, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `
        group relative flex items-center gap-3
        p-3 rounded-lg
        transition-all duration-200
        ${
          isActive
            ? "bg-[#2d2159] text-purple-300 ring-1 ring-cyan-400/40"
            : "text-gray-400 hover:bg-white/5"
        }
        ${collapsed ? "justify-center" : ""}
        `
      }
    >
      <Icon size={20} className="shrink-0" />

      {!collapsed && <span className="text-sm whitespace-nowrap">{label}</span>}

      {/* Tooltip (desktop only) */}
      {collapsed && (
        <span
          className="
            hidden lg:block
            absolute left-full ml-3 px-3 py-1.5
            bg-[#1a1333] border border-white/10
            rounded-md text-xs whitespace-nowrap
            opacity-0 group-hover:opacity-100
            transition z-50
          "
        >
          {label}
        </span>
      )}
    </NavLink>
  );
};

export default SidebarItem;
