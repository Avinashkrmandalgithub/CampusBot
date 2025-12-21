import { X } from "lucide-react";

const CreateEventModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        className="
          bg-[#0a0518] border border-white/10 rounded-2xl
          w-full max-w-lg
          p-5 sm:p-6
          relative shadow-2xl
          max-h-[90vh] overflow-y-auto
          no-scrollbar
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-bold mb-6">Create Event</h2>

        <div className="space-y-4">
          {/* Event Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Event Name
            </label>
            <input
              className="
                w-full bg-transparent
                border border-white/10
                rounded-lg p-3 text-sm
                outline-none
                focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                transition
              "
              placeholder="Enter event name..."
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Date</label>
              <input
                type="date"
                className="
                  w-full bg-transparent
                  border border-white/10
                  rounded-lg p-3 text-sm
                  outline-none
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                  transition
                "
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Time</label>
              <input
                type="time"
                className="
                  w-full bg-transparent
                  border border-purple-500/60
                  rounded-lg p-3 text-sm
                  outline-none
                  focus:ring-2 focus:ring-purple-500/30
                  transition
                "
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Location</label>
            <input
              className="
                w-full bg-transparent
                border border-white/10
                rounded-lg p-3 text-sm
                outline-none
                focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                transition
              "
              placeholder="Enter venue..."
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Description
            </label>
            <textarea
              rows={3}
              className="
                w-full bg-transparent
                border border-white/10
                rounded-lg p-3 text-sm
                outline-none
                focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                transition
              "
              placeholder="Event details..."
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="
              w-full sm:w-auto
              px-4 py-2
              border border-white/10
              rounded-lg text-sm
              hover:bg-white/5 transition
            "
          >
            Cancel
          </button>

          <button
            className="
              w-full sm:w-auto
              px-5 py-2
              bg-linear-to-r from-purple-600 to-cyan-500
              rounded-lg text-sm font-medium
              shadow-lg shadow-purple-500/30
              hover:opacity-90 transition
            "
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEventModal;
