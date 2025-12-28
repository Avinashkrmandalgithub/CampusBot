import { create } from "zustand";
import axios from "axios";
import { speak } from "../utils/speak";

const API_URL = import.meta.env.VITE_API_URL;
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export const useChatStore = create((set, get) => ({
  messages: [
    {
      role: "bot",
      text: "👋 Hi! I’m CampusBot, your AI assistant for Brainware University.",
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

    // Stop any ongoing AI speech when user talks again
    window.speechSynthesis.cancel();

    get().addUserMessage(message);
    set({ loading: true });

    try {
      const res = await axios.post(
        `${API_URL}/api/chat`,
        { message },
        { withCredentials: true }
      );

      await sleep(500);

      const reply = res.data.reply;

      set((state) => ({
        messages: [
          ...state.messages,
          { role: "bot", text: reply, time: new Date() },
        ],
        loading: false,
      }));

      //  AI VOICE REPLY
      speak(reply);
    } catch (err) {
      await sleep(400);

      set((state) => ({
        messages: [
          ...state.messages,
          {
            role: "bot",
            text: "⚠️ Something went wrong. Please try again.",
            time: new Date(),
          },
        ],
        loading: false,
      }));

      speak("Something went wrong. Please try again.");
    }
  },

  clearChat: () =>
    set({
      messages: [
        {
          role: "bot",
          text: "👋 Hi! I’m CampusBot. How can I help you?",
          time: new Date(),
        },
      ],
    }),
}));
