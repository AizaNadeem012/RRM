import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Phone, CheckCircle, Star, Award, Shield, Clock, Zap, Target, Heart, ThumbsUp, MapPin, Calendar, Mail, ArrowRight, Sparkles, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Commercial Cleaning",
      image: "/commercial-cleaning.jpg",
      description: "Professional commercial cleaning services for businesses and offices.",
      details: [
        "Office buildings and retail premises",
        "Warehouses and industrial facilities",
        "Shopping centers and public buildings",
        "Flexible scheduling to minimize disruption",
        "Health and safety compliant",
      ],
      icon: <Shield className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Window Cleaning",
      image: "/window-cleaning.jpg",
      description: "Crystal clear windows for residential and commercial properties.",
      details: [
        "Interior and exterior window cleaning",
        "High-rise and ground-level access",
        "Frame and sill cleaning",
        "Streak-free finish guaranteed",
        "Regular maintenance schedules available",
      ],
      icon: <Star className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Pressure Washing Services",
      image: "/pressure-washing.jpg",
      description: "High-pressure cleaning for all exterior hard surfaces.",
      details: [
        "Driveways, patios, and pathways",
        "Walls, fences, and outdoor furniture",
        "Commercial and industrial cleaning",
        "Graffiti and stain removal",
        "Adjustable pressure for different surfaces",
      ],
      icon: <Zap className="h-6 w-6" />,
      color: "from-teal-500 to-cyan-600"
    },
    {
      title: "Roof Cleaning Services",
      image: "/roof-cleaning.jpg",
      description: "Safe and effective roof cleaning to remove moss and algae.",
      details: [
        "Remove moss, lichen, and algae safely",
        "Extend the lifespan of your roof",
        "Prevent water damage and leaks",
        "Improve energy efficiency",
        "Enhance property appearance",
      ],
      icon: <Shield className="h-6 w-6" />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Gutter Cleaning & Repair",
      image: "/gutter-cleaning.jpg",
      description: "Comprehensive gutter cleaning and maintenance services.",
      details: [
        "Remove leaves, debris, and blockages",
        "Prevent water overflow and damage",
        "Check downpipes and drainage",
        "Identify potential issues early",
        "Minor repairs and maintenance",
      ],
      icon: <Target className="h-6 w-6" />,
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Render Cleaning",
      image: "/render-cleaning.jpg",
      description: "Specialist cleaning for rendered walls and building exteriors.",
      details: [
        "Remove dirt, algae, and staining",
        "Restore original appearance",
        "Suitable for all render types",
        "Prevent premature deterioration",
        "Safe cleaning without damage",
      ],
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-lime-500 to-emerald-600"
    },
    {
      title: "Conservatory Cleaning",
      image: "/conservatory-cleaning.jpg",
      description: "Complete conservatory cleaning including roof, frames, and glass.",
      details: [
        "Clean glass roof panels inside and out",
        "Remove algae and green growth",
        "Clean frames, gutters, and finials",
        "Restore clarity and brightness",
        "Safe access using professional equipment",
      ],
      icon: <Star className="h-6 w-6" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Soffits & Facias Cleaning",
      image: "/soffits-cleaning.jpg",
      description: "Restore the shine to your soffits and fascias.",
      details: [
        "Remove dirt, grime, and oxidation",
        "Restore original white or colored finish",
        "Clean gutters and downpipes",
        "Eco-friendly cleaning solutions",
        "Long-lasting results",
      ],
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-amber-500 to-yellow-600"
    },
    {
      title: "Graffiti Removal",
      image: "/graffiti-removal.jpg",
      description: "Professional graffiti removal from all surfaces.",
      details: [
        "Remove graffiti from walls and surfaces",
        "Safe chemical-free methods",
        "Restore original appearance",
        "Prevent future graffiti damage",
        "Quick and effective service",
      ],
      icon: <Zap className="h-6 w-6" />,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Driveway & Patio Restoration",
      image: "/driveway-restoration.jpg",
      description: "Complete restoration of driveways and patios.",
      details: [
        "Remove oil stains, moss, and algae",
        "Restore original color and appearance",
        "Prevent slippery surfaces",
        "Increase property value",
        "Suitable for all surface types",
      ],
      icon: <Target className="h-6 w-6" />,
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Cladding Cleaning",
      image: "/cladding-cleaning.jpg",
      description: "Specialist cleaning for building cladding systems.",
      details: [
        "Clean all types of cladding",
        "Remove dirt, algae, and staining",
        "Restore original appearance",
        "Safe cleaning methods",
        "Prevent premature deterioration",
      ],
      icon: <Shield className="h-6 w-6" />,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "uPVC Cleaning",
      image: "/upvc-cleaning.jpg",
      description: "Restore the shine to your uPVC windows, doors, and frames.",
      details: [
        "Remove dirt, grime, and oxidation",
        "Restore original white finish",
        "Clean frames, sills, and doors",
        "Eco-friendly cleaning solutions",
        "Long-lasting protection",
      ],
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600"
    },
  ];

  const whyChooseUs = [
    {
      image: "/experience.jpg",
      title: "Years of Experience",
      description: "With years of experience in the industry, I understand the importance of maintaining the exterior of your property",
      icon: <Award className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      image: "/eco-friendly.jpg",
      title: "Eco-Friendly Products",
      description: "I use advanced equipment and eco-friendly products to ensure effective and safe cleaning results",
      icon: <Heart className="h-8 w-8" />,
      color: "from-green-500 to-teal-600"
    },
    {
      image: "/bespoke-services.jpg",
      title: "Bespoke Services",
      description: "I take the time to assess each job individually, allowing me to deliver bespoke services that go beyond standard offerings",
      icon: <Target className="h-8 w-8" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      image: "/customer-satisfaction.jpg",
      title: "Customer Satisfaction",
      description: "Customer satisfaction is paramount, and I strive to build lasting relationships based on trust and exceptional service",
      icon: <ThumbsUp className="h-8 w-8" />,
      color: "from-orange-500 to-red-600"
    },
    {
      image: "/equipment.jpg",
      title: "State-of-the-Art Equipment",
      description: "I utilise state-of-the-art equipment that guarantees optimal results",
      icon: <Zap className="h-8 w-8" />,
      color: "from-cyan-500 to-blue-600"
    },
    {
      image: "/professional-service.jpg",
      title: "Friendly & Professional",
      description: "My friendly and professional approach makes the entire process enjoyable",
      icon: <Star className="h-8 w-8" />,
      color: "from-yellow-500 to-orange-600"
    },
  ];

  const testimonials = [
    {
      name: "John",
      text: "Professional and friendly service. I was impressed by their expertise and dedication. They made sure all my needs were met, and I left feeling completely satisfied.",
      rating: 5,
      image: "/customer-1.jpg"
    },
    {
      name: "Jane",
      text: "Exceptional service from start to finish. The staff was knowledgeable and attentive, ensuring that I felt comfortable and well cared for throughout the entire process.",
      rating: 5,
      image: "/customer-2.jpg"
    },
    {
      name: "Michael",
      text: "They were punctual, professional, and went above and beyond to exceed my expectations. I highly recommend their services to anyone in need.",
      rating: 5,
      image: "/customer-3.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="pt-20">
        {/* Section 1: Hero */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <img 
                  src="/logo.webp" 
                  alt="R.R.M External Cleaning Specialist" 
                  className="h-24 w-auto mx-auto"
                />
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-white font-medium">Professional External Cleaning Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                We take pride in what we do
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
                Professional external cleaning services for homes and businesses across Newton-le-Willows and the North West
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl text-lg px-8 py-6 font-bold transform hover:scale-105 transition-all duration-300">
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: All Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-4">
                <Sparkles className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-indigo-800 font-medium">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Our Complete Range of Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From pressure washing to window cleaning, we provide comprehensive external cleaning solutions tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 group border-0 bg-white transform hover:-translate-y-2">
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${service.color}`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      {service.icon}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-bold text-xl text-white">{service.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <Button asChild variant="outline" className="w-full border-indigo-500 text-indigo-600 hover:bg-indigo-50">
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Detailed Service Showcase */}
        <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
                <Shield className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-purple-800 font-medium">Detailed Information</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Detailed Service Information
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
            </div>

            <div className="space-y-20 max-w-6xl mx-auto">
              {services.slice(0, 6).map((service, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                            {service.icon}
                          </div>
                          <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
                        </div>
                        <p className="text-lg text-gray-700">{service.description}</p>
                        <div className="space-y-3">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                        <Button asChild size="lg" className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white shadow-lg transform hover:scale-105 transition-all duration-300`}>
                          <Link to="/contact">Get Quote for This Service</Link>
                        </Button>
                      </div>
                    </div>
                    
                    <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <div className="relative overflow-hidden rounded-xl shadow-xl">
                        <div className={`h-80 bg-gradient-to-br ${service.color}`}></div>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                          <p className="text-white/90">
                            Professional service with guaranteed results
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose R.R.M Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-4">
                <Award className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-indigo-800 font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Why Choose R.R.M Services?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choosing R.R.M External Cleaning Specialist means selecting a service dedicated to exceeding your expectations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white group transform hover:-translate-y-2">
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${item.color}`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                      {item.icon}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-bold text-xl text-white">{item.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Service Process */}
        <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
                <Clock className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-purple-800 font-medium">Our Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Our Service Process
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                How we deliver exceptional cleaning services every time
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  step: "1", 
                  title: "Assessment", 
                  description: "I take the time to assess each job individually, allowing me to deliver bespoke services",
                  color: "from-blue-500 to-indigo-600"
                },
                { 
                  step: "2", 
                  title: "Planning", 
                  description: "Create a detailed cleaning plan tailored to your specific needs and requirements",
                  color: "from-purple-500 to-pink-600"
                },
                { 
                  step: "3", 
                  title: "Execution", 
                  description: "Use advanced equipment and eco-friendly products to ensure effective and safe cleaning",
                  color: "from-green-500 to-teal-600"
                },
                { 
                  step: "4", 
                  title: "Quality Check", 
                  description: "Thorough inspection to ensure every detail meets our high standards",
                  color: "from-orange-500 to-red-600"
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6 overflow-hidden rounded-xl shadow-lg">
                    <div className={`h-40 bg-gradient-to-br ${item.color}`}></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-0 right-0">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl font-bold text-gray-800 mx-auto shadow-lg">
                        {item.step}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Equipment & Technology */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-4">
                    <Zap className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-indigo-800 font-medium">Our Technology</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                    State-of-the-Art Equipment
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mb-8"></div>
                  <p className="text-lg text-gray-700 mb-6">
                    I utilise state-of-the-art equipment that guarantees optimal results. Our advanced machinery and eco-friendly products ensure effective and safe cleaning results for every project.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Professional pressure washing systems",
                      "Eco-friendly cleaning solutions",
                      "Specialized equipment for different surfaces",
                      "Safety equipment and protective gear",
                      "Latest technology for efficient cleaning"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  <div className="h-96 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Advanced Technology</h3>
                    <p className="text-white/90">
                      Our equipment is regularly maintained and updated to ensure the best possible results for your property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Testimonials */}
        <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
                <Quote className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-purple-800 font-medium">Customer Reviews</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                What Our Customers Say
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">Verified Customer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Service Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-4">
                <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-indigo-800 font-medium">Service Areas</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Areas We Serve
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Professional external cleaning services across North West UK
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
              {["Newton-le-Willows", "Warrington", "Liverpool", "Manchester", "Wigan", "St Helens", "Widnes", "Leigh", "Lymm", "Prescot", "Ormskirk", "Rainhill"].map((area) => (
                <div key={area} className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:from-indigo-100 hover:to-purple-100 transform hover:-translate-y-1">
                  <MapPin className="h-5 w-5 text-indigo-600 mx-auto mb-2" />
                  <div className="font-medium text-sm text-gray-800">{area}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
                <Link to="/service-areas">View All Service Areas</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 9: Pricing & Quotes */}
        <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
                <Mail className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-purple-800 font-medium">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Get Your Free Quote
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for a free, no-obligation quote. I'm ready to help you achieve the clean, pristine exterior your property deserves.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2">
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Call Now</h3>
                    <p className="text-gray-600 mb-6">Speak directly with me for immediate assistance</p>
                    <Button asChild size="lg" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 text-white">
                      <a href="tel:07845463877">07845 463877</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2">
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Send Enquiry</h3>
                    <p className="text-gray-600 mb-6">Get a detailed quote via our contact form</p>
                    <Button asChild size="lg" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white">
                      <Link to="/contact">Contact Form</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Final CTA */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-white font-medium">Get Started Today</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Property?
              </h2>
              <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto">
                Experience the ultimate in external cleaning excellence. Contact R.R.M External Cleaning Specialist today for professional, reliable, and affordable cleaning services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl text-lg px-8 py-6 font-bold transform hover:scale-105 transition-all duration-300">
                  <Link to="/contact">Request Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-bold">
                  <a href="tel:07845463877">Call 07845 463877</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Services;
