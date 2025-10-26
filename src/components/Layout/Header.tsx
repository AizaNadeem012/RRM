import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
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