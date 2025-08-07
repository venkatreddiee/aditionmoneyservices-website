import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const StepUpSIPCalculator = () => {
  const [monthlySIP, setMonthlySIP] = useState(5000);
  const [sipMonths, setSipMonths] = useState(240);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [stepUpPercent, setStepUpPercent] = useState(10);
  const [inflationRate, setInflationRate] = useState(6);
  const [results, setResults] = useState<any>({});

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateSIP = () => {
    const P = monthlySIP;
    const N = sipMonths;
    const r = expectedReturn / 100 / 12;

    // Without Step-up
    const fvWithoutStepUp = P * ((Math.pow(1 + r, N) - 1) / r) * (1 + r);
    const totalInvestedWithout = P * N;
    const growthWithout = fvWithoutStepUp - totalInvestedWithout;

    // With Step-up
    let totalInvestedWith = 0;
    let fvWithStepUp = 0;
    let currentSIP = P;
    
    for (let i = 0; i < N; i++) {
      const month = i + 1;
      // Increase SIP every 12 months
      if (month > 1 && month % 12 === 1) {
        currentSIP *= (1 + stepUpPercent / 100);
      }
      totalInvestedWith += currentSIP;
      fvWithStepUp += currentSIP * Math.pow(1 + r, N - i);
    }

    const growthWithStepUp = fvWithStepUp - totalInvestedWith;

    setResults({
      withoutStepUp: {
        totalInvested: totalInvestedWithout,
        growth: growthWithout,
        futureValue: fvWithoutStepUp
      },
      withStepUp: {
        totalInvested: totalInvestedWith,
        growth: growthWithStepUp,
        futureValue: fvWithStepUp
      }
    });
  };

  useEffect(() => {
    calculateSIP();
  }, [monthlySIP, sipMonths, expectedReturn, stepUpPercent, inflationRate]);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">SIP Calculator with Step-Up</CardTitle>
          <CardDescription>Compare SIP returns with and without annual step-up</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Monthly SIP Investment: {formatCurrency(monthlySIP)}</Label>
            <Slider
              value={[monthlySIP]}
              onValueChange={(value) => setMonthlySIP(value[0])}
              min={100}
              max={100000}
              step={100}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>SIP Duration: {Math.floor(sipMonths / 12)} years ({sipMonths} months)</Label>
            <Slider
              value={[sipMonths]}
              onValueChange={(value) => setSipMonths(value[0])}
              min={12}
              max={480}
              step={12}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>Expected Return: {expectedReturn}% p.a</Label>
            <Slider
              value={[expectedReturn]}
              onValueChange={(value) => setExpectedReturn(value[0])}
              min={1}
              max={20}
              step={0.1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>Annual Step-Up: {stepUpPercent}% p.a</Label>
            <Slider
              value={[stepUpPercent]}
              onValueChange={(value) => setStepUpPercent(value[0])}
              min={0}
              max={50}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>Inflation Rate: {inflationRate}% p.a</Label>
            <Slider
              value={[inflationRate]}
              onValueChange={(value) => setInflationRate(value[0])}
              min={0.1}
              max={15}
              step={0.1}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Comparison Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">Without Step-up</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Invested:</span>
                  <span className="font-medium">{formatCurrency(results.withoutStepUp?.totalInvested || 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-medium text-green-600">{formatCurrency(results.withoutStepUp?.growth || 0)}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">Future Value:</span>
                  <span className="font-bold text-primary">{formatCurrency(results.withoutStepUp?.futureValue || 0)}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">With Step-up ({stepUpPercent}% annually)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Invested:</span>
                  <span className="font-medium">{formatCurrency(results.withStepUp?.totalInvested || 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth:</span>
                  <span className="font-medium text-green-600">{formatCurrency(results.withStepUp?.growth || 0)}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">Future Value:</span>
                  <span className="font-bold text-primary">{formatCurrency(results.withStepUp?.futureValue || 0)}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gold/10 rounded-lg">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Additional Benefit with Step-up</p>
                <p className="text-2xl font-bold text-gold">
                  {formatCurrency((results.withStepUp?.futureValue || 0) - (results.withoutStepUp?.futureValue || 0))}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepUpSIPCalculator;