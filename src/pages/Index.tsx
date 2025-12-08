import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Home/Hero";
import ServicesGrid from "@/components/Home/ServicesGrid";
import { CheckCircle, Award, Users, Shield, Clock, TrendingUp, Star, Phone, MapPin, Mail, Calendar, Zap, Leaf, Target, Heart, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import RRMLogo from "@/components/ui/logo";
<link rel="canonical" href="https://www.rrmexternalcleaningspecialist.co.uk/service-areas" />


const Index = () => {
  const whyChooseUs = [
    {
      icon: Award,
      title: "Years of Experience",
      description: "With years of experience in the industry, I understand the importance of maintaining the exterior of your property",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      description: "I use advanced equipment and eco-friendly products to ensure effective and safe cleaning results",
    },
    {
      icon: Target,
      title: "Bespoke Services",
      description: "I take the time to assess each job individually, allowing me to deliver bespoke services that go beyond standard offerings",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Customer satisfaction is paramount, and I strive to build lasting relationships based on trust and exceptional service",
    },
    {
      icon: Zap,
      title: "State-of-the-Art Equipment",
      description: "I utilise state-of-the-art equipment that guarantees optimal results",
    },
    {
      icon: ThumbsUp,
      title: "Friendly & Professional",
      description: "My friendly and professional approach makes the entire process enjoyable",
    },
  ];

  const testimonials = [
    {
      name: "John",
      text: "Professional and friendly service. I was impressed by their expertise and dedication. They made sure all my needs were met, and I left feeling completely satisfied.",
      rating: 5,
    },
    {
      name: "Jane",
      text: "Exceptional service from start to finish. The staff was knowledgeable and attentive, ensuring that I felt comfortable and well cared for throughout the entire process.",
      rating: 5,
    },
    {
      name: "Michael",
      text: "They were punctual, professional, and went above and beyond to exceed my expectations. I highly recommend their services to anyone in need.",
      rating: 5,
    },
    {
      name: "Emily",
      text: "I had a wonderful experience with this service provider. The staff was friendly, efficient, and really knew their stuff. I will definitely be using their services again in the future.",
      rating: 5,
    },
    {
      name: "Chris",
      text: "This service was exceptional! They were courteous, professional, and ensured that every detail was taken care of. I couldn't be happier with the outcome.",
      rating: 5,
    },
    {
      name: "Patricia",
      text: "Outstanding service! The staff was incredibly helpful and made the entire process seamless and stress-free. I would highly recommend them to anyone.",
      rating: 5,
    },
  ];

  const services = [
    "Commercial Cleaning",
    "Window Cleaning", 
    "Pressure Washing Services",
    "Roof Cleaning Services",
    "Gutter Cleaning & Repair",
    "Render Cleaning",
    "Conservatory Cleaning",
    "Soffits & Facias Cleaning",
    "Graffiti Removal",
    "Driveway & Patio Restoration",
    "Cladding Cleaning",
    "uPVC Cleaning"
  ];

  const processSteps = [
    { step: "1", title: "Contact Us", description: "Get in touch via phone, email, or our contact form" },
    { step: "2", title: "Free Quote", description: "We provide a free, no-obligation quote for your project" },
    { step: "3", title: "Schedule Service", description: "Choose a convenient time that works for you" },
    { step: "4", title: "Professional Cleaning", description: "Our expert team delivers exceptional results" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About R.R.M */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                  Newton le willows -based Cleaning Specialist
                </h2>
                <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <p className="text-lg text-gray-700 mb-6">
                    Welcome to R.R.M External Cleaning Specialist, where I take pride in offering superior external cleaning services in Newton-le-Willows. With years of experience in the industry, I understand the importance of maintaining the exterior of your property. Whether it's your home or business, I provide meticulous cleaning solutions tailored to fit your needs.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    My commitment to quality ensures that each project is completed to the highest standards. I aim to leave your property looking pristine and well-maintained. Customer satisfaction is paramount, and I strive to build lasting relationships based on trust and exceptional service.
                  </p>
                  <p className="text-lg text-gray-700 mb-8">
                    At R.R.M External Cleaning Specialist, I use advanced equipment and eco-friendly products to ensure effective and safe cleaning results. I take the time to assess each job individually, allowing me to deliver bespoke services that go beyond the standard offerings.
                  </p>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-primary/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Years</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                  <div className="bg-secondary/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">Eco</div>
                    <div className="text-sm text-gray-600">Friendly</div>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                We take pride in what we do
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: Mission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              
              <p className="text-xl text-gray-700 mb-8">
                Our mission is to provide reliable, high-quality exterior cleaning services that protect and enhance the value of your property. We are committed to delivering exceptional results, using safe and effective methods, while maintaining professionalism and trust with every customer.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">We aim to:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span>Keep homes and businesses clean, safe, and well-maintained</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span>Extend the life of exterior surfaces and structures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span>Provide dependable, friendly, and efficient service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span>Exceed customer expectations with every project</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-xl p-8">
                  <p className="text-lg text-gray-700 italic">
                    "At the core of our mission is a dedication to quality, care, and customer satisfaction in every service we provide."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Why Choose Us?
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Choosing R.R.M External Cleaning Specialist means selecting a service dedicated to exceeding your expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Proudly Rated 5 Stars
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gray-50">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Our Simple Process
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-xl text-gray-700">
                Getting started with R.R.M is easy - just follow these simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {processSteps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Service Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Areas We Serve
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-xl text-gray-700">
                Professional external cleaning services across North West UK
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {["Newton-le-Willows", "Warrington", "Liverpool", "Manchester", "Wigan", "St Helens", "Widnes", "Leigh", "Lymm", "Prescot", "Ormskirk", "Rainhill"].map((area) => (
                <div key={area} className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300">
                  <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="font-medium text-sm text-primary">{area}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/service-areas">View All Service Areas</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 9: Contact Info */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                  R.R.M External Cleaning Specialist
                </h2>
                <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
                      <p className="text-gray-700">9 Noon Court, Newton-le-Willows, Reino Unido</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-gray-700">07845463877</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Hours</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Mon-Fri: 06:00 – 23:00</p>
                        <p>Sat: 06:00 – 22:00</p>
                        <p>Sun: 06:00 – 22:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-center text-primary">Get Your Free Quote</h3>
                  <div className="space-y-4">
                    <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                      <Link to="/contact">Send Enquiry</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      <a href="https://wa.me/447845463877">WhatsApp</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl mb-8 opacity-95 max-w-3xl mx-auto">
              Get in touch today for a free, no-obligation quote. I'm ready to help you achieve the clean, pristine exterior your property deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                <Link to="/contact">Request Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <a href="tel:07845463877">Call 07845 463877</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
