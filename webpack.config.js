/* Module Dependencies */
var webpack = require('webpack');


/* 
  Entry Point Configurations:  
  Multiple Entry Points Can Be Used For Breaking Up Bundles/Chunks
  More Details: https://webpack.github.io/docs/multiple-entry-points.html
*/
var entryPointConfigs = {
  app: [
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
  Plugin Configurations:
  Plugins are super flexible and allow for custom code/extension implementations, which is great for custom build steps.
  More Details: https://webpack.github.io/docs/plugins.html
*/
var pluginConfigs = [
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
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
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader',
        query: { presets: ['es2015', 'react'] }
      },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'}
    ]
  },
  plugins: pluginConfigs
};
