const MODE = 'development';
const enabledSourceMap = (MODE === 'development');

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
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            }
          }
        ]
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: enabledSourceMap
        }
      },
      {
        test: /\.(gif|png|jpg|eot||wof|woff|woff2|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  }
};