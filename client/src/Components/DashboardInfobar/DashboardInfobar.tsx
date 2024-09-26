import { useDashboardContext } from "../../Context/DashboardContext";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import DashboardSearch from "../DashboardSearch/DashboardSearch";
import BellIcon from "../IconSet/BellIcon";
import Refresh from "../IconSet/Refresh";
import Sidebar from "../IconSet/Sidebar";
import Star from "../IconSet/Star";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./DashboardInfobar.css";

const DashboardInfobar: React.FC = () => {
  const { dashboardSettings, setDashboardSettings } = useDashboardContext();

  const toggleInfoPannel = () => {
    setDashboardSettings({
      ...dashboardSettings,
      showInfoPannel: !dashboardSettings.showInfoPannel,
    });
  };
  const toggleSidebar = () => {
    setDashboardSettings({
      ...dashboardSettings,
      showSideBar: !dashboardSettings.showSideBar,
    });
  };
  return (
    <nav className="dashboard-infobar-wrapper" aria-label="Dashboard Info Bar">
      <div className="infobar-section">
        <button
          className="dashboard-infobar-button"
          aria-label="Toggle Sidebar"
          onClick={() => toggleSidebar()}
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
          onClick={() => toggleInfoPannel()}
        >
          <Sidebar />
        </button>
      </div>
    </nav>
  );
};

export default DashboardInfobar;
