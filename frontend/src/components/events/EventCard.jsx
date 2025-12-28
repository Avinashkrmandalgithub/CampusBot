import { Clock, MapPin, Users, Pencil, X } from "lucide-react";
import { useEventStore } from "../../store/useEventStore";

const EventCard = ({ event, onEdit }) => {
  const { deleteEvent } = useEventStore();
  const date = new Date(event.date);

  return (
    <div
      className="
        relative
        bg-white/5 border border-white/10
        rounded-2xl
        p-4 sm:p-5
        flex flex-col sm:flex-row
        gap-4 sm:gap-6
        transition-all
        hover:bg-white/10 hover:border-cyan-400/30
      "
    >
      {/* DATE */}
      <div
        className="
          w-16 h-16 shrink-0
          rounded-2xl
          bg-linear-to-br from-purple-600/30 to-cyan-600/30
          flex flex-col items-center justify-center
          text-center
        "
      >
        <span className="text-xl font-extrabold leading-none">
          {date.getDate()}
        </span>
        <span className="text-[11px] uppercase tracking-wide text-gray-300">
          {date.toLocaleString("default", { month: "short" })}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 min-w-0 sm:pr-24">
        <h3
          className="font-semibold text-base mb-1 truncate"
          title={event.title}
        >
          {event.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {event.time}
          </span>

          <span className="flex items-center gap-1 truncate">
            <MapPin size={12} />
            <span className="truncate max-w-45">{event.location}</span>
          </span>
        </div>

        <p className="text-sm text-gray-400 line-clamp-3">
          {event.description}
        </p>
      </div>

      {/* DESKTOP ACTIONS (BOTTOM RIGHT) */}
      <div
        className="
          hidden sm:flex
          absolute bottom-5 right-5
          items-center gap-3
        "
      >
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <Users size={14} />
          {event.attendees || 0}
        </div>

        <button
          onClick={onEdit}
          className="
            p-2 rounded-lg
            hover:bg-white/10 hover:text-white
            transition
          "
          title="Edit event"
        >
          <Pencil size={16} />
        </button>

        <button
          onClick={() => deleteEvent(event._id)}
          className="
            p-2 rounded-lg
            text-red-400
            hover:bg-red-500/10 hover:text-red-300
            transition
          "
          title="Delete event"
        >
          <X size={16} />
        </button>
      </div>

      {/* MOBILE ACTION BAR */}
      <div
        className="
          sm:hidden
          mt-4 pt-3
          border-t border-white/10
          flex items-center justify-between
        "
      >
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <Users size={14} />
          {event.attendees || 0}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onEdit}
            className="
              px-3 py-1.5 rounded-lg
              bg-white/5 hover:bg-white/10
              transition
            "
          >
            <Pencil size={16} />
          </button>

          <button
            onClick={() => deleteEvent(event._id)}
            className="
              px-3 py-1.5 rounded-lg
              bg-red-500/10 text-red-400
              hover:bg-red-500/20
              transition
            "
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
