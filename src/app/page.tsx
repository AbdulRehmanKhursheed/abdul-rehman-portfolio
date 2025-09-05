import HeroSection from "../components/hero-section.component";
import AboutMe from "../components/about-me.component";
import ProjectsSection from "../components/projects-section.component";
import ContactSection from "../components/contact-section.component";
import Footer from "../components/footer.component";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
