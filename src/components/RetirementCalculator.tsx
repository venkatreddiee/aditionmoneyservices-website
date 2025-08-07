import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RetirementCalculator = () => {
  const [targetAmount, setTargetAmount] = useState(10000000);
  const [currentAge, setCurrentAge] = useState(30);
  const [inflationRate, setInflationRate] = useState(6);
  const [roi, setRoi] = useState(12);
  const [currentSavings, setCurrentSavings] = useState(1000000);
  const [results, setResults] = useState<any>({});

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateRetirement = () => {
    const years = 60 - currentAge;
    
    if (years <= 0) {
      setResults({ error: "You are already at or past retirement age!" });
      return;
    }

    // Adjust target amount for inflation
    const inflationAdjustedTarget = targetAmount * Math.pow(1 + inflationRate / 100, years);

    // Calculate future value of current savings (assuming 12.5% p.a)
    const savingsGrowth = currentSavings * Math.pow(1 + 0.125, years);

    // Final adjusted target
    const finalTarget = inflationAdjustedTarget - savingsGrowth;

    if (finalTarget <= 0) {
      setResults({ 
        message: "No additional SIP required. Your current savings are sufficient.",
        savingsGrowth,
        inflationAdjustedTarget
      });
      return;
    }

    // Monthly SIP calculation (Future Value of annuity formula)
    const n = years * 12;
    const r = roi / 100 / 12;
    const sip = finalTarget * r / (Math.pow(1 + r, n) - 1);
    const totalInvested = sip * n;
    const totalGrowth = finalTarget - totalInvested;

    setResults({
      sip,
      totalInvested,
      totalGrowth,
      inflationAdjustedTarget,
      savingsGrowth,
      finalTarget,
      years
    });
  };

  useEffect(() => {
    calculateRetirement();
  }, [targetAmount, currentAge, inflationRate, roi, currentSavings]);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Retirement Planning Calculator</CardTitle>
          <CardDescription>Plan your retirement corpus and required SIP amount</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Retirement Corpus Target: {formatCurrency(targetAmount)}</Label>
            <Slider
              value={[targetAmount]}
              onValueChange={(value) => setTargetAmount(value[0])}
              min={1000000}
              max={100000000}
              step={1000000}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>Your Age: {currentAge} years</Label>
            <Slider
              value={[currentAge]}
              onValueChange={(value) => setCurrentAge(value[0])}
              min={18}
              max={55}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>Expected Inflation Rate: {inflationRate}% p.a</Label>
            <Slider
              value={[inflationRate]}
              onValueChange={(value) => setInflationRate(value[0])}
              min={0.1}
              max={15}
              step={0.1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>Expected Return on Investment: {roi}% p.a</Label>
            <Slider
              value={[roi]}
              onValueChange={(value) => setRoi(value[0])}
              min={1}
              max={20}
              step={0.1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>Current Savings: {formatCurrency(currentSavings)}</Label>
            <Slider
              value={[currentSavings]}
              onValueChange={(value) => setCurrentSavings(value[0])}
              min={100000}
              max={100000000}
              step={100000}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Results</CardTitle>
        </CardHeader>
        <CardContent>
          {results.error ? (
            <p className="text-red-500 font-medium">{results.error}</p>
          ) : results.message ? (
            <div className="space-y-2">
              <p className="text-green-600 font-medium">{results.message}</p>
              <p><strong>Growth of Current Savings:</strong> {formatCurrency(results.savingsGrowth)}</p>
              <p><strong>Inflation Adjusted Target:</strong> {formatCurrency(results.inflationAdjustedTarget)}</p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-4 bg-primary/5 rounded-lg">
                <p className="text-2xl font-bold text-primary">{formatCurrency(results.sip || 0)}</p>
                <p className="text-sm text-muted-foreground">Monthly SIP Required</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Total SIP Invested:</strong></p>
                  <p className="text-primary">{formatCurrency(results.totalInvested || 0)}</p>
                </div>
                <div>
                  <p><strong>Total Growth:</strong></p>
                  <p className="text-green-600">{formatCurrency(results.totalGrowth || 0)}</p>
                </div>
                <div>
                  <p><strong>Years to Retirement:</strong></p>
                  <p>{results.years || 0} years</p>
                </div>
                <div>
                  <p><strong>Current Savings Growth:</strong></p>
                  <p className="text-green-600">{formatCurrency(results.savingsGrowth || 0)}</p>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <p><strong>Final Retirement Amount:</strong> {formatCurrency(results.inflationAdjustedTarget || 0)}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RetirementCalculator;