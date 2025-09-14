import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ClientTestimonials from "../pages/ClientTestimonials";
import ScrollImage from "../pages/ScrollImage";
import ContactUsPage from "../pages/ContactUsPage";
import Serve from "../pages/Serve";
import VideoGrid from "../pages/VideoGrid";
import ImageGrid from "../pages/ImageGrid";
import Hardware from "../pages/Hardware";
import Software from "../pages/Software";
import Web from "../pages/Web";
import ScrollToTop from "../pages/ScrollToTop";
import ServiceDetailPage from "../pages/ServiceDetailPage";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services/hardware" element={<Hardware />} />
        <Route path="/software" element={<Software />} />
        <Route path="/services/web" element={<Web />} /> */}
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        {/* <Route path="/services/advanced" element={<Hardware />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <About/>
       <Services/>
       <Serve/>
       {/* <VideoGrid/> */}
       <ImageGrid/>
       {/* <ClientTestimonials/> */}
       <ContactUsPage/>
      <Footer />
    </Router>
  );
}