import { X } from "lucide-react";

const categories = [
  "Exams",
  "Fees",
  "Admissions",
  "Hostel",
  "Library",
  "General",
];

const AddFaqModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      {/* Scroll wrapper for mobile */}
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto no-scrollbar">
        <div className="bg-[#0a0518] border border-white/10 rounded-2xl p-5 sm:p-6 relative shadow-2xl">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition"
          >
            <X size={18} />
          </button>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold mb-6">Add New FAQ</h2>

          <div className="space-y-5">
            {/* Question */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Question
              </label>
              <textarea
                rows={2}
                className="
                  w-full bg-transparent
                  border border-purple-500/60
                  rounded-lg p-3
                  outline-none text-sm
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                "
                placeholder="Enter the question..."
              />
            </div>

            {/* Answer */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Answer</label>
              <textarea
                rows={3}
                className="
                  w-full bg-transparent
                  border border-white/10
                  rounded-lg p-3
                  outline-none text-sm
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                "
                placeholder="Enter the answer..."
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Category
              </label>
              <select
                className="
                  w-full bg-[#0a0518]
                  border border-white/10
                  rounded-lg p-3
                  text-sm text-white
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                "
                defaultValue=""
              >
                <option value="" disabled className="text-gray-400">
                  Select category
                </option>
                {categories.map((c) => (
                  <option key={c} value={c} className="bg-[#0a0518]">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Tags */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Tags (comma-separated)
              </label>
              <input
                className="
                  w-full bg-transparent
                  border border-white/10
                  rounded-lg p-3
                  outline-none text-sm
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                "
                placeholder="exam, schedule, dates"
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
              Add FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFaqModal;
