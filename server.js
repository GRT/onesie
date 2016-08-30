var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, '127.0.0.1', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://127.0.0.1:8080/');
});