"use client";

import { Bar, BarChart, YAxis, XAxis } from "recharts";

import { Card, CardContent } from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

const chartData = [
  { date: "Jan", projected: 450, actual: 300 },
  { date: "Feb", projected: 380, actual: 420 },
  { date: "Mar", projected: 520, actual: 120 },
  { date: "Apr", projected: 140, actual: 550 },
  { date: "May", projected: 600, actual: 350 },
  { date: "Jun", projected: 480, actual: 400 },
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
    <Card className="bg-inherit rounded-none shadow-none border-none max-w-[300px] dark:bg-[#rgb(40,40,40)]">
      <CardContent className="p-0">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}k`}
              width={40}
              tickMargin={8}
            />
            <XAxis
              dataKey={"date"}
              axisLine={false}
              tickLine={false}
              // tickFormatter={(value) => `${value}k`}
              width={40}
              tickMargin={8}
            />
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
                          Status
                          <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                            {item.payload.actual - item.payload.projected}
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
