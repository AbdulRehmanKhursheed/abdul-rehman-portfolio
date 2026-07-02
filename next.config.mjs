/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // The downloadable résumé PDF: cache briefly (it gets replaced in
        // place), keep it out of search results.
        source: '/pdf/:path*.pdf',
        headers: [
          { key: 'Content-Type', value: 'application/pdf' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      {
        // The HTML source of the résumé is a build input, not a page.
        source: '/pdf/:path*.html',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
};

export default nextConfig;
