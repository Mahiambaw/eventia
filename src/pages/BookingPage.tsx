import { useSearchParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const eventId = Number(searchParams.get("eventId")) || 0;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-blue-100 bg-green-400">
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-center text-green-600 font-bold text-2xl mb-4">
          ✅ Booking Page Loaded
        </h1>
        Booking
        <BookingForm eventId={eventId} />
      </main>
      <Footer />
    </div>
  );
}
