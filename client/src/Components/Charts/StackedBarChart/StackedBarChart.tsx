"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

const chartData = [
  { month: "January", projections: 186, actuals: 80 },
  { month: "February", projections: 305, actuals: 200 },
  { month: "March", projections: 237, actuals: 120 },
  { month: "April", projections: 73, actuals: 190 },
  { month: "May", projections: 209, actuals: 130 },
  { month: "June", projections: 214, actuals: 140 },
];

const chartConfig = {
  projections: {
    label: "Projections",
    color: "rgba(168, 197, 218, 1)",
  },
  actuals: {
    label: "Actuals",
    color: "rgb(176,227,255)",
  },
} satisfies ChartConfig;

export function StackedBarChart() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} stroke="#e0e0e0" />

        <YAxis tickLine={false} axisLine={false} tickMargin={10} width={30} />

        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <ChartTooltip content={<ChartTooltipContent hideLabel />} />

        <Bar
          dataKey="projections"
          stackId="a"
          fill="var(--color-projections)"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="actuals"
          stackId="a"
          fill="var(--color-actuals)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
