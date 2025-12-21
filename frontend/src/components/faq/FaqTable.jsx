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
  <span className="px-2.5 py-1 text-xs rounded-full border border-white/20">
    {label}
  </span>
);

const FaqTable = () => {
  return (
    <>
      {/* ===== DESKTOP TABLE ===== */}
      <div className="hidden lg:block bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-white/5 text-gray-400">
            <tr>
              <th className="text-left px-6 py-4">Question</th>
              <th className="text-left px-6 py-4">Category</th>
              <th className="text-left px-6 py-4">Tags</th>
              <th className="text-right px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {faqs.map((f, i) => (
              <tr key={i} className="border-t border-white/10 hover:bg-white/5">
                <td className="px-6 py-5 font-medium">{f.q}</td>

                <td className="px-6 py-5">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
                    {f.category}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t, i) => (
                      <Tag key={i} label={t} />
                    ))}
                  </div>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-4">
                    <button className="p-1.5 hover:bg-white/10 rounded-md">
                      <Pencil size={16} />
                    </button>
                    <button className="p-1.5 hover:bg-red-500/20 rounded-md text-red-400">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== MOBILE CARDS ===== */}
      <div className="lg:hidden space-y-4">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3"
          >
            <div className="font-medium">{f.q}</div>

            <div className="flex items-center gap-2 text-xs">
              <span className="px-3 py-1 bg-white/10 rounded-full">
                {f.category}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {f.tags.map((t, i) => (
                <Tag key={i} label={t} />
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button className="p-2 hover:bg-white/10 rounded-md">
                <Pencil size={16} />
              </button>
              <button className="p-2 hover:bg-red-500/20 rounded-md text-red-400">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqTable;
