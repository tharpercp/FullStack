const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/index.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }, 
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader',
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};