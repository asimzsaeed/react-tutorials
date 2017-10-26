var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'app': './src/app.js'
  },
  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
        {
          test: /\.js?/,
          include: helpers.root('src', 'app'),
          loader: "babel-loader",
          query: {
              presets: ["react", "es2015", "stage-2"]
          }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']  
      }
    ]
  },

  plugins: [
    
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app']
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: './src/app.min.css', to: 'app.min.css' },
      { from: 'mock', to: 'mock' }
    ])
  ]
};

