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
        publicPath: "/",          //发布路径，由上线相对于项目的根目录来决定
        path: path.resolve(process.cwd(), 'dist')
    },
    plugins: [
        //html入口文件
        ...getHtmlConf,
        //清空dist文件夹
        new CleanWebpackPlugin(['./dist']),
        //调试热更新插件
        new webpack.HotModuleReplacementPlugin(),
        //开启js压缩
        new uglify(),
        //css额外打包
        ExtractCss,

    ],
    module: {
        loaders: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                            loader: "css-loader",
                            options: {
                                //css压缩
                                minimize: true
                            }
                        },
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
                        presets: ['react', 'es2015'] //支持react jsx和ES6语法编译
                    }
                }
            },
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    },
                    {
                        loader: 'expose-loader',
                        options: '$'
                    }
                ]
            }
        ]
    }



}