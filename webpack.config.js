const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractCss = new ExtractTextPlugin('css/[name].css?[contenthash]');
const webpack = require('webpack');
const getJsEntry = require('./webpack/util/getFile.util').getJsEntry();
const getHtmlConf = require('./webpack/util/getFile.util').getHtmlConf();

const uglify = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: getJsEntry,
    output: {
        filename: 'js/[name].[hash].js',
        publicPath:"/",
        path: path.resolve(process.cwd(), 'dist')
    },
    devtool: 'source-map', //源文件报错
    devServer: {
        hot: true, //开启HRM
        inline: true, //开启热加载
        open: true, //浏览器启动
        port: 8111, 
        contentBase: './dist',
    },
    plugins: [
        //html入口文件
        ...getHtmlConf,
        //清空dist文件夹
        new CleanWebpackPlugin(['./dist']),
        //调试热更新插件
        new webpack.HotModuleReplacementPlugin(),
        //开启js压缩
        //new uglify(),
        //css额外打包
        ExtractCss,

    ],
    module: {
        loaders: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader:"css-loader",
                        options:{
                            //css压缩
                            minimize: true 
                        }},
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
                    'url-loader?limit=4096&name=assets/images/[name].[ext]'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader?limit=4096&name=../assets/font/[name].[ext]'
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
                    query: {
                        presets: ['react', 'es2015']//支持react jsx和ES6语法编译
                      }
                }
            }
        ]
    }



}