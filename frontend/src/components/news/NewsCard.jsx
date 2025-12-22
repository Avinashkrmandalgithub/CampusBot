import { Eye, X, Star, Pencil } from "lucide-react";
import { useNewsStore } from "../../store/useNewsStore";

const categoryStyles = {
  Exam: "bg-purple-600/20 text-purple-400",
  Holiday: "bg-green-600/20 text-green-400",
  Notice: "bg-yellow-600/20 text-yellow-400",
  Admission: "bg-cyan-600/20 text-cyan-400",
  General: "bg-gray-600/20 text-gray-300",
};

const NewsCard = ({ _id, title, desc, category, date, highlight, onEdit }) => {
  const { deleteNews } = useNewsStore();

  return (
    <div
      className={`
        bg-white/5 border border-white/10 rounded-xl
        p-4 sm:p-5
        flex flex-col
        min-h-40
        transition
        ${highlight ? "ring-1 ring-cyan-400/40" : ""}
      `}
    >
      {/* Category + Star */}
      <div className="flex justify-between items-start mb-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            categoryStyles[category] || categoryStyles.General
          }`}
        >
          {category}
        </span>

        {highlight && <Star size={16} className="text-yellow-400" />}
      </div>

      {/* Content */}
      <h3 className="font-semibold mb-2 text-sm sm:text-base">{title}</h3>

      <p className="text-sm text-gray-400 mb-4 leading-relaxed">{desc}</p>

      {/* Footer */}
      <div className="mt-auto flex justify-between items-center gap-3 text-xs text-gray-400">
        <span>{new Date(date).toLocaleDateString()}</span>

        <div className="flex items-center gap-4">
          <Pencil
            size={16}
            onClick={onEdit}
            className="cursor-pointer hover:text-white transition"
          />

          <X
            size={16}
            onClick={() => deleteNews(_id)}
            className="cursor-pointer text-red-400 hover:text-red-300 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
