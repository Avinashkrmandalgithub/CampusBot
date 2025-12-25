import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useEventStore } from "../../store/useEventStore";

const CreateEventModal = ({ onClose, selectedDate }) => {
  const { createEvent, loading } = useEventStore();

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
  });

  // Auto-fill date when selected from calendar
  useEffect(() => {
    if (selectedDate) {
      setForm((prev) => ({
        ...prev,
        date: selectedDate.toISOString().slice(0, 10),
      }));
    }
  }, [selectedDate]);

  const submit = async () => {
    if (!form.title || !form.date || !form.time || !form.location) return;
    await createEvent(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-md max-h-[90vh] overflow-hidden">
        <div className="bg-[#0a0518] border border-white/10 rounded-2xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <h2 className="text-lg sm:text-xl font-bold">Create Event</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form (Scrollable) */}
          <div className="p-4 sm:p-5 space-y-4 overflow-y-auto">
            <input
              placeholder="Event Name"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none focus:border-purple-500"
            />

            <textarea
              rows={3}
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none resize-none focus:border-white/30"
            />

            <input
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none focus:border-white/30"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none"
              />

              <input
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none"
              />
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
              onClick={submit}
              disabled={loading}
              className="px-5 py-2 bg-linear-to-r from-purple-600 to-cyan-500 rounded-lg text-sm font-medium disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventModal;
