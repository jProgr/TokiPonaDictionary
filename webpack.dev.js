const base = require('./webpack.base.js');

module.exports = {
  ...base,
  mode: 'development',
  devtool: 'inline-source-map',
};
