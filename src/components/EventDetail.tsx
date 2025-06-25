import { Event } from "../types/eventTypes";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaShareAlt,
  FaHeart,
} from "react-icons/fa";

export default function EventDetail({ event }: { event: Event }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back to Events
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Image with action buttons overlay */}
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="p-3 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <FaHeart className="text-gray-600 hover:text-red-500" />
            </button>
            <button className="p-3 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <FaShareAlt className="text-gray-600 hover:text-blue-500" />
            </button>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                {event.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {event.title}
              </h1>
            </div>
          </div>

          {/* Event metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
              <FaCalendarAlt className="text-blue-500 mr-3 text-lg" />
              <div>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-medium">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="text-sm">
                  {new Date(event.date).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
              <FaMapMarkerAlt className="text-blue-500 mr-3 text-lg" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{event.location}</p>
              </div>
            </div>

            <div className="flex items-center bg-gray-50 p-4 rounded-lg">
              <FaTicketAlt className="text-blue-500 mr-3 text-lg" />
              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="font-medium">
                  {event.seats > 10
                    ? `${event.seats} seats available`
                    : event.seats > 0
                    ? `Only ${event.seats} left!`
                    : "Sold out"}
                </p>
              </div>
            </div>
          </div>

          {/* Event description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              About This Event
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              {event.description.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Price and booking */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-gray-200 pt-8">
            <div className="text-3xl font-bold text-gray-900">
              ${event.price}
              <span className="text-base font-normal text-gray-500 ml-2">
                per ticket
              </span>
            </div>
            <Link
              to={`/booking?eventId=${event.id}`}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-center transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
