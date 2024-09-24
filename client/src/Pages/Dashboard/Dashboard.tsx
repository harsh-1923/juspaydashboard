import { Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import DashboardNavbar from "../../Components/DashboardNavbar/Sidebar";
import AccountPage from "../AccountPage/AccountPage";
import Orders from "../Orders/Orders";
import InformationPannel from "../../Components/InformationPannel/InformationPannel";
import DashboardInfobar from "../../Components/DashboardInfobar/DashboardInfobar";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <DashboardNavbar />
      <div className="dashboard-content-wrapper">
        <DashboardInfobar />
        <section>
          <Routes>
            <Route path="account" element={<AccountPage />} />
            <Route path="order" element={<Orders />} />
          </Routes>
        </section>
      </div>
      <InformationPannel />
    </div>
  );
};

export default Dashboard;
