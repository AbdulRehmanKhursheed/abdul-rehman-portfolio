import MobileAppsProjectsCards from "../../../components/mobile-apps-projects.component";
import { Syne } from "next/font/google";
import "@/styles/page.scss";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const mobileProjects = () => {
  return (
    <div className="container mx-auto my-7">
      <h1
        className={`${syne.className}  font-semibold text-center`}
        style={{ fontSize: "32px" }}
      >
        Mobile Application Development
      </h1>
      <p className={`${syne.className} grey-color text-lg my-2`}>
        As part of my role as a Software Engineer, I have gained significant
        experience in developing mobile applications. My work has primarily
        focused on creating seamless, user-friendly experiences for both
        customers and agents. Below are some of the key projects I&apos;ve worked on:
      </p>

      <h5 className={`${syne.className}  font-semibold`}>
        Bazaar Customer App Description:
      </h5>
      <p className={`${syne.className} grey-color`}>
        {" "}
        The Bazaar Customer App is designed to provide a comprehensive and
        intuitive shopping experience for Bazaar customers (B2B & B2C both now).
        This application allows users to browse products, make purchases, and
        manage their orders efficiently.
      </p>

      <h5 className={`${syne.className}  font-semibold mt-2`}>
        Bazaar Agent App Description:
      </h5>
      <p className={`${syne.className} grey-color`}>
        {" "}
        The Bazaar Agent App is tailored for agents working with Bazaar to
        manage their daily tasks, customer interactions, and order processing
        efficiently. This app empowers agents with the tools they need to
        provide excellent service and boost productivity.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-4 bg-white ">
        <MobileAppsProjectsCards
          title="Bazaar Customer App"
          image="bazaar-customer-app.png"
        />
        <MobileAppsProjectsCards
          title="Bazaar Agent App"
          image="bazaar-agent-image.png"
        />
      </div>
    </div>
  );
};
export default mobileProjects;
