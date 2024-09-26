import MetricTile from "../../Components/MetricTile/MetricTile";
import "./DefaultPage.css";

const DefaultPage = () => {
  return (
    <div className="">
      <div className="dashboard-page-header-wrapper">
        <h2>eCommerce</h2>
      </div>
      <div className="default-page-content-wrapper">
        <div className="default-page-quick-metrics-wrapper">
          <div className="default-page-quick-metrics">
            <MetricTile
              value={3781}
              percentageChange={23.838}
              title="Customers"
            />
            <MetricTile value={3781} percentageChange={23.838} title="Orders" />
          </div>
          <div className="default-page-quick-metrics">
            <MetricTile
              value={3781}
              percentageChange={-23.838}
              title="Revenue"
              currency="$"
            />
            <MetricTile value={3781} percentageChange={23.838} title="Growth" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
