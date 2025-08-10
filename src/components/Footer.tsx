import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Send
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Products & Services": [
      "Corporate Fixed Deposits",
      "Bonds & NCDs",
      "Mutual Funds",
      "Alternative Investment Funds",
      "Insurance Solutions"
    ],
    "Resources": [
      "SIP Calculator",
      "Goal Planner",
      "Market Insights"
    ],
    "Company": [
      "About Us",
      "Our Team",
      "Contact Us"
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated with Market Insights</h3>
              <p className="text-primary-foreground/80">
                Get weekly market analysis, investment tips, and exclusive insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="gold" className="sm:w-auto">
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold mb-4">
                AditionMoney <span className="text-gold">Services</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
                Your trusted financial partner for wealth creation, preservation, and growth. 
                Over 20 years of experience in Indian financial markets.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-gold" />
                  <span>+91 9849551789</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-gold" />
                  <span>aditionmoneyservices@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-gold mt-0.5" />
                  <span>6-3-902/A, G-24, Central Court Apts, Rajbhavan Road, Somajiguda, Hyderabad, Telangana 500082</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4 text-gold">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 AditionMoney Services. All rights reserved.
            </div>
            
            <div className="text-xs text-primary-foreground/60 text-center lg:text-right max-w-2xl">
              <p>
                <strong>Important Disclaimer:</strong> Mutual fund investments are subject to market risks. 
                Please read all scheme related documents carefully before investing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;