import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Trusted
                <span className="block text-gold">Financial Partner</span>
                for Wealth Creation
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
                With over 20 years of experience, we provide comprehensive financial solutions 
                including mutual funds, PMS, AIF, and insurance services tailored for Indian investors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Your Investment Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
                Calculate SIP Returns
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">20+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">1000+</div>
                <div className="text-sm text-primary-foreground/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">₹500Cr+</div>
                <div className="text-sm text-primary-foreground/80">Assets Under Advisory</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <h3 className="text-xl font-semibold mb-4">Why Choose WealthWise Capital?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h4 className="font-medium">SEBI Registered</h4>
                    <p className="text-sm text-primary-foreground/80">Fully compliant and regulated financial advisory</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h4 className="font-medium">Proven Track Record</h4>
                    <p className="text-sm text-primary-foreground/80">Consistent outperformance across market cycles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h4 className="font-medium">Personalized Service</h4>
                    <p className="text-sm text-primary-foreground/80">Dedicated relationship managers for every client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;