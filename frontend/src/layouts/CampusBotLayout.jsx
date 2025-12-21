import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import UserSidebar from "../components/sidebar/UserSidebar";
import SphericalParticle from "../components/effects/SphericalParticle";

// TEMP: replace with auth store later
const useAuth = () => {
  return { role: "admin" }; // "user" | "admin"
};

const CampusBotLayout = () => {
  const { role } = useAuth();

  return (
    <div className="flex h-screen bg-[#0a0518] text-white overflow-hidden">
      {role === "admin" ? <AdminSidebar /> : <UserSidebar />}

      <main className="relative flex-1 flex flex-col bg-linear-to-b from-[#0a0518] to-[#120b2e]">
        <SphericalParticle />
        <Outlet />
      </main>
    </div>
  );
};

export default CampusBotLayout;
