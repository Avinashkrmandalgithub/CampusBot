import { useEffect, useState } from "react";
import { Plus, Search, Newspaper } from "lucide-react";
import { useNewsStore } from "../store/useNewsStore";
import NewsCard from "../components/news/NewsCard";
import AddNewsModal from "../components/news/AddNewsModal";
import EditNewsModal from "../components/news/EditNewsModal";

const NewsPage = () => {
  const { news, fetchNews } = useNewsStore();

  const [openAdd, setOpenAdd] = useState(false);
  const [editNews, setEditNews] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="p-4 sm:p-6 space-y-6 z-10">
      {/*  HEADER */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-600/20 shrink-0">
            <Newspaper size={22} className="text-purple-400" />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              News Management
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Publish and manage university notices
            </p>
          </div>
        </div>

        {/* Add News */}
        <button
          onClick={() => setOpenAdd(true)}
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
          <Plus size={18} />
          Add News
        </button>
      </div>

      {/*  SEARCH */}
      <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2 sm:max-w-md">
        <Search size={16} className="text-gray-400" />
        <input
          placeholder="Search news..."
          className="bg-transparent outline-none text-sm flex-1 placeholder-gray-500"
        />
      </div>

      {/* GRID */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-4 sm:gap-6
        "
      >
        {news.map((item) => (
          <NewsCard key={item._id} {...item} onEdit={() => setEditNews(item)} />
        ))}
      </div>

      {/* MODALS  */}
      {openAdd && <AddNewsModal onClose={() => setOpenAdd(false)} />}
      {editNews && (
        <EditNewsModal news={editNews} onClose={() => setEditNews(null)} />
      )}
    </div>
  );
};

export default NewsPage;
