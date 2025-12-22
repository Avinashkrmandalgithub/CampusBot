import { HelpCircle, FileText, Calendar } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 flex gap-4 items-center">
        <HelpCircle className="text-purple-400" />
        <div>
          <h4 className="font-semibold">Manage FAQs</h4>
          <p className="text-sm text-gray-400">
            Add, edit or remove FAQ entries
          </p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 flex gap-4 items-center">
        <FileText className="text-cyan-400" />
        <div>
          <h4 className="font-semibold">Post News</h4>
          <p className="text-sm text-gray-400">
            Share latest university updates
          </p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 flex gap-4 items-center">
        <Calendar className="text-purple-400" />
        <div>
          <h4 className="font-semibold">Create Event</h4>
          <p className="text-sm text-gray-400">Schedule campus events</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
