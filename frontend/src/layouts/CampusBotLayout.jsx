import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import UserSidebar from "../components/sidebar/UserSidebar";
import SphericalParticle from "../components/effects/SphericalParticle";
import { Menu } from "lucide-react";

// TEMP auth
const useAuth = () => {
  return { role: "admin" }; // "user" | "admin"
};

const CampusBotLayout = () => {
  const { role } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const Sidebar = role === "admin" ? AdminSidebar : UserSidebar;

  return (
    <div className="flex h-screen bg-[#0a0518] text-white overflow-hidden">
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static z-50 h-full
          transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar closeMobile={() => setMobileOpen(false)} />
      </div>

      {/* Main */}
      <main
        className="relative flex-1 flex flex-col
  bg-linear-to-b from-[#0a0518] to-[#120b2e]
  overflow-y-auto"
      >
        <SphericalParticle />

        {/* Mobile Top Bar */}
        <div className="md:hidden flex items-center gap-3 p-3 border-b border-white/10">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg hover:bg-white/5"
          >
            <Menu size={20} />
          </button>
          <span className="font-semibold">CampusBot</span>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default CampusBotLayout;
