import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// ensure cookies always sent
axios.defaults.withCredentials = true;

export const useAdminAuthStore = create((set) => ({
  admin: null,
  loading: false,
  error: null,
  checked: false,

  // LOGIN
  loginAdmin: async ({ email, password }) => {
    try {
      set({ loading: true, error: null });

      const res = await axios.post(`${API_URL}/api/admin-auth/login`, {
        email,
        password,
      });

      set({
        admin: res.data.admin,
        loading: false,
        checked: true,
      });

      return true;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.error || "Admin login failed",
        checked: true,
      });
      return false;
    }
  },

  //  RESTORE SESSION ON REFRESH
  checkAuth: async () => {
    try {
      const res = await axios.get(`${API_URL}/api/admin-auth/me`);
      set({ admin: res.data.admin, checked: true });
    } catch {
      set({ admin: null, checked: true });
    }
  },

  logoutAdmin: async () => {
    await axios.post(`${API_URL}/api/admin-auth/logout`);
    set({ admin: null, checked: true });
  },
}));
