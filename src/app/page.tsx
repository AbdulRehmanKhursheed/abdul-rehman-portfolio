import HeroSection from "../components/hero-section.component";
import AboutMe from "../components/about-me.component";
import ProjectsSection from "../components/projects-section.component";
import ContactSection from "../components/contact-section.component";
import Footer from "../components/footer.component";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Malik Abdul Rehman Khursheed",
  jobTitle: "Senior Frontend Engineer",
  url: siteUrl,
  sameAs: [
    "https://github.com/AbdulRehmanKhursheed",
    "https://www.linkedin.com/in/malik-abdul-rehman/",
  ],
  knowsAbout: [
    "Web Performance",
    "Core Web Vitals",
    "Next.js",
    "React",
    "TypeScript",
    "Multi-tenant architecture",
    "SEO",
  ],
  worksFor: { "@type": "Organization", name: "Bazaar Technologies" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
