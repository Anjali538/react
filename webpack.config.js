var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const htmlPlugins = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html'
})

const BundlePlugin = new BundleAnalyzerPlugin({
    generateStatsFile: true,
    analyzerMode: 'disabled',
})

module.exports = {
    'entry': './src/index.js',
    'output': {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [".js",".jsx",".css"]
    },
    devServer: {
        inline: true,
        publicPath: '/',
        contentBase: './dist'
    },
    module:  {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            localIdentName: '[name]__[local]__[hash:base64:8]',
                            sourceMap: true,
                            importLoaders: 1,
                            url: true
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                      }
                  }
                ]
              }
        ]
    },
    plugins: [htmlPlugins, BundlePlugin]
}