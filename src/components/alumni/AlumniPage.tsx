import { Routes, Route } from "react-router-dom";
import AlumniHome from "./AlumniHome";
import AlumniRegistration from "./AlumniRegistration";
import { AlumniNearYou } from "./AlumniNearYou";
import MeetingBooking from "./MeetingBooking";
import SchoolTour from "./SchoolTour";
import AlumniMerchandise from "./AlumniMerchandise";
import AlumniGiveBack from "./AlumniGiveBack";
import AlumniID from "./AlumniID";
import AlumniMembership from "./AlumniMembership";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

export default function AlumniPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<AlumniHome />} />
          <Route path="/register" element={<AlumniRegistration />} />
          <Route path="/near-you" element={<AlumniNearYou />} />
          <Route path="/book-meeting" element={<MeetingBooking />} />
          <Route path="/school-tour" element={<SchoolTour />} />
          <Route path="/merchandise" element={<AlumniMerchandise />} />
          <Route path="/give-back" element={<AlumniGiveBack />} />
          <Route path="/digital-id" element={<AlumniID />} />
          <Route path="/membership" element={<AlumniMembership />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
} 