import { Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import DashboardNavbar from "../../Components/DashboardNavbar/Sidebar";
import AccountPage from "../AccountPage/AccountPage";
import Orders from "../Orders/Orders";
import InformationPannel from "../../Components/InformationPannel/InformationPannel";
import DashboardInfobar from "../../Components/DashboardInfobar/DashboardInfobar";
import DefaultPage from "../DefaultPage/DefaultPage";
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
            <Route path="order" element={<Orders />} />
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
