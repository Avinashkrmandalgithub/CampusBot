import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const useFaqStore = create((set) => ({
  loading: false,
  error: null,
  faqs: [],

  addFaq: async ({ question, answer, tags }) => {
    set({ loading: true, error: null });

    try {
      const res = await axios.post(
        `${API_URL}/api/admin/add-faq`,
        { question, answer, tags },
        { withCredentials: true }
      );

      set((state) => ({
        faqs: [res.data.faq, ...state.faqs],
        loading: false,
      }));

      return true;
    } catch (err) {
      console.error(err);

      set({
        error: "Failed to add FAQ",
        loading: false,
      });

      return false;
    }
  },
}));
