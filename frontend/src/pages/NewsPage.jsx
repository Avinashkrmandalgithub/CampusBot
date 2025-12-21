import { useState } from "react";
import { Plus, Search, Newspaper } from "lucide-react";
import NewsCard from "../components/news/NewsCard";
import AddNewsModal from "../components/news/AddNewsModal";

const newsData = [
  {
    title: "Semester Results Announced",
    desc: "Results for Fall 2024 semester are now available on the student portal.",
    category: "Exam",
    date: "1/15/2025",
    highlight: true,
  },
  {
    title: "Winter Vacation Notice",
    desc: "Campus will remain closed from Jan 20–25 for winter break.",
    category: "Holiday",
    date: "1/14/2025",
  },
  {
    title: "New Library Hours",
    desc: "Library will now be open until 10 PM on weekdays.",
    category: "Notice",
    date: "1/13/2025",
  },
];

const NewsPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 z-10 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-600/20 shrink-0">
            <Newspaper className="text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">News Management</h1>
            <p className="text-gray-400 text-sm mt-1">
              Publish and manage university notices
            </p>
          </div>
        </div>

        {/* Add News Button */}
        <button
          onClick={() => setOpen(true)}
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
          <Plus size={18} /> Add News
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
          placeholder="Search news..."
          className="
            bg-transparent outline-none
            text-sm flex-1
            placeholder-gray-500
          "
        />
      </div>

      {/* Cards */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-5 sm:gap-6
        "
      >
        {newsData.map((n, i) => (
          <NewsCard key={i} {...n} />
        ))}
      </div>

      {open && <AddNewsModal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default NewsPage;
