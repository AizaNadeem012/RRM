import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
// Assuming these icons are available in lucide-react
import { Award, Users, Shield, Leaf, Target, Heart, TrendingUp, CheckCircle, Star, Building, Phone, MapPin, Mail, Clock, Zap, ThumbsUp, Briefcase, Globe, Smile, HardHat, Microscope, Flame, Wrench, Truck, DollarSign, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import RRMLogo from "@/components/ui/logo";

const About = () => {
  // Retaining the core stats but framing them with real numbers where possible
  const stats = [
    { value: "8+", label: "Years of Expertise" },
    { value: "500+", label: "Properties Transformed" },
    { value: "Eco-First", label: "Cleaning Philosophy" },
    { value: "100%", label: "Insurance & Compliance" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Guiding Mission",
      description: "To be the premier exterior cleaning specialist in Newton-le-Willows, dedicated to safeguarding and dramatically enhancing the visual appeal and longevity of every property we touch. We achieve this through unparalleled technical skill, unwavering professionalism, and a commitment to absolute client trust.",
    },
    {
      icon: Heart,
      title: "Our Enduring Vision",
      description: "We envision a future where every home and business in our community benefits from impeccable, sustainable exterior maintenance. Our drive is to blend quality care and expert execution, ensuring surfaces are not just clean, but truly revitalized, extending their lifespan with every service.",
    },
  ];

  const certifications = [
    "SafeContractor Approved",
    "CHAS Accredited",
    "Public Liability Insurance (£10m)",
    "Environmental Compliance Certified",
    "Advanced Health & Safety Certified",
    "Professional Trade Association Member",
  ];

  const teamPillars = [
    {
      icon: Users,
      role: "Master Technicians",
      description: "Our team comprises highly vetted cleaning specialists who have mastered their craft through rigorous, continuous training and years of proven, hands-on application across diverse surface types.",
    },
    {
      icon: Shield,
      role: "Safety & Compliance Oversight",
      description: "Dedicated safety officers enforce stringent protocols, ensuring every task, from initial setup to final rinse, adheres to the highest UK safety and regulatory standards.",
    },
    {
      icon: Smile,
      role: "Client Success Concierge",
      description: "A responsive, friendly team acts as your dedicated point of contact, handling scheduling, personalized consultation, and ensuring your service experience is seamless and positive.",
    },
  ];

  const equipment = [
      { icon: Microscope, title: "Diagnostic Testing", description: "Pre-service chemical and material analysis to select the perfect, non-damaging cleaning agent." },
      { icon: Flame, title: "Thermal Pressure Systems", description: "Utilizing controlled hot water systems to deep-clean organic matter without the high risk of cold-pressure erosion." },
      { icon: Wrench, title: "Specialised Tooling", description: "A calibrated arsenal of tools for roof, render, decking, and paving, ensuring precision across all exterior substrates." },
      { icon: Truck, title: "Mobile Operations Unit", description: "Our fully equipped, tracked service van ensures we arrive prepared for any contingency." },
  ];
  
  // ## NEW SECTION DATA: 5-Step Process ##
  const cleaningProcess = [
      { step: 1, icon: BookOpen, title: "Assessment & Quotation", description: "A detailed on-site or virtual inspection to identify surface composition and contamination. Transparent, fixed pricing provided upfront." },
      { step: 2, icon: Zap, title: "Pre-Treatment & Protection", description: "Application of targeted, bio-degradable cleaning agents and thorough protection of nearby sensitive areas (landscaping, fixtures)." },
      { step: 3, icon: Wrench, title: "Precision Cleaning Execution", description: "Utilizing the correct low-pressure, soft-wash, or hot-water method for your specific surface (roof, render, patio, etc.)." },
      { step: 4, icon: ThumbsUp, title: "Rinse & Neutralisation", description: "Thorough rinsing followed by a pH-neutralising flush to secure the surface integrity and prevent residue or etching." },
      { step: 5, icon: CheckCircle, title: "Final Inspection & Sign-Off", description: "A quality check conducted jointly with the client to ensure 100% satisfaction before we pack up." },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="pt-20">
        {/* Section 1: Hero - More Evocative */}
        <section className="py-32 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="mb-8 transform transition duration-500 hover:scale-105 inline-block">
                <RRMLogo size="xl" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
                Crafting Curb Appeal. <br /> Built on Trust.
              </h1>
              <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-4xl mx-auto font-light">
                **R.R.M External Cleaning Specialist** delivers **benchmark exterior care** from our base in Newton-le-Willows, preserving and elevating the true value of your property with expert precision.
              </p>
              <Button asChild size="lg" className="shadow-2xl bg-accent hover:bg-accent/90 text-primary font-bold text-lg transition transform hover:scale-105">
                <Link to="/services">Explore Our Signature Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Our Narrative - Expanded & Elegant */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                  The R.R.M Difference: Rooted in Dedication
                </h2>
                <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Discover the journey and philosophy that drives our commitment to being the leading external cleaning authority in the region.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2 space-y-8">
                  <p className="text-lg text-gray-700 border-l-4 border-primary pl-4 leading-relaxed">
                    Founded on the principle of **uncompromising quality**, R.R.M External Cleaning Specialist was established to address a gap in the market: the need for a cleaning service that marries **old-fashioned reliability with modern, sustainable technology**. From our start in Newton-le-Willows, we've grown by focusing on one thing: delivering results that consistently *exceed* expectation.
                  </p>
                  <p className="text-lg text-gray-700 border-l-4 border-accent pl-4 leading-relaxed">
                    I personally oversee every major project, ensuring the initial detailed assessment translates into a bespoke execution plan. We don't just clean surfaces; we **restore the integrity and visual statement** of your property, whether it's a residential facade or a commercial exterior. Our methodical approach guarantees safety, efficiency, and a finish you'll be proud of for years to come.
                  </p>
                  <p className="text-lg text-gray-700 italic border-t-2 border-gray-200 pt-4 leading-relaxed">
                    "My reputation is built on every clean. If it's not perfect, we haven't finished." - *R.R.M Founder*
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
                  <img 
                    src="/before-after.webp" 
                    alt="Before and after cleaning transformation" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white backdrop-blur-sm">
                    <p className="font-semibold">Dedication in Every Detail</p>
                  </div>
                </div>
              </div>

              {/* Inline Stats Refined */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-8 border-t">
                {stats.map((stat, index) => (
                  <div key={index} className="p-4 border-b-4 border-primary/50">
                    <div className={`text-5xl font-extrabold mb-1 ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                      {stat.value}
                    </div>
                    <div className="text-base uppercase tracking-wider text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Mission & Vision - Elevated Presentation */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                Our Core Ethos: Mission, Vision, & Trust
              </h2>
              <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-t-4 border-primary/50 bg-white rounded-lg overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4 shadow-md">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-3xl font-bold text-primary">{value.title}</h3>
                      </div>
                      <p className="text-lg text-gray-700 mt-4 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Section 4: The Technology Advantage - Expanded */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                        The Science Behind the Shine: Our Equipment
                    </h2>
                    <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We invest in industry-leading, low-impact technology to ensure superior results without risking surface damage.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {equipment.map((item, index) => (
                        <Card key={index} className="text-center p-6 shadow-lg hover:shadow-2xl transition duration-300 bg-gray-50 border-b-4 border-accent">
                            <item.icon className="h-10 w-10 text-secondary mx-auto mb-3"/>
                            <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* NEW SECTION 4.5: Our Signature 5-Step Cleaning Process */}
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                        Our Signature 5-Step Cleaning Process
                    </h2>
                    <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Transparency is key. Here is the methodical approach we use to guarantee a flawless, safe, and long-lasting result on every property.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {cleaningProcess.map((item) => (
                        <div key={item.step} className="relative text-center flex flex-col items-center">
                            {/* Icon Container */}
                            <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-xl z-10">
                                <item.icon className="h-8 w-8 text-accent"/>
                            </div>
                            {/* Step Label */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[18px] bg-secondary text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full border-2 border-white">
                                {item.step}
                            </div>
                            
                            <Card className="mt-6 p-4 pt-10 w-full shadow-lg border-t-4 border-primary hover:shadow-2xl transition duration-300">
                                <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </Card>
                            
                            {/* Connecting Line */}
                            {item.step < 5 && (
                                <div className="absolute top-8 left-[calc(50% + 32px)] right-[calc(50% - 32px)] h-0.5 bg-gray-300 -z-0 hidden md:block"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* NEW SECTION 4.6: Eco-Commitment & Surface Safety */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="text-left mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                                Safety & Sustainability: Our Dual Promise
                            </h2>
                            <div className="w-32 h-1 bg-secondary mb-6"></div>
                            <p className="text-xl text-gray-600 mb-6">
                                We believe cleaning should never come at the expense of your property or the environment.
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                                <Leaf className="h-8 w-8 text-green-700 mt-1 flex-shrink-0"/>
                                <div>
                                    <h4 className="font-bold text-lg text-green-800">Environmental Stewardship</h4>
                                    <p className="text-gray-700 text-sm">We exclusively use **biodegradable, non-caustic solutions** approved for residential and commercial use, ensuring runoff poses zero threat to your lawn or local water systems.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                                <HardHat className="h-8 w-8 text-blue-700 mt-1 flex-shrink-0"/>
                                <div>
                                    <h4 className="font-bold text-lg text-blue-800">Surface Integrity Guarantee</h4>
                                    <p className="text-gray-700 text-sm">High-pressure washing is *rarely* used. Our mastery of **soft washing and controlled chemical application** means we eliminate biological growth without eroding moss, damaging mortar, or fading paintwork.</p>
                                </div>
                            </div>
                        </div>
                        <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-white">
                            <Link to="/contact?focus=safety">Learn More About Our Methods</Link>
                        </Button>
                    </div>

                    {/* Image/Visual */}
                    <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition duration-500">
                        <img 
                            src="/eco.webp" 
                            alt="Eco-friendly cleaning practices" 
                            className="w-full h-96 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-primary/80 text-white backdrop-blur-sm">
                            <p className="font-semibold flex items-center gap-2"><Sparkles className='w-5 h-5'/> Safe for Pets & Plants</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 5 (Now 6): Why Choose R.R.M - Focusing on Trust & Certification */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                Accredited. Insured. Exceptional.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We back our quality promise with verifiable credentials, ensuring peace of mind on every project.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              
              {/* Column 1: Key Differentiators */}
              <div className="space-y-8 lg:col-span-2">
                  <div className="grid md:grid-cols-2 gap-8">
                      {[
                          {
                              icon: Award,
                              title: "Proven Experience",
                              description: "Leveraging years of hands-on expertise to tackle any exterior challenge effectively."
                          },
                          {
                              icon: Leaf,
                              title: "Sustainable Practice",
                              description: "Committed to the planet by prioritizing eco-friendly solutions and responsible resource management."
                          },
                          {
                              icon: Target,
                              title: "Precision Execution",
                              description: "Every job is customized; we never offer a one-size-fits-all cleaning approach."
                          },
                          {
                              icon: DollarSign,
                              title: "Transparent Pricing",
                              description: "No hidden fees. Clear, written quotes provided before any work begins."
                          },
                      ].map((item, index) => (
                          <Card key={index} className="hover:ring-2 ring-accent/50 transition duration-300 border-l-4 border-primary/50 bg-white">
                              <CardContent className="p-6 flex items-start gap-4">
                                  <item.icon className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                                  <div>
                                      <h3 className="text-xl font-semibold mb-1 text-gray-800">{item.title}</h3>
                                      <p className="text-gray-600 text-sm">{item.description}</p>
                                  </div>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </div>

              {/* Column 2: Compliance Showcase */}
              <div className="bg-primary/10 p-8 rounded-xl shadow-inner h-fit">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-primary mr-3"/>
                  <h3 className="text-2xl font-bold text-primary">Accreditations & Insurance</h3>
                </div>
                <p className="text-gray-700 mb-4 text-sm">We adhere strictly to the highest industry and legal standards, demonstrated by our verifiable qualifications:</p>
                <ul className="space-y-3 text-sm">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 (Now 7): Meet The Team - Focusing on structure */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                The People Powering Your Perfection
              </h2>
              <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                It's not just equipment; it's the dedicated professionals behind the brand that ensure consistent, top-tier service delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {/* Founder/Owner with Image */}
                <Card className="text-center p-8 bg-primary/10 shadow-xl border-t-8 border-primary">
                    <img 
                        src="/team-photo.jpg" 
                        alt="R.R.M Founder" 
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white"
                    />
                    <h3 className="text-2xl font-bold mb-1 text-gray-800">R.R.M (The Founder)</h3>
                    <p className="text-lg font-semibold text-primary mb-3">Visionary & Lead Technician</p>
                    <p className="text-sm text-gray-700">The driving force behind the business, setting the standard for quality and client relations. Personally involved in establishing best practices.</p>
                </Card>
                
                {teamPillars.map((pillar, index) => {
                    const Icon = pillar.icon;
                    return (
                        <Card key={index} className="text-center p-8 shadow-lg hover:shadow-xl transition duration-300 bg-gray-50">
                            <Icon className="h-10 w-10 text-secondary mx-auto mb-4"/>
                            <h3 className="text-xl font-bold mb-1 text-gray-800">{pillar.role}</h3>
                            <p className="text-sm text-gray-600">{pillar.description}</p>
                        </Card>
                    );
                })}
            </div>
          </div>
        </section>

        {/* Section 7 (Now 8): Our Local Commitment - NEW SECTION */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                Rooted in Newton-le-Willows
              </h2>
              <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We're not just a service *in* the area; we are *part* of the community. Understanding the local environment is key to superior exterior care.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                <div className="bg-white p-8 rounded-xl shadow-lg border-4 border-dashed border-secondary/50 space-y-4">
                    <div className="flex items-center gap-3"><MapPin className="h-6 w-6 text-primary"/> <span className="font-semibold">Local Knowledge Advantage:</span></div>
                    <p className="text-gray-700">We understand the unique weather patterns, common surface types (e.g., local sandstone, brick), and aesthetic expectations specific to Newton-le-Willows and the surrounding Merseyside/Lancashire area.</p>
                    
                    <div className="flex items-center gap-3"><Building className="h-6 w-6 text-primary"/> <span className="font-semibold">Community Focused:</span></div>
                    <p className="text-gray-700">By working locally, we reduce our transit footprint, offer faster response times, and build the strong, personal relationships that define our business.</p>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl h-80">
                    <img 
                        src="https://picsum.photos/seed/newton-le-willows/600/400.jpg" 
                        alt="Newton-le-Willows map" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

          </div>
        </section>

        {/* Section 8 (Now 9): Testimonials - More Detail */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                Voices of Our Valued Clients
              </h2>
              <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                  {
                      name: "John D.",
                      location: "Warrington Homeowner",
                      text: "The difference is night and day. John was professional, punctual, and used methods that made me confident about my garden plants. True exterior transformation!",
                      rating: 5,
                  },
                  {
                      name: "Jane E.",
                      location: "Local Business Owner",
                      text: "Impressed by their **CHAS accreditation** and professionalism. They handled our commercial premises with minimal disruption and a flawless result. Highly recommend for businesses.",
                      rating: 5,
                  },
                  {
                      name: "Michael S.",
                      location: "Newton-le-Willows Resident",
                      text: "Beyond expectations! From initial quote to the final check, the service was meticulous. It's clear R.R.M. cares about property longevity, not just a quick clean.",
                      rating: 5,
                  },
              ].map((testimonial, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-t-8 border-secondary/50 bg-gray-50 rounded-lg">
                      <CardContent className="p-6">
                          <div className="flex mb-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                              ))}
                          </div>
                          <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                          <div className="font-bold text-primary">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.location}</div>
                      </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9 (Now 10): Contact Information - More Visual */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                Ready for Your Property Revival?
              </h2>
              <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Details Column */}
              <div className="space-y-8 p-8 bg-white rounded-xl shadow-lg border-t-4 border-primary">
                
                <div className="flex items-start gap-4 border-b pb-4">
                  <MapPin className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-gray-800">Our Service Hub</h3>
                    <p className="text-gray-700">9 Noon Court, Newton-le-Willows, Reino Unido</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-b pb-4">
                  <Phone className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-gray-800">Direct Line</h3>
                    <p className="text-gray-700 font-mono">07845 463877</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-gray-800">Operating Hours</h3>
                    <div className="text-gray-700 space-y-0.5">
                      <p>Mon - Fri: <span className="font-semibold">06:00 – 23:00</span></p>
                      <p>Sat - Sun: <span className="font-semibold">06:00 – 22:00</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Block */}
              <div className="bg-primary/10 rounded-xl p-8 shadow-lg flex flex-col justify-center items-center text-center border-4 border-dashed border-secondary/50">
                <TrendingUp className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-3xl font-bold mb-4 text-primary">Secure Your Date</h3>
                <p className="text-lg text-gray-700 mb-6">Book your consultation today for a detailed, no-obligation quote tailored exactly to your property's needs.</p>
                <div className="space-y-3 w-full max-w-xs">
                  <Button asChild size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-xl">
                    <Link to="/contact">Book Your Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    <a href="https://wa.me/447845463877" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4"/> Instant WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 10 (Now 11): Final CTA - Reiterate Urgency */}
        <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight">
              Don't Let Grime Diminish Your Investment.
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-4xl mx-auto">
              Join the many satisfied property owners who trust R.R.M for **precision, protection, and unparalleled curb appeal**.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 shadow-2xl text-lg transition transform hover:translate-y-[-2px]">
                <Link to="/contact">Get My Expert Quote Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg">
                <a href="tel:07845463877">Call Us Today</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
