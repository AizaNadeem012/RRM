import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, Droplets, Wind, Sun, Sparkles, Building, Leaf, Trees, Hammer, Paintbrush,
  CheckCircle, Star, Phone, MapPin, Clock, Award, Shield, Users, ThumbsUp, Zap, HelpCircle
} from "lucide-react";

const ServicesGrid = () => {
  const servicesGrid = [
    {
      title: "Driveway & Patio Cleaning",
      description: "High-pressure cleaning for stone, concrete, block paving, and tarmac. Removes oil stains, dirt, moss, algae, and grime. Enhances outdoor aesthetics and property safety.",
      features: ["High-pressure cleaning", "Stone, concrete, block paving, and tarmac", "Removes oil stains, dirt, moss, algae, and grime", "Enhances outdoor aesthetics and property safety"],
      icon: Home,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
      video: "https://www.youtube.com/embed/8RPVyb1gN3c"
    },
    {
      title: "Roof Cleaning",
      description: "Soft washing for tiles, slates, and shingles. Removes moss, algae, lichen, and environmental grime. Prevents leaks and structural damage.",
      features: ["Soft washing for tiles, slates, and shingles", "Removes moss, algae, lichen, and environmental grime", "Prevents leaks and structural damage"],
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1470&q=80",
      video: "https://www.youtube.com/embed/akFd4ZlcF4M"
    },
    {
      title: "Gutter Cleaning",
      description: "Complete debris clearance and flushing. Prevents blockages, leaks, and water damage. Suitable for homes, offices, and commercial properties.",
      features: ["Complete debris clearance and flushing", "Prevents blockages, leaks, and water damage", "Suitable for homes, offices, and commercial properties"],
      icon: Wind,
      image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=1470&q=80",
      video: "https://www.youtube.com/embed/MLyYIFVDhcU"
    },
    {
      title: "Cladding & Render Cleaning",
      description: "Restores walls, façades, and exteriors. Removes dirt, mould, and pollution stains. Improves building aesthetics and longevity.",
      features: ["Restores walls, façades, and exteriors", "Removes dirt, mould, and pollution stains", "Improves building aesthetics and longevity"],
      icon: Paintbrush,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1470&q=80",
      video: "https://www.youtube.com/embed/YGLP1Hm5MFE"
    },
    {
      title: "Conservatory & Glass Cleaning",
      description: "Streak-free cleaning for glass, frames, and roofs. Removes algae, moss, and hard water stains. Protects surfaces while enhancing brightness.",
      features: ["Streak-free cleaning for glass, frames, and roofs", "Removes algae, moss, and hard water stains", "Protects surfaces while enhancing brightness"],
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1470&q=80",
      video: "https://www.youtube.com/embed/KFw0dpj146w"
    },
    {
      title: "Commercial & Industrial Cleaning",
      description: "Shopfronts, offices, car parks, and industrial units. Reduces grime, improves hygiene, and enhances presentation. Custom packages to suit business requirements.",
      features: ["Shopfronts, offices, car parks, and industrial units", "Reduces grime, improves hygiene, and enhances presentation", "Custom packages to suit business requirements"],
      icon: Building,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Moss Removal & High-Level Cleaning",
      description: "Safe cleaning for high roofs, walls, and gutters. Prevents slips, staining, and property damage. Soft washing preserves delicate surfaces.",
      features: ["Safe cleaning for high roofs, walls, and gutters", "Prevents slips, staining, and property damage", "Soft washing preserves delicate surfaces"],
      icon: Trees,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Power Washing & Soft Washing",
      description: "High-pressure cleaning for stubborn dirt and stains. Soft washing with biodegradable detergents for sensitive areas. Restores and maintains surfaces effectively.",
      features: ["High-pressure cleaning for stubborn dirt and stains", "Soft washing with biodegradable detergents for sensitive areas", "Restores and maintains surfaces effectively"],
      icon: Zap,
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const pricing = [
    {
      title: "Driveway & Patio Cleaning",
      price: "£80–£250"
    },
    {
      title: "Roof Cleaning",
      price: "£120–£350"
    },
    {
      title: "Gutter Cleaning",
      price: "£60–£150"
    },
    {
      title: "Cladding & Render Cleaning",
      price: "£150–£400"
    },
    {
      title: "Commercial Properties",
      price: "Custom quotes"
    }
  ];

  const faqs = [
    {
      question: "How often should exterior cleaning be done?",
      answer: "Homes usually benefit from cleaning once or twice a year; commercial properties may require more frequent cleaning."
    },
    {
      question: "Are your chemicals safe for the environment?",
      answer: "Yes! We use biodegradable, eco-friendly detergents safe for pets and plants."
    },
    {
      question: "Which areas do you cover?",
      answer: "We serve Newton-le-Willows, Liverpool, Manchester, Warrington, Widnes, Huyton, Golborne, Skelmersdale, Wigan, Ormskirk, Lymm, Leigh, Stockport, and surrounding North West towns."
    },
    {
      question: "Can delicate surfaces be cleaned safely?",
      answer: "Absolutely. We use soft washing techniques for roofs, conservatories, and sensitive cladding."
    },
    {
      question: "How can I get a quote?",
      answer: "Call +44 7845 463877, visit our website, or check our Google Business Profile."
    }
  ];

  const serviceAreas = [
    "Newton-le-Willows", "Liverpool", "Manchester", "Warrington", "Widnes", "Huyton",
    "Golborne", "Skelmersdale", "Wigan", "Ormskirk", "Lymm", "Leigh", "Stockport"
  ];

  return (
    <div className="bg-background">
      {/* Services Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Our Full Range of Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We provide all exterior cleaning and pressure washing services, using eco-friendly, safe methods. 
            Every service is tailored for residential and commercial properties in the North West UK.
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
        </div>
      </section>

      {/* Services Grid with Videos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-64 object-cover"
                    />
                    {service.video && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button 
                          variant="outline" 
                          className="bg-white/90 text-primary hover:bg-white"
                          onClick={() => {
                            const modal = document.getElementById(`video-modal-${index}`);
                            if (modal) modal.classList.remove('hidden');
                          }}
                        >
                          Watch Video
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className="w-full">
                      <Link to="/contact">Request Quote</Link>
                    </Button>
                  </CardContent>
                  
                  {/* Video Modal */}
                  {service.video && (
                    <div 
                      id={`video-modal-${index}`}
                      className="fixed inset-0 bg-black/80 z-50 hidden items-center justify-center p-4"
                      onClick={() => {
                        const modal = document.getElementById(`video-modal-${index}`);
                        if (modal) modal.classList.add('hidden');
                      }}
                    >
                      <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full">
                        <div className="aspect-w-16 aspect-h-9">
                          <iframe 
                            src={service.video} 
                            title={service.title}
                            className="w-full h-[500px]"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="p-4 flex justify-end">
                          <Button 
                            variant="outline"
                            onClick={() => {
                              const modal = document.getElementById(`video-modal-${index}`);
                              if (modal) modal.classList.add('hidden');
                            }}
                          >
                            Close
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Pricing Guide
          </h2>
          <p className="text-lg text-white/90 mb-12 text-center max-w-3xl mx-auto">
            Our pricing depends on property size, surface type, and service complexity. We provide transparent and fair pricing for every project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((service, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold text-accent mb-4">{service.price}</div>
                  <Button asChild className="w-full bg-accent text-primary hover:bg-accent/90">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Areas We Cover – Local Focus
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, i) => (
              <div key={i} className="flex items-center gap-2 justify-center bg-white/10 rounded-lg py-2">
                <MapPin className="h-4 w-4 text-accent"/> {area}
              </div>
            ))}
          </div>
          <p className="text-white/80 text-center mt-6">And surrounding towns and suburbs across North West UK</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Call +44 7845 463877 or get a free quote online today.
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

export default ServicesGrid;
