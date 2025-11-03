import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Star, CheckCircle, Award, Shield, Zap, Target, Heart, ThumbsUp, Leaf, ArrowRight } from "lucide-react"; // Added Leaf and ArrowRight
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RRMLogo from "@/components/ui/logo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating a successful submission with a more distinct toast style
    toast.success("Message Sent Successfully!", {
        description: "Thank you! We'll contact you within 24 hours.",
        icon: <Send className="h-4 w-4 text-primary" />,
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const faqs = [
    {
      question: "How much do your services cost?",
      answer: "Our prices vary depending on the size and type of job. We offer free, no-obligation quotes. Contact us with details of your project and we'll provide a competitive price tailored to your needs."
    },
    {
      question: "Do you provide free quotes?",
      answer: "Yes! All our quotes are completely free with no obligation. We'll visit your property, assess the work required, and provide a detailed written quote."
    },
    {
      question: "Are you insured?",
      answer: "Absolutely. We carry full public liability insurance up to £10 million, and all our staff are fully trained and certified. You can have complete peace of mind when we work on your property."
    },
    {
      question: "What areas do you cover?",
      answer: "We cover all of North West UK including Warrington, Liverpool, Manchester, Wigan, St Helens, Widnes, and surrounding areas. Check our Service Areas page for the complete list."
    },
    {
      question: "How long does a typical job take?",
      answer: "This depends on the service and property size. A standard driveway might take 2-4 hours, while larger projects like complete house exteriors could take a full day. We'll give you an accurate time estimate with your quote."
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "Not necessarily. Many of our customers prefer to be out while we work. As long as we have access to water and the areas to be cleaned, we can complete the work in your absence."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, bank transfer, and all major credit/debit cards. Payment is due upon completion of the work unless alternative arrangements have been agreed."
    },
    {
      question: "Do you offer regular maintenance packages?",
      answer: "Yes! We offer discounted rates for customers who book regular cleaning services. This is particularly popular for gutter cleaning, commercial properties, and conservatories."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "Customer satisfaction is our top priority. If you're not completely happy, we'll return and address any concerns at no additional cost. We stand behind our 100% satisfaction guarantee."
    },
    {
      question: "Are your cleaning products eco-friendly?",
      answer: "Yes, we use biodegradable and environmentally responsible cleaning solutions wherever possible. Our products are effective yet safe for your family, pets, and the environment."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Section 1: Hero - Enhanced Gradient and Contrast */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-8">
                {/* Using a white logo variant if available, or default for contrast */}
                <RRMLogo size="xl" /> 
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
                Let's Talk
              </h1>
              <p className="text-xl md:text-2xl mb-10 opacity-85 max-w-4xl mx-auto font-light">
                Ready to see the R.R.M difference? Contact us today for a **free, no-obligation, expert quote**.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 shadow-xl text-gray-900">
                <a href="tel:07845463877">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Contact Methods - Elevated Cards */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Contact Channels
              </h2>
              <div className="w-28 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose your preferred method to connect with our team.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Phone Card */}
              <Card className="shadow-xl transition-transform duration-300 hover:scale-[1.02] border-t-4 border-primary bg-white">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">Call Us</h3>
                  <a href="tel:07845463877" className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors block">
                    07845 463877
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Mon-Sun: 06:00 – 23:00</p>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="shadow-xl transition-transform duration-300 hover:scale-[1.02] border-t-4 border-accent bg-white">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-accent/20">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">Email Us</h3>
                  <a href="mailto:info@rrmcleaning.co.uk" className="text-lg text-gray-700 hover:text-primary transition-colors break-all block">
                    info@rrmcleaning.co.uk
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
                </CardContent>
              </Card>
              
              {/* WhatsApp Card */}
              <Card className="shadow-xl transition-transform duration-300 hover:scale-[1.02] border-t-4 border-green-500 bg-white">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                    <MessageSquare className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">WhatsApp</h3>
                  <a href="https://wa.me/447845463877" className="text-xl font-semibold text-green-600 hover:text-green-700 transition-colors block">
                    Quick Chat
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Instant messaging support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Contact Form & Location Map */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              
              {/* Contact Form */}
              <div>
                <div className="text-center mb-10 lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Request Your Free Quote
                    </h2>
                    <div className="w-28 h-1 bg-accent mx-auto mb-6 lg:mx-0"></div>
                    <p className="text-lg text-gray-600">
                    Tell us about your property and the service you need. We'll provide a transparent estimate quickly.
                    </p>
                </div>

                <Card className="border-0 shadow-2xl bg-gray-50">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                          <Input
                            type="text"
                            required
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="border-gray-300 focus:border-primary"
                          />
                          <Input
                            type="email"
                            required
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="border-gray-300 focus:border-primary"
                          />
                      </div>
                       <div className="grid md:grid-cols-2 gap-5">
                          <Input
                              type="tel"
                              required
                              placeholder="Phone Number *"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="border-gray-300 focus:border-primary"
                          />
                          <Input
                              type="text"
                              placeholder="Service of Interest (Optional)"
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              className="border-gray-300 focus:border-primary"
                          />
                       </div>
                        <Textarea
                          required
                          rows={4}
                          placeholder="Tell us about your project details (e.g., size of driveway, building type) *"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="border-gray-300 focus:border-primary"
                        />

                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 shadow-lg transition-colors">
                          <Send className="mr-2 h-5 w-5" />
                          Submit Quote Request
                        </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Location Map Placeholder */}
              <div className="hidden lg:block">
                <Card className="shadow-2xl border-0 h-full">
                    <CardHeader className="text-center pt-6 pb-2">
                        <CardTitle className="text-2xl text-gray-900">Our Base Location</CardTitle>
                        <CardDescription>Newton-le-Willows, UK</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        {/* This placeholder represents where a Google Map iframe/component would go */}
                        <div className="aspect-video bg-gray-200 rounded-b-lg flex items-center justify-center text-gray-500 border-t border-gray-300">
                            [Interactive Map Placeholder Here] 🗺️
                        </div>
                    </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: FAQ - Accordion Enhancement */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Quick Answers
              </h2>
              <div className="w-28 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your questions answered. If you need more detail, please use the form above!
              </p>
            </div>

            <Card className="border-0 shadow-xl bg-white max-w-4xl mx-auto">
              <CardContent className="p-6 sm:p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-primary transition-colors py-4 data-[state=open]:text-primary">
                        <Star className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-gray-600 pr-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 5: Service Areas - Visual Clarity */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Our Core Service Locations
              </h2>
              <div className="w-28 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We are proud to serve these key towns and cities across the North West.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {["Newton-le-Willows", "Warrington", "Liverpool", "Manchester", "Wigan", "St Helens", "Widnes", "Leigh", "Lymm", "Prescot", "Ormskirk", "Rainhill"].map((area) => (
                <div key={area} className="flex items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 group">
                  <MapPin className="h-4 w-4 text-primary mr-2 flex-shrink-0 group-hover:text-accent transition-colors" />
                  <div className="font-medium text-sm text-gray-700 group-hover:text-gray-900">{area}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-colors">
                    <a href="/service-areas">
                        View All Service Areas <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
          </div>
        </section>
        
        {/* Section 6: Why Choose R.R.M - Re-styled Features */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                The R.R.M Commitment
              </h2>
              <div className="w-28 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quality, Trust, and Results—guaranteed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "Proven Track Record",
                  description: "Years of experience ensures we tackle the toughest grime with confidence and expertise."
                },
                {
                  icon: Leaf, // Using Leaf icon here
                  title: "Eco-Conscious Cleaning",
                  description: "We prioritize biodegradable and environmentally safe products for your property and our planet."
                },
                {
                  icon: Shield,
                  title: "Fully Insured & Certified",
                  description: "Complete peace of mind with full public liability insurance and certified professionals."
                },
                {
                  icon: Target,
                  title: "Bespoke Solutions",
                  description: "Every surface is different. We tailor our approach to deliver flawless, site-specific results."
                },
                {
                  icon: Zap,
                  title: "High-Tech Equipment",
                  description: "Utilizing the latest pressure washing and soft washing tech for unmatched cleaning power."
                },
                {
                  icon: Heart,
                  title: "Customer Obsessed",
                  description: "We don't finish until you are 100% satisfied—your happiness is our ultimate goal."
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-t-4 border-primary/50 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
};

export default Contact;