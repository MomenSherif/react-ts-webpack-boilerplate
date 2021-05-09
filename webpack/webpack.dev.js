const path = require('path');
const DotEnv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new DotEnv({
      path: path.resolve(__dirname, '..', '.env.local'),
    }),
  ],
};
