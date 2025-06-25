import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import EventList from "../components/EventList";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <HowItWorks />
      <EventList />
      <CTA />
      <Footer />
    </div>
  );
}
