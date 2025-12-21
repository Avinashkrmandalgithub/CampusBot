import { Pencil, Trash2 } from "lucide-react";

const faqs = [
  {
    q: "What are the exam dates for this semester?",
    category: "Exams",
    tags: ["exam", "schedule", "+1"],
  },
  {
    q: "How do I pay my fees online?",
    category: "Fees",
    tags: ["fees", "payment", "+1"],
  },
  {
    q: "What documents are required for admission?",
    category: "Admissions",
    tags: ["admission", "documents", "+1"],
  },
];

const Tag = ({ label }) => (
  <span
    className="
      px-2.5 py-1
      text-xs
      rounded-full
      border border-white/20
      text-gray-200
      whitespace-nowrap
    "
  >
    {label}
  </span>
);

const FaqTable = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <table className="w-full text-sm border-collapse">
        {/* Header */}
        <thead className="bg-white/5 text-gray-400">
          <tr>
            <th className="text-left px-6 py-4 font-medium">Question</th>
            <th className="text-left px-6 py-4 font-medium">Category</th>
            <th className="text-left px-6 py-4 font-medium">Tags</th>
            <th className="text-right px-6 py-4 font-medium">Actions</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {faqs.map((f, i) => (
            <tr
              key={i}
              className="
                border-t border-white/10
                hover:bg-white/5
                transition
              "
            >
              {/* Question */}
              <td className="px-6 py-5 font-medium leading-snug">
                {f.q}
              </td>

              {/* Category */}
              <td className="px-6 py-5">
                <span
                  className="
                    inline-flex items-center
                    px-3 py-1
                    bg-white/10
                    rounded-full
                    text-xs font-medium
                  "
                >
                  {f.category}
                </span>
              </td>

              {/* Tags */}
              <td className="px-6 py-5">
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((t, i) => (
                    <Tag key={i} label={t} />
                  ))}
                </div>
              </td>

              {/* Actions */}
              <td className="px-6 py-5">
                <div className="flex justify-end items-center gap-4">
                  <button
                    className="
                      p-1.5 rounded-md
                      hover:bg-white/10
                      transition
                    "
                    title="Edit FAQ"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    className="
                      p-1.5 rounded-md
                      hover:bg-red-500/20
                      text-red-400
                      transition
                    "
                    title="Delete FAQ"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FaqTable;
