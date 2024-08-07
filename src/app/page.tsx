import "@/styles/page.scss";
import DisplayPictureComponent from "../../components/display-picture.component";
import NameComponent from "../../components/name.component";
import GreetingsComponent from "../../components/greetings.component";
import ProfessionalTagLineComponent from "../../components/professional-tagline.component";
import ProjectSection from "../../components/projects-section.component";
import AboutMe from "../../components/about-me.component";
import DownloadMyResumeSection from "../../components/download-my-resume.component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pb-12 md:pb-24 max-width-class mx-auto">
      <div
        className="flex flex-col md:flex-row gap-3 p-8 md:p-24"
        style={{ backgroundColor: "rgb(255 233 217)" }}
      >
        <div className="md:w-3/5">
          <GreetingsComponent />
          <NameComponent />
          <ProfessionalTagLineComponent />
        </div>

        <div className="hidden md:block w-2/5">
          <DisplayPictureComponent />
        </div>
      </div>
      <div className="px-8 md:px-24 bg-white">
        <AboutMe />
        <ProjectSection />
        <DownloadMyResumeSection />
      </div>
    </main>
  );
}
