import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import EventListing from "./pages/EventListing";
import EventDetailPage from "./pages/EventDetailPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/pages/event-listing" element={<EventListing />} />
        <Route path="/pages/event-detail" element={<EventDetailPage />} />
      </Routes>
    </>
  );
}

export default App;