import { Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import DashboardNavbar from "../../Components/DashboardNavbar/Sidebar";
import AccountPage from "../AccountPage/AccountPage";
import InformationPannel from "../../Components/InformationPannel/InformationPannel";
import DashboardInfobar from "../../Components/DashboardInfobar/DashboardInfobar";
import DefaultPage from "../DefaultPage/DefaultPage";
import OrderPage from "../OrderPage/OrderPage";
// import { useState } from "react";

const Dashboard = () => {
  // const [dashboardLayoutSettings, setDashboardLayoutSettings] = useState({
  //   showInformationPannel: true,
  // });
  return (
    <div className="dashboard-wrapper">
      <DashboardNavbar />
      <div className="dashboard-content-wrapper">
        <DashboardInfobar />
        <section className="dashboard-main-view">
          <Routes>
            <Route path="account" element={<AccountPage />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="default" element={<DefaultPage />} />
          </Routes>
        </section>
      </div>
      {/* {dashboardLayoutSettings.showInformationPannel && <InformationPannel />} */}
      <InformationPannel />
    </div>
  );
};

export default Dashboard;
