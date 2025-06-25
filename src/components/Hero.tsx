export default function Hero() {
  return (
    <section
      className="relative h-96 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Amazing Events
          </h1>
          <p className="text-xl mb-8">
            Book tickets for the best experiences in town
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105">
            Browse Events
          </button>

          {/* Photo credit (small and discreet) */}
          <div className="absolute bottom-4 right-4 text-xs text-white/70">
            Photo by{" "}
            <a
              href="https://unsplash.com/@jontyson"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/90 underline"
            >
              Jon Tyson
            </a>{" "}
            on Unsplash
          </div>
        </div>
      </div>
    </section>
  );
}
