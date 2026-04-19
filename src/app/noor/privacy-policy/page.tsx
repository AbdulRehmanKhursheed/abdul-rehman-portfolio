import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Noor: Muslim Companion",
  description: "Privacy policy for Noor: Muslim Companion app. Learn how we handle your data.",
};

export default function NoorPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium">Noor: Muslim Companion</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last updated: April 2026</p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Noor (&ldquo;the App&rdquo;) is an Islamic lifestyle companion developed to help Muslim users maintain their
            daily prayers, read Quran, and track spiritual habits. We take your privacy seriously.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Data We Collect</h2>

          <div className="mb-5">
            <h3 className="text-base font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
              Data stored only on your device (local)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Noor stores all personal data locally on your device only using AsyncStorage. We never upload, sell, or
              share this data. This includes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 pl-2">
              <li>Prayer records — which of the 5 daily prayers you marked as prayed or missed</li>
              <li>Mood entries — your mood ratings and the motivational responses you received</li>
              <li>Streak &amp; goals — your daily habit streak count and goal completion status</li>
              <li>
                Prayer settings — your selected calculation method and madhhab, coordinates — cached latitude/longitude
                to calculate accurate prayer times (stored locally, never sent to our servers)
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="text-base font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Location access</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              We request access to your device location only to calculate accurate prayer times and Qibla direction for
              your area. Location data is:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 pl-2">
              <li>Used only in real-time on your device</li>
              <li>Cached locally to avoid repeated permission requests</li>
              <li>Never transmitted to any server</li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="text-base font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Quran content</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Quran text is fetched from the public, open-source API at{" "}
              <span className="font-medium">alquran.cloud</span> and cached locally on your device. No personal data is
              sent in these requests.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Data We Do NOT Collect</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 pl-2">
            <li>We do not collect your name, email, phone number, or any account information</li>
            <li>We do not use analytics or crash-reporting SDKs</li>
            <li>We do not share personal data with advertisers</li>
            <li>We do not have servers that store your data</li>
            <li>We do not track you across apps or websites</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Advertising</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Noor displays banner advertisements on the Home screen and Stats screen using Google AdMob.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 pl-2">
            <li>Ads are configured with the strictest G-rated content filter</li>
            <li>
              Sacred screens (Quran reader, Prayer Tracker, Qibla, Umrah Guide) contain zero advertisements
            </li>
            <li>
              Google may collect advertising identifiers. See{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                Google&apos;s Privacy Policy
              </a>
            </li>
            <li>To opt out of personalised ads, reset your advertising ID in device settings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Notifications</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The App uses local device notifications to remind you of prayer times. No data leaves your device to enable
            these reminders.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Children</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This App is suitable for all ages. We do not knowingly collect any information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may update this policy. Any updates will be reflected with a new &ldquo;Last updated&rdquo; date above.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            For questions about this privacy policy, contact us at:{" "}
            <a
              href="mailto:malik.ali5560@gmail.com"
              className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-700 dark:hover:text-emerald-300"
            >
              malik.ali5560@gmail.com
            </a>
          </p>
        </section>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Noor: Muslim Companion. All rights reserved.
        </div>
      </div>
    </main>
  );
}
