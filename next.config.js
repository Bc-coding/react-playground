const path = require("path");
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    i18n,
    // These are all the locales you want to support in
    // your application
    // locales: ["en", "zh"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    // defaultLocale: "en",
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: "example.com",
    //     defaultLocale: "en-UK",
    //   },
    //   {
    //     domain: "example.tw",
    //     defaultLocale: "zh-tw",
    //     // an optional http field can also be used to test
    //     // locale domains locally with http instead of https
    //     http: true,
    //   },
    // ],
  },
  // experimental: {
  //   forceSwcTransforms: true,
  // },
};

module.exports = nextConfig;
