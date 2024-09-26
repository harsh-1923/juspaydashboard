// import { Link } from "react-router-dom";
import "./Sidebar.css";
import UserDetails from "../UserDetails/UserDetails";
import DirectoryView from "../DirectoryView/DirectoryView";
import Account from "../IconSet/Account";
import Corporate from "../IconSet/Corporate";
import Blog from "../IconSet/Blog";
import Social from "../IconSet/Social";
import UserProfile from "../IconSet/UserProfile";
import Default from "../IconSet/Default";
import Ecommerce from "../IconSet/Ecommerce";
import Projects from "../IconSet/Projects";
import OnlineCourses from "../IconSet/OnlineCourses";
import Order from "../IconSet/Order";

interface SubItem {
  name: string;
  link: string;
}

interface DirectoryItem {
  name: string;
  icon: JSX.Element;
  subs: SubItem[];
  link?: string;
}

const pageDirectory: DirectoryItem[] = [
  {
    name: "User Profile",
    icon: <UserProfile />,
    subs: [
      { name: "Overview", link: "" },
      { name: "Projects", link: "" },
      { name: "Campaigns", link: "" },
      { name: "Documents", link: "" },
      { name: "Followers", link: "" },
    ],
  },
  {
    name: "Account",
    icon: <Account />,
    subs: [
      { name: "Account 1", link: "" },
      { name: "Account 2", link: "" },
      { name: "Account 3", link: "" },
    ],
  },
  {
    name: "Corporate",
    icon: <Corporate />,
    subs: [
      { name: "Corporate 1", link: "" },
      { name: "Corporate 2", link: "" },
      { name: "Corporate 3", link: "" },
    ],
  },
  {
    name: "Blog",
    icon: <Blog />,
    subs: [
      { name: "Blog 1", link: "" },
      { name: "Blog 2", link: "" },
      { name: "Blog 3", link: "" },
    ],
  },
  {
    name: "Social",
    icon: <Social />,
    subs: [
      { name: "Social 1", link: "" },
      { name: "Social 2", link: "" },
      { name: "Social 3", link: "" },
    ],
  },
];

const dashboardDirectory: DirectoryItem[] = [
  {
    name: "Default",
    icon: <Default />,
    link: "/default",
    subs: [],
  },
  {
    name: "Orders",
    icon: <Order />,
    link: "/orders",
    subs: [],
  },
  {
    name: "eCommerce",
    icon: <Ecommerce />,
    link: "/ecommerce",
    subs: [
      { name: "Ecommerce 1", link: "" },
      { name: "Ecommerce 2", link: "" },
      { name: "Ecommerce 3", link: "" },
    ],
  },
  {
    name: "Projects",
    icon: <Projects />,
    link: "/projects",
    subs: [
      { name: "Projects 1", link: "" },
      { name: "Projects 2", link: "" },
      { name: "Projects 3", link: "" },
    ],
  },
  {
    name: "Online Courses",
    icon: <OnlineCourses />,
    link: "/online-courses",
    subs: [
      { name: "Courses 1", link: "" },
      { name: "Courses 2", link: "" },
      { name: "Courses 3", link: "" },
    ],
  },
];

const DashboardNavbar = () => {
  return (
    <nav className="sidebar-wrapper">
      <UserDetails />
      {/* <Link to="/account">Account</Link>
      <Link to="/default">Default</Link>
      <Link to="/order">Order</Link> */}

      <div className="sidebar-dir-wrapper">
        <div className="sidebar-dir-header">
          <h2>Dashboards</h2>
        </div>

        <DirectoryView directory={dashboardDirectory} />
      </div>
      <div className="sidebar-dir-wrapper">
        <div className="sidebar-dir-header">
          <h2>Pages</h2>
        </div>

        <DirectoryView directory={pageDirectory} />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
