/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'favicon.im',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
        pathname: '/s2/favicons/**',
      },
      {
        protocol: 'https',
        hostname: 'www.bazaarapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bazaartech.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'personnellibrary.co.uk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mysitetech.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'studenthelpsquad.co.uk',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
