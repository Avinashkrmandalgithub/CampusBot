import { useState } from "react";
import { X } from "lucide-react";
import { useUniversityStore } from "../../store/useUniversityStore";

const sections = [
  "Placements",
  "Admissions",
  "Fees",
  "Rankings",
  "Scholarships",
  "General",
];

const AddUniversityModal = ({ onClose }) => {
  const { addInfo, loading } = useUniversityStore();

  const [form, setForm] = useState({
    section: "",
    title: "",
    content: "",
    sourceUrl: "",
  });

  const submit = async () => {
    if (!form.section || !form.title.trim() || !form.content.trim()) return;
    await addInfo(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto no-scrollbar">
        <div className="bg-[#0a0518] border border-white/10 rounded-2xl p-5 sm:p-6 relative shadow-2xl">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          >
            <X size={18} />
          </button>

          <h2 className="text-lg sm:text-xl font-bold mb-6">
            Add University Info
          </h2>

          <div className="space-y-5">
            {/* Section */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Section
              </label>
              <select
                className="
                  w-full bg-[#0a0518]
                  border border-white/10
                  rounded-lg p-3 text-sm
                  focus:border-cyan-500 outline-none
                "
                value={form.section}
                onChange={(e) => setForm({ ...form, section: e.target.value })}
              >
                <option value="">Select Section</option>
                {sections.map((s) => (
                  <option key={s} value={s} className="bg-[#0a0518]">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Title</label>
              <input
                placeholder="e.g. Highest Placement Package"
                className="
                  w-full bg-transparent
                  border border-purple-500/60
                  rounded-lg p-3 text-sm
                  outline-none focus:border-purple-400
                "
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Content
              </label>
              <textarea
                rows={4}
                placeholder="Enter official university information only"
                className="
                  w-full bg-transparent
                  border border-white/10
                  rounded-lg p-3 text-sm
                  outline-none focus:border-white/30
                "
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
              />
            </div>

            {/* Source URL */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Source URL (optional)
              </label>
              <input
                type="url"
                placeholder="https://brainwareuniversity.ac.in"
                className="
                  w-full bg-transparent
                  border border-white/10
                  rounded-lg p-3 text-sm
                  outline-none focus:border-white/30
                "
                value={form.sourceUrl}
                onChange={(e) =>
                  setForm({ ...form, sourceUrl: e.target.value })
                }
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
            <button
              onClick={onClose}
              className="
                px-4 py-2
                border border-white/10
                rounded-lg text-sm
                hover:bg-white/5 transition
              "
            >
              Cancel
            </button>

            <button
              onClick={submit}
              disabled={loading}
              className="
                px-5 py-2
                bg-linear-to-r from-purple-600 to-cyan-500
                rounded-lg text-sm font-medium
                disabled:opacity-60
              "
            >
              {loading ? "Saving..." : "Add Info"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUniversityModal;
