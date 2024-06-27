
'use client'


import "@/../styles/page.scss";
import DisplayPictureComponent from "../../components/display-picture.component";
import NameComponent from "../../components/name.component";
import GreetingsComponent from "../../components/greetings.component";
import ProfessionalTagLineComponent from "../../components/professional-tagline.component";
import ProjectSection from "../../components/projects-section.component";

import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from "next/router";

export default function Home() {
  // pages/index.tsx
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    // Handle logic to pass `code` to Android app
    if (typeof window !== 'undefined' && code) {
      // Replace with your Android app's package name
      const packageName = 'com.your.android.app.package';

      // Construct your custom intent URI with referral code
      const intentUri = `intent://example.com/?referralCode=${code}#Intent;scheme=https;package=${packageName};end`;

      // Redirect to the Android app with the custom intent URI
      console.log("Redirecting to Android app with referral code:", code);
      window.location.href = intentUri;
    }
  }, [code]);

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
