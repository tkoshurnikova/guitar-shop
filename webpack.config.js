const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./source/js/main.js`,
  output: {
    filename: `main.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      },
    ],
  },
  devtool: `source-map`,
};
