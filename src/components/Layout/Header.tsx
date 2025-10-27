import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Google Reviews URL (Replace with your actual link)
  const googleReviewsUrl = "https://www.google.com/maps/search/?api=1&query=R+R+M+External+Cleaning+Specialist+Newton-le-Willows+Merseyside+UK ";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/logo.webp" 
              alt="R.R.M External Cleaning Specialist" 
              className="h-16 w-auto md:h-20 lg:h-24 transition-transform hover:scale-105" // Increased logo size
            />
            <div className="hidden md:block">
              <div className="text-sm font-semibold text-primary">External Cleaning</div>
              <div className="text-xs text-gray-600">Specialist</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            
            {/* GOOGLE REVIEW BADGE - New Design with simulated Google Logo and 5 Stars */}
            <a 
              href={googleReviewsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-start bg-white p-2 rounded-lg border border-gray-300 transition-shadow hover:shadow-md cursor-pointer"
              aria-label="Read our 5 Star Google Reviews"
            >
                {/* Simulated Google Logo and Rating Text */}
                <div className="flex items-center space-x-1 mb-0.5">
                    {/* Simplified Google Logo Text (G O O G L E) */}
                    <span className="font-sans text-xs font-bold" style={{ 
                        color: '#4285F4' // Blue
                    }}>G</span>
                    <span className="font-sans text-xs font-bold" style={{ 
                        color: '#EA4335' // Red
                    }}>o</span>
                    <span className="font-sans text-xs font-bold" style={{ 
                        color: '#FBBC05' // Yellow
                    }}>o</span>
                    <span className="font-sans text-xs font-bold" style={{ 
                        color: '#4285F4' // Blue
                    }}>g</span>
                    <span className="font-sans text-xs font-bold" style={{ 
                        color: '#34A853' // Green
                    }}>l</span>
                    <span className="font-sans text-xs font-bold" style={{ 
                        color: '#EA4335' // Red
                    }}>e</span>

                    {/* Rating Text */}
                    <span className="text-xs font-semibold text-gray-800 ml-1">Rating</span>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center">
                    <span className="text-sm font-bold text-gray-900 mr-1">5.0</span>
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                </div>
            </a>
            {/* GOOGLE REVIEW BADGE End */}

            <a href="tel:07845463877" className="flex items-center space-x-2 text-primary font-semibold hover:text-primary-light transition-colors">
              <Phone className="h-5 w-5" />
              <span>07845 463877</span>
            </a>
            <Button asChild size="lg" className="bg-gradient-primary shadow-custom-lg">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:07845463877"
                className="flex items-center justify-center space-x-2 px-4 py-3 text-primary font-semibold"
              >
                <Phone className="h-5 w-5" />
                <span>07845 463877</span>
              </a>
              <Button asChild size="lg" className="w-full bg-gradient-primary">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
