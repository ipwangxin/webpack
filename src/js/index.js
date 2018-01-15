import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/index.scss'

import LineChart from './Conponents/linechart/linechart';
import GuessPrice from './Conponents/guessPrice/guessPrice';



// Render the main component into the dom
ReactDOM.render((<div className="a">
    <header className="header">
        <div className="public_reporter">
            <div className="newer_repoeter container">
                <span className="icon_reporter"></span>
                <span className="content">积微指数APP全新客户端上线啦！</span>
                <span className="more_reporter">查看更多</span>
            </div>
        </div>
        <div className="logo_wrapper container">
            <div className="logo_content">
                <div className="logo_img"></div>
                <div className="logo_title">西南钢铁指数</div>
                <ul className="friends_link">
                <li><a href="">积微钢铁</a>　／　</li>
                <li><a href="">积微运网</a>　／　</li>
                <li><a href="">积微循环</a>　／　</li>
                <li><a href="">积微钛网</a>　／　</li>
                <li><a href="">积微钒网</a></li>
            </ul>
            </div>
            
        </div>
    </header>
    <div className="app_intr"></div>
    <GuessPrice />
    <LineChart title="true"/>
    <LineChart title="true"/>
</div>), document.getElementById('app'));
console.log('成功')