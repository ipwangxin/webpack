import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/index.scss';



// Render the main component into the dom


const render = () =>{
    ReactDOM.render((<div className="wapper">
    <h2>规则介绍</h2>
    <p>多页面项目脚手架，页面放在src根目录下，会自动打包js根目录下的同名js文件</p>
    <p>采用了css的额外打包，自动引入，支持scss文件的解析</p>
</div>), document.getElementById('app'));
}

render()


// Webpack Hot Module Replacement API
// if (module.hot) {
//     module.hot.accept('./index', () => { render(App) })
//   }