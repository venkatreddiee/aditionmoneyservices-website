import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Award, Users, TrendingUp } from "lucide-react";

const Partners = () => {
  const mutualFundPartners = [
    { name: "HDFC Mutual Fund", aum: "₹4.5 Lakh Cr", schemes: "45+" },
    { name: "ICICI Prudential MF", aum: "₹4.2 Lakh Cr", schemes: "40+" },
    { name: "SBI Mutual Fund", aum: "₹3.8 Lakh Cr", schemes: "35+" },
    { name: "Axis Mutual Fund", aum: "₹2.5 Lakh Cr", schemes: "30+" },
    { name: "Kotak Mutual Fund", aum: "₹2.2 Lakh Cr", schemes: "28+" },
    { name: "Nippon India MF", aum: "₹2.0 Lakh Cr", schemes: "32+" },
    { name: "Aditya Birla Sun Life MF", aum: "₹3.1 Lakh Cr", schemes: "38+" },
    { name: "Mirae Asset MF", aum: "₹1.8 Lakh Cr", schemes: "25+" }
  ];

  const insurancePartners = [
    { name: "HDFC Life", category: "Life Insurance", products: "25+" },
    { name: "ICICI Prudential Life", category: "Life Insurance", products: "30+" },
    { name: "SBI Life", category: "Life Insurance", products: "28+" },
    { name: "HDFC ERGO", category: "General Insurance", products: "15+" },
    { name: "ICICI Lombard", category: "General Insurance", products: "18+" },
    { name: "Bajaj Allianz", category: "General Insurance", products: "20+" }
  ];

  const bondPartners = [
    { name: "NSE", category: "Exchange", type: "Government & Corporate Bonds" },
    { name: "BSE", category: "Exchange", type: "Corporate Bonds & NCDs" },
    { name: "RBI", category: "Regulator", type: "Government Securities" },
    { name: "SEBI", category: "Regulator", type: "Corporate Bonds" }
  ];

  const achievements = [
    {
      icon: Users,
      title: "500+",
      description: "Happy Clients",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "₹100+ Cr",
      description: "Assets Under Advisory",
      color: "text-gold"
    },
    {
      icon: Award,
      title: "20+",
      description: "Years of Excellence",
      color: "text-primary"
    },
    {
      icon: Building2,
      title: "50+",
      description: "Partner AMCs",
      color: "text-gold"
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
              Our <span className="text-primary">Partners</span> & <span className="text-gold">Affiliations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We partner with India's leading financial institutions to bring you the best investment opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${achievement.color}`} />
                    <h3 className="text-3xl font-bold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mutual Fund Partners */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Mutual Fund Partners</h2>
            <p className="text-muted-foreground">Leading Asset Management Companies we work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mutualFundPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-br from-primary/20 to-gold/20 p-4 rounded-lg mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">AUM:</span>
                    <Badge variant="secondary">{partner.aum}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Schemes:</span>
                    <Badge variant="outline">{partner.schemes}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Insurance Partners</h2>
            <p className="text-muted-foreground">Trusted insurance companies for comprehensive coverage</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insurancePartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {partner.name}
                    <Badge variant="secondary">{partner.category}</Badge>
                  </CardTitle>
                  <CardDescription>
                    {partner.products} products available
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bond & Exchange Partners */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Bond & Exchange Partners</h2>
            <p className="text-muted-foreground">Regulated platforms for secure fixed income investments</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {bondPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    <Badge variant={partner.category === 'Exchange' ? 'secondary' : 'outline'}>
                      {partner.category}
                    </Badge>
                  </div>
                  <CardDescription>{partner.type}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Regulatory Compliance</h2>
            <p className="text-muted-foreground">We are registered and regulated by leading financial authorities</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>AMFI</CardTitle>
                <CardDescription>Mutual Fund Distributor</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>SEBI</CardTitle>
                <CardDescription>Investment Advisor</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>IRDA</CardTitle>
                <CardDescription>Insurance Broker</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>RBI</CardTitle>
                <CardDescription>NBFC Compliance</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;