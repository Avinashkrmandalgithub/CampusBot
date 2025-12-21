import { useState } from "react";
import { Plus, CalendarDays } from "lucide-react";
import EventCard from "../components/events/EventCard";
import CreateEventModal from "../components/events/CreateEventModal";

const pastEvents = [
  {
    day: "24",
    month: "Jan",
    title: "Tech Fest 2025",
    time: "10:00 AM",
    location: "Main Auditorium",
    desc: "Annual technical festival with workshops, competitions, and exhibitions.",
    attendees: 250,
  },
  {
    day: "25",
    month: "Jan",
    title: "Career Fair",
    time: "9:00 AM",
    location: "Convention Center",
    desc: "Meet top recruiters and explore career opportunities.",
    attendees: 180,
  },
  {
    day: "26",
    month: "Jan",
    title: "Alumni Meet",
    time: "6:00 PM",
    location: "Campus Lawn",
    desc: "Annual gathering of alumni with networking dinner.",
    attendees: 120,
  },
];

const EventsPage = () => {
  const [tab, setTab] = useState("upcoming");
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 z-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-600/20">
            <CalendarDays className="text-purple-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Events Management</h1>
            <p className="text-gray-400 text-sm">
              Schedule and manage campus events
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-linear-to-r from-purple-600 to-cyan-500 px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium shadow-lg shadow-purple-500/30 hover:opacity-90 transition"
        >
          <Plus size={18} /> Create Event
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-8">
        {/* Calendar */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <button className="text-gray-400">‹</button>
            <h3 className="font-semibold">December 2025</h3>
            <button className="text-gray-400">›</button>
          </div>

          <div className="grid grid-cols-7 text-center text-sm text-gray-400 mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-y-3 text-sm">
            {[...Array(30)].map((_, i) => {
              const day = i + 1;
              const isActive = day === 21;
              return (
                <div
                  key={day}
                  className={`mx-auto w-9 h-9 flex items-center justify-center rounded-lg ${
                    isActive
                      ? "bg-linear-to-r from-purple-600 to-cyan-500 text-white"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex gap-3">
            <button
              onClick={() => setTab("upcoming")}
              className={`px-4 py-2 rounded-lg text-sm ${
                tab === "upcoming"
                  ? "bg-white/10"
                  : "text-gray-400 hover:bg-white/5"
              }`}
            >
              Upcoming (0)
            </button>
            <button
              onClick={() => setTab("past")}
              className={`px-4 py-2 rounded-lg text-sm ${
                tab === "past"
                  ? "bg-white/10"
                  : "text-gray-400 hover:bg-white/5"
              }`}
            >
              Past (3)
            </button>
          </div>

          {tab === "upcoming" && (
            <div className="text-gray-400 mt-16 text-center">
              No upcoming events
            </div>
          )}

          {tab === "past" && (
            <div className="space-y-4">
              {pastEvents.map((e, i) => (
                <EventCard key={i} {...e} />
              ))}
            </div>
          )}
        </div>
      </div>

      {open && <CreateEventModal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default EventsPage;
