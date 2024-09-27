"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent } from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

import "./HollowPieChart.css";

const chartData = [
  { category: "Direct", amount: 300.56, fill: "var(--direct-pie-color)" },
  { category: "Affiliate", amount: 135.18, fill: "rgba(177, 227, 255, 1)" },
  { category: "Sponsored", amount: 154.02, fill: "rgba(149, 164, 252, 1)" },
  { category: "E-mail", amount: 48.96, fill: "rgba(186, 237, 189, 1)" },
];

const chartConfig = {
  direct: {
    label: "Direct",
    color: "hsl(var(--chart-1))",
  },
  affiliate: {
    label: "Affiliate",
    color: "hsl(var(--chart-2))",
  },
  sponsored: {
    label: "Sponsored",
    color: "hsl(var(--chart-3))",
  },
  email: {
    label: "E-mail",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function HollowPieChart() {
  const totalAmount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, []);

  return (
    <Card className="flex flex-col bg-transparent shadow-none outline-none border-none">
      <CardContent className="flex-1 pb-0 shadow-none">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px] bg-transparent shadow-none"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={60}
              outerRadius={70}
              cornerRadius={5}
              paddingAngle={4}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          ${totalAmount}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Sales
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
