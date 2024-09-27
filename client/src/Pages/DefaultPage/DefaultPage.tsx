import "./DefaultPage.css";
import SalesDetails from "@/Components/DefaultPageComponents/SalesDetails/SalesDetails";
import RevenueDetails from "@/Components/DefaultPageComponents/RevenueDetails/RevenueDetails";
import MetricDetails from "@/Components/DefaultPageComponents/MetricDetails/MetricDetails";

const DefaultPage = () => {
  return (
    <div className="default-page-wrapper">
      <div className="dashboard-page-header-wrapper">
        <h2>eCommerce</h2>
      </div>

      <MetricDetails />

      <RevenueDetails />

      <SalesDetails />
    </div>
  );
};

export default DefaultPage;
