import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { MapPin, Phone, CheckCircle, Star, Shield, Award, Clock, Users, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServiceAreas = () => {
  const serviceAreas = [
    {
      name: "Warrington",
      postcode: "WA",
      description: "Comprehensive external cleaning services throughout Warrington and surrounding areas. From residential driveways to commercial properties, we serve all of Warrington with professional cleaning solutions.",
      services: ["Driveway Cleaning", "Roof Cleaning", "Gutter Cleaning", "UPVC Cleaning", "Pressure Washing", "Commercial Cleaning"],
      featured: true,
    },
    {
      name: "Liverpool",
      postcode: "L",
      description: "Professional external cleaning across Liverpool. We provide top-quality cleaning services for homes and businesses throughout the Liverpool area, delivering exceptional results every time.",
      services: ["Patio Cleaning", "Conservatory Cleaning", "Solar Panel Cleaning", "Render Cleaning", "Decking Cleaning"],
    },
    {
      name: "Manchester",
      postcode: "M",
      description: "Expert external cleaning services in Manchester. Our experienced team serves residential and commercial properties across Greater Manchester with efficient and reliable cleaning solutions.",
      services: ["Commercial Building Cleaning", "Driveway Cleaning", "Roof Cleaning", "Pressure Washing", "Cladding Cleaning"],
    },
    {
      name: "Wigan",
      postcode: "WN",
      description: "Quality external cleaning in Wigan. From moss removal to pressure washing, we provide comprehensive cleaning services to keep your Wigan property looking its best year-round.",
      services: ["Moss Removal", "Gutter Cleaning", "UPVC Cleaning", "Patio Cleaning", "Driveway Cleaning"],
    },
    {
      name: "St Helens",
      postcode: "WA9-WA11",
      description: "Trusted cleaning services in Saint Helens. We've been serving the St Helens community for years with professional external cleaning that delivers outstanding results.",
      services: ["Roof Cleaning", "Conservatory Cleaning", "Render Cleaning", "Pressure Washing", "Gutter Cleaning"],
    },
    {
      name: "Widnes",
      postcode: "WA8",
      description: "Professional external cleaning in Widnes. Our local team provides fast, efficient cleaning services for residential and commercial properties throughout the Widnes area.",
      services: ["Driveway Cleaning", "UPVC Cleaning", "Solar Panel Cleaning", "Decking Cleaning", "Patio Cleaning"],
    },
    {
      name: "Leigh",
      postcode: "WN7",
      description: "Expert cleaning services in Leigh, UK. We deliver professional external cleaning solutions to homes and businesses in Leigh with guaranteed satisfaction.",
      services: ["Pressure Washing", "Roof Cleaning", "Gutter Cleaning", "Driveway Cleaning", "Commercial Cleaning"],
    },
    {
      name: "Lymm",
      postcode: "WA13",
      description: "Premium external cleaning in Lymm. Serving this beautiful village with high-quality cleaning services that maintain and enhance property values.",
      services: ["Driveway Cleaning", "Patio Cleaning", "Conservatory Cleaning", "UPVC Cleaning", "Roof Cleaning"],
    },
    {
      name: "Prescot",
      postcode: "L34-L35",
      description: "Reliable cleaning services in Prescot, UK. Our team provides comprehensive external cleaning solutions for all types of properties in the Prescot area.",
      services: ["Render Cleaning", "Gutter Cleaning", "Pressure Washing", "Driveway Cleaning", "Decking Cleaning"],
    },
    {
      name: "Ormskirk",
      postcode: "L39-L40",
      description: "Professional external cleaning in Ormskirk, UK. We serve homes and businesses throughout Ormskirk with efficient, high-quality cleaning services.",
      services: ["Roof Cleaning", "UPVC Cleaning", "Patio Cleaning", "Solar Panel Cleaning", "Gutter Cleaning"],
    },
    {
      name: "Rainhill",
      postcode: "L35",
      description: "Quality cleaning services in Rainhill, UK. Our experienced team delivers exceptional external cleaning results for properties throughout Rainhill.",
      services: ["Driveway Cleaning", "Conservatory Cleaning", "Pressure Washing", "Roof Cleaning", "Cladding Cleaning"],
    },
    {
      name: "Burtonwood",
      postcode: "WA5",
      description: "Expert external cleaning in Burtonwood, UK. We provide comprehensive cleaning services to residential and commercial properties in Burtonwood and surrounding areas.",
      services: ["Gutter Cleaning", "UPVC Cleaning", "Driveway Cleaning", "Patio Cleaning", "Render Cleaning"],
    },
    {
      name: "Huyton",
      postcode: "L36",
      description: "Professional cleaning services in Huyton L36, UK. Our team serves the Huyton area with reliable external cleaning solutions that exceed expectations.",
      services: ["Roof Cleaning", "Pressure Washing", "Decking Cleaning", "Solar Panel Cleaning", "Gutter Cleaning"],
    },
    {
      name: "Irlam",
      postcode: "M44",
      description: "Comprehensive external cleaning in Irlam, Manchester, UK. We deliver professional cleaning services to homes and businesses throughout Irlam.",
      services: ["Driveway Cleaning", "UPVC Cleaning", "Patio Cleaning", "Conservatory Cleaning", "Commercial Cleaning"],
    },
    {
      name: "Lowton",
      postcode: "WA3",
      description: "Expert cleaning services in Lowton, Warrington, UK. Our local team provides high-quality external cleaning for properties across Lowton.",
      services: ["Roof Cleaning", "Gutter Cleaning", "Pressure Washing", "Render Cleaning", "Driveway Cleaning"],
    },
    {
      name: "Winwick",
      postcode: "WA2",
      description: "Professional external cleaning in Winwick, Warrington, UK. We serve Winwick with efficient, reliable cleaning services for all property types.",
      services: ["UPVC Cleaning", "Patio Cleaning", "Decking Cleaning", "Solar Panel Cleaning", "Gutter Cleaning"],
    },
    {
      name: "Golborne",
      postcode: "WA3",
      description: "Quality cleaning services in Golborne, Warrington, UK. Our experienced team delivers exceptional external cleaning results throughout Golborne.",
      services: ["Driveway Cleaning", "Roof Cleaning", "Conservatory Cleaning", "Pressure Washing", "Cladding Cleaning"],
    },
    {
      name: "Great Sankey",
      postcode: "WA5",
      description: "Trusted external cleaning in Great Sankey, Warrington WA5, UK. We provide comprehensive cleaning solutions for residential and commercial properties.",
      services: ["Gutter Cleaning", "UPVC Cleaning", "Patio Cleaning", "Render Cleaning", "Driveway Cleaning"],
    },
    {
      name: "Birchwood",
      postcode: "WA3",
      description: "Professional cleaning services in Birchwood, Warrington WA3, UK. Our team serves Birchwood with high-quality external cleaning that delivers results.",
      services: ["Commercial Cleaning", "Roof Cleaning", "Pressure Washing", "Solar Panel Cleaning", "Decking Cleaning"],
    },
    {
      name: "Skelmersdale",
      postcode: "WN8",
      description: "Expert external cleaning in Skelmersdale, UK. We provide reliable, efficient cleaning services for homes and businesses throughout Skelmersdale.",
      services: ["Driveway Cleaning", "UPVC Cleaning", "Gutter Cleaning", "Patio Cleaning", "Conservatory Cleaning"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section with Modern Design */}
        <section className="relative py-24 overflow-hidden">
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
                <span className="text-white font-medium">Serving 20+ Locations Across North West UK</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                RRM Service Areas
                <span className="block text-3xl md:text-4xl mt-2 text-blue-100">Professional External Cleaning Across North West</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-8">
                Premium external cleaning services available throughout North West England. Find your area below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm">
                  <a href="tel:07845463877" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call 07845 463877
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Map Section with Modern Cards */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50 to-indigo-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-4">
                <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-indigo-800 font-medium">Our Coverage Areas</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Where We Serve</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We proudly serve over 20 locations across North West UK with professional external cleaning services
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {serviceAreas.map((area, index) => (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    area.featured 
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg' 
                      : 'bg-white shadow-md hover:shadow-xl'
                  }`}
                >
                  {area.featured && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-bl-lg">
                      POPULAR
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${area.featured ? 'bg-white/20' : 'bg-indigo-100'}`}>
                      <MapPin className={`h-5 w-5 ${area.featured ? 'text-white' : 'text-indigo-600'}`} />
                    </div>
                    <span className={`font-bold text-lg ${area.featured ? 'text-white' : 'text-gray-800'}`}>{area.name}</span>
                  </div>
                  <span className={`text-sm ${area.featured ? 'text-white/80' : 'text-gray-500'}`}>{area.postcode}</span>
                  <div className="mt-4 flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className={area.featured ? 'text-white' : 'text-indigo-600'}>View services</span>
                    <ChevronRight className={`h-4 w-4 ml-1 ${area.featured ? 'text-white' : 'text-indigo-600'}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Don't see your area listed?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                We're constantly expanding our service areas. Contact us to check if we can help with your external cleaning needs.
              </p>
              <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-blue-50 shadow-lg">
                <a href="tel:07845463877">Call Us: 07845 463877</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Detailed Area Sections with Modern Design */}
        <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
                <Shield className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-purple-800 font-medium">Detailed Service Information</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Services in Your Area</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find detailed information about our services in each location
              </p>
            </div>

            <div className="space-y-16">
              {serviceAreas.map((area, index) => (
                <Card key={index} className={`border-0 shadow-xl overflow-hidden ${area.featured ? 'ring-2 ring-indigo-500' : ''}`} id={area.name.toLowerCase().replace(/\s+/g, '-')}>
                  <div className={`h-2 ${area.featured ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-indigo-500'}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl ${area.featured ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-indigo-500'}`}>
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl md:text-3xl text-gray-800">{area.name}</CardTitle>
                          <CardDescription className="text-base text-gray-600">
                            Postcode: {area.postcode}
                          </CardDescription>
                        </div>
                      </div>
                      <Button asChild className={`${area.featured ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700' : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'} text-white shadow-lg transform hover:scale-105 transition-all duration-300`}>
                        <Link to="/contact">Get Free Quote</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {area.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-bold text-xl mb-4 text-gray-800 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Services Available in {area.name}:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {area.services.map((service, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                            <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                            <span className="text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`p-6 rounded-xl ${area.featured ? 'bg-gradient-to-r from-indigo-50 to-purple-50' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <p className="font-bold text-lg text-gray-800 mb-1">Need External Cleaning in {area.name}?</p>
                          <p className="text-gray-600">Contact us today for a free, no-obligation quote</p>
                        </div>
                        <Button asChild variant="outline" className={`${area.featured ? 'border-indigo-500 text-indigo-600 hover:bg-indigo-50' : 'border-blue-500 text-blue-600 hover:bg-blue-50'} whitespace-nowrap`}>
                          <a href="tel:07845463877" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            07845 463877
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section with Modern Design */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-4">
                <Award className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-white font-medium">Why Choose RRM</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Why Choose RRM Across North West UK?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Local expertise with regional coverage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Local Knowledge",
                  description: "We understand the specific cleaning needs of each area we serve",
                  icon: <MapPin className="h-8 w-8" />,
                },
                {
                  title: "Fast Response",
                  description: "Quick service across all our coverage areas",
                  icon: <Clock className="h-8 w-8" />,
                },
                {
                  title: "Consistent Quality",
                  description: "Same high standards wherever we work",
                  icon: <Star className="h-8 w-8" />,
                },
                {
                  title: "Competitive Pricing",
                  description: "Fair, transparent pricing across all locations",
                  icon: <Shield className="h-8 w-8" />,
                },
              ].map((item, index) => (
                <Card key={index} className="border-0 bg-white/10 backdrop-blur-md text-center hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-yellow-300">{item.icon}</div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { value: "20+", label: "Service Areas", icon: <MapPin className="h-6 w-6" /> },
                { value: "5000+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> },
                { value: "15+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
                { value: "100%", label: "Satisfaction", icon: <Star className="h-6 w-6" /> },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Modern Design */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
                <span className="text-white font-medium">Get In Touch</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Find Out If We Cover Your Area
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Get in touch today and we'll confirm if we can help with your external cleaning needs
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-blue-50 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Link to="/contact">Request Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 backdrop-blur-sm">
                  <a href="tel:07845463877" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call 07845 463877
                  </a>
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

export default ServiceAreas;