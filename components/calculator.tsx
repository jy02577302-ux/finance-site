"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface CalculatorProps {
  compact?: boolean;
}

export default function Calculator({ compact = false }: CalculatorProps) {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(5.9);
  const [years, setYears] = useState(30);
  const [propertyType, setPropertyType] = useState<"residential" | "investment" | "land">("residential");
  const [isFirstHome, setIsFirstHome] = useState(false);
  const [state, setState] = useState<"VIC" | "NSW" | "QLD" | "SA" | "WA" | "TAS" | "NT" | "ACT">("VIC");

  // 等额本息月供公式
  const monthlyPayment = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    if (monthlyRate === 0) return amount / months;
    return (
      (amount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -months))
    );
  }, [amount, rate, years]);

  const totalPayment = monthlyPayment * years * 12;
  const totalInterest = totalPayment - amount;

  // 印花税计算（简化版，基于维州）
  const stampDuty = useMemo(() => {
    if (state !== "VIC") return 0; // 暂时只支持维州

    let duty = 0;
    const isFirstHomeOwner = isFirstHome && propertyType === "residential";

    if (isFirstHomeOwner) {
      // 首套房印花税减免（维州）
      if (amount <= 600000) {
        duty = 0; // 全额减免
      } else {
        duty = (amount - 600000) * 0.055; // 超过部分按 5.5%
      }
    } else {
      // 标准印花税（维州）
      if (amount <= 250000) {
        duty = amount * 0.014;
      } else if (amount <= 500000) {
        duty = 3500 + (amount - 250000) * 0.024;
      } else if (amount <= 1000000) {
        duty = 9400 + (amount - 500000) * 0.06;
      } else if (amount <= 2000000) {
        duty = 39400 + (amount - 1000000) * 0.058;
      } else {
        duty = 97000 + (amount - 2000000) * 0.065;
      }

      // 额外土地税（如果是土地）
      if (propertyType === "land") {
        duty += amount * 0.065; // 土地税约 6.5%
      }

      // 投资房附加税（维州从 2021 年起取消，这里暂不考虑）
    }

    return Math.round(duty);
  }, [amount, propertyType, isFirstHome, state]);

  const totalCost = amount + stampDuty;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value);

  const formatPercent = (value: number) =>
    new Intl.NumberFormat("en-AU", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value / 100);

  if (compact) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label className="text-xs">Loan Amount ($)</Label>
            <Input
              type="number"
              min={10000}
              max={5000000}
              step={10000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div>
            <Label className="text-xs">Interest Rate (%)</Label>
            <Input
              type="number"
              min={0.1}
              max={15}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>
          <div>
            <Label className="text-xs">Term (years)</Label>
            <Input
              type="number"
              min={1}
              max={40}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="text-center py-4 bg-primary-50 rounded-lg">
          <p className="text-sm text-gray-600">Monthly repayment</p>
          <p className="text-2xl font-bold text-primary-700">
            {formatCurrency(monthlyPayment)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Home Loan Calculator</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <Label htmlFor="amount" className="block mb-2 font-medium">
            Property Price / Loan Amount ($)
          </Label>
          <Input
            id="amount"
            type="number"
            min={10000}
            max={5000000}
            step={10000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div>
          <Label htmlFor="rate" className="block mb-2 font-medium">
            Interest Rate (%)
          </Label>
          <Input
            id="rate"
            type="number"
            min={0.1}
            max={15}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>
        <div>
          <Label htmlFor="years" className="block mb-2 font-medium">
            Loan Term (years)
          </Label>
          <Input
            id="years"
            type="number"
            min={1}
            max={40}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Property Type & First Home */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <Label className="block mb-3 font-medium">Property Type</Label>
          <div className="flex gap-3">
            <Button
              type="button"
              size="sm"
              variant={propertyType === "residential" ? "default" : "outline"}
              onClick={() => setPropertyType("residential")}
            >
              Residential
            </Button>
            <Button
              type="button"
              size="sm"
              variant={propertyType === "investment" ? "default" : "outline"}
              onClick={() => setPropertyType("investment")}
            >
              Investment
            </Button>
            <Button
              type="button"
              size="sm"
              variant={propertyType === "land" ? "default" : "outline"}
              onClick={() => setPropertyType("land")}
            >
              Land
            </Button>
          </div>
        </div>
        <div>
          <Label className="block mb-3 font-medium">First Home Buyer?</Label>
          <div className="flex gap-3">
            <Button
              type="button"
              size="sm"
              variant={isFirstHome ? "default" : "outline"}
              onClick={() => setIsFirstHome(true)}
            >
              Yes
            </Button>
            <Button
              type="button"
              size="sm"
              variant={!isFirstHome ? "default" : "outline"}
              onClick={() => setIsFirstHome(false)}
            >
              No
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Loan Repayment */}
        <Card className="bg-primary-50 border-primary-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4">Loan Repayment</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Monthly Repayment</p>
                <p className="text-3xl font-bold text-primary-700">
                  {formatCurrency(monthlyPayment)}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Total Repayable</p>
                  <p className="font-semibold text-gray-800">
                    {formatCurrency(totalPayment)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Total Interest</p>
                  <p className="font-semibold text-gray-800">
                    {formatCurrency(totalInterest)}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stamp Duty */}
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4">Stamp Duty (VIC)</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Estimated Duty</p>
                <p className="text-3xl font-bold text-amber-600">
                  {formatCurrency(stampDuty)}
                </p>
              </div>
              <div className="text-sm">
                <p className="text-gray-600 mb-1">Total Cost (Price + Duty)</p>
                <p className="font-semibold text-gray-800 text-lg">
                  {formatCurrency(totalCost)}
                </p>
              </div>
              {isFirstHome && propertyType === "residential" && amount <= 600000 && (
                <p className="text-xs text-green-600 font-medium">
                  ✓ You qualify for first home buyer duty exemption
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
        <p>
          <strong>Disclaimer:</strong> This calculator provides estimates only. Stamp duty calculations are based on Victorian rates and do not include additional charges such as mortgage registration fees or transfer fees. Actual costs may vary. Please contact us for a personalised quote.
        </p>
      </div>
    </div>
  );
}
