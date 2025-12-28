import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import UserSidebar from "../components/sidebar/UserSidebar";
import { useAdminAuthStore } from "../store/useAdminAuthStore";
import SphericalParticle from "../components/effects/SphericalParticle";
import { Menu } from "lucide-react";

const CampusBotLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { admin } = useAdminAuthStore();

  const Sidebar = admin ? AdminSidebar : UserSidebar;

  return (
    <div className="relative flex h-screen bg-[#0a0518] text-white overflow-hidden">
      <SphericalParticle />

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

      {/* Main Content (NO SCROLL HERE) */}
      <main
        className="
          relative flex-1 flex flex-col
          overflow-hidden z-10
          px-3 sm:px-6
        "
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* Mobile Top Bar (STATIC) */}
        <div className="md:hidden flex items-center gap-3 py-3 border-b border-white/10 shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg hover:bg-white/5"
          >
            <Menu size={20} />
          </button>
          <span className="font-semibold">CampusBot</span>
        </div>

        {/* Page Content */}
        <Outlet />
      </main>
    </div>
  );
};

export default CampusBotLayout;
