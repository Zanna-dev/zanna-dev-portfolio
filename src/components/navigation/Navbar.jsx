import { useState } from "react";
import { navigationItems } from "../../data/navigation";
import { useTheme } from "../../hooks/useTheme";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a
          className="brand"
          href="/#top"
          onClick={closeMenu}
          aria-label="Noro home"
        >
          Zanna_Dev<span>.</span>
        </a>
        <div
          id="mobile-navigation"
          className={`nav-links ${isOpen ? "is-open" : ""}`}
        >
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
            <span className="theme-name">
              {theme === "light" ? "Dark" : "Light"}
            </span>
          </button>
          <a className="nav-cta" href="/#contact">
            Let’s talk
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">
              {isOpen ? "Close" : "Open"} navigation
            </span>
            <span aria-hidden="true">{isOpen ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
