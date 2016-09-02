'use strict';

import webpack from 'webpack';
import config from './config'



/* 
  Entry Point Configurations:  
  Multiple Entry Points Can Be Used For Breaking Up Bundles/Chunks
  More Details: https://webpack.github.io/docs/multiple-entry-points.html
*/
var entryPointConfigs = {
  app: ['./index.js', './index.html'],
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
var pluginConfigs = [new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')];



/*
  Environment Hooks:
  This section checks the 'env' property on the 'config' import.
  If 'env' equals 'dev' we will add the Hot Module Development Hooks (Along with others in the future)
  **NOTE**: This would be a good place to add other dev/prod build steps, like minification/uglify/Sourcemaps.
*/
if (config && config.env && config.env === 'dev') {
  entryPointConfigs.app.unshift(
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server'
  );
  pluginConfigs.push(new webpack.HotModuleReplacementPlugin())
}




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