import React, { createContext, useContext, useState, useEffect } from "react";

// Create context for theme
const ThemeContext = createContext<any>(null);

// Hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap your app
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(() => {
    // Check local storage to persist theme between sessions
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    // Apply the theme to the document body or root element
    document.body.className = theme;
    localStorage.setItem("theme", theme); // Save the theme in local storage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
