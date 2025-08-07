import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const LumpsumCalculator = () => {
  const [targetAmount, setTargetAmount] = useState(1000000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);
  const [results, setResults] = useState<any>({});

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateLumpsum = () => {
    const FV = targetAmount;
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;

    // Monthly SIP needed (reverse of FV of annuity formula)
    const sip = FV * monthlyRate / ((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate));
    const totalInvested = sip * months;

    setResults({
      targetAmount: FV,
      monthlySIP: sip,
      years: years,
      totalInvested: totalInvested,
      growth: FV - totalInvested
    });
  };

  useEffect(() => {
    calculateLumpsum();
  }, [targetAmount, years, rate]);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Financial Goal Calculator</CardTitle>
          <CardDescription>Calculate monthly SIP needed to achieve your financial goal</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Target Amount: {formatCurrency(targetAmount)}</Label>
            <Slider
              value={[targetAmount]}
              onValueChange={(value) => setTargetAmount(value[0])}
              min={100000}
              max={100000000}
              step={100000}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>Investment Duration: {years} years</Label>
            <Slider
              value={[years]}
              onValueChange={(value) => setYears(value[0])}
              min={1}
              max={50}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>Expected Rate of Return: {rate}% p.a</Label>
            <Slider
              value={[rate]}
              onValueChange={(value) => setRate(value[0])}
              min={1}
              max={20}
              step={0.1}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Investment Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Monthly SIP Required</p>
              <p className="text-3xl font-bold text-primary">{formatCurrency(results.monthlySIP || 0)}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Target Amount</p>
                <p className="text-lg font-semibold">{formatCurrency(results.targetAmount || 0)}</p>
              </div>
              
              <div className="p-4 bg-muted/30 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="text-lg font-semibold">{results.years || 0} years</p>
              </div>
              
              <div className="p-4 bg-muted/30 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Total Investment</p>
                <p className="text-lg font-semibold">{formatCurrency(results.totalInvested || 0)}</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Wealth Gained</p>
                <p className="text-lg font-semibold text-green-600">{formatCurrency(results.growth || 0)}</p>
              </div>
            </div>

            <div className="p-4 bg-gold/10 rounded-lg">
              <h4 className="font-semibold mb-2">Investment Summary</h4>
              <div className="text-sm space-y-1">
                <p>• Monthly SIP: {formatCurrency(results.monthlySIP || 0)}</p>
                <p>• Investment Period: {results.years || 0} years</p>
                <p>• Expected Return: {rate}% per annum</p>
                <p>• Goal Achievement: {formatCurrency(results.targetAmount || 0)}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LumpsumCalculator;