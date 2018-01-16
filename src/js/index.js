import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/index.scss'

import LineChart from './Conponents/linechart/linechart';
import GuessPrice from './Conponents/guessPrice/guessPrice';
import AppListHead from './Conponents/appListHead/appListHead'



// Render the main component into the dom
ReactDOM.render((<div className="wapper">
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

    <main>
        <div className="main_item_warp map">
            <div className="container">
                <AppListHead title={"报价地图"}>主流市场钢厂价格走势一目了然</AppListHead>
                
                <div className="fa-line-chart">
                    <LineChart />
                </div>
            </div>
        </div>
        <div className="main_item_warp index">
            <div className="container">
                <AppListHead title={"价格指数"}>看穿真正的市场行情</AppListHead>
                <div className="fa-line-chart">
                    <LineChart />
                </div>
            </div>
        </div>
        <div className="main_item_warp climate">
            <div className="container">
            <AppListHead title={"景气指数"}>真实反映区域市场成交市态</AppListHead>
                <div className="fa-line-chart">
                    <LineChart />
                </div>
            </div>
        </div>
        <div className="main_item_warp stock">
            <div className="container">
            <AppListHead title={"库存指数"}>提供更好的行情分析依据</AppListHead>
                <div className="fa-line-chart">
                    <LineChart />
                </div>
            </div>
        </div>
        <div className="main_item_warp datacenter">
            <div className="container">
            <AppListHead title={"数据中心"}>挖掘数据的价值助力市场判断</AppListHead>
                <div className="fa-line-chart">
                    <LineChart />
                </div>
            </div>
        </div>
    </main>
</div>), document.getElementById('app'));
console.log('成功')