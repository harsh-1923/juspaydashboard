import { Link } from "react-router-dom";
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

interface SubItem {
  name: string;
  link: string;
}

interface DirectoryItem {
  name: string;
  icon: JSX.Element;
  subs: SubItem[];
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
    subs: [],
  },
  {
    name: "Corporate",
    icon: <Corporate />,
    subs: [],
  },
  {
    name: "Blog",
    icon: <Blog />,
    subs: [],
  },
  {
    name: "Social",
    icon: <Social />,
    subs: [],
  },
];

const dir: DirectoryItem[] = [
  {
    name: "Default",
    icon: <Default />,
    subs: [],
  },
  {
    name: "eCommerce",
    icon: <Ecommerce />,
    subs: [],
  },
  {
    name: "Projects",
    icon: <Projects />,
    subs: [],
  },
  {
    name: "Online Courses",
    icon: <OnlineCourses />,
    subs: [],
  },
];

const DashboardNavbar = () => {
  return (
    <nav className="sidebar-wrapper">
      <UserDetails />
      <Link to="/account">Account</Link>
      <Link to="/default">Default</Link>
      <Link to="/order">Order</Link>

      <div className="sidebar-dir-wrapper">
        <div className="sidebar-dir-header">
          <h2>Dashboards</h2>
        </div>

        <DirectoryView directory={dir} />
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
