import Image from "next/image";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function SiteHeader() {
  return (
    <header className="nav glass">
      <a className="nav__brand" href="#home">
        <span className="brand__badge">
          <Image
            src="/wolf logo bronze.png"
            alt="Young Wolf Production logo"
            width={28}
            height={28}
            className="brand__logo"
          />
        </span>
        <span>Young Wolf Production</span>
      </a>
      <nav className="nav__links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
