import { FaSearch, FaTicketAlt, FaCalendarAlt } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-blue-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaSearch size={48} className="text-blue-600 mx-auto" />,
              title: "Find Events",
              text: "Browse our curated selection",
            },
            {
              icon: <FaTicketAlt size={48} className="text-blue-600 mx-auto" />,
              title: "Book Tickets",
              text: "Secure your spot in minutes",
            },
            {
              icon: (
                <FaCalendarAlt size={48} className="text-blue-600 mx-auto" />
              ),
              title: "Enjoy",
              text: "Experience unforgettable moments",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              {item.icon}
              <h3 className="text-xl font-semibold my-4">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
