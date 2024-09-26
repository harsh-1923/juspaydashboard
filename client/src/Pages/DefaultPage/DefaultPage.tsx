import MetricTile from "@/Components/MetricTile/MetricTile";
import "./DefaultPage.css";
// import StackedBarChart from "@/Components/Charts/StackedBarChart/StackedBarChart";
// import { InteractiveLineChart } from "@/Components/Charts/LineChart/LineChart";

const DefaultPage = () => {
  return (
    <div className="default-page-wrapper">
      <div className="dashboard-page-header-wrapper">
        <h2>eCommerce</h2>
      </div>
      <div className="default-page-content-wrapper">
        <div className="default-page-quick-metrics-wrapper">
          <div className="default-page-quick-metrics">
            <MetricTile
              value={3781}
              percentageChange={11.01}
              title="Customers"
              type="1"
            />
            <MetricTile
              value={1219}
              percentageChange={-0.03}
              title="Orders"
              type="2"
            />
          </div>
          <div className="default-page-quick-metrics">
            <MetricTile
              value={695}
              percentageChange={+15.03}
              title="Revenue"
              unitType="$"
              type="2"
            />
            <MetricTile
              value={30.1}
              percentageChange={6.08}
              title="Growth"
              type="3"
              unitType="%"
            />
          </div>
        </div>
        {/* <div className="projection-vs-actuals-wrapper">
          <div className="projection-vs-actuals-header">
            <h2>Projections vs Actuals</h2>
            <StackedBarChart />
          </div>
        </div> */}
      </div>

      {/* <div className="revenue-details-grid">
        <div className="revenue-chart-wrapper">
          <div className="revenue-chart-header flex items-center gap-4">
            <h2>Revenue</h2>
            <div>Current Week</div>
          </div>
          <div className="rounded">
            <InteractiveLineChart />
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Revenue by Location</h2>
          <div className="bg-gray-200 h-40 rounded"></div>
        </div>

        <div className="col-span-1 lg:col-span-2 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Top Selling Products</h2>
          <div className="bg-gray-200 h-40 rounded"></div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Total Sales</h2>
          <div className="bg-gray-200 h-40 rounded"></div>
        </div>
      </div> */}
    </div>
  );
};

export default DefaultPage;
