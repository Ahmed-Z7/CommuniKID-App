"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevents hydration error
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-xl hover:scale-110 active:scale-95 transition-all shadow-glow-blue border border-white/40 dark:border-white/10"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-accent animate-pulse-slow" />
      ) : (
        <Moon className="h-6 w-6 text-primary animate-pulse-slow" />
      )}
    </button>
  );
}
