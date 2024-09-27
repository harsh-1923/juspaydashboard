"use client";

import { Bar, BarChart } from "recharts";

import { Card, CardContent } from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

const chartData = [
  { date: "2024-07-15", projected: 450, actual: 300 },
  { date: "2024-07-16", projected: 380, actual: 420 },
  { date: "2024-07-17", projected: 520, actual: 120 },
  { date: "2024-07-18", projected: 140, actual: 550 },
  { date: "2024-07-19", projected: 600, actual: 350 },
  { date: "2024-07-20", projected: 480, actual: 400 },
];

const chartConfig = {
  projected: {
    label: "Projected",
    color: "hsl(var(--chart-1))",
  },
  actual: {
    label: "Actual",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function BarChartStacked() {
  return (
    <Card className="bg-inherit rounded-none shadow-none border-none max-w-[300px]">
      <CardContent className="p-0">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <Bar
              dataKey="projected"
              stackId="a"
              fill="var(--color-projected)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="actual"
              stackId="a"
              fill="var(--color-actual)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  active={false}
                  hideLabel
                  className="w-[180px]"
                  formatter={(value, name, item, index) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                        style={
                          {
                            "--color-bg": `var(--color-${name})`,
                          } as React.CSSProperties
                        }
                      />
                      {chartConfig[name as keyof typeof chartConfig]?.label ||
                        name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          k
                        </span>
                      </div>
                      {index === 1 && (
                        <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                          Deficit
                          <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                            {item.payload.projected - item.payload.actual}
                            <span className="font-normal text-muted-foreground">
                              k
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
