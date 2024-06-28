// "use client";

import "@/../styles/page.scss";
import DisplayPictureComponent from "../../components/display-picture.component";
import NameComponent from "../../components/name.component";
import GreetingsComponent from "../../components/greetings.component";
import ProfessionalTagLineComponent from "../../components/professional-tagline.component";
import ProjectSection from "../../components/projects-section.component";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const packageName = "com.your.android.app.package";

      const urlString = window.location.href;

      const urlParams = new URLSearchParams(urlString);

      const userAgent = navigator.userAgent || navigator.vendor;
      const referralCode = urlParams.get("referralCode");

      // const androidAppLink = `intent://abdul-rehman-portfolio-ecru.vercel.app?referralCode=${referralCode}/#Intent;scheme=https;package=bazaar.tech.com;end`;
      const androidAppLink = `intent://abdul-rehman-portfolio-ecru.vercel.app/referralCode=${referralCode}#Intent;scheme=https;package=bazaar.tech.com;S.browser_fallback_url=https://play.google.com/store/apps/details?id=bazaar.tech.com;end`;

      // Check if the user is on an Android device
      if (/android/i.test(userAgent)) {
        console.log("Android device detected, redirecting to app...");
        window.location.href = androidAppLink;
      }
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <div
        className="flex flex-col md:flex-row gap-3 p-8 md:p-24"
        style={{ backgroundColor: "rgb(255 233 217)" }}
      >
        <div className="block md:hidden">
          {/* <DisplayPictureComponent /> */}
        </div>

        <div className="md:w-3/5">
          {/* <GreetingsComponent /> */}
          <NameComponent />
          {/* <ProfessionalTagLineComponent /> */}
        </div>

        <div className="hidden md:block w-2/5">
          {/* <DisplayPictureComponent /> */}
        </div>
      </div>

      {/* <ProjectSection /> */}
    </main>
  );
}
