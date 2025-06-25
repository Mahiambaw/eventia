import { Link } from "react-router-dom";
import { Event } from "../types/eventTypes";

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
      {/* Image with gradient overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
          {event.category}
        </span>
      </div>

      {/* Card content */}
      <div className="p-5 text-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{event.title}</h3>
          <span className="font-bold text-blue-400">${event.price}</span>
        </div>

        <div className="flex items-center text-gray-400 text-sm mb-3">
          <span className="mr-4">
            📅 {new Date(event.date).toLocaleDateString()}
          </span>
          <span>📍 {event.location}</span>
        </div>

        <p className="text-gray-300 mb-5 line-clamp-2">{event.description}</p>

        <Link
          to={`/event/${event.id}`}
          className="inline-block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
