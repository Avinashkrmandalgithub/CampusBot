import { Navigate, Outlet } from "react-router-dom";
import { useAdminAuthStore } from "../store/useAdminAuthStore";
import { useEffect } from "react";

const ProtectedAdminRoute = () => {
  const { admin, checkAuth, checked } = useAdminAuthStore();

  useEffect(() => {
    if (!checked) checkAuth();
  }, [checked]);

  if (!checked) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        Checking authentication...
      </div>
    );
  }

  if (!admin) {
    return <Navigate to="/admin-login" replace />;
  }

  
  return <Outlet />;
};

export default ProtectedAdminRoute;
