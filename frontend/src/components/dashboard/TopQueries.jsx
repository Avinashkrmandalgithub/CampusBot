import ProgressRow from "./ProgressRow";

const TopQueries = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5">
      <h3 className="text-lg font-semibold mb-4">Top Queries</h3>

      <div className="space-y-4">
        <ProgressRow label="Exam schedule" value={45} />
        <ProgressRow label="Fee payment" value={38} />
        <ProgressRow label="Admission process" value={32} />
        <ProgressRow label="Hostel facilities" value={28} />
        <ProgressRow label="Placement info" value={24} />
      </div>
    </div>
  );
};

export default TopQueries;
