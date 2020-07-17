const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ClassPropertiesPlugin = require('@babel/plugin-proposal-class-properties');

//压缩 js 和 css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssAssetsPlugin()
        ]
    },
    mode: "development",
    devServer: {
        open: true,
        port: 8001,

    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),

    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {

                    }
                },
                'css-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.less$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.js$/i,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        ClassPropertiesPlugin
                    ]
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        })
    ],
    devtool: 'source-map'
}