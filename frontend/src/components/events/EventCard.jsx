import { Clock, MapPin, Users } from "lucide-react";

const EventCard = ({ day, month, title, time, location, desc, attendees }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-5">
      {/* Date */}
      <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex flex-col items-center justify-center">
        <span className="text-lg font-bold">{day}</span>
        <span className="text-xs text-gray-400">{month}</span>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-semibold mb-1">{title}</h3>

        <div className="flex gap-4 text-xs text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {time}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {location}
          </span>
        </div>

        <p className="text-sm text-gray-400">{desc}</p>
      </div>

      {/* Attendees */}
      <div className="flex items-center gap-1 text-gray-400 text-sm">
        <Users size={14} /> {attendees}
      </div>
    </div>
  );
};

export default EventCard;
