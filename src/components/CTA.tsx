export default function CTA() {
  return (
    <section id="contact" className="py-16 bg-blue-50 mb-12">
      {" "}
      {/* Added margin-bottom */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Stay Updated</h2>{" "}
        {/* Darker text */}
        <p className="mb-8 max-w-2xl mx-auto text-gray-600">
          {" "}
          {/* Darker text */}
          Subscribe to get notified about our latest events and offers
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg whitespace-nowrap transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
