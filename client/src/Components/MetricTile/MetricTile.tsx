import React from "react";
import TrendUp from "../IconSet/TrendUp";
import TrendDown from "../IconSet/TrendDown";
import "./MetricTile.css";

interface MetricTileProps {
  value: number;
  percentageChange: number;
  title: string;
  currency?: string;
}

const MetricTile: React.FC<MetricTileProps> = ({
  value,
  percentageChange,
  title,
  currency,
}) => {
  const isPositive = percentageChange >= 0;
  // Calculate absolute value before formatting
  const absolutePercentageChange = Math.abs(percentageChange);
  const formattedPercentageChange = absolutePercentageChange.toFixed(2);

  return (
    <div className="metric-tile-wrapper">
      <h3 className="metric-tile-title">{title}</h3>
      <div className="metric-tile-details-wrapper">
        <h3 className="metric-tile-value">
          {currency}
          {value.toLocaleString()}
        </h3>
        <div className="metric-tile-percentage-wrapper">
          <p
            className={`metric-tile-percentage ${
              isPositive ? "positive" : "negative"
            }`}
          >
            {isPositive
              ? `+${formattedPercentageChange}`
              : `-${formattedPercentageChange}`}
            %
          </p>
          {isPositive ? (
            <TrendUp aria-label="Trend up icon" />
          ) : (
            <TrendDown aria-label="Trend down icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricTile;
