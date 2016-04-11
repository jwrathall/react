var webpack = require('webpack');
var path = require('path');

module.exports={
  devtool: 'inline-source-map', //display line errors

  entry:[
    'webpack-dev-server/client?http://127.0.0.1:8080/', //dev server
    'webpack/hot/only-dev-server',  //live reloading
    './src'
  ],
  output:{
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve:{
    modulesDirectories:['node_modules','src'], //look for files to bundle
    extensions: ['', '.js']
  },
  module:{
    loaders:[
      {
        test: /\.jsx?$/,//just in case
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']//modules installed to help
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(), //live reloading
    new webpack.NoErrorsPlugin()
  ]
}
