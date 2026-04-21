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

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value);

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
            Loan Amount ($)
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

      <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 mb-8">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-sm text-gray-600">Monthly Repayment</p>
            <p className="text-3xl font-bold text-primary-700">
              {formatCurrency(monthlyPayment)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Repayable</p>
            <p className="text-2xl font-semibold text-gray-800">
              {formatCurrency(totalPayment)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Interest</p>
            <p className="text-2xl font-semibold text-gray-800">
              {formatCurrency(totalInterest)}
            </p>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        <p>
          <strong>Note:</strong> This calculator provides estimates only and does not
          constitute a loan approval. Actual interest rates and loan terms may vary.
          Please contact us for a personalised quote.
        </p>
      </div>
    </div>
  );
}
