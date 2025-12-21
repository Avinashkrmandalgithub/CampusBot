import { Eye, X, Star } from "lucide-react";

const categoryStyles = {
  Exam: "bg-purple-600/20 text-purple-400",
  Holiday: "bg-green-600/20 text-green-400",
  Notice: "bg-yellow-600/20 text-yellow-400",
};

const NewsCard = ({ title, desc, category, date, highlight }) => {
  return (
    <div
      className={`
        bg-white/5 border border-white/10 rounded-xl p-5 relative
        ${highlight ? "ring-1 ring-cyan-400/40" : ""}
      `}
    >
      {/* Category + Star */}
      <div className="flex justify-between items-start mb-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${categoryStyles[category]}`}
        >
          {category}
        </span>

        {highlight && <Star size={16} className="text-yellow-400" />}
      </div>

      {/* Content */}
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{desc}</p>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-gray-400">
        <span>{date}</span>

        <div className="flex items-center gap-4">
          <Eye size={16} className="cursor-pointer hover:text-white" />
          <X size={16} className="cursor-pointer text-red-400" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
