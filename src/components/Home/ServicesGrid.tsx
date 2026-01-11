import { Link } from "react-router-dom";
import { 
  Home, Droplets, Wind, Sun, Sparkles, Building, Leaf, Trees, Hammer, Paintbrush,
  CheckCircle, Star, Phone, MapPin, Clock, Award, Shield, Users, ThumbsUp, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const services = [
  {
    title: "Driveway & Patio Cleaning",
    description: "High-pressure cleaning to remove moss, algae, stains and restore your surfaces.",
    features: ["Moss & Algae Removal", "Stain Treatment", "Sealing Options", "All Surface Types"],
    icon: Home,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Roof Cleaning",
    description: "Soft wash to remove moss, lichen and debris safely without damage.",
    features: ["Soft Wash Technique", "Moss Treatment", "Gutter Clearance", "No Damage Guarantee"],
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Gutter Cleaning",
    description: "Prevent water damage with complete gutter clearance and maintenance.",
    features: ["Debris Clearance", "Downpipe Unblocking", "Minor Repairs", "Before/After Photos"],
    icon: Wind,
    image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Cladding & Render Cleaning",
    description: "Expert cleaning to restore walls, façades, and exteriors.",
    features: ["Delicate Surfaces", "No Damage Guarantee", "Color Restoration", "Long-Lasting Results"],
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Conservatory & Glass Cleaning",
    description: "Streak-free cleaning for glass, frames, and roofs safely.",
    features: ["Frame Restoration", "Roof Cleaning", "Algae Removal", "Interior Options"],
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Commercial & Industrial Cleaning",
    description: "Shopfronts, offices, car parks and industrial units cleaned professionally.",
    features: ["Business Hours", "Minimal Disruption", "Regular Contracts", "Insurance Approved"],
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Solar Panel Cleaning",
    description: "Maximize solar efficiency with professional cleaning.",
    features: ["Efficiency Boost", "Pure Water System", "Safety Certified", "Annual Maintenance"],
    icon: Sun,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1470&q=80"
  },
];

const whyChooseUs = [
  { icon: Award, title: "Expert Technicians", description: "Fully trained and certified professionals with 9+ years experience." },
  { icon: Shield, title: "Fully Insured", description: "Comprehensive insurance coverage for peace of mind." },
  { icon: Leaf, title: "Eco-Friendly", description: "We use biodegradable products safe for pets and plants." },
  { icon: Users, title: "Customer Satisfaction", description: "Our commitment ensures you'll love the results." },
];

const processSteps = [
  { icon: Phone, title: "Contact Us", description: "Reach us via phone, email, or contact form to discuss your needs." },
  { icon: MapPin, title: "Free Survey", description: "We visit your property and provide a detailed no-obligation quote." },
  { icon: Clock, title: "Schedule Service", description: "Book a convenient time for professional cleaning." },
  { icon: ThumbsUp, title: "Enjoy Results", description: "Sit back while we transform your property's exterior." },
];

const serviceAreas = [
  "Newton-le-Willows", "Liverpool", "Manchester", "Warrington", "Widnes", "Huyton",
  "Golborne", "Skelmersdale", "Wigan", "Ormskirk", "Lymm", "Leigh", "Stockport"
];

const ServicesGrid = () => {
  return (
    <div className="bg-background">

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-secondary text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Expert Pressure Washing & Exterior Cleaning
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
          Serving Newton-le-Willows & Across the North West UK including Liverpool, Manchester, Warrington, Widnes, Huyton, Golborne, Skelmersdale, Wigan, Ormskirk, Lymm, Leigh, Stockport.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent text-primary px-8 py-6 font-bold shadow-lg">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-white text-white px-8 py-6 font-bold shadow-lg">
            <a href="tel:07845463877" className="flex items-center gap-2">
              <Phone className="h-5 w-5" /> 07845 463877
            </a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Full Range of Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            We provide eco-friendly exterior cleaning services for homes and businesses across the North West UK.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Card key={i} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-2">
                        <Icon className="h-6 w-6 text-primary"/>
                      </div>
                      <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{s.description}</p>
                    <div className="space-y-2">
                      {s.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0"/> {f}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">Request Quote</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose R.R.M External Cleaning Specialist?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {whyChooseUs.map((w, i) => {
            const Icon = w.icon;
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary"/>
                </div>
                <h3 className="text-xl font-bold mb-2">{w.title}</h3>
                <p className="text-muted-foreground">{w.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {processSteps.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="p-6 border rounded-xl shadow hover:shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary"/>
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground">{p.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Cover</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {serviceAreas.map((area, i) => (
            <div key={i} className="flex items-center gap-2 justify-center bg-white/10 rounded-lg py-2">
              <MapPin className="h-4 w-4 text-primary"/> {area}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild className="bg-accent">
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Call +44 7845 463877 or get a free quote online today.</p>
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

export default ServicesGrid;
