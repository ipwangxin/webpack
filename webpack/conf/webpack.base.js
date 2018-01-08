const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

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
        contentBase: './dist',   // 开发环境调试位置
        hot:true,          //开启HRM
        inline: true,      //开启热加载
        open: true,         //浏览器启动
        port: 8111
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
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