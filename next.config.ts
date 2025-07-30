const isProd = process.env.NODE_ENV === "production";

const repo = "/site-neia-trico";

const nextConfig = {
  basePath: isProd ? repo : "",
  assetPrefix: isProd ? repo + "/" : "",
  ...(isProd && { output: "export" }),
};

module.exports = nextConfig;