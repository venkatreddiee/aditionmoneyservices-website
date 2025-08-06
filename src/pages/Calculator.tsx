import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SIPCalculator from "@/components/SIPCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Target, TrendingUp, PieChart } from "lucide-react";

const CalculatorPage = () => {
  const calculatorTools = [
    {
      icon: Calculator,
      title: "SIP Calculator",
      description: "Calculate returns on your systematic investment plan",
      available: true
    },
    {
      icon: Target,
      title: "Goal Planner",
      description: "Plan investments for specific financial goals",
      available: false
    },
    {
      icon: TrendingUp,
      title: "Retirement Calculator",
      description: "Plan your retirement corpus and monthly needs",
      available: false
    },
    {
      icon: PieChart,
      title: "Asset Allocation",
      description: "Optimize your portfolio allocation across asset classes",
      available: false
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
              Financial <span className="text-primary">Calculators</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Smart tools to help you plan your investments and achieve your financial goals
            </p>
          </div>
        </div>
      </section>

      {/* SIP Calculator Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SIPCalculator />
        </div>
      </section>

      {/* Other Calculators */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">More Planning Tools</h2>
            <p className="text-muted-foreground">Additional calculators to help with your financial planning</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculatorTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card key={index} className={`transition-all duration-300 ${
                  tool.available 
                    ? 'hover:shadow-lg cursor-pointer' 
                    : 'opacity-60 cursor-not-allowed'
                }`}>
                  <CardHeader className="text-center">
                    <div className="bg-gradient-to-br from-primary/20 to-gold/20 p-4 rounded-lg mx-auto w-fit mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    {tool.available ? (
                      <span className="text-primary font-medium">Available</span>
                    ) : (
                      <span className="text-muted-foreground">Coming Soon</span>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Tips */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Investment Tips</h2>
            <p className="text-muted-foreground">Key principles for successful investing</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Start Early</CardTitle>
                <CardDescription>
                  The power of compounding works best when you start investing early. 
                  Even small amounts can grow significantly over time.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Stay Consistent</CardTitle>
                <CardDescription>
                  Regular investments through SIPs help you benefit from rupee cost averaging 
                  and reduce the impact of market volatility.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Diversify Portfolio</CardTitle>
                <CardDescription>
                  Spread your investments across different asset classes and sectors 
                  to minimize risk and optimize returns.
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

export default CalculatorPage;
