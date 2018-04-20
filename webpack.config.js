module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'dist',
    open: true
  }
};
