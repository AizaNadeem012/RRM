import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Star, Award, Shield, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://rrmexternalcleaningspecialist.co.uk/#website",
        "url": "https://rrmexternalcleaningspecialist.co.uk/",
        "name": "R.R.M External Cleaning Specialist",
        "description":
          "Expert pressure washing & exterior cleaning in Newton-le-Willows and across the North West UK including Liverpool, Manchester, Warrington & surrounding areas.",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://rrmexternalcleaningspecialist.co.uk/#localbusiness",
        "name": "R.R.M External Cleaning Specialist",
        "telephone": "+44 7845 463877",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Newton-le-Willows",
          "addressRegion": "North West",
          "addressCountry": "GB",
        },
      },
    ],
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-white overflow-hidden">
      
      {/* SEO Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        
        {/* H1 – Exact SEO Keyword */}
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Expert Pressure Washing & Exterior Cleaning  
          <span className="block text-accent mt-2">
            in Newton-le-Willows & Across the North West UK
          </span>
        </h1>

        {/* H2 */}
        <h2 className="text-1xl md:text-2xl lg:text-2xl font-bold mb-8 text-white/95">
          Trusted Local Specialists with 9+ Years of Experience
        </h2>

        {/* SEO Paragraph */}
        <p className="text-lg md:text-xl max-w-5xl mx-auto mb-12 text-white/95 leading-relaxed">
          Welcome to <strong>R.R.M External Cleaning Specialist</strong>, your reliable local experts
          in pressure washing and exterior cleaning. Based in <strong>Newton-le-Willows</strong>,
          we proudly serve the entire <strong>North West UK</strong>, including Liverpool,
          Manchester, Warrington, Widnes, Wigan, Leigh, Stockport, and surrounding towns.
          <br /><br />
          From driveway & patio cleaning to roof cleaning, gutter clearance, cladding, render,
          and commercial exterior cleaning — we restore properties safely, professionally,
          and eco-consciously.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            asChild
            size="lg"
            className="bg-accent text-primary font-bold text-lg px-10 py-7 shadow-xl hover:scale-105 transition"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white font-bold text-lg px-10 py-7 hover:scale-105 transition"
          >
            <a href="tel:07845463877" className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              07845 463877
            </a>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Star, text: "5-Star Rated Service" },
            { icon: Award, text: "9+ Years Experience" },
            { icon: Shield, text: "Fully Insured & Trained" },
            { icon: MapPin, text: "Serving North West UK" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition"
            >
              <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <p className="font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
