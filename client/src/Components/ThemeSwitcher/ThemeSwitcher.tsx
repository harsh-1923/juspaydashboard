import { useTheme } from "../../Context/ThemeContext";
import Moon from "../IconSet/Moon";
import Sun from "../IconSet/Sun";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Switch Theme"
      className="dashborad-infobar-button"
    >
      {theme === "light" ? (
        <div className="dashboard-infobar-button" aria-label="Toggle Dark Mode">
          <Moon />
        </div>
      ) : (
        <div className="dashboard-infobar-button" aria-label="Toggle Dark Mode">
          <Sun />
        </div>
      )}
    </button>
  );
};

export default ThemeSwitcher;
