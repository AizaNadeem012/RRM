import { Link } from "react-router-dom";
import { Home, Droplets, Wind, Sun, Sparkles, Building, Leaf, Trees, Hammer, Paintbrush, CheckCircle, Star, Phone, MapPin, Clock, Award, Shield, Users, TrendingUp, Zap, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Driveway & Patio Cleaning",
    description: "Remove moss, algae, and stains to restore your driveway's original beauty.",
    icon: Home,
    features: ["Moss & Algae Removal", "Stain Treatment", "Sealing Options", "All Surface Types"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Roof Cleaning",
    description: "Professional roof cleaning to remove moss, lichen, and debris safely.",
    icon: Droplets,
    features: ["Soft Wash Technique", "Moss Treatment", "Gutter Clearance", "No Damage Guarantee"],
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Gutter Cleaning",
    description: "Keep your gutters clear and prevent water damage to your property.",
    icon: Wind,
    features: ["Complete Clearance", "Downpipe Unblocking", "Minor Repairs", "Before/After Photos"],
    image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "UPVC Cleaning",
    description: "Restore the shine to your windows, doors, and conservatories.",
    icon: Sparkles,
    features: ["Frame Restoration", "Window Cleaning", "Conservatory Roofs", "Stain Removal"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Solar Panel Cleaning",
    description: "Maximize efficiency with professional solar panel cleaning services.",
    icon: Sun,
    features: ["Efficiency Boost", "Pure Water System", "Safety Certified", "Annual Maintenance"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Pressure Washing",
    description: "High-pressure cleaning for all exterior surfaces and hard standings.",
    icon: Building,
    features: ["Commercial Grade", "Various Pressure Settings", "Surface Safe", "Quick Drying"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Conservatory Cleaning",
    description: "Complete conservatory cleaning including roof, windows, and frames.",
    icon: Leaf,
    features: ["Roof Cleaning", "Polycarbonate Care", "Frame Restoration", "Interior Options"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Decking Cleaning",
    description: "Restore and protect your decking with our specialized cleaning.",
    icon: Trees,
    features: ["Wood Treatment", "Moss Removal", "Sealing Available", "Non-Slip Finish"],
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Commercial Cleaning",
    description: "Professional exterior cleaning for commercial properties and businesses.",
    icon: Hammer,
    features: ["Business Hours", "Minimal Disruption", "Regular Contracts", "Insurance Approved"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Render & Cladding",
    description: "Expert cleaning for rendered walls and building cladding systems.",
    icon: Paintbrush,
    features: ["Delicate Surfaces", "No Damage Guarantee", "Color Restoration", "Long-Lasting Results"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Expert Technicians",
    description: "Fully trained and certified professionals with years of experience in exterior cleaning."
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive insurance coverage for complete peace of mind during all our services."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "We use biodegradable cleaning products that are safe for your family and the environment."
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Our commitment to excellence ensures you'll be delighted with the results every time."
  }
];

const processSteps = [
  {
    icon: Phone,
    title: "1. Contact Us",
    description: "Get in touch via phone, email, or our contact form to discuss your requirements."
  },
  {
    icon: MapPin,
    title: "2. Free Survey",
    description: "We'll visit your property to assess the work and provide a detailed, no-obligation quote."
  },
  {
    icon: Clock,
    title: "3. Schedule Service",
    description: "Book a convenient time for our team to carry out the work at your property."
  },
  {
    icon: ThumbsUp,
    title: "4. Enjoy Results",
    description: "Sit back and relax while we transform your property's exterior to pristine condition."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Warrington",
    text: "Absolutely fantastic service! My driveway looks brand new after R.R.M's cleaning. Professional, punctual, and great value for money.",
    rating: 5
  },
  {
    name: "Michael Davies",
    location: "St Helens",
    text: "I hired R.R.M to clean my roof and gutters, and the results exceeded my expectations. The team was knowledgeable and took great care of my property.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    location: "Wigan",
    text: "Our conservatory hasn't looked this good in years! The attention to detail was impressive, and the price was very reasonable. Highly recommend!",
    rating: 5
  }
];

const serviceAreas = [
  "Newton-le-Willows",
  "Warrington",
  "St Helens",
  "Wigan",
  "Widnes",
  "Prescot",
  "Rainhill",
  "Earlestown"
];

const ServicesGrid = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Professional Exterior Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto">
              Transform your property with our comprehensive range of exterior cleaning solutions. Residential and commercial services across the North West.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-primary font-bold text-lg px-8 py-6 shadow-xl">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white font-bold text-lg px-8 py-6 shadow-xl">
                <a href="tel:07845463877" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  07845 463877
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive external cleaning solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
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

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary shadow-xl">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose R.R.M External Cleaning</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional results with every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From initial contact to sparkling results, we make the process straightforward and hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white border border-border rounded-xl p-6 text-center h-full shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Cover</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide our professional exterior cleaning services across the North West
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">Don't see your area listed? Contact us to check availability.</p>
                <Button asChild className="bg-primary">
                  <Link to="/contact">Enquire Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote and discover how we can enhance your property's appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-primary font-bold text-lg px-8 py-6 shadow-xl">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white font-bold text-lg px-8 py-6 shadow-xl">
              <a href="tel:07845463877" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                07845 463877
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesGrid;