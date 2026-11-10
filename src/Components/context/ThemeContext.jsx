import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });

  const toggleDarkMode = (nextMode) => {
    setIsDarkMode((currentMode) => {
      if (nextMode) return nextMode;
      return currentMode === "dark" ? "light" : "dark";
    });
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDarkMode === "dark");

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", isDarkMode);
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode: isDarkMode === "dark", toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);