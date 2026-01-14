import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, Droplets, Wind, Sun, Sparkles, Building, Trees, Zap, HelpCircle, 
  CheckCircle, Phone, MapPin, Clock, Award, Shield, Leaf, Play, X
} from "lucide-react";

const ServicesGrid = () => {
  // --- DATA SECTION ---
  
  const servicesGrid = [
    {
      title: "Driveway & Patio Cleaning",
      description: "High-pressure cleaning for stone, concrete, block paving, and tarmac. Removes oil stains, dirt, moss, algae, and grime.",
      features: ["High-pressure cleaning", "Stone, concrete, block paving, and tarmac", "Removes oil stains, dirt, moss, algae", "Enhances outdoor aesthetics and property safety"],
      icon: Home,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
      video: "https://www.youtube.com/embed/8RPVyb1gN3c"
    },
    {
      title: "Roof Cleaning",
      description: "Soft washing for tiles, slates, and shingles. Removes moss, algae, lichen, and environmental grime. Prevents leaks and structural damage.",
      features: ["Soft washing for tiles, slates, and shingles", "Removes moss, algae, lichen", "Prevents leaks and structural damage"],
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
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1470&q=80",
      video: "https://www.youtube.com/embed/YGLP1Hm5MFE"
    },
    {
      title: "Conservatory & Glass Cleaning",
      description: "Streak-free cleaning for glass, frames, and roofs. Removes algae, moss, and hard water stains. Protects surfaces while enhancing brightness.",
      features: ["Streak-free cleaning for glass, frames, and roofs", "Removes algae, moss, and hard water stains", "Protects surfaces while enhancing brightness"],
      icon: Sun,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1470&q=80",
      video: "https://www.youtube.com/embed/KFw0dpj146w"
    },
    {
      title: "Commercial & Industrial Cleaning",
      description: "Shopfronts, offices, car parks, and industrial units. Reduces grime, improves hygiene, and enhances presentation. Custom packages to suit business requirements.",
      features: ["Shopfronts, offices, car parks, and industrial units", "Reduces grime, improves hygiene", "Custom packages to suit business requirements"],
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
      features: ["High-pressure cleaning for stubborn dirt and stains", "Soft washing with biodegradable detergents", "Restores and maintains surfaces effectively"],
      icon: Zap,
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const processSteps = [
    { title: "Free Property Survey", desc: "Assess surfaces, grime, and safety needs" },
    { title: "Preparation & Protection", desc: "Shield plants, vehicles, and delicate areas" },
    { title: "Service Selection", desc: "Soft washing, pressure washing, or chemical cleaning" },
    { title: "Professional Cleaning", desc: "Remove dirt, algae, moss, and stains" },
    { title: "Inspection & Finishing", desc: "Ensure spotless, safe, and restored surfaces" },
    { title: "Maintenance Advice", desc: "Tips to prolong results and protect surfaces" }
  ];

  const whyChooseUs = [
    { icon: Award, title: "9+ Years Experience", desc: "Trusted local expertise in North West UK" },
    { icon: Shield, title: "Fully Insured & Trained", desc: "Professional team with full safety training" },
    { icon: Wind, title: "Comprehensive Services", desc: "From roof cleaning to moss removal" },
    { icon: Sun, title: "Customer Focused", desc: "Reliable, punctual, and tailored service" }
  ];

  const ecoPractices = [
    "Biodegradable, non-toxic detergents safe for pets and plants",
    "Controlled water use to prevent environmental impact",
    "Safe high-level cleaning with PPE, ladders, and harnesses",
    "Compliant with UK Health & Safety regulations"
  ];

  const pricing = [
    { title: "Driveway & Patio Cleaning", price: "£80–£250" },
    { title: "Roof Cleaning", price: "£120–£350" },
    { title: "Gutter Cleaning", price: "£60–£150" },
    { title: "Cladding & Render Cleaning", price: "£150–£400" },
    { title: "Commercial Properties", price: "Custom quotes" }
  ];

  const faqs = [
    { question: "How often should exterior cleaning be done?", answer: "Homes usually benefit from cleaning once or twice a year; commercial properties may require more frequent cleaning." },
    { question: "Are your chemicals safe for the environment?", answer: "Yes! We use biodegradable, eco-friendly detergents safe for pets and plants." },
    { question: "Which areas do you cover?", answer: "We serve Newton-le-Willows, Liverpool, Manchester, Warrington, Widnes, Huyton, Golborne, Skelmersdale, Wigan, Ormskirk, Lymm, Leigh, Stockport, and surrounding North West towns." },
    { question: "Can delicate surfaces be cleaned safely?", answer: "Absolutely. We use soft washing techniques for roofs, conservatories, and sensitive cladding." },
    { question: "How can I get a quote?", answer: "Call +44 7845 463877, visit our website, or check our Google Business Profile." }
  ];

  const serviceAreas = [
    "Newton-le-Willows (HQ)", "Liverpool", "Manchester", "Warrington", "Widnes", "Huyton",
    "Golborne", "Skelmersdale", "Wigan", "Ormskirk", "Lymm", "Leigh", "Stockport"
  ];

  // --- STATE ---
  const [openModal, setOpenModal] = useState<number | null>(null);

  return (
    <div className="bg-background text-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-900 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Our Full Range of Services
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            We provide all exterior cleaning and pressure washing services, using eco-friendly, safe methods. 
            Every service is tailored for residential and commercial properties in the North West UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-400 text-blue-900 px-8 py-6 font-bold text-lg shadow-xl hover:scale-105 transition-transform">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white px-8 py-6 font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors">
              <a href="tel:+447845463877" className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> +44 7845 463877
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Professional Cleaning Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From residential driveways to industrial units, we handle it all.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesGrid.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-none flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {service.video && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" onClick={() => setOpenModal(index)}>
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="h-6 w-6 text-blue-600 fill-blue-600 ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-8 w-full md:w-3/5 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                    </div>
                    
                    <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
                    
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link to="/contact">Request Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">Our Proven Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Eco-Friendly */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Why Choose R.R.M?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-300 transition-colors">
                      <Icon className="h-8 w-8 text-blue-600 mb-4" />
                      <h3 className="font-bold text-lg mb-2 text-slate-800">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Eco-Friendly & Safety */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-100 h-fit">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl font-bold text-green-900">Eco-Friendly & Safety Practices</h2>
              </div>
              <ul className="space-y-4">
                {ecoPractices.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-green-800">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Guide</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Our pricing depends on property size, surface type, and service complexity. We provide transparent and fair pricing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((service, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl font-medium">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-400 mb-6">{service.price}</div>
                  <Button asChild className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-bold">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-slate-100 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <HelpCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-slate-800">{faq.question}</h3>
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Map */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Areas We Cover – Local Focus</h2>
              <p className="text-slate-600 mb-8">Serving residential and commercial properties across Newton-le-Willows and the North West UK.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {serviceAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0"/> {area}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-6 italic">And surrounding towns and suburbs across North West UK.</p>
              
              <div className="mt-10 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">9 Noon Ct, Newton-le-Willows WA12 8QY, United Kingdom</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <a href="tel:+447845463877" className="text-slate-700 hover:text-blue-600 font-medium">+44 7845 463877</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">Open 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[500px] lg:h-auto lg:sticky lg:top-24">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402705.300341187!2d-7.513347193542624!3d53.978065665404316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b6fd8f7630db9%3A0x91de5d49044473a2!2sNorth%20West%2C%20UK!5e0!3m2!1sen!2s!4v1768322565676!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Transform your property today!</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
            Let R.R.M External Cleaning Specialist provide professional, reliable, and eco-friendly pressure washing and exterior cleaning for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-400 text-slate-900 px-8 py-6 font-bold text-lg shadow-xl hover:scale-105 transition-transform">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white px-8 py-6 font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors">
              <a href="tel:+447845463877" className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> +44 7845 463877
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modals */}
      {servicesGrid.map((service, index) => (
        service.video && (
          <div 
            key={`modal-${index}`}
            className={`fixed inset-0 bg-black/90 z-50 ${openModal === index ? 'flex' : 'hidden'} items-center justify-center p-4 backdrop-blur-sm`}
            onClick={() => setOpenModal(null)}
          >
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setOpenModal(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white rounded-full p-2 transition-colors z-10"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-video w-full">
                <iframe 
                  src={`${service.video}?autoplay=1&mute=1`} 
                  title={service.title}
                  className="w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default ServicesGrid;
