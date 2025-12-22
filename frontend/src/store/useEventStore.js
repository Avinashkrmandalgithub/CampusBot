import { create } from "zustand";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

// normalize today to midnight
const getTodayStart = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export const useEventStore = create((set) => ({
  upcoming: [],
  past: [],
  calendarEvents: [],
  loading: false,

  // fetch event
  fetchUpcomingEvents: async () => {
    try {
      set({ loading: true });
      const res = await axios.get(`${API}/api/events/upcoming`, {
        withCredentials: true,
      });
      set({ upcoming: res.data });
    } catch (err) {
      console.error("Fetch upcoming events failed", err);
    } finally {
      set({ loading: false });
    }
  },

  // fetch past
  fetchPastEvents: async () => {
    try {
      set({ loading: true });
      const res = await axios.get(`${API}/api/events/past`, {
        withCredentials: true,
      });
      set({ past: res.data });
    } catch (err) {
      console.error("Fetch past events failed", err);
    } finally {
      set({ loading: false });
    }
  },

  // fetch calendar
  fetchCalendarEvents: async (month, year) => {
    try {
      set({ loading: true });
      const res = await axios.get(
        `${API}/api/events/calendar?month=${month}&year=${year}`,
        { withCredentials: true }
      );
      set({ calendarEvents: res.data });
    } catch (err) {
      console.error("Fetch calendar events failed", err);
    } finally {
      set({ loading: false });
    }
  },

  //  create event
  createEvent: async (data) => {
    const res = await axios.post(`${API}/api/events`, data, {
      withCredentials: true,
    });

    const event = res.data.event;
    const today = getTodayStart();

    set((state) => {
      const isUpcoming = new Date(event.date) >= today;

      return {
        upcoming: isUpcoming ? [event, ...state.upcoming] : state.upcoming,
        past: !isUpcoming ? [event, ...state.past] : state.past,
        calendarEvents: [...state.calendarEvents, event],
      };
    });

    return true;
  },

  //  update event
  updateEvent: async (id, data) => {
    const res = await axios.put(`${API}/api/events/${id}`, data, {
      withCredentials: true,
    });

    const event = res.data.event;
    const today = getTodayStart();
    const isUpcoming = new Date(event.date) >= today;

    set((state) => ({
      upcoming: isUpcoming
        ? [event, ...state.upcoming.filter((e) => e._id !== id)]
        : state.upcoming.filter((e) => e._id !== id),

      past: !isUpcoming
        ? [event, ...state.past.filter((e) => e._id !== id)]
        : state.past.filter((e) => e._id !== id),

      calendarEvents: state.calendarEvents.map((e) =>
        e._id === id ? event : e
      ),
    }));
  },

  // delet event
  deleteEvent: async (id) => {
    await axios.delete(`${API}/api/events/${id}`, {
      withCredentials: true,
    });

    set((state) => ({
      upcoming: state.upcoming.filter((e) => e._id !== id),
      past: state.past.filter((e) => e._id !== id),
      calendarEvents: state.calendarEvents.filter((e) => e._id !== id),
    }));
  },
}));
