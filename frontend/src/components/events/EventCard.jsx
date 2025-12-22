import { Clock, MapPin, Users, Pencil, X } from "lucide-react";
import { useEventStore } from "../../store/useEventStore";

const EventCard = ({ event, onEdit }) => {
  const { deleteEvent } = useEventStore();

  const date = new Date(event.date);

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5">
      <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex flex-col items-center justify-center">
        <span className="text-lg font-bold">{date.getDate()}</span>
        <span className="text-xs text-gray-400">
          {date.toLocaleString("default", { month: "short" })}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold mb-1">{event.title}</h3>

        <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {event.time}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {event.location}
          </span>
        </div>

        <p className="text-sm text-gray-400">{event.description}</p>
      </div>

      <div className="flex items-center gap-3 self-start sm:self-center text-gray-400">
        <Users size={14} /> {event.attendees || 0}
        <Pencil size={16} className="cursor-pointer" onClick={onEdit} />
        <X
          size={16}
          className="cursor-pointer text-red-400"
          onClick={() => deleteEvent(event._id)}
        />
      </div>
    </div>
  );
};

export default EventCard;
