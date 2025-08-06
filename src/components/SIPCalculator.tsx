import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Target, PiggyBank } from "lucide-react";

const SIPCalculator = () => {
  const [monthlyAmount, setMonthlyAmount] = useState([5000]);
  const [timePeriod, setTimePeriod] = useState([10]);
  const [expectedReturn, setExpectedReturn] = useState([12]);
  const [results, setResults] = useState({
    totalInvestment: 0,
    futureValue: 0,
    wealthGained: 0
  });

  const calculateSIP = () => {
    const P = monthlyAmount[0]; // Monthly investment
    const r = expectedReturn[0] / 100 / 12; // Monthly interest rate
    const n = timePeriod[0] * 12; // Total number of payments

    // SIP formula: FV = P × [((1 + r)^n - 1) / r] × (1 + r)
    const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const totalInvestment = P * n;
    const wealthGained = futureValue - totalInvestment;

    setResults({
      totalInvestment,
      futureValue,
      wealthGained
    });
  };

  useEffect(() => {
    calculateSIP();
  }, [monthlyAmount, timePeriod, expectedReturn]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            SIP Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your future wealth with Systematic Investment Plan. 
            See how small monthly investments can create substantial wealth over time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <Card className="border-border/50 shadow-card">
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <Calculator className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Calculate Your SIP</CardTitle>
                  <CardDescription>Adjust the parameters to see potential returns</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Monthly Investment */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">Monthly Investment</label>
                  <span className="text-lg font-semibold text-primary">{formatCurrency(monthlyAmount[0])}</span>
                </div>
                <Slider
                  value={monthlyAmount}
                  onValueChange={setMonthlyAmount}
                  max={100000}
                  min={500}
                  step={500}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₹500</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              {/* Time Period */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">Investment Period</label>
                  <span className="text-lg font-semibold text-primary">{timePeriod[0]} years</span>
                </div>
                <Slider
                  value={timePeriod}
                  onValueChange={setTimePeriod}
                  max={30}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 year</span>
                  <span>30 years</span>
                </div>
              </div>

              {/* Expected Return */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">Expected Annual Return</label>
                  <span className="text-lg font-semibold text-primary">{expectedReturn[0]}%</span>
                </div>
                <Slider
                  value={expectedReturn}
                  onValueChange={setExpectedReturn}
                  max={20}
                  min={8}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>8%</span>
                  <span>20%</span>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full" onClick={calculateSIP}>
                Start Your SIP Journey
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Target className="h-5 w-5 mr-2 text-gold" />
                  Investment Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <PiggyBank className="h-5 w-5 text-primary" />
                      <span className="font-medium">Total Investment</span>
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {formatCurrency(results.totalInvestment)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-gold" />
                      <span className="font-medium">Future Value</span>
                    </div>
                    <span className="text-xl font-bold text-primary">
                      {formatCurrency(results.futureValue)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gold/10 rounded-lg border border-gold/20">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-gold" />
                      <span className="font-medium">Wealth Gained</span>
                    </div>
                    <span className="text-lg font-semibold text-gold">
                      {formatCurrency(results.wealthGained)}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Returns are calculated based on the power of compounding. 
                    Actual returns may vary based on market conditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">SIP Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                    <span className="text-sm">Power of compounding over time</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                    <span className="text-sm">Rupee cost averaging benefits</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                    <span className="text-sm">Disciplined investment approach</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                    <span className="text-sm">Start with as low as ₹500/month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIPCalculator;