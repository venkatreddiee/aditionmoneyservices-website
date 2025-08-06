import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, TrendingUp } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "HDFC Mutual Fund Launches New Healthcare Fund",
      summary: "New sectoral fund targeting pharmaceutical and healthcare companies with 3-year lock-in period.",
      date: "2 hours ago",
      category: "Product Launch",
      urgent: false
    },
    {
      title: "RBI Repo Rate Decision Expected Next Week",
      summary: "Market anticipates status quo with focus on inflation trajectory and global economic developments.",
      date: "5 hours ago",
      category: "Market News",
      urgent: true
    },
    {
      title: "New Tax Rules for International Mutual Funds",
      summary: "SEBI introduces additional disclosure requirements for funds with international exposure.",
      date: "1 day ago",
      category: "Regulatory",
      urgent: false
    },
    {
      title: "Equity Markets Hit Fresh All-Time Highs",
      summary: "Nifty 50 crosses 21,000 mark amid strong FII inflows and positive Q3 earnings outlook.",
      date: "1 day ago",
      category: "Market News",
      urgent: false
    },
    {
      title: "SBI Launches AI-Powered Investment Platform",
      summary: "New digital platform offers personalized investment recommendations using machine learning.",
      date: "2 days ago",
      category: "Technology",
      urgent: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Product Launch":
        return "bg-green-100 text-green-800 border-green-200";
      case "Market News":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Regulatory":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Technology":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Market News & Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay updated with the latest market developments, regulatory changes, 
              and product launches in the Indian financial markets.
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <Button variant="hero">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {news.map((item, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-card transition-all duration-300 border-border/50 ${
                item.urgent ? 'ring-2 ring-gold/20 border-gold/30' : ''
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    {item.urgent && (
                      <Badge variant="destructive" className="text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.summary}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group-hover:text-primary transition-colors p-0 h-auto font-medium"
                >
                  Read Full Story
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All News & Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;