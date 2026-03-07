import { ThemeProvider } from "./components/theme-provider";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import ContactSection from "./components/sections/contact-section";
import HomeSection from "./components/sections/home-section";
import ProductsSection from "./components/sections/products-section";
import ProjectsSection from "./components/sections/projects-section";
import ServicesSection from "./components/sections/services-section";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="page">
        <SiteHeader />

        <main>
          <HomeSection />
          <ServicesSection />
          <ProductsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}
