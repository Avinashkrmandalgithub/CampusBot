import { useState } from "react";
import { X } from "lucide-react";
import { useFaqStore } from "../../store/useFaqStore";

const categories = [
  "Exams",
  "Fees",
  "Admissions",
  "Hostel",
  "Library",
  "General",
];

const EditFaqModal = ({ faq, onClose }) => {
  const { updateFaq, loading } = useFaqStore();

  const [question, setQuestion] = useState(faq.question);
  const [answer, setAnswer] = useState(faq.answer);
  const [category, setCategory] = useState(faq.category);
  const [tags, setTags] = useState(faq.tags.join(", "));

  const handleUpdate = async () => {
    await updateFaq(faq._id, {
      question,
      answer,
      category,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto no-scrollbar">
        <div className="bg-[#0a0518] border border-white/10 rounded-2xl p-5 sm:p-6 relative shadow-2xl">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <h2 className="text-lg sm:text-xl font-bold mb-6">Edit FAQ</h2>

          {/* Form */}
          <div className="space-y-5">
            {/* Question */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Question
              </label>
              <textarea
                rows={2}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full bg-transparent border border-purple-500/60 rounded-lg p-3 text-sm outline-none focus:border-purple-400"
                placeholder="Edit the question..."
              />
            </div>

            {/* Answer */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Answer</label>
              <textarea
                rows={3}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none focus:border-white/30"
                placeholder="Edit the answer..."
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#0a0518] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-white/30"
              >
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
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm outline-none focus:border-white/30"
                placeholder="exam, schedule, rules"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-white/10 rounded-lg text-sm hover:bg-white/5"
            >
              Cancel
            </button>

            <button
              onClick={handleUpdate}
              disabled={loading}
              className="px-5 py-2 bg-linear-to-r from-purple-600 to-cyan-500 rounded-lg text-sm font-medium disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update FAQ"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFaqModal;
