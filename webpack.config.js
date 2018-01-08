const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const getEntry = require('./webpack/util/getFile.util').getEntry;

let pages = getEntry(path.resolve(__dirname, 'src/**/*.html'));
console.error(typeof pages)

module.exports = {
    entry: {
        index: './src/js/index'
    },
    output: {
        filename: 'bundle[hash].js',
        //publicPath:"/",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',   //源文件报错
    devServer: {
        hot: true,          //开启HRM
        inline: true,      //开启热加载
        open: true,         //浏览器启动
        port: 8111,
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css"),

    ],
    module: {
        loaders: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader",
                    //"postcss-loader",
                    "sass-loader"]
            }),
            // use: [{
            //     loader: "style-loader" // 将 JS 字符串生成为 style 节点
            // }, {
            //     loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            // }, {
            //     loader: "sass-loader" // 将 Sass 编译成 CSS
            // }]
        },
        // {
        //     test: /\.css$/,
        //     use: [
        //         'style-loader',
        //         'css-loader'
        //     ]
        // },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader",
                    //"postcss-loader",
                    "sass-loader"]
            }),
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader?limit=4096&name=assets/images/[name].[ext]'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader?limit=4096&name=assets/font/[name].[ext]'
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                // options: {
                //     presets: ['env']
                // }
            }
        }
        ]
    }



}