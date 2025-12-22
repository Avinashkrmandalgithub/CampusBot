import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const useFaqStore = create((set) => ({
  loading: false,
  error: null,
  faqs: [],

  fetchFaqs: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(`${API_URL}/api/admin/faqs`, {
        withCredentials: true,
      });
      set({ faqs: res.data, loading: false });
    } catch {
      set({ error: "Failed to load FAQs", loading: false });
    }
  },

  addFaq: async (data) => {
    set({ loading: true });
    const res = await axios.post(
      `${API_URL}/api/admin/add-faq`,
      data,
      { withCredentials: true }
    );
    set((s) => ({ faqs: [res.data.faq, ...s.faqs], loading: false }));
    return true;
  },

  // ✏️ EDIT FAQ
  updateFaq: async (id, data) => {
    set({ loading: true });
    const res = await axios.put(
      `${API_URL}/api/admin/update-faq/${id}`,
      data,
      { withCredentials: true }
    );

    set((state) => ({
      faqs: state.faqs.map((f) =>
        f._id === id ? res.data.faq : f
      ),
      loading: false,
    }));
  },

  // 🗑️ DELETE FAQ
  deleteFaq: async (id) => {
    await axios.delete(
      `${API_URL}/api/admin/delete-faq/${id}`,
      { withCredentials: true }
    );

    set((state) => ({
      faqs: state.faqs.filter((f) => f._id !== id),
    }));
  },
}));

