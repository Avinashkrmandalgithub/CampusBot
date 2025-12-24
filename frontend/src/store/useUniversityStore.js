import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const useUniversityStore = create((set, get) => ({
  info: [],
  loading: false,
  error: null,

  // fetch
  fetchInfo: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${API_URL}/api/university`);
      set({
        info: res.data.data || [],
        loading: false,
      });
    } catch (err) {
      set({
        loading: false,
        error: err?.response?.data?.error || "Failed to load university info",
      });
    }
  },

  /* add */
  addInfo: async (data) => {
    set({ loading: true, error: null });

    try {
      const res = await axios.post(`${API_URL}/api/university`, data);

      // 🔥 Optimistic update (no refetch needed)
      set((state) => ({
        info: [res.data.data, ...state.info],
        loading: false,
      }));
    } catch (err) {
      set({
        loading: false,
        error: err?.response?.data?.error || "Failed to add info",
      });
    }
  },

  /* update */
  updateInfo: async (id, data) => {
    set({ loading: true, error: null });

    try {
      const res = await axios.put(`${API_URL}/api/university/${id}`, data);

      set((state) => ({
        info: state.info.map((item) =>
          item._id === id ? res.data.data : item
        ),
        loading: false,
      }));
    } catch (err) {
      set({
        loading: false,
        error: err?.response?.data?.error || "Failed to update info",
      });
    }
  },

  /* delete */
  deleteInfo: async (id) => {
    set({ error: null });

    // ⚡ Optimistic delete
    const prev = get().info;
    set((state) => ({
      info: state.info.filter((i) => i._id !== id),
    }));

    try {
      await axios.delete(`${API_URL}/api/university/${id}`);
    } catch (err) {
      // rollback if delete fails
      set({
        info: prev,
        error: "Failed to delete info",
      });
    }
  },

  /* helper */
  clearError: () => set({ error: null }),
}));
