module.exports = {
  devtool: 'sourceMap',
  context: __dirname + "/assets",
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'class-to-classname'
      }
    ]
  }
}
