import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Shield, Banknote, PieChart, Home, Briefcase } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Building2,
      title: "Corporate Fixed Deposits",
      description: "Secure investment option with higher returns than traditional bank FDs",
      features: ["Higher interest rates", "Flexible tenure options", "Regular income", "Capital protection"],
      eligibility: "Minimum investment: ₹1 Lakh",
      cta: "Explore FDs"
    },
    {
      icon: TrendingUp,
      title: "Bonds & Fixed Income",
      description: "Diversified portfolio of government and corporate bonds",
      features: ["Government Securities", "Corporate Bonds", "NCDs", "54EC Bonds", "SGBs"],
      eligibility: "All investor categories",
      cta: "View Bonds"
    },
    {
      icon: PieChart,
      title: "Mutual Funds",
      description: "Comprehensive range of mutual fund schemes across categories",
      features: ["Equity Funds", "Debt Funds", "Hybrid Funds", "ELSS", "Index Funds"],
      eligibility: "SIP starting from ₹500",
      cta: "Start SIP"
    },
    {
      icon: Briefcase,
      title: "Portfolio Management Services",
      description: "Professional portfolio management for high net worth individuals",
      features: ["Customized portfolios", "Professional management", "Direct equity", "Regular monitoring"],
      eligibility: "Minimum: ₹50 Lakhs",
      cta: "Learn More"
    },
    {
      icon: Banknote,
      title: "Alternative Investment Funds",
      description: "Access to exclusive investment opportunities",
      features: ["Category I AIF", "Category II AIF", "Private Equity", "Real Estate"],
      eligibility: "Minimum: ₹1 Crore",
      cta: "Explore AIFs"
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Comprehensive life and general insurance products",
      features: ["Term Life Insurance", "ULIP", "Health Insurance", "Motor Insurance"],
      eligibility: "All age groups",
      cta: "Get Quote"
    },
    {
      icon: Home,
      title: "Unlisted Equities",
      description: "Investment opportunities in pre-IPO and unlisted companies",
      features: ["Pre-IPO investments", "Growth companies", "High return potential", "Expert screening"],
      eligibility: "Minimum: ₹5 Lakhs",
      cta: "View Opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Products & <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to meet your investment goals and risk appetite
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-primary/20 to-gold/20 p-3 rounded-lg">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{product.title}</CardTitle>
                          <CardDescription className="mt-2">{product.description}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Eligibility:</span> {product.eligibility}
                        </p>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button variant="gold" size="sm">
                          {product.cta}
                        </Button>
                        <Button variant="outline" size="sm">
                          Download Brochure
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Products?</h2>
            <p className="text-muted-foreground">We provide comprehensive solutions with expert guidance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Expert Selection</CardTitle>
                <CardDescription>
                  Our team of experts carefully screens and selects the best products for optimal returns
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Personalized Advice</CardTitle>
                <CardDescription>
                  Get customized investment recommendations based on your goals and risk profile
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Ongoing Support</CardTitle>
                <CardDescription>
                  Continuous monitoring and support to help you achieve your financial objectives
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;