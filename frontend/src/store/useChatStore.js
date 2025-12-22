import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export const useChatStore = create((set, get) => ({
  messages: [
    {
      role: "bot",
      text: "👋 Hi! I’m CampusBot, your AI assistant for Brainware University. Ask me anything about exams, fees, admissions, or campus life.",
      source: "intro",
      time: new Date(),
    },
  ],
  loading: false,

  addUserMessage: (text) =>
    set((state) => ({
      messages: [...state.messages, { role: "user", text, time: new Date() }],
    })),

  sendMessage: async (message) => {
    if (!message.trim()) return;

    get().addUserMessage(message);

    //  Always show typing dots
    set({ loading: true });

    try {
      const res = await axios.post(
        `${API_URL}/api/chat`,
        { message },
        { withCredentials: true }
      );

      //  Minimum typing delay (important)
      await sleep(500);

      set((state) => ({
        messages: [
          ...state.messages,
          {
            role: "bot",
            text: res.data.reply,
            source: res.data.source, // "faq" or "CampusBot"
            time: new Date(),
          },
        ],
        loading: false,
      }));
    } catch (error) {
      await sleep(600);

      set((state) => ({
        messages: [
          ...state.messages,
          {
            role: "bot",
            text: "⚠️ Something went wrong. Please try again.",
            source: "error",
            time: new Date(),
          },
        ],
        loading: false,
      }));
    }
  },

  clearChat: () =>
    set({
      messages: [
        {
          role: "bot",
          text: "👋 Hi! I’m CampusBot. How can I help you today?",
          source: "intro",
          time: new Date(),
        },
      ],
    }),
}));
