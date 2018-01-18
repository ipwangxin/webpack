import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/index.scss'

import LineChart from './Conponents/linechart/linechart';
import GuessPrice from './Conponents/guessPrice/guessPrice';
import AppListHead from './Conponents/appListHead/appListHead';



// Render the main component into the dom


const render = () =>{
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
                <div className="logo_title"><a href="http://index.jwell56.com">西南钢铁指数</a></div>
                <ul className="friends_link">
                <li><a href="http://gt.jwell56.com/" target="_black">积微钢铁</a>　／　</li>
                <li><a href="http://yun.jwell56.com/"  target="_black">积微运网</a>　／　</li>
                <li><a href="http://xh.jwell56.com"  target="_black">积微循环</a>　／　</li>
                <li><a href="http://tai.jwell56.com/"  target="_black">积微钛网</a>　／　</li>
                <li><a href="http://fan.jwell56.com/"  target="_black">积微钒网</a></li>
            </ul>
            </div>
            
        </div>
    </header>
    <div className="app_intr" id="app"></div>
    <GuessPrice />

    <main>
        <div className="main_item_warp map">
            <div className="container">
                <AppListHead title={"报价地图"} icon={require('./../assets/images/icon/1.png')}>主流市场钢厂价格走势一目了然</AppListHead>
                
                <div className="fa-line-chart">
                    <LineChart />
                </div>
            </div>
        </div>
        <div className="main_item_warp index">
            <div className="container">
                <AppListHead title={"价格指数"} icon={require('./../assets/images/icon/2.png')}>看穿真正的市场行情</AppListHead>
                <div className="fa-line-chart">
                    <LineChart />
                </div>
            </div>
        </div>
        <div className="main_item_warp climate">
            <div className="container">
            <AppListHead title={"景气指数"} icon={require('./../assets/images/icon/3.png')}>真实反映区域市场成交市态</AppListHead>
                <div className="fa-line-chart">
                    <LineChart />
                </div>
            </div>
        </div>
        <div className="main_item_warp stock">
            <div className="container">
            <AppListHead title={"库存指数"} icon={require('./../assets/images/icon/4.png')}>提供更好的行情分析依据</AppListHead>
                <div className="fa-line-chart">
                    <LineChart />
                </div>
            </div>
        </div>
        <div className="main_item_warp datacenter">
            <div className="container">
            <AppListHead title={"数据中心"} icon={require('./../assets/images/icon/5.png')}>挖掘数据的价值助力市场判断</AppListHead>
                <div className="fa-line-chart">
                    <LineChart />
                </div>
            </div>
        </div>
    </main>

    <footer className="footer">
    <div className="footer-content">
            <div className="content">
                <div className="foot-left">
                    <h1 className="h-bg"></h1>
                    <p className="footer-num-dis">24小时客服热线</p>
                    <p className="foot-number">400-101-8958 </p>
                </div>
                <div className="foot-pos">
                    <p>关注微信公众号</p>
                    <div className="shaoma"></div>
                </div>
                <div className="about">
                    <p className="title"><a href="/pcIndex/about">关于我们</a></p>
                    <p><a href="/">积微指数</a></p>
                    <p><a href="/pcIndex/notice">历史公告</a></p>
                </div>
            </div>
        </div>
        <div className="footer-bottom">Copyright © 积微指数 All Rights Reserved 地址：四川省成都市青白江区八阵大道698号 蜀ICP备15035343号-1</div>
    </footer>
</div>), document.getElementById('app'));
}

render()


// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./index', () => { render(App) })
  }