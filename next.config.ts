/** @type {import('next').NextConfig} */

const isDev = process.env.ENV === "DEV";

const remotePatternsArrays = [
  {
    protocol: 'https',
    hostname: '**.cloudfront.net',
  },
  {
    protocol: 'https',
    hostname: '**.pages.dev',
  },
  {
    protocol: 'https',
    hostname: '**.amazonaws.com',
  },
];


const nextConfig = isDev ?
  {
    images: {
      remotePatterns: remotePatternsArrays,
    },
    reactStrictMode: false
  }
  :
  {
    output: "export",
    images: {
      loader: "custom",
      loaderFile: "./image-loader.js",

      remotePatterns: remotePatternsArrays,
    },
  };

module.exports = nextConfig