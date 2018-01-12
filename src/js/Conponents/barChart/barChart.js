import React from 'react';
// import the core library.
import ReactEchartsCore from 'echarts-for-react/lib/core';
// then import echarts modules those you have used manually.
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import './barChart.scss'

// The usage of ReactEchartsCore are same with above.

export default class BarChart extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            barData: {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                // legend: {
                //     orient: 'vertical',
                //     x: 'left',
                //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                // },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            }
        }
    }
    getOption() {
        return this.state.barData;
    }
    render() {
        return <div className="bar_wrapper">
            <ReactEchartsCore
            echarts={echarts}
            option={this.getOption()}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            style={{width:'150px',height:'150px'}} />

            <button>{this.props.children}</button>
            </div>  
    }
}
