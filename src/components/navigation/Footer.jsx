import { navigationItems } from "../../data/navigation";
import { contact } from "../../data/contact";

const socialLinks = [
  { label: "LinkedIn", href: contact.linkedIn },
  { label: "GitHub", href: contact.github },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <a className="brand footer-brand" href="/#top">
            Noro<span>.</span>
          </a>
          <p className="footer-intro">
            Frontend engineer building responsive, accessible experiences with
            React.
          </p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Navigate</p>
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="footer-column">
          <p className="footer-label">Elsewhere</p>
          <a href={`mailto:${contact.email}`}>{contact.emailLabel}</a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <p className="footer-label">Have an idea?</p>
          <p>Let’s make it clear, useful, and beautifully built.</p>
          <a className="footer-cta" href="/#contact">
            Start a project ↗
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>© {new Date().getFullYear()} Noro Pam</small>
        <small>React · TypeScript · Accessible UI</small>
      </div>
    </footer>
  );
}
