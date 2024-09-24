import { Link } from "react-router-dom";
import "./DashboardNavbar.css";
import UserDetails from "../UserDetails/UserDetails";
import QuickOptions from "../QuickOptions/QuickOptions";

const DashboardNavbar = () => {
  return (
    <nav className="sidebar-wrapper">
      <UserDetails />
      <QuickOptions />
      <Link to="/account">Account</Link>
      <Link to="/order">Order</Link>
    </nav>
  );
};

export default DashboardNavbar;
