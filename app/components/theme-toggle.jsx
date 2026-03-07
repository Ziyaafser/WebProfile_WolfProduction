"use client";

import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__icon">{isDark ? "Moon" : "Sun"}</span>
        <span className={`theme-toggle__thumb ${isDark ? "is-dark" : "is-light"}`} />
      </span>
    </button>
  );
}
