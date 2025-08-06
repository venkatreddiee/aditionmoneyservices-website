import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "WealthWise Capital Pvt Ltd",
        "123 Business District, Financial Street",
        "Mumbai, Maharashtra 400001"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 98765 43210",
        "+91 22 2345 6789"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@wealthwisecapital.com",
        "support@wealthwisecapital.com"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const services = [
    "Mutual Fund Investment",
    "Portfolio Management Services",
    "Insurance Planning",
    "Tax Planning",
    "Retirement Planning",
    "Wealth Management",
    "Financial Advisory",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your wealth creation journey? Contact our expert advisors for personalized guidance
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">First Name *</label>
                      <Input placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Last Name *</label>
                      <Input placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address *</label>
                    <Input type="email" placeholder="Enter your email" required />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone Number *</label>
                    <Input type="tel" placeholder="Enter your phone number" required />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Service Interested In *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Investment Amount Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select investment range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below-1lakh">Below ₹1 Lakh</SelectItem>
                        <SelectItem value="1-5lakh">₹1 - 5 Lakhs</SelectItem>
                        <SelectItem value="5-10lakh">₹5 - 10 Lakhs</SelectItem>
                        <SelectItem value="10-25lakh">₹10 - 25 Lakhs</SelectItem>
                        <SelectItem value="25-50lakh">₹25 - 50 Lakhs</SelectItem>
                        <SelectItem value="50lakh-1cr">₹50 Lakhs - 1 Crore</SelectItem>
                        <SelectItem value="above-1cr">Above ₹1 Crore</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us about your investment goals and how we can help you..."
                      rows={4}
                    />
                  </div>
                  
                  <Button variant="gold" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-primary/20 to-gold/20 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Choose how you'd like to connect with us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start Live Chat
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule a Callback
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Request a Call Back
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-gold/10 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-medium">Interactive Map</p>
                    <p className="text-muted-foreground text-sm">Mumbai Office Location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is the minimum investment amount?</CardTitle>
                <CardDescription>
                  The minimum investment varies by product. For mutual funds, you can start with as low as ₹500 
                  through SIP. For PMS, the minimum is ₹50 lakhs.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you charge any advisory fees?</CardTitle>
                <CardDescription>
                  We offer transparent fee structure with no hidden charges. Our fees are clearly communicated 
                  upfront and vary based on the service and investment amount.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How often will I receive portfolio updates?</CardTitle>
                <CardDescription>
                  You'll receive monthly portfolio statements and quarterly review calls. Our digital platform 
                  provides real-time access to your portfolio performance.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are my investments safe with you?</CardTitle>
                <CardDescription>
                  Yes, we are SEBI registered and follow all regulatory guidelines. Your investments are held 
                  with regulated custodians and AMCs, ensuring complete safety.
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

export default Contact;