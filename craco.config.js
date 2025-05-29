// craco.config.js
const path = require("path");
const { whenProd } = require("@craco/craco");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        plugins: [
          // keep all existing plugins
          ...webpackConfig.plugins,
          // only in production builds
          ...whenProd(
            () => [
              new HtmlCriticalWebpackPlugin({
                base: path.resolve(__dirname, "build"),
                src: "index.html",
                dest: "index.html",
                inline: true, // inline the critical CSS
                minify: true, // minify the extracted CSS
                extract: true, // keep extracted file (build/index.html.css)
                width: 1300, // viewport width for critical CSS
                height: 900, // viewport height for critical CSS
                penthouse: {
                  blockJSRequests: false,
                },
              }),
            ],
            []
          ),
        ],
      };
    },
  },
};
