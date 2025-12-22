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
    } catch (err) {
      console.error(err);
      set({ error: "Failed to load FAQs", loading: false });
    }
  },

  addFaq: async ({ question, answer, category, tags }) => {
    set({ loading: true, error: null });

    try {
      const res = await axios.post(
        `${API_URL}/api/admin/add-faq`,
        { question, answer, category, tags },
        { withCredentials: true }
      );

      set((state) => ({
        faqs: [res.data.faq, ...state.faqs],
        loading: false,
      }));

      return true;
    } catch (err) {
      console.error(err);
      set({ error: "Failed to add FAQ", loading: false });
      return false;
    }
  },
}));
