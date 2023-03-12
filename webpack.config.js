const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  // entry: './src/index.js', // 預設 entry name 為 main
  entry: {
    app: './src/index.ts', // 設置 entry name 為 app
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js', // 基本設置
    filename: '[name].[chunkhash].bundle.js', // 進階設置
    clean: true, // 在生成文件之前清空 output 目錄。
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // 有順序性的
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset', // 還有其它三種 type
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle'],
              ['mozjpeg', { quality: 90 }], // https://www.npmjs.com/package/imagemin-mozjpeg
              ['pngquant', { speed: 4 }], // https://www.npmjs.com/package/imagemin-pngquant
            ],
          },
        },
        // Disable `loader` 禁用 loader 之後，預設 8KB 以上的檔案才會進來被 ImageMinimizerPlugin 處來
        loader: false,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TypeScript App',
      template: './src/template.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
};
