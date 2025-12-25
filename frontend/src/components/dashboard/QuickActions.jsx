import { HelpCircle, FileText, Calendar } from "lucide-react";

const ActionCard = ({ icon: Icon, title, desc, color }) => (
  <div
    className="
      group
      bg-white/5 border border-white/10
      rounded-xl
      p-4 sm:p-5
      flex items-center gap-4
      cursor-pointer
      transition-all duration-300
      hover:border-cyan-400/40
      hover:bg-white/10
    "
  >
    <div
      className={`
        p-2.5 rounded-lg
        ${color}/20
      `}
    >
      <Icon className={`${color.replace("bg-", "text-")}`} size={22} />
    </div>

    <div className="leading-tight">
      <h4 className="font-semibold text-sm sm:text-base">{title}</h4>
      <p className="text-xs sm:text-sm text-gray-400 mt-0.5">{desc}</p>
    </div>
  </div>
);

const QuickActions = () => {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4 sm:gap-6
      "
    >
      <ActionCard
        icon={HelpCircle}
        title="Manage FAQs"
        desc="Add, edit or remove FAQ entries"
        color="bg-purple-500"
      />

      <ActionCard
        icon={FileText}
        title="Post News"
        desc="Share latest university updates"
        color="bg-cyan-500"
      />

      <ActionCard
        icon={Calendar}
        title="Create Event"
        desc="Schedule campus events"
        color="bg-purple-500"
      />
    </div>
  );
};

export default QuickActions;
