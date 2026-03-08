"use client";

import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="nav glass">
      <a className="nav__brand" href="#home">
        <span className="brand__badge">
          <Image
            src="/wolf logo bronze.png"
            alt="Young Wolf logo"
            width={28}
            height={28}
            className="brand__logo"
          />
        </span>
        <span>Young Wolf</span>
      </a>
      <nav className={`nav__links ${isMenuOpen ? "is-open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="nav__actions">
        <ThemeToggle />
        <button
          type="button"
          className="nav__menu-toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
