# webpack的PC端多页面项目

## 搭建一个webpack的多页面的应用
采用extract-text-webpack-plugin插件将css单独打包并注入到同名的html文件中

### webpack的学习
###### 项目运行
```js
yarn  or
npm i
```
###### 项目结构说明

* src 为源文件。  
* dist为打包目录。

###### 项目启动o
```js
 webpack-dev-server     or
 npm start
```
###### 打包
>  npm run build

###### 
本项目融入了react和ES6语法的编译,可用于开发react的单页面或者多页面项目,若要添加其他配置，请自行修改webpack.config.js文件和webpack.prod.js文件,项目打包上线，请在打包前，根据项目上线需求，自行配置webpack.prod.js的publicPath参数。
######
本项目的配置基于webpack2+,若webpack版本不够，请先升级webpack版本。 
目前本人能力有限，将在后续持续优化项目配置。 
如果对你有用，别忘了留下你的star。

###### 注意
独立页面的html必须要放在src根目录下</br>
js入口文件也必须放在src/js的根目录下，js的模块文件则不能放在js的根目录下


