import { Navigate, Outlet } from "react-router-dom";
import { useAdminAuthStore } from "../store/useAdminAuthStore";

const ProtectedAdminRoute = () => {
  const { admin, checked } = useAdminAuthStore();

  //  Wait until auth check completes
  if (!checked) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        Checking authentication...
      </div>
    );
  }

  //  Not admin
  if (!admin) {
    return <Navigate to="/admin-login" replace />;
  }

  // Authorized
  return <Outlet />;
};

export default ProtectedAdminRoute;
