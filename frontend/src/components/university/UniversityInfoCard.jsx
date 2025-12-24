import { Pencil, X, Link } from "lucide-react";
import { useUniversityStore } from "../../store/useUniversityStore";

const sectionStyles = {
  Placements: "bg-cyan-600/20 text-cyan-400",
  Admissions: "bg-purple-600/20 text-purple-400",
  Fees: "bg-yellow-600/20 text-yellow-400",
  Rankings: "bg-green-600/20 text-green-400",
  Scholarships: "bg-pink-600/20 text-pink-400",
  General: "bg-gray-600/20 text-gray-300",
};

const UniversityInfoCard = ({
  _id,
  section,
  title,
  content,
  sourceUrl,
  onEdit,
}) => {
  const { deleteInfo } = useUniversityStore();

  return (
    <div
      className="
        bg-white/5 border border-white/10
        rounded-xl p-4 sm:p-5
        flex flex-col min-h-50
        hover:border-cyan-400/30 transition
      "
    >
      {/*  Header (Section badge)  */}
      <div className="flex justify-between items-start mb-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            sectionStyles[section] || sectionStyles.General
          }`}
        >
          {section}
        </span>
      </div>

      {/*  Content  */}
      <h3 className="font-semibold mb-2 text-sm sm:text-base leading-snug">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-4">
        {content}
      </p>

      {/*  Source  */}
      {sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="
            text-xs text-purple-400
            flex items-center gap-1
            hover:underline mb-3
          "
        >
          <Link size={12} /> Official Source
        </a>
      )}

      {/* Footer (Actions) */}
      <div className="mt-auto flex justify-end items-center gap-4 text-gray-400">
        <Pencil
          size={16}
          onClick={onEdit}
          className="cursor-pointer hover:text-white transition"
        />

        <X
          size={16}
          onClick={() => deleteInfo(_id)}
          className="cursor-pointer text-red-400 hover:text-red-300 transition"
        />
      </div>
    </div>
  );
};

export default UniversityInfoCard;
