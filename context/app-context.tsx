"use client";

import React, { createContext, useContext, useState } from "react";
import { PropsWithChildren } from "react";

interface AppContextType {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export const AppProvider = createContext<AppContextType | undefined>(undefined);

const AppContext = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const contextValue: AppContextType = {
    theme,
    setTheme,
  };

  return (
    <AppProvider.Provider value={contextValue}>{children}</AppProvider.Provider>
  );
};

export default AppContext;

export const useAppContext = () => {
  const context = useContext(AppProvider);

  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContext");
  }

  return context;
};
