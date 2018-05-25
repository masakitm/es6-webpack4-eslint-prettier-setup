const MODE = 'development';

// use sourceMap in development
const enabledSourceMap = (MODE === 'development');

module.exports = {
  // development / prodution
  mode: MODE,

  // entry / output
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },

  // dir for dev-server
  devServer: {
    contentBase: 'dist',
    open: true,
  },

  module: {
    rules: [
      // use babel-loader to .js files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true,
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },
};
