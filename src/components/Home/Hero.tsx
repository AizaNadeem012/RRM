import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Star, Award, Shield, MapPin, CheckCircle, Search, Droplets, CheckSquare, Lightbulb, Leaf } from "lucide-react";
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
          "streetAddress": "9 Noon Ct, Newton-le-Willows WA12 8QY, United Kingdom"
        },
      },
    ],
  };

  const benefits = [
    "Remove moss, algae, and lichen from roofs and walls",
    "Keep driveways, patios, and walkways safe and slip-free",
    "Protect cladding, render, and conservatories from long-term wear",
    "Enhance curb appeal, commercial image, and property value",
    "Maintain a healthy, clean environment for families and customers"
  ];

  const steps = [
    {
      icon: Search,
      title: "Free Property Survey",
      description: "Assess surfaces, grime, and safety needs"
    },
    {
      icon: Shield,
      title: "Preparation & Protection",
      description: "Shield plants, vehicles, and delicate areas"
    },
    {
      icon: Droplets,
      title: "Service Selection",
      description: "Soft washing, pressure washing, or chemical cleaning"
    },
    {
      icon: CheckSquare,
      title: "Professional Cleaning",
      description: "Remove dirt, algae, moss, and stains"
    },
    {
      icon: CheckSquare,
      title: "Inspection & Finishing",
      description: "Ensure spotless, safe, and restored surfaces"
    },
    {
      icon: Lightbulb,
      title: "Maintenance Advice",
      description: "Tips to prolong results and protect surfaces"
    }
  ];

  const reasons = [
    {
      icon: Award,
      title: "9+ years of trusted local experience",
      description: "Serving Newton-le-Willows and the North West UK"
    },
    {
      icon: Shield,
      title: "Fully trained, insured, and professional team",
      description: "Peace of mind with every service"
    },
    {
      icon: Award,
      title: "Expertise in all exterior cleaning services",
      description: "Pressure washing to roof cleaning, gutter cleaning & more"
    },
    {
      icon: Leaf,
      title: "Eco-friendly cleaning",
      description: "Biodegradable detergents and water management"
    },
    {
      icon: MapPin,
      title: "Serving residential & commercial properties",
      description: "Across Newton-le-Willows and the North West UK"
    },
    {
      icon: Phone,
      title: "Reliable, punctual, customer-focused service",
      description: "Your satisfaction is our top priority"
    }
  ];

  const practices = [
    {
      icon: Leaf,
      title: "Biodegradable, non-toxic detergents",
      description: "Safe for pets and plants"
    },
    {
      icon: Droplets,
      title: "Controlled water use",
      description: "Prevent environmental impact"
    },
    {
      icon: Shield,
      title: "Safe high-level cleaning",
      description: "With PPE, ladders, and harnesses"
    },
    {
      icon: CheckCircle,
      title: "UK Health & Safety compliant",
      description: "Ensuring safety for all"
    }
  ];

  const serviceAreas = [
    "Newton-le-Willows", "Liverpool", "Manchester", "Warrington", "Widnes", "Huyton",
    "Golborne", "Skelmersdale", "Wigan", "Ormskirk", "Lymm", "Leigh", "Stockport"
  ];

  return (
    <div className="bg-background">
      {/* SEO Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-white overflow-hidden">
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
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Expert Pressure Washing & Exterior Cleaning  
            <span className="block text-accent mt-2">
              in Newton-le-Willows & Across the North West UK
            </span>
          </h1>

          <h2 className="text-1xl md:text-2xl lg:text-2xl font-bold mb-8 text-white/95">
            Welcome to R.R.M External Cleaning Specialist, your trusted local experts
          </h2>

          <p className="text-lg md:text-xl max-w-5xl mx-auto mb-12 text-white/95 leading-relaxed">
            Based in Newton-le-Willows, we proudly serve the entire North West UK, including Liverpool, 
            Manchester, Warrington, Widnes, Huyton, Golborne, Skelmersdale, Wigan, Ormskirk, Lymm, Leigh, Stockport, and surrounding towns.
            <br /><br />
            With over 9 years of professional experience, we specialize in restoring homes and businesses to their best condition, 
            keeping properties clean, safe, and visually appealing.
          </p>

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

      {/* Why Pressure Washing Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Why Pressure Washing & Exterior Cleaning Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Properties in the North West UK face unique challenges: wet weather, moss, algae, and grime can damage surfaces and reduce their lifespan. Regular exterior cleaning helps:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-base">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mt-8 text-center">
              Whether you own a home, office, or commercial property, our local knowledge ensures safe, effective, and long-lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Why Choose R.R.M External Cleaning Specialist?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-white/80">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Proven Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Friendly & Safety Practices */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Eco-Friendly & Safety Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {practices.map((practice, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <practice.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{practice.title}</h3>
                  <p className="text-white/80">{practice.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Areas We Cover
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, i) => (
              <div key={i} className="flex items-center gap-2 justify-center bg-secondary/10 rounded-lg py-2">
                <MapPin className="h-4 w-4 text-primary"/> {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform your property today!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let R.R.M External Cleaning Specialist provide professional, reliable, and eco-friendly pressure washing and exterior cleaning for your home or business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent px-8 py-6 font-bold shadow-lg">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-white px-8 py-6 font-bold shadow-lg">
            <a href="tel:07845463877" className="flex items-center gap-2">
              <Phone className="h-5 w-5" /> 07845 463877
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
