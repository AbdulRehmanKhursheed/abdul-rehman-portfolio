"use client";

import { useEffect } from "react";

const Referral = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const packageName = "com.your.android.app.package";

      const urlString = window.location.search;

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

  return <p>Refresh the page if it doesn't take you to the Bazaar App.</p>;
};
export default Referral;
