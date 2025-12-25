import { useState } from "react";
import { X } from "lucide-react";
import { useNewsStore } from "../../store/useNewsStore";

const categories = ["Exam", "Holiday", "Notice", "Admission", "General"];

const AddNewsModal = ({ onClose }) => {
  const { addNews, loading } = useNewsStore();

  const [form, setForm] = useState({
    title: "",
    desc: "",
    category: "",
    date: "",
    highlight: false,
  });

  const handleSubmit = async () => {
    if (!form.title || !form.desc || !form.category || !form.date) return;
    await addNews(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-md max-h-[90svh] overflow-y-auto no-scrollbar">
        <div className="bg-[#0a0518] border border-white/10 rounded-2xl p-5 sm:p-6 relative shadow-2xl">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <h2 className="text-lg sm:text-xl font-bold mb-6">Add News</h2>

          {/* Form */}
          <div className="space-y-5">
            {/* Title */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Title</label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Enter news title"
                className="
                  w-full bg-transparent
                  border border-purple-500/60
                  rounded-lg p-3 text-sm
                  outline-none
                  focus:border-purple-400
                "
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Description
              </label>
              <textarea
                rows={3}
                value={form.desc}
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
                placeholder="Enter description"
                className="
                  w-full bg-transparent
                  border border-white/10
                  rounded-lg p-3 text-sm
                  outline-none
                  focus:border-white/30
                "
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="
                  w-full bg-[#0a0518]
                  border border-white/10
                  rounded-lg p-3 text-sm text-white
                  focus:border-white/30
                "
              >
                <option value="" disabled>
                  Select category
                </option>
                {categories.map((c) => (
                  <option key={c} value={c} className="bg-[#0a0518]">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="
                  w-full bg-transparent
                  border border-white/10
                  rounded-lg p-3 text-sm
                  outline-none
                  focus:border-white/30
                "
              />
            </div>

            {/* Highlight */}
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={form.highlight}
                onChange={(e) =>
                  setForm({ ...form, highlight: e.target.checked })
                }
                className="accent-cyan-500"
              />
              Highlight this news
            </label>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
            <button
              onClick={onClose}
              className="
                px-4 py-2
                border border-white/10
                rounded-lg text-sm
                hover:bg-white/5
                transition
              "
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="
                px-5 py-2
                bg-linear-to-r from-purple-600 to-cyan-500
                rounded-lg text-sm font-medium
                disabled:opacity-60
              "
            >
              {loading ? "Publishing..." : "Publish News"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewsModal;
