import { Eye, X, Star, Pencil } from "lucide-react";
import { useNewsStore } from "../../store/useNewsStore";

const NewsCard = ({ _id, title, desc, category, date, highlight, onEdit }) => {
  const { deleteNews } = useNewsStore();

  return (
    <div className="bg-white/5 border rounded-xl p-5 flex flex-col">
      <div className="flex justify-between mb-3">
        <span>{category}</span>
        {highlight && <Star className="text-yellow-400" size={16} />}
      </div>

      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{desc}</p>

      <div className="mt-auto flex justify-between text-xs text-gray-400">
        <span>{new Date(date).toLocaleDateString()}</span>
        <div className="flex gap-4">
          <Pencil onClick={onEdit} className="cursor-pointer" size={16} />
          <X
            onClick={() => deleteNews(_id)}
            className="cursor-pointer text-red-400"
            size={16}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
