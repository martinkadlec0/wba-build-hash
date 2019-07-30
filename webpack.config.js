const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: './src/app',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/[hash]/',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};
