import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Award, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
              R.R.M External Cleaning Specialist
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-accent drop-shadow-md">
              Transform Your Property with Professional Exterior Cleaning
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white/95 font-medium drop-shadow-md max-w-4xl mx-auto">
              Experience the ultimate in external cleaning excellence. Based in Newton-le-Willows, 
              we provide superior cleaning services for homes and businesses across the North West.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button asChild size="lg" className="bg-accent text-primary font-bold text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white font-bold text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <a href="tel:07845463877" className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  07845 463877
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Star, text: "5 Star Rated Service" },
                { icon: Award, text: "Years of Experience" },
                { icon: Shield, text: "Fully Insured & Certified" }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-accent" />
                  <span className="font-bold text-white text-center">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;