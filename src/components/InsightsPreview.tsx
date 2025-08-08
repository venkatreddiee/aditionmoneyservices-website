import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, TrendingUp, BookOpen, AlertCircle, ExternalLink, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface RSSArticle {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
}

const InsightsPreview = () => {
  const [rssArticles, setRssArticles] = useState<RSSArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Static insights - keep the first one as featured
  const staticInsights = [
    {
      category: "Market Analysis",
      title: "Q3 FY24 Market Outlook: Navigating Volatility with Strategic Asset Allocation",
      description: "Our comprehensive analysis of market trends and recommended portfolio adjustments for the upcoming quarter.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      featured: true,
      isStatic: true
    }
  ];

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        setLoading(true);
        setError(false);
        
        // Try multiple RSS feed URLs in order of preference
        const rssUrls = [
          'https://www.moneycontrol.com/rss/business.xml',
          'https://www.moneycontrol.com/rss/latestnews.xml',
          'https://feeds.feedburner.com/MoneycontrolBusinessNews'
        ];
        
        let success = false;
        
        for (const rssUrl of rssUrls) {
          try {
            const response = await fetch(
              `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
            );
            
            if (response.ok) {
              const data = await response.json();
              
              if (data.status === 'ok' && data.items && data.items.length > 0) {
                // Filter for business/finance related articles
                const filteredArticles = data.items.filter(item => 
                  item.title && 
                  (item.title.toLowerCase().includes('fund') ||
                   item.title.toLowerCase().includes('invest') ||
                   item.title.toLowerCase().includes('market') ||
                   item.title.toLowerCase().includes('stock') ||
                   item.title.toLowerCase().includes('financial') ||
                   item.title.toLowerCase().includes('economy') ||
                   item.title.toLowerCase().includes('rupee') ||
                   item.title.toLowerCase().includes('bank') ||
                   item.title.toLowerCase().includes('finance'))
                ).slice(0, 5);
                
                if (filteredArticles.length > 0) {
                  setRssArticles(filteredArticles);
                  success = true;
                  break;
                }
              }
            }
          } catch (feedError) {
            console.warn(`Failed to fetch from ${rssUrl}:`, feedError);
            continue;
          }
        }
        
        if (!success) {
          // Use fallback articles if all RSS feeds fail
          const fallbackArticles = [
            {
              title: "Mutual Fund Investment Guide: Top Performing Funds This Quarter",
              description: "Discover the best mutual funds for your investment portfolio with expert analysis and performance metrics.",
              link: "https://www.moneycontrol.com/news/business/mutual-funds/",
              pubDate: new Date().toISOString()
            },
            {
              title: "Stock Market Today: Key Index Movements and Trading Strategies",
              description: "Stay updated with the latest market movements and expert trading recommendations.",
              link: "https://www.moneycontrol.com/news/business/markets/",
              pubDate: new Date(Date.now() - 86400000).toISOString()
            },
            {
              title: "Economic Outlook: RBI Policy Impact on Investment Markets",
              description: "Analyzing the latest monetary policy changes and their effect on various investment instruments.",
              link: "https://www.moneycontrol.com/news/business/economy/",
              pubDate: new Date(Date.now() - 172800000).toISOString()
            },
            {
              title: "Tax Planning 2024: Maximize Your Returns with Smart Investments",
              description: "Expert tips on tax-saving investments and strategies for the current financial year.",
              link: "https://www.moneycontrol.com/personal-finance/tax/",
              pubDate: new Date(Date.now() - 259200000).toISOString()
            }
          ];
          setRssArticles(fallbackArticles);
        }
        
      } catch (err) {
        console.error('Error fetching RSS feed:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRSSFeed();
    
    // Refresh feed every 60 minutes
    const interval = setInterval(fetchRSSFeed, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return 'Recent';
    }
  };

  const truncateDescription = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const openArticle = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
            {staticInsights
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

          {/* Recent Articles from Moneycontrol */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Latest from Moneycontrol</h3>
              {loading && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
            </div>
            
            {error && (
              <Card className="border-destructive/50">
                <CardContent className="p-4">
                  <p className="text-sm text-destructive">
                    Unable to fetch latest articles. Please try again later.
                  </p>
                </CardContent>
              </Card>
            )}

            {!loading && !error && rssArticles.length === 0 && (
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    No articles available at the moment.
                  </p>
                </CardContent>
              </Card>
            )}

            {!error && rssArticles.slice(0, 5).map((article, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 border-border/50 cursor-pointer"
                onClick={() => openArticle(article.link)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      Mutual Funds
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(article.pubDate)}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {truncateDescription(article.description)}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Moneycontrol</span>
                    <Button variant="ghost" size="sm" className="text-xs group-hover:text-primary">
                      Read More
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open('https://www.moneycontrol.com/news/business/mutual-funds/', '_blank', 'noopener,noreferrer')}
            >
              View All Articles
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsPreview;