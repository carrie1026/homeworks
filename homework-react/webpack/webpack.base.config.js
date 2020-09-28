const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const friendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const packageName = require('../package.json').name;
module.exports = {
    entry:{
        main: path.join(__dirname,"../src/index.js"),
        // common:['react','react-dom']
    },
    output:{
        path:path.join(__dirname,"../dist"),
        filename:"[name]_[hash:8].js",
        publicPath: './',
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${packageName}`,
    },
    resolve:{
        extensions:['.js','.jsx','.json','.css','.less','sass','scss'],
        alias: {
            '@components': path.resolve(__dirname, '../src/components'),
            '@apis': path.resolve(__dirname, '../src/api'),
            '@utils': path.resolve(__dirname, '../src/utils'),
            '@nodeModules': path.resolve(__dirname, '../node_modules'),
            '@assets': path.resolve(__dirname, '../src/assets')
          },
    },
    performance: {
        hints: false
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude:/(node_modules)/,
                loader:'babel-loader',
                options: {
                    presets:['react', "stage-2"]
                },
            },
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            { 
                test: /\.styl$/, 
                loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader'], 
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.(ico)$/,
                use:"raw-loader",
            },
            {
                test:/\.(svg|png|jpg|ico|gif|eot|ttf|woff|woff2|pdf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash:8].[ext]',
                        outputPath: 'assets/'
                    }
                }],
                exclude: [/\.styl$/]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "../src/index.html")
        }),
       new MiniCssExtractPlugin({
           filename: "[name]_[hash:8].css",
           chunkFilename: "[id]_[hash:8].css"
       }),
       new friendlyErrorsWebpackPlugin(),
       
       new CleanWebpackPlugin({
            root: path.join(__dirname, '../dist'),
            verbose:false,
            // exclude:['img']//不删除img静态资源
        }),
    //    new webpack.HotModuleReplacementPlugin()
    ],
    stats: 'errors-only' // 需要在控制台查看打包文件信息时，将此行注释即可。
}
