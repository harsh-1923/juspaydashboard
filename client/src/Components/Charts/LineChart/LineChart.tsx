"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent } from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";
import "./LineChart.css";

const chartData = [
  { month: "January", projected: 186, actual: 80 },
  { month: "February", projected: 305, actual: 200 },
  { month: "March", projected: 237, actual: 120 },
  { month: "April", projected: 73, actual: 190 },
  { month: "May", projected: 209, actual: 130 },
  { month: "June", projected: 214, actual: 140 },
];

const chartConfig = {
  projected: {
    label: "projected",
    color: "var(--line-chart-projected)",
  },
  actual: {
    label: "actual",
    color: "var(--line-chart-actual)",
  },
} satisfies ChartConfig;

export function DoubleLineChart() {
  return (
    <Card className="bg-inherit border-none shadow-none">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="projected"
              type="monotone"
              stroke="var(--color-projected)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="actual"
              type="monotone"
              stroke="var(--color-actual)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
