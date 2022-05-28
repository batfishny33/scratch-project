const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename:'bundle.js'
    },
    devServer: {
      port: 8080,
      host: 'localhost',
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      hot: true,
      compress: true,
      historyApiFallback: true,
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      proxy: {
        '/': {
            target: 'http://localhost:3000/',
            secure: false,
        },
      }
    },
    module: {
      rules: [
        {
            test: /\.jsx?/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.css/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
        },
    ],
    },
    plugins: [
      new HTMLWebpackPlugin({
          template: path.join(__dirname,'index.html'),
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
}