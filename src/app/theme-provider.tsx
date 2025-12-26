"use client";

import { useTheme } from "@/store/useTheme";
import { useEffect } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <div>{children}</div>;
};

export default ThemeProvider;
