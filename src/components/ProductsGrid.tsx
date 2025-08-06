import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  TrendingUp, 
  PieChart, 
  Shield, 
  Landmark, 
  Target,
  ArrowRight
} from "lucide-react";

const ProductsGrid = () => {
  const products = [
    {
      icon: Building2,
      title: "Corporate Fixed Deposits",
      description: "Higher returns than bank FDs with carefully selected corporate bonds",
      features: ["8-12% returns", "Flexible tenure", "CRISIL rated"],
      color: "text-blue-600"
    },
    {
      icon: Landmark,
      title: "Bonds & NCDs",
      description: "Government securities, corporate bonds, and tax-saving instruments",
      features: ["Government securities", "Corporate bonds", "54EC bonds"],
      color: "text-green-600"
    },
    {
      icon: PieChart,
      title: "Mutual Funds",
      description: "Diversified portfolio management across equity, debt, and hybrid funds",
      features: ["SIP & lump sum", "Tax saving ELSS", "Goal-based investing"],
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Portfolio Management (PMS)",
      description: "Professional portfolio management for high net worth individuals",
      features: ["Min ₹50 lakhs", "Customized strategy", "Direct equity"],
      color: "text-orange-600"
    },
    {
      icon: Target,
      title: "Alternative Investment Funds",
      description: "Access to private equity, real estate, and alternative strategies",
      features: ["Category I & II", "Real estate funds", "Private equity"],
      color: "text-red-600"
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Comprehensive life and general insurance coverage",
      features: ["Term insurance", "Health insurance", "Motor insurance"],
      color: "text-teal-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Financial Products & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet your wealth creation, 
            preservation, and growth objectives at every stage of your financial journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-muted to-muted/50`}>
                    <product.icon className={`h-6 w-6 ${product.color}`} />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Explore All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;