import { Pencil, Trash2 } from "lucide-react";
import { useFaqStore } from "../../store/useFaqStore";
import { useState } from "react";
import EditFaqModal from "./EditFaqModal";

const Tag = ({ label }) => (
  <span className="px-2.5 py-1 text-xs rounded-full border border-white/20">
    {label}
  </span>
);

const FaqTable = () => {
  const { faqs, loading, deleteFaq } = useFaqStore();
  const [editFaq, setEditFaq] = useState(null);

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
                    <button
                      onClick={() => setEditFaq(f)}
                      className="p-1.5 hover:bg-white/10 rounded-md"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => {
                        if (confirm("Delete this FAQ?")) {
                          deleteFaq(f._id);
                        }
                      }}
                      className="p-1.5 hover:bg-red-500/20 rounded-md text-red-400"
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

      {/* ===== MOBILE ===== */}
      {/* ===== MOBILE ===== */}
      <div className="lg:hidden space-y-5">
        {faqs.map((f) => (
          <div
            key={f._id}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-4"
          >
            {/* Question */}
            <div>
              <p className="text-xs text-gray-400 mb-1">Question</p>
              <p className="font-medium text-sm leading-relaxed">
                {f.question}
              </p>
            </div>

            {/* Category */}
            <div>
              <p className="text-xs text-gray-400 mb-1">Category</p>
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs">
                {f.category}
              </span>
            </div>

            {/* Tags */}
            {f.tags.length > 0 && (
              <div>
                <p className="text-xs text-gray-400 mb-1">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((t, i) => (
                    <Tag key={i} label={t} />
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-3 border-t border-white/10">
              <button
                onClick={() => setEditFaq(f)}
                className="text-indigo-400 text-sm font-medium"
              >
                Edit
              </button>

              <button
                onClick={() => deleteFaq(f._id)}
                className="text-red-400 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== EDIT MODAL ===== */}
      {editFaq && (
        <EditFaqModal faq={editFaq} onClose={() => setEditFaq(null)} />
      )}
    </>
  );
};

export default FaqTable;
