import "@/../styles/page.scss";
import DisplayPictureComponent from "../../components/display-picture.component";
import NameComponent from "../../components/name.component";
import GreetingsComponent from "../../components/greetings.component";
import ProfessionalTagLineComponent from "../../components/professional-tagline.component";
import ProjectSection from "../../components/projects-section.component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        className="flex flex-col md:flex-row gap-3 p-8 md:p-24"
        style={{ backgroundColor: "rgb(255 233 217)" }}
      >
        <div className="block md:hidden">
          <DisplayPictureComponent />
        </div>

        <div className="md:w-3/5">
          <GreetingsComponent />
          <NameComponent />
          <ProfessionalTagLineComponent />
        </div>

        <div className="hidden md:block w-2/5">
          <DisplayPictureComponent />
        </div>
      </div>

      <ProjectSection />
    </main>
  );
}
