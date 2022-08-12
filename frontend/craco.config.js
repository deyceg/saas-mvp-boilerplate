const path = require('path')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); 

module.exports = {
  webpack: {
    plugins: [
      // new BundleAnalyzerPlugin({
      //     analyzerMode: 'server',
      //     analyzerHost: '127.0.0.1',
      //     analyzerPort: 8888,
      //     openAnalyzer: true, // Open browser after construction
      //     reportFilename: path.resolve(__dirname, `analyzer/index.html`), 
      // }),
  ],
  },
  style: {
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss'),
      ],
    },
  },
  jest: {
    configure: require('./jest.config'),
  },
};
