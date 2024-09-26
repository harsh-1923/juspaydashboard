import { useTheme } from "../../Context/ThemeContext";
import Moon from "../IconSet/Moon";
import Sun from "../IconSet/Sun";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div aria-label="Switch Theme" className="dashborad-infobar-button">
      {theme === "light" ? (
        <button
          className="dashboard-infobar-button"
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
        >
          <Moon />
        </button>
      ) : (
        <button
          className="dashboard-infobar-button"
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
        >
          <Sun />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
