var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src/app',
  entry: [
  'webpack-dev-server/client?http://127.0.0.1:8080', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './index.js', // Your appʼs entry point,
  './index.html'
  ],
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'}
    ]
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin()
  ]
};
