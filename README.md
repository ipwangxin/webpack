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

###### 注意
独立页面的html必须要放在src根目录下</br>
js入口文件也必须放在src/js的根目录下，引入的文件则不能放在js的根目录下


