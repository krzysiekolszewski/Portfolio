//Konfiguracja Webpack
const path = require("path");

module.exports = {
  entry: "./js/app.js",
  output: {
    path: path.resolve("js"),
    filename: "out.js"
  },

  devServer: {
    inline: true,
    contentBase: './',
    port: 3001
  },

  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015','stage-2','react']}
    },
    {
        test:/\.scss$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
    }
  ]
  }
}
//Konfiguracja Webpack
