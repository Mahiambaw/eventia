import { useState } from "react";
import EventCard from "./EventCard";
import { mockEvents } from "../data/mockEvents";
import { Event } from "../types/eventTypes";

export default function EventList() {
  const [activeFilter, setActiveFilter] = useState<"All" | Event["category"]>(
    "All"
  );

  const filteredEvents =
    activeFilter === "All"
      ? mockEvents
      : mockEvents.filter((event) => event.category === activeFilter);

  return (
    <section className="py-12 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>

      {/* Filter buttons */}
      <div className="flex gap-4 mb-8 justify-center">
        {["All", "Tech", "Music", "Art"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter as "All" | Event["category"])}
            className={`px-4 py-2 rounded-full ${
              activeFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Empty state */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No events found in this category
        </div>
      )}
    </section>
  );
}
