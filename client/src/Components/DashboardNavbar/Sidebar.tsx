import { Link } from "react-router-dom";
import "./DashboardNavbar.css";
import UserDetails from "../UserDetails/UserDetails";

const DashboardNavbar = () => {
  return (
    <nav className="sidebar-wrapper">
      <UserDetails />
      <Link to="/account">Account</Link>
      <Link to="/order">Order</Link>
    </nav>
  );
};

export default DashboardNavbar;
