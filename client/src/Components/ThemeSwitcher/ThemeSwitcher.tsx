import { useTheme } from "../../Context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Switch Theme"
      className="dashborad-infobar-button"
    >
      {theme === "light" ? "L" : "D"}
    </button>
  );
};

export default ThemeSwitcher;
