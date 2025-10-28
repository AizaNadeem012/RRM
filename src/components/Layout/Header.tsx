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

  const isActive = (path) => location.pathname === path;

  const googleReviewsUrl =
    "https://www.google.com/maps/search/?api=1&query=R+R+M+External+Cleaning+Specialist+Newton-le-Willows+Merseyside+UK";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.webp"
              alt="R.R.M External Cleaning Specialist"
              className="h-14 w-auto md:h-16 lg:h-20 transition-transform hover:scale-105"
            />
            <div className="hidden md:block">
              <div className="text-sm font-semibold text-primary">External Cleaning</div>
              <div className="text-xs text-gray-600">Specialist</div>
            </div>
          </Link>

          {/* NAVIGATION - Desktop */}
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

          {/* RIGHT SECTION */}
          <div className="flex items-center space-x-3">
            {/* GOOGLE REVIEW BADGE - mobile only */}
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white p-1.5 rounded-md border border-gray-300 hover:shadow-md transition-all lg:hidden"
              style={{ minWidth: "60px" }}
              aria-label="Read our 5 Star Google Reviews"
            >
              <div className="flex items-center space-x-0.5">
                <span className="font-sans text-[10px] font-bold" style={{ color: "#4285F4" }}>
                  G
                </span>
                <span className="font-sans text-[10px] font-bold" style={{ color: "#EA4335" }}>
                  o
                </span>
                <span className="font-sans text-[10px] font-bold" style={{ color: "#FBBC05" }}>
                  o
                </span>
                <span className="font-sans text-[10px] font-bold" style={{ color: "#4285F4" }}>
                  g
                </span>
                <span className="font-sans text-[10px] font-bold" style={{ color: "#34A853" }}>
                  l
                </span>
                <span className="font-sans text-[10px] font-bold" style={{ color: "#EA4335" }}>
                  e
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-[10px] font-bold text-gray-900 mr-0.5">5.0</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </a>

            {/* DESKTOP RIGHT SECTION */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* GOOGLE REVIEW BADGE (desktop) */}
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start bg-white p-2 rounded-lg border border-gray-300 transition-shadow hover:shadow-md cursor-pointer"
                aria-label="Read our 5 Star Google Reviews"
              >
                <div className="flex items-center space-x-1 mb-0.5">
                  <span className="font-sans text-xs font-bold" style={{ color: "#4285F4" }}>
                    G
                  </span>
                  <span className="font-sans text-xs font-bold" style={{ color: "#EA4335" }}>
                    o
                  </span>
                  <span className="font-sans text-xs font-bold" style={{ color: "#FBBC05" }}>
                    o
                  </span>
                  <span className="font-sans text-xs font-bold" style={{ color: "#4285F4" }}>
                    g
                  </span>
                  <span className="font-sans text-xs font-bold" style={{ color: "#34A853" }}>
                    l
                  </span>
                  <span className="font-sans text-xs font-bold" style={{ color: "#EA4335" }}>
                    e
                  </span>
                  <span className="text-xs font-semibold text-gray-800 ml-1">Rating</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-bold text-gray-900 mr-1">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </a>

              <a
                href="tel:07845463877"
                className="flex items-center space-x-2 text-primary font-semibold hover:text-primary-light transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>07845 463877</span>
              </a>
              <Button asChild size="lg" className="bg-gradient-primary shadow-custom-lg">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>

            {/* MENU BUTTON (MOBILE) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3">
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
