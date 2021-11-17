const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",
  // add entry points for JavaScript files for the three pages, home, detail, and favorites.
  entry: {
    home: "./assets/js/index.js",
    detail: "./assets/js/topic.js",
    favorites: "./assets/js/favorites.js"
  },
  output: {
    path: __dirname + "/client/dist",
    filename: "[name].bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "News App",
      short_name: "News App",
      description: "An application for news",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config