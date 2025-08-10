import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Users, CheckCircle } from "lucide-react";

const PartnersSection = () => {
  const certifications = [
    {
      title: "SEBI Registered",
      subtitle: "Investment Advisor",
      description: "Licensed and regulated by Securities and Exchange Board of India",
      icon: Shield,
      number: "INA000012345"
    },
    {
      title: "AMFI Registered",
      subtitle: "Mutual Fund Distributor",
      description: "Authorized distributor for leading mutual fund houses in India",
      icon: Award,
      number: "ARN-123456"
    },
    {
      title: "CFP Certified",
      subtitle: "Financial Planner",
      description: "Certified Financial Planner with international certification",
      icon: Users,
      number: "CFP-IN-12345"
    }
  ];

  const partners = [
    "HDFC Mutual Fund",
    "ICICI Prudential",
    "SBI Mutual Fund",
    "Axis Mutual Fund",
    "Kotak Mahindra MF",
    "Aditya Birla Sun Life",
    "DSP Mutual Fund",
    "Franklin Templeton",
    "Nippon India MF",
    "UTI Mutual Fund",
    "Tata Mutual Fund",
    "Mirae Asset"
  ];

  const achievements = [
    {
      metric: "20+",
      label: "Years of Experience",
      description: "Proven track record in financial advisory"
    },
    {
      metric: "500+",
      label: "Satisfied Clients",
      description: "Individual and institutional investors"
    },
    {
      metric: "₹100Cr+",
      label: "Assets Under Advisory",
      description: "Managed across various asset classes"
    },
    {
      metric: "25+",
      label: "Partner AMCs",
      description: "Leading mutual fund companies"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Track Record</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {achievement.metric}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner AMCs */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Our Partner Asset Management Companies
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We work with India's leading mutual fund houses to provide you access to 
            the best investment products across all asset classes and categories.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-background rounded-lg border border-border/50 hover:shadow-card transition-all duration-300"
              >
                <div className="text-center">
                  <CheckCircle className="h-5 w-5 text-gold mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground">{partner}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> Mutual fund investments are subject to market risks. 
              Please read all scheme related documents carefully before investing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;