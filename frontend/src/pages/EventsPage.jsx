import { useEffect, useState } from "react";
import { Plus, CalendarDays } from "lucide-react";
import { useEventStore } from "../store/useEventStore";
import EventCard from "../components/events/EventCard";
import CreateEventModal from "../components/events/CreateEventModal";
import EditEventModal from "../components/events/EditEventModal";

/* ---------- Calendar Helpers ---------- */
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const getDaysInMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

const getStartDay = (year, month) =>
  new Date(year, month, 1).getDay();
/* ------------------------------------- */

const EventsPage = () => {
  const {
    upcoming,
    past,
    calendarEvents,
    fetchUpcomingEvents,
    fetchPastEvents,
    fetchCalendarEvents,
  } = useEventStore();

  const [tab, setTab] = useState("upcoming");
  const [openCreate, setOpenCreate] = useState(false);
  const [editEvent, setEditEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  useEffect(() => {
    fetchUpcomingEvents();
    fetchPastEvents();
  }, []);

  useEffect(() => {
    fetchCalendarEvents(month, year);
  }, [month, year]);

  const openCreateWithDate = (date) => {
    setSelectedDate(date);
    setOpenCreate(true);
  };

  return (
    <div className="p-4 sm:p-6 z-10 space-y-6 sm:space-y-8">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-600/20">
            <CalendarDays className="text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Events Management
            </h1>
            <p className="text-gray-400 text-sm">
              Schedule and manage campus events
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedDate(null);
            setOpenCreate(true);
          }}
          className="w-full sm:w-auto bg-linear-to-r from-purple-600 to-cyan-500 px-5 py-2.5 rounded-lg flex justify-center gap-2 font-medium shadow-lg shadow-purple-500/30"
        >
          <Plus size={18} /> Create Event
        </button>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-6 xl:gap-8">
        {/* CALENDAR */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6">
          {/* Controls */}
          <div className="flex items-center justify-between mb-4 gap-2">
            <button
              onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
              className="text-xl px-2"
            >
              ‹
            </button>

            <div className="flex gap-2">
              {/* Month */}
              <select
                value={month}
                onChange={(e) =>
                  setCurrentDate(new Date(year, Number(e.target.value), 1))
                }
                className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm"
              >
                {MONTHS.map((m, i) => (
                  <option key={m} value={i}>{m}</option>
                ))}
              </select>

              {/* Year */}
              <select
                value={year}
                onChange={(e) =>
                  setCurrentDate(new Date(Number(e.target.value), month, 1))
                }
                className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm"
              >
                {Array.from({ length: 10 }, (_, i) => year - 5 + i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
              className="text-xl px-2"
            >
              ›
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-y-2">
            {/* Empty slots */}
            {Array.from({ length: getStartDay(year, month) }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {Array.from({ length: getDaysInMonth(year, month) }).map((_, i) => {
              const day = i + 1;
              const dateObj = new Date(year, month, day);

              const hasEvent = calendarEvents.some(
                (e) =>
                  new Date(e.date).toDateString() ===
                  dateObj.toDateString()
              );

              const isSelected =
                selectedDate &&
                selectedDate.toDateString() === dateObj.toDateString();

              return (
                <div
                  key={day}
                  onClick={() => openCreateWithDate(dateObj)}
                  className={`w-9 h-9 mx-auto flex items-center justify-center rounded-lg cursor-pointer text-sm
                    ${
                      isSelected
                        ? "bg-linear-to-r from-purple-600 to-cyan-500 text-white"
                        : hasEvent
                        ? "bg-purple-600/30 text-white"
                        : "text-gray-300 hover:bg-white/10"
                    }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* EVENTS LIST */}
        <div className="space-y-5">
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setTab("upcoming")}
              className={`px-4 py-2 rounded-lg text-sm ${
                tab === "upcoming"
                  ? "bg-white/10"
                  : "text-gray-400 hover:bg-white/5"
              }`}
            >
              Upcoming ({upcoming.length})
            </button>

            <button
              onClick={() => setTab("past")}
              className={`px-4 py-2 rounded-lg text-sm ${
                tab === "past"
                  ? "bg-white/10"
                  : "text-gray-400 hover:bg-white/5"
              }`}
            >
              Past ({past.length})
            </button>
          </div>

          {tab === "upcoming" &&
            (upcoming.length ? (
              upcoming.map((e) => (
                <EventCard
                  key={e._id}
                  event={e}
                  onEdit={() => setEditEvent(e)}
                />
              ))
            ) : (
              <div className="text-gray-400 py-12 text-center text-sm">
                No upcoming events
              </div>
            ))}

          {tab === "past" &&
            past.map((e) => (
              <EventCard
                key={e._id}
                event={e}
                onEdit={() => setEditEvent(e)}
              />
            ))}
        </div>
      </div>

      {/* MODALS */}
      {openCreate && (
        <CreateEventModal
          selectedDate={selectedDate}
          onClose={() => {
            setOpenCreate(false);
            setSelectedDate(null);
          }}
        />
      )}

      {editEvent && (
        <EditEventModal
          event={editEvent}
          onClose={() => setEditEvent(null)}
        />
      )}
    </div>
  );
};

export default EventsPage;
