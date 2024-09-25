import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import DashboardSearch from "../DashboardSearch/DashboardSearch";
import BellIcon from "../IconSet/BellIcon";
import Refresh from "../IconSet/Refresh";
import Sidebar from "../IconSet/Sidebar";
import Star from "../IconSet/Star";
import Sun from "../IconSet/Sun";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./DashboardInfobar.css";

const DashboardInfobar: React.FC = () => {
  return (
    <nav className="dashboard-infobar-wrapper" aria-label="Dashboard Info Bar">
      <div className="infobar-section">
        <button
          className="dashboard-infobar-button"
          aria-label="Toggle Sidebar"
        >
          <Sidebar />
        </button>
        <button
          className="dashboard-infobar-button"
          aria-label="Star Dashboard"
        >
          <Star />
        </button>
        <Breadcrumb />
      </div>

      <div className="infobar-section">
        <DashboardSearch />
        {/* <button
          className="dashboard-infobar-button"
          aria-label="Toggle Dark Mode"
        >
          <Sun />
        </button> */}
        <ThemeSwitcher />
        <button
          className="dashboard-infobar-button"
          aria-label="Refresh Dashboard"
        >
          <Refresh />
        </button>
        <button className="dashboard-infobar-button" aria-label="Notifications">
          <BellIcon />
        </button>
        <button
          className="dashboard-infobar-button"
          aria-label="Toggle Sidebar"
        >
          <Sidebar />
        </button>
      </div>
    </nav>
  );
};

export default DashboardInfobar;
