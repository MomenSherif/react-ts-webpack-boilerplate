const path = require('path');
const DotEnv = require('dotenv-webpack');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  // devtool: 'source-map',
  plugins: [
    new DotEnv({
      path: path.resolve(__dirname, '..', '.env.prod'),
    }),
    new BundleAnalyzer(),
  ],
};
