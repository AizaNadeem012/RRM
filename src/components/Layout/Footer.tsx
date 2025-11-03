import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock, ArrowRight } from "lucide-react";
import RRMLogo from "@/components/ui/logo";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const Footer = () => {
  const services = [
    "Commercial Cleaning",
    "Window Cleaning",
    "Pressure Washing Services",
    "Roof Cleaning Services",
    "Gutter Cleaning & Repair",
    "Render Cleaning",
    "Conservatory Cleaning",
    "Soffits & Facias Cleaning",
    "Graffiti Removal",
    "Driveway & Patio Restoration",
    "Cladding Cleaning",
    "uPVC Cleaning"
  ];

  const areas = [
    "Newton-le-Willows",
    "Warrington",
    "Liverpool",
    "Manchester",
    "Wigan",
    "St Helens",
    "Widnes",
    "Leigh",
    "Lymm",
    "Prescot",
    "Ormskirk",
    "Rainhill"
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

          {/* Column 1: Company Info & Socials */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              {/* Using a white color for the logo for contrast on dark background */}
              <RRMLogo size="md" color="white" /> 
            </div>
            <p className="text-sm opacity-80 mb-6 max-w-xs">
              Superior external cleaning solutions for homes and businesses across North West UK, dedicated to quality and excellence.
            </p>
            <Button asChild className="w-full mb-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <Link to="/contact">
                Book a Service
              </Link>
            </Button>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full border border-gray-700 hover:border-white" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full border border-gray-700 hover:border-white" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full border border-gray-700 hover:border-white" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white border-b-2 border-primary w-max pb-1 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2 opacity-60"/>Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2 opacity-60"/>About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2 opacity-60"/>Gallery</Link></li>
              <li><Link to="/service-areas" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2 opacity-60"/>Service Areas</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2 opacity-60"/>Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services & Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white border-b-2 border-primary w-max pb-1 mb-6">Popular Services</h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service}>
                  <Link to="/services" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-60"/>{service}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/services" className="text-primary hover:text-primary-light font-semibold transition-colors flex items-center">
                  All Services →
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white border-b-2 border-primary w-max pb-1 mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <span className="hover:text-white transition-colors">9 Noon Court, Newton-le-Willows, Reino Unido</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="tel:07845463877" className="hover:text-white transition-colors">
                  07845 463877
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:info@rrmcleaning.co.uk" className="hover:text-white transition-colors">
                  rrmexternalcleaning@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center space-x-3 mb-2 text-primary font-semibold">
                  <Clock className="h-4 w-4" />
                  <p className="text-sm">Business Hours</p>
                </div>
                <div className="space-y-1 opacity-80">
                  <p>Mon-Fri: 06:00 – 23:00</p>
                  <p>Sat-Sun: 06:00 – 22:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom (Copyright & Policy Links) */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs opacity-70">
              © {new Date().getFullYear()} R.R.M External Cleaning Specialist. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs">
              <Link to="#" className="hover:text-white transition-colors opacity-70 hover:opacity-100">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors opacity-70 hover:opacity-100">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
