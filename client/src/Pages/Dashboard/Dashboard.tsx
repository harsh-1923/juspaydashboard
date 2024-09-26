import { Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import DashboardNavbar from "../../Components/DashboardNavbar/Sidebar";
import AccountPage from "../AccountPage/AccountPage";
import InformationPannel from "../../Components/InformationPannel/InformationPannel";
import DashboardInfobar from "../../Components/DashboardInfobar/DashboardInfobar";
import DefaultPage from "../DefaultPage/DefaultPage";
import OrderPage from "../OrderPage/OrderPage";
import {
  DashboardProvider,
  useDashboardContext,
} from "../../Context/DashboardContext";

const Dashboard = () => {
  const { dashboardSettings } = useDashboardContext();

  return (
    <div className="dashboard-wrapper">
      {dashboardSettings.showSideBar && <DashboardNavbar />}
      <div className="dashboard-content-wrapper">
        <DashboardInfobar />
        <section className="dashboard-main-view">
          <Routes>
            <Route path="account" element={<AccountPage />} />
            <Route path="orders" element={<OrderPage />} />
            <Route path="default" element={<DefaultPage />} />
          </Routes>
        </section>
      </div>
      {dashboardSettings.showInfoPannel && <InformationPannel />}
    </div>
  );
};

const DashboardWrapper = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
};

export default DashboardWrapper;
