import { create } from "zustand";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const useNewsStore = create((set) => ({
  news: [],
  loading: false,

  fetchNews: async () => {
    try {
      set({ loading: true });
      const res = await axios.get(`${API}/api/news`, {
        withCredentials: true,
      });
      set({ news: res.data });
    } catch (err) {
      console.error("Fetch news failed", err);
    } finally {
      set({ loading: false });
    }
  },

  addNews: async (data) => {
    const res = await axios.post(`${API}/api/news`, data, {
      withCredentials: true,
    });
    set((state) => ({
      news: [res.data.news, ...state.news],
    }));
  },

  updateNews: async (id, data) => {
    const res = await axios.put(`${API}/api/news/${id}`, data, {
      withCredentials: true,
    });
    set((state) => ({
      news: state.news.map((n) => (n._id === id ? res.data.news : n)),
    }));
  },

  deleteNews: async (id) => {
    await axios.delete(`${API}/api/news/${id}`, {
      withCredentials: true,
    });
    set((state) => ({
      news: state.news.filter((n) => n._id !== id),
    }));
  },
}));
