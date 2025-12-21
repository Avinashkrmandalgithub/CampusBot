import { X } from "lucide-react";

const categories = ["Exam", "Holiday", "Notice", "Admission", "General"];

const AddNewsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-[#0a0518] border border-white/10 rounded-2xl w-full max-w-lg p-6 relative shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-6">Add New News</h2>

        <div className="space-y-5">
          {/* Title */}
          <div>
            <label className="text-sm text-gray-400">Title</label>
            <input
              className="w-full mt-1 bg-transparent border border-purple-500/60 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500/30"
              placeholder="Enter news title..."
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-gray-400">Description</label>
            <textarea
              rows={3}
              className="w-full mt-1 bg-transparent border border-white/10 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500/30"
              placeholder="Enter description..."
            />
          </div>

          {/* Category + Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400">Category</label>
              <select className="w-full mt-1 bg-[#0a0518] border border-white/10 rounded-lg p-3 text-white">
                <option>Select category</option>
                {categories.map((c) => (
                  <option key={c} className="bg-[#0a0518]">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400">Date</label>
              <input
                type="date"
                className="w-full mt-1 bg-transparent border border-white/10 rounded-lg p-3"
              />
            </div>
          </div>

          {/* Highlight */}
          <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg p-4">
            <div>
              <p className="font-medium">Highlight Notice</p>
              <p className="text-xs text-gray-400">Show as important notice</p>
            </div>

            <div className="w-11 h-6 bg-white/10 rounded-full relative cursor-pointer">
              <span className="absolute left-1 top-1 w-4 h-4 bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="px-4 py-2 border border-white/10 rounded-lg">
            Preview
          </button>
          <button className="px-5 py-2 bg-linear-to-r from-purple-600 to-cyan-500 rounded-lg font-medium shadow-lg shadow-purple-500/30">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewsModal;
