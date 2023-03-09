const path = require('path');
const baseConfig = require('./webpack.config');
module.exports = {
  ...baseConfig,
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), 'dist', 'my-desktop-editor'),
    filename: 'shell.js'
  }
};
