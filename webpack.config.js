const path = require('path');
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{ test: /\.(ts|tsx)?$/, loader: 'awesome-typescript-loader' }]
  }
};
