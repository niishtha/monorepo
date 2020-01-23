const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(){
  return {
    mode: 'development',
    entry: {
      main : path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      publicPath: process.env.APP_PUBLIC_PATH,
      globalObject: 'this',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [{
            loader: 'babel-loader',
            options: {
              babelrc: false,
              extends: '../babel.config.js',
            }
          }],
          exclude: /node_modules/
        },
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
      runtimeChunk: 'single',
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new HtmlWebpackPlugin({
        title: 'My App',
        template: './src/index.html'
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['./dist'],
      }),
    ],
    devServer: {
      contentBase: path.resolve('./build'),
      headers: { 'Access-Control-Allow-Origin': '*' },
      stats: 'errors-only',
      overlay: true,
    },
  };
}