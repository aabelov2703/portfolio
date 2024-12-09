"use client";
import React, { createContext, useContext, useState } from "react";

type AppContextType = {
  theme: string;
  toggleTheme: () => void;
  navBurgerOpen: boolean;
  setNavBurgerOpen: (val: boolean | ((prev: boolean) => boolean)) => void;
};

type AppContextProps = {
  children?: React.ReactNode;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [navBurgerOpen, setNavBurgerOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const contextValue = {
    theme,
    toggleTheme,
    navBurgerOpen,
    setNavBurgerOpen,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppContext");
  return context;
};
