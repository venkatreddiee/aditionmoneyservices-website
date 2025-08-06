import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, TrendingUp, BookOpen, AlertCircle } from "lucide-react";

const InsightsPreview = () => {
  const insights = [
    {
      category: "Market Analysis",
      title: "Q3 FY24 Market Outlook: Navigating Volatility with Strategic Asset Allocation",
      description: "Our comprehensive analysis of market trends and recommended portfolio adjustments for the upcoming quarter.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      category: "Tax Planning",
      title: "New SWP/STP Tax Rules: What Investors Need to Know for FY 2024-25",
      description: "Understanding the recent changes in taxation of systematic withdrawal and transfer plans.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      category: "Investment Strategy",
      title: "Building Wealth Through Mid-Cap Funds: Opportunities and Risks",
      description: "A deep dive into mid-cap mutual funds and their role in long-term wealth creation.",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      featured: false
    },
    {
      category: "Product Launch",
      title: "New ELSS Funds with Enhanced Tax Benefits: A Comparative Analysis",
      description: "Analyzing the latest tax-saving mutual fund options launched this quarter.",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      featured: false
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Market Analysis":
        return TrendingUp;
      case "Tax Planning":
        return AlertCircle;
      case "Investment Strategy":
        return BookOpen;
      default:
        return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Market Analysis":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Tax Planning":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Investment Strategy":
        return "bg-green-100 text-green-800 border-green-200";
      case "Product Launch":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Latest Insights & Market Analysis
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our expert analysis, market commentary, and investment insights 
            to make better financial decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-8">
            {insights
              .filter(insight => insight.featured)
              .map((insight, index) => {
                const IconComponent = getCategoryIcon(insight.category);
                return (
                  <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <IconComponent className="h-16 w-16 text-primary" />
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={getCategoryColor(insight.category)}>
                          {insight.category}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {insight.date}
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {insight.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {insight.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{insight.readTime}</span>
                        <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>

          {/* Recent Articles */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Recent Articles</h3>
            {insights
              .filter(insight => !insight.featured)
              .map((insight, index) => {
                const IconComponent = getCategoryIcon(insight.category);
                return (
                  <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {insight.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {insight.date}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {insight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {insight.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{insight.readTime}</span>
                        <Button variant="ghost" size="sm" className="text-xs group-hover:text-primary">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

            <Button variant="outline" className="w-full">
              View All Insights
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsPreview;