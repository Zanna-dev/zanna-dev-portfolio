import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";

export function DashboardLayout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
