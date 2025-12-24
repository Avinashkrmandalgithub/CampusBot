import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const useAdminAuthStore = create((set) => ({
  admin: null,
  loading: false,
  error: null,
  checked: false,

  //  Login
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

  // Check existing session (cookie-based)
  checkAuth: async () => {
    try {
      const res = await axios.get(`${API_URL}/api/admin-auth/me`, {
        withCredentials: true,
      });

      set({ admin: res.data.admin, checked: true });
    } catch {
      set({ admin: null, checked: true });
    }
  },

  logoutAdmin: async () => {
    await axios.post(
      `${API_URL}/api/admin-auth/logout`,
      {},
      { withCredentials: true }
    );
    set({ admin: null });
  },
}));
