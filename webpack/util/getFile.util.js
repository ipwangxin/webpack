const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const srcDir = path.resolve(process.cwd(), 'src');
// function getEntry(globPath) {
//     let entries = {},basename, tmp, pathname;

//   glob.sync(globPath).forEach(function(entry) {
//     basename = path.basename(entry, path.extname(entry));
//     tmp = entry.split('/').splice(-3);
//     pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
//     entries[pathname] = entry;
//   });
//   console.log("dev-entrys:");
//   console.log(entries);
//   return entries;
// }
const entries = function () {
  const jsDir = path.resolve(srcDir, 'js')
  const entryFiles = glob.sync(jsDir + '/*.{js,jsx}')
  const map = {};

  for (let i = 0; i < entryFiles.length; i++) {
    let filePath = entryFiles[i];
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    map[filename] = filePath;
  }
  return map;
}

const html_plugins = function () {
  const jsDir = path.resolve(process.cwd(), 'src')
  let entryHtml = glob.sync(jsDir + '/*.html')
  //console.log(entryHtml,jsDir)
  let r = []
  let entriesFiles = entries()
  for (let i = 0; i < entryHtml.length; i++) {
    let filePath = entryHtml[i];
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    let conf = {
      template: 'html-withimg-loader!' + filePath,
      filename: filename + '.html'
    }
    //console.log(conf)
    //如果和入口js文件同名
    if (filename in entriesFiles) {
      conf.inject = 'body'
      conf.chunks = ['vendor', filename]
    }
    //跨页面引用，如pageA,pageB 共同引用了common-a-b.js，那么可以在这单独处理
    //if(pageA|pageB.test(filename)) conf.chunks.splice(1,0,'common-a-b')
    r.push(new HtmlWebpackPlugin(conf))
    //r.push(new ExtractTextPlugin(filename + '.css?' + Math.random()))
  }
  return r
}

module.exports = {
  getHtmlConf: html_plugins,
  getJsEntry: entries
}