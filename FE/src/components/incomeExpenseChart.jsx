"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  {
    month: "Feb",
    income: 3100000,
    expense: 2500000,
  },
  {
    month: "Mar",
    income: 2950000,
    expense: 2350000,
  },
  {
    month: "Apr",
    income: 3200000,
    expense: 2600000,
  },
  {
    month: "May",
    income: 3050000,
    expense: 2450000,
  },
  {
    month: "Jun",
    income: 2900000,
    expense: 2300000,
  },
  {
    month: "Jul",
    income: 3150000,
    expense: 2550000,
  },
  {
    month: "Aug",
    income: 3000000,
    expense: 2400000,
  },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "#84CC16",
  },
  expense: {
    label: "Expense",
    color: "#F97316",
  },
};

export const IncomeExpenseChart = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis />
        <Bar dataKey="income" fill="var(--color-income)" radius={4} />
        <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};
