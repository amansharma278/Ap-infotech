import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ClientTestimonials from "../pages/ClientTestimonials";
import ScrollImage from "../pages/ScrollImage";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollImage/>
      <About/>
       <Services/>
       <ClientTestimonials/>
      <Footer />
    </Router>
  );
}