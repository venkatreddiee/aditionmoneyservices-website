import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Search, TrendingUp, BookOpen, DollarSign, PieChart, BarChart3, Shield } from "lucide-react";

const Insights = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Understanding SWP vs STP: Tax Implications and Strategic Benefits",
      excerpt: "A comprehensive analysis of Systematic Withdrawal Plans versus Systematic Transfer Plans and their tax implications for investors.",
      category: "Tax Planning",
      author: "John Doe",
      date: "2024-01-15",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Market Outlook 2024: Navigating Volatility in Uncertain Times",
      excerpt: "Our expert analysis on market trends, opportunities, and strategies for the year ahead.",
      category: "Market Analysis",
      author: "Jane Smith",
      date: "2024-01-10",
      readTime: "12 min read",
      featured: true
    }
  ];

  const recentArticles = [
    {
      id: 3,
      title: "New ELSS Funds: Should You Invest?",
      excerpt: "Analysis of recently launched ELSS schemes and their potential benefits for tax-saving investments.",
      category: "Mutual Funds",
      author: "John Doe",
      date: "2024-01-08",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Corporate Bond Investment: A Beginner's Guide",
      excerpt: "Everything you need to know about investing in corporate bonds, including risks and returns.",
      category: "Fixed Income",
      author: "Jane Smith",
      date: "2024-01-05",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Portfolio Rebalancing: When and How to Do It",
      excerpt: "Strategic insights on maintaining optimal asset allocation through regular portfolio rebalancing.",
      category: "Portfolio Management",
      author: "Mike Johnson",
      date: "2024-01-03",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "AIF Category III: High-Risk, High-Reward Investments",
      excerpt: "Understanding Alternative Investment Funds Category III and their suitability for sophisticated investors.",
      category: "Alternative Investments",
      author: "Sarah Wilson",
      date: "2023-12-28",
      readTime: "9 min read"
    },
    {
      id: 7,
      title: "Insurance as an Investment: Myths vs Reality",
      excerpt: "Debunking common misconceptions about insurance products and their role in financial planning.",
      category: "Insurance",
      author: "John Doe",
      date: "2023-12-25",
      readTime: "8 min read"
    },
    {
      id: 8,
      title: "Goal-Based Investing: A Structured Approach to Wealth Creation",
      excerpt: "How to align your investments with specific financial goals for better outcomes.",
      category: "Financial Planning",
      author: "Jane Smith",
      date: "2023-12-20",
      readTime: "11 min read"
    }
  ];

  const categories = [
    { name: "Market Analysis", count: 12, icon: TrendingUp },
    { name: "Tax Planning", count: 8, icon: DollarSign },
    { name: "Mutual Funds", count: 15, icon: PieChart },
    { name: "Fixed Income", count: 6, icon: BookOpen },
    { name: "Portfolio Management", count: 9, icon: BarChart3 },
    { name: "Insurance", count: 5, icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Market <span className="text-primary">Insights</span> & <span className="text-gold">Analysis</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay informed with our expert analysis, market commentary, and investment insights
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Featured Articles */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      </div>
                      <CardTitle className="text-xl leading-tight hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {article.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(article.date).toLocaleDateString()}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Articles */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Recent Articles</h2>
              <div className="space-y-6">
                {recentArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="secondary">{article.category}</Badge>
                            <span className="text-sm text-muted-foreground">{article.readTime}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {article.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(article.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="ml-4">
                          Read
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            
            {/* Newsletter Signup */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription>
                  Get our latest insights delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input placeholder="Your email address" type="email" />
                  <Button variant="gold" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Insights;