import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import ChromeExtensionReloader from 'webpack-chrome-extension-reloader'
import CopyPlugin from 'copy-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import path from 'path'
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { NODE_ENV = 'development' } = process.env

if (NODE_ENV === 'development') {
  console.log('dev');
} else {
  console.log('prod');
}

const base = {
  context: __dirname,
  entry: {
    server: './app/index.js'
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, './app/styles/'),
      assets: path.resolve(__dirname, './app/assets/')
    }
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: './[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
          },
        }, ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'assets/fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  target: 'node',
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    })
  ]
}

const development = {
  ...base,
  mode: 'development',
  devtool: '#eval-module-source-map',
  watch: true,
  module: {
    ...base.module
  },
  plugins: [
    ...base.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new ChromeExtensionReloader()
  ]
}

const production = {
  ...base,
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'js/[name].js'
  },
  mode: 'production',
  devtool: false,

  plugins: [
    ...base.plugins,
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
}

if (NODE_ENV === 'development') {
  module.exports = development
} else {
  module.exports = production
}
