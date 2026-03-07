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
      <div className="footer__brand">
        <span className="brand__badge">YW</span>
        <div>
          <h4>Young Wolf Production</h4>
          <p>Certified Engineering & Remote Operations Company delivering excellence since 2019.</p>
        </div>
      </div>
      <div className="footer__links">
        <h5>Quick Links</h5>
        {quickLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="footer__company">
        <h5>Company</h5>
        <p>SSM 201903316877</p>
        <p>(JM0921915-H)</p>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Young Wolf Production. All rights reserved.</span>
        <span>Powered by Innovation & Precision</span>
      </div>
    </footer>
  );
}
