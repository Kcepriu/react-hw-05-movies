/** @type {import('next').NextConfig} */
const path = require("path");

// const isGithubActions = process.env.GITHUB_ACTIONS || false;

// let assetPrefix = "./";
// let basePath = "/";

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

//   assetPrefix = `/${repo}/`;
//   basePath = `/${repo}`;
// }

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // assetPrefix: assetPrefix,
  // basePath: basePath,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
