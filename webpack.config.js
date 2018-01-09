const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractCss = new ExtractTextPlugin('css/[name].css?[contenthash]');
const webpack = require('webpack');
const getJsEntry = require('./webpack/util/getFile.util').getJsEntry();
const getHtmlConf = require('./webpack/util/getFile.util').getHtmlConf();


module.exports = {
    entry: getJsEntry,
    output: {
        filename: 'js/[name].[hash].js',
        //publicPath:"/",
        path: path.resolve(process.cwd(), 'dist')
    },
    devtool: 'inline-source-map', //源文件报错
    devServer: {
        hot: true, //开启HRM
        inline: true, //开启热加载
        open: true, //浏览器启动
        port: 8111, 
        contentBase: './dist',
    },
    plugins: [
        ...getHtmlConf,
        new CleanWebpackPlugin(['dist']),
        // new HtmlWebpackPlugin({
        //     title: 'Output Management',
        //     template: 'html-withimg-loader!./src/index.html'
        // }),
        ExtractCss,

    ],
    module: {
        loaders: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "postcss-loader",
                        "sass-loader"
                    ]
                }),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
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