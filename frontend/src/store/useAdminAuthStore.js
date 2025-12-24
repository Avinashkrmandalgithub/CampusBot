import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const useAdminAuthStore = create((set) => ({
  admin: null,
  loading: false,
  error: null,

  //  Admin Login
  loginAdmin: async ({ email, password }) => {
    try {
      set({ loading: true, error: null });

      const res = await axios.post(
        `${API_URL}/api/admin-auth/login`,
        { email, password },
        { withCredentials: true }
      );

      set({
        admin: res.data.admin,
        loading: false,
      });

      return true;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.error || "Admin login failed",
      });
      return false;
    }
  },

  //  Logout (frontend reset)
  logoutAdmin: () => {
    set({ admin: null });
  },
}));
