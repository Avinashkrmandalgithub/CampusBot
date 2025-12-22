import { Pencil, Trash2 } from "lucide-react";
import { useFaqStore } from "../../store/useFaqStore";

const Tag = ({ label }) => (
  <span className="px-2.5 py-1 text-xs rounded-full border border-white/20">
    {label}
  </span>
);

const FaqTable = () => {
  const { faqs, loading } = useFaqStore();

  if (loading) {
    return (
      <div className="text-center text-gray-400 py-10">Loading FAQs...</div>
    );
  }

  if (!faqs.length) {
    return (
      <div className="text-center text-gray-400 py-10">No FAQs added yet</div>
    );
  }

  return (
    <>
      {/* ===== DESKTOP ===== */}
      <div className="hidden lg:block bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-gray-400">
            <tr>
              <th className="text-left px-6 py-4">Question</th>
              <th className="text-left px-6 py-4">Category</th>
              <th className="text-left px-6 py-4">Tags</th>
              <th className="text-right px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {faqs.map((f) => (
              <tr
                key={f._id}
                className="border-t border-white/10 hover:bg-white/5"
              >
                <td className="px-6 py-5 font-medium">{f.question}</td>

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

      {/* ===== MOBILE ===== */}
      <div className="lg:hidden space-y-4">
        {faqs.map((f) => (
          <div
            key={f._id}
            className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3"
          >
            <div className="font-medium">{f.question}</div>

            <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
              {f.category}
            </span>

            <div className="flex flex-wrap gap-2">
              {f.tags.map((t, i) => (
                <Tag key={i} label={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqTable;
