/**
 * ThemeContext.jsx — Global management for application visual modes (Dark/Light).
 * Orchestrates theme switching and persistence across the entire render tree.
 */

import React, { createContext, useContext } from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeContext = createContext();

/**
 * ThemeProvider — Wraps the application to provide centralized theme data.
 */
export function ThemeProvider({ children }) {
  const themeData = useTheme();
  
  return (
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useThemeContext — Hook to access the current theme state and toggler.
 */
export function useThemeContext() {
  return useContext(ThemeContext);
}
