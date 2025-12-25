import { Clock, MapPin, Users, Pencil, X } from "lucide-react";
import { useEventStore } from "../../store/useEventStore";

const EventCard = ({ event, onEdit }) => {
  const { deleteEvent } = useEventStore();
  const date = new Date(event.date);

  return (
    <div
      className="
        bg-white/5 border border-white/10
        rounded-xl p-4 sm:p-5
        flex flex-col sm:flex-row gap-4 sm:gap-5
        transition hover:bg-white/10
      "
    >
      {/* Date */}
      <div
        className="
          w-14 h-14 shrink-0
          rounded-xl bg-purple-600/20
          flex flex-col items-center justify-center
        "
      >
        <span className="text-lg font-bold">{date.getDate()}</span>
        <span className="text-xs text-gray-400">
          {date.toLocaleString("default", { month: "short" })}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold mb-1 truncate">{event.title}</h3>

        <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {event.time}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {event.location}
          </span>
        </div>

        <p className="text-sm text-gray-400 line-clamp-3">
          {event.description}
        </p>
      </div>

      {/* Actions */}
      <div
        className="
          flex sm:flex-col items-center gap-3
          justify-end sm:justify-center
          text-gray-400
        "
      >
        <div className="flex items-center gap-1 text-xs">
          <Users size={14} />
          {event.attendees || 0}
        </div>

        <Pencil
          size={16}
          className="cursor-pointer hover:text-white transition"
          onClick={onEdit}
        />

        <X
          size={16}
          className="cursor-pointer text-red-400 hover:text-red-300 transition"
          onClick={() => deleteEvent(event._id)}
        />
      </div>
    </div>
  );
};

export default EventCard;
