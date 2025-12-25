import { useEffect, useState } from "react";
import { Plus, Search, Filter, HelpCircle } from "lucide-react";
import FaqTable from "../components/faq/FaqTable";
import AddFaqModal from "../components/faq/AddFaqModal.jsx";
import { useFaqStore } from "../store/useFaqStore.js";

const FaqPage = () => {
  const [open, setOpen] = useState(false);
  const { fetchFaqs } = useFaqStore();

  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <div className="p-4 sm:p-6 z-10 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-600/20 shrink-0">
            <HelpCircle size={22} className="text-purple-400" />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              FAQ Management
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Manage frequently asked questions
            </p>
          </div>
        </div>

        {/* Add FAQ Button */}
        <button
          onClick={() => setOpen(true)}
          className="
            w-full sm:w-auto
            bg-linear-to-r from-purple-600 to-cyan-500
            px-5 py-2.5 rounded-lg
            flex items-center justify-center gap-2
            font-medium
            shadow-lg shadow-purple-500/20
            hover:opacity-90 transition
          "
        >
          <Plus size={18} /> Add FAQ
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-1">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Search FAQs..."
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>

        <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* FAQ Table */}
      <FaqTable />

      {/* Modal */}
      {open && <AddFaqModal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default FaqPage;
