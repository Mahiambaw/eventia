import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("eventId");

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <BookingForm eventId={Number(eventId)} />
      </main>
      <Footer />
    </div>
  );
}
