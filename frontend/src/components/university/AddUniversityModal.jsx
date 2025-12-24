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
    if (!form.section || !form.title || !form.content) return;
    await addInfo(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#0a0518] border border-white/10 rounded-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400"
        >
          <X size={18} />
        </button>

        <h2 className="text-xl font-bold mb-6">Add University Info</h2>

        <div className="space-y-4">
          <select
            className="w-full bg-[#0a0518] border border-white/10 rounded-lg p-3"
            value={form.section}
            onChange={(e) => setForm({ ...form, section: e.target.value })}
          >
            <option value="">Select Section</option>
            {sections.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <input
            placeholder="Title"
            className="w-full bg-transparent border border-purple-500/50 rounded-lg p-3"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <textarea
            rows={4}
            placeholder="Content (official info only)"
            className="w-full bg-transparent border border-white/10 rounded-lg p-3"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />

          <input
            placeholder="Source URL (optional)"
            className="w-full bg-transparent border border-white/10 rounded-lg p-3"
            value={form.sourceUrl}
            onChange={(e) => setForm({ ...form, sourceUrl: e.target.value })}
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg">
            Cancel
          </button>
          <button
            onClick={submit}
            disabled={loading}
            className="px-5 py-2 bg-linear-to-r from-purple-600 to-cyan-500 rounded-lg"
          >
            {loading ? "Saving..." : "Add Info"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUniversityModal;
