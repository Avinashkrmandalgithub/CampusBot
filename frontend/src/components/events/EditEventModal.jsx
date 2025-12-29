import { useState } from "react";
import { X } from "lucide-react";
import { useEventStore } from "../../store/useEventStore";

const EditEventModal = ({ event, onClose }) => {
  const { updateEvent, loading } = useEventStore();

  const [form, setForm] = useState({
    title: event.title,
    description: event.description,
    location: event.location,
    date: event.date.slice(0, 10),
    time: event.time,
  });

  const save = async () => {
    await updateEvent(event._id, form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      {/* SCROLL CONTAINER */}
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="bg-[#0a0518] border border-white/10 rounded-2xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <h2 className="text-lg sm:text-xl font-bold">Edit Event</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form */}
          <div className="p-4 sm:p-5 space-y-4">
            {/* Event Name */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400">Event Name</label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none focus:border-purple-500"
                placeholder="Event Name"
              />
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400">Description</label>
              <textarea
                rows={3}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none resize-none focus:border-white/30"
                placeholder="Description"
              />
            </div>

            {/* Location */}
            <div className="space-y-1">
              <label className="text-xs text-gray-400">Location</label>
              <input
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none focus:border-white/30"
                placeholder="Location"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-gray-400">Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-400">Time</label>
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 px-5 py-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-white/10 rounded-lg text-sm hover:bg-white/5"
            >
              Cancel
            </button>

            <button
              onClick={save}
              disabled={loading}
              className="px-5 py-2 bg-linear-to-r from-purple-600 to-cyan-500 rounded-lg text-sm font-medium disabled:opacity-60"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEventModal;
