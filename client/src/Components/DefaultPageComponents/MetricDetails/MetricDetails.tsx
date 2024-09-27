import MetricTile from "@/Components/MetricTile/MetricTile";
import "./MetricDetails.css";

type MetricData = {
  value: number;
  percentageChange: number;
  title: string;
  type: string;
  unitType?: string;
};

const metricData: MetricData[] = [
  {
    value: 3781,
    percentageChange: 11.01,
    title: "Customers",
    type: "1",
  },
  {
    value: 1219,
    percentageChange: -0.03,
    title: "Orders",
    type: "2",
  },
  {
    value: 695,
    percentageChange: 15.03,
    title: "Revenue",
    type: "2",
    unitType: "$",
  },
  {
    value: 30.1,
    percentageChange: 6.08,
    title: "Growth",
    type: "3",
    unitType: "%",
  },
];

const MetricDetails = () => {
  return (
    <div className="default-page-content-wrapper">
      <section
        className="default-page-quick-metrics-wrapper"
        aria-label="Quick Metrics"
      >
        <div className="default-page-quick-metrics">
          {metricData.slice(0, 2).map((metric, index) => (
            <MetricTile
              key={index}
              value={metric.value}
              percentageChange={metric.percentageChange}
              title={metric.title}
              type={metric.type}
              unitType={metric.unitType}
            />
          ))}
        </div>
        <div className="default-page-quick-metrics">
          {metricData.slice(2).map((metric, index) => (
            <MetricTile
              key={index + 2}
              value={metric.value}
              percentageChange={metric.percentageChange}
              title={metric.title}
              type={metric.type}
              unitType={metric.unitType}
            />
          ))}
        </div>
      </section>

      <section
        className="projection-vs-actuals-chart-wrapper info-tile"
        aria-label="Projections vs Actuals"
      >
        <header className="info-header">
          <h2>Projections vs Actuals</h2>
        </header>
      </section>
    </div>
  );
};

export default MetricDetails;
