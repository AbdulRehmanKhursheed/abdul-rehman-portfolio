import { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent =
        navigator.userAgent || navigator.vendor || (window as any).opera;
      const androidAppLink =
        "intent://abdul-rehman-portfolio-ecru.vercel.app/#Intent;scheme=https;package=bazaar.tech.com;end";

      // Check if the user is on an Android device
      if (/android/i.test(userAgent)) {
        window.location.replace(androidAppLink);
      }
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
