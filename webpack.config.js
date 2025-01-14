var path = require('path')

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'app'),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
    ],
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
    },
  },
}