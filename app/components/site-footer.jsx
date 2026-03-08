import Image from "next/image";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <Image src="/footer logo.png" alt="Young Wolf Production logo" width={156} height={156} />
        </div>
        <div className="footer__company">
          <h5>Company Information</h5>
          <p>Young Wolf Production</p>
          <p>SSM 201903316877 (JM0921915-H)</p>
          <p>Certified Engineering & Remote Operations Company</p>
        </div>
        <div className="footer__links">
          <h5>Quick Links</h5>
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <div>
          <span>© 2026 Young Wolf Production. All rights reserved.</span>
        </div>
        <span>Powered by Innovation & Precision</span>
      </div>
    </footer>
  );
}
