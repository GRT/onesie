'use strict';


/* Module Dependencies */
var webpack = require('webpack');


/* 
  Entry Point Configurations:  
  Multiple Entry Points Can Be Used For Breaking Up Bundles/Chunks
  More Details: https://webpack.github.io/docs/multiple-entry-points.html
*/
var entryPointConfigs = {
  app: [
    'webpack-dev-server/client?http://127.0.0.1:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './index.js', // Your appʼs entry point,
    './index.html'
  ],
  vendor: [
    'lodash',
    'radium',
    'react',
    'react-addons-update',
    'react-dom',
    'react-drop-down',
    'react-redux',
    'react-router',
    'react-router-redux',
    'react-scrollbar',
    'redux',
    'url-join'
  ]
};


/*
  Module Loader Configurations:
  Loaders are used for front end build steps. They allow preprocessing of files as modules are sucked into the code (i.e. require/import)
  More Details: https://webpack.github.io/docs/loaders.html
*/
var moduleLoaderConfigs = [
  { test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'], exclude: /node_modules/ },
  { test: /\.html$/, loader: 'file?name=[name].[ext]' },
  { test: /\.css$/, loader: 'style-loader!css-loader' },
  { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' }
];


/*
  Plugin Configurations:
  Plugins are super flexible and allow for custom code/extension implementations, which is great for custom build steps.
  More Details: https://webpack.github.io/docs/plugins.html
*/
var pluginConfigs = [
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  new webpack.HotModuleReplacementPlugin()
];


module.exports = {
  context: __dirname + '/src/app',
  entry: entryPointConfigs,
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  },
  module: { loaders: moduleLoaderConfigs },
  plugins: pluginConfigs
};