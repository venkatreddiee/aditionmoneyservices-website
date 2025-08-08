import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">AditionMoney</span> <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in wealth creation and preservation with over 20 years of expertise in financial services
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded with a vision to democratize wealth management, AditionMoney Services has been at the forefront 
                of financial innovation for over two decades. We believe that every individual deserves access to 
                professional financial guidance and world-class investment solutions.
              </p>
              <p className="text-muted-foreground mb-6">
                Our journey began with a simple mission: to bridge the gap between complex financial products and 
                everyday investors. Today, we serve thousands of clients across India, helping them achieve their 
                financial goals through personalized investment strategies and cutting-edge technology.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-gold/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span className="text-muted-foreground">Wealth Creation through disciplined investing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span className="text-muted-foreground">Wealth Preservation with risk management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span className="text-muted-foreground">Wealth Distribution for sustainable income</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Founder</h2>
            <p className="text-muted-foreground">Leadership driven by expertise and integrity</p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">KJ</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">K Jeevan Reddy</h3>
                  <p className="text-muted-foreground">Founder & CEO</p>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-muted-foreground mb-4">
                    With over 20 years of experience in financial services, K Jeevan Reddy founded AditionMoney Services 
                    with a vision to make professional wealth management accessible to all. His expertise spans 
                    across mutual funds, portfolio management, and alternative investments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">CFP Certified</Badge>
                    <Badge variant="secondary">AMFI Registered</Badge>
                    <Badge variant="secondary">CFA Charterholder</Badge>
                    <Badge variant="secondary">20+ Years Experience</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Certifications & Compliance</h2>
            <p className="text-muted-foreground">Regulated and certified for your peace of mind</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">AMFI Registration</CardTitle>
                <CardDescription>ARN-12345</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">SEBI Registered</CardTitle>
                <CardDescription>Investment Advisor</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">CFP Certification</CardTitle>
                <CardDescription>Certified Financial Planner</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">ISO Certified</CardTitle>
                <CardDescription>Quality Management</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;