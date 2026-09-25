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
    ];
  },
  async redirects() {
    return [
      {
        // The frontend-variant PDF was retired for a single LaTeX résumé; keep
        // links already sent to recruiters working.
        source: '/pdf/AbdulRehman_Frontend_Engineer_Resume.pdf',
        destination: '/pdf/AbdulRehman_FullStack_Engineer_Resume.pdf',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
