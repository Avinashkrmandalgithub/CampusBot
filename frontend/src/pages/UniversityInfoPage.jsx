import { useEffect, useState } from "react";
import { Plus, GraduationCap, Search } from "lucide-react";
import { useUniversityStore } from "../store/useUniversityStore";
import UniversityInfoCard from "../components/university/UniversityInfoCard";
import AddUniversityModal from "../components/university/AddUniversityModal";
import EditUniversityModal from "../components/university/EditUniversityModal";

const UniversityInfoPage = () => {
  const { info, fetchInfo } = useUniversityStore();

  const [addOpen, setAddOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchInfo();
  }, []);

  const filteredInfo = info.filter((item) =>
    `${item.section} ${item.title} ${item.content}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 z-10 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="p-3 rounded-xl bg-cyan-600/20 shrink-0">
            <GraduationCap className="text-cyan-400" />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              University Information
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Official placements, fees, rankings & more
            </p>
          </div>
        </div>

        {/* Add Button */}
        <button
          onClick={() => setAddOpen(true)}
          className="
            w-full sm:w-auto
            bg-linear-to-r from-purple-600 to-cyan-500
            px-5 py-2.5 rounded-lg
            flex items-center justify-center gap-2
            font-medium
            shadow-lg shadow-purple-500/30
            hover:opacity-90 transition
          "
        >
          <Plus size={18} />
          <span>Add Info</span>
        </button>
      </div>

      {/* Search */}
      <div
        className="
          flex items-center gap-3
          bg-white/5 border border-white/10
          rounded-lg px-4 py-2.5
          w-full sm:max-w-md
        "
      >
        <Search size={16} className="text-gray-400" />
        <input
          placeholder="Search placements, fees, rankings..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            bg-transparent outline-none
            text-sm flex-1
            placeholder-gray-500
          "
        />
      </div>

      {/* Cards Grid */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-5 sm:gap-6
        "
      >
        {filteredInfo.map((item) => (
          <UniversityInfoCard
            key={item._id}
            {...item}
            onEdit={() => setEditItem(item)}
          />
        ))}
      </div>

      {/* Modals */}
      {addOpen && <AddUniversityModal onClose={() => setAddOpen(false)} />}

      {editItem && (
        <EditUniversityModal
          info={editItem}
          onClose={() => setEditItem(null)}
        />
      )}
    </div>
  );
};

export default UniversityInfoPage;
