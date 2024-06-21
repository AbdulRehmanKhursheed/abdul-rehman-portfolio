import { Syne } from "next/font/google";
import "@/../styles/page.scss";
import DisplayPictureComponent from "../../components/display-picture.component";
import NameComponent from "../../components/name.component";
import GreetingsComponent from "../../components/greetings.component";
import ProfessionalTagLineComponent from "../../components/professional-tagline.component";
import ProjectSection from "../../components/projects-section.component";

export const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        className="flex flex-row gap-3 p-24"
        style={{ backgroundColor: "rgb(255 233 217)" }}
      >
        <div className="w-3/5">
          <GreetingsComponent />
          <NameComponent />
          <ProfessionalTagLineComponent />
        </div>

        <div className="w-2/5 hidden md:block ">
          <DisplayPictureComponent />
        </div>
      </div>

      <ProjectSection />
    </main>
  );
}
