import { useState } from "react";
import { X } from "lucide-react";
import { useEventStore } from "../../store/useEventStore";

const EditEventModal = ({ event, onClose }) => {
  const { updateEvent } = useEventStore();

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
      <div className="bg-[#0a0518] border border-white/10 rounded-2xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400"
        >
          <X size={18} />
        </button>

        <h2 className="text-xl font-bold mb-6">Edit Event</h2>

        <div className="space-y-4">
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded-lg p-3"
          />
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded-lg p-3"
          />
          <input
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded-lg p-3"
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded-lg p-3"
          />
          <input
            type="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded-lg p-3"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-white/10 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={save}
            className="px-5 py-2 bg-linear-to-r from-purple-600 to-cyan-500 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEventModal;
