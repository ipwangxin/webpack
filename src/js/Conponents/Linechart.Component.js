//import echarts from 'echarts';
import React from 'react';
import ReactEcharts from 'echarts-for-react';

import SelectComponent from './Select.Component'


export default class LineChartComponent extends React.Component {


        constructor(props) {
            super(props)
            this.state = {
                act: 0,
                options: {
                    title: {
                        text: '未来一周气温变化',
                        subtext: '纯属虚构'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['最高气温', '最低气温']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {
                                readOnly: false
                            },
                            magicType: {
                                type: ['line', 'bar']
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    dataZoom: [{
                        textStyle: {
                            color: '#8392A5'
                        },
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        dataBackground: {
                            areaStyle: {
                                color: '#8392A5'
                            },
                            lineStyle: {
                                opacity: 0.8,
                                color: '#8392A5'
                            }
                        },
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }, {
                        type: 'inside'
                    }],
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    },
                    series: [{
                            name: '最高气温',
                            type: 'line',
                            data: [11, 11, 15, 13, 12, 13, 10],
                            markPoint: {
                                data: [{
                                        type: 'max',
                                        name: '最大值'
                                    },
                                    {
                                        type: 'min',
                                        name: '最小值'
                                    }
                                ]
                            },
                            markLine: {
                                data: [{
                                    type: 'average',
                                    name: '平均值'
                                }]
                            }
                        },
                        {
                            name: '最低气温',
                            type: 'line',
                            data: [1, -2, 2, 5, 3, 2, 0],
                            markPoint: {
                                data: [{
                                    name: '周最低',
                                    value: -2,
                                    xAxis: 1,
                                    yAxis: -1.5
                                }]
                            },
                            markLine: {
                                data: [{
                                        type: 'average',
                                        name: '平均值'
                                    },
                                    [{
                                        symbol: 'none',
                                        x: '90%',
                                        yAxis: 'max'
                                    }, {
                                        symbol: 'circle',
                                        label: {
                                            normal: {
                                                position: 'start',
                                                formatter: '最大值'
                                            }
                                        },
                                        type: 'max',
                                        name: '最高点'
                                    }]
                                ]
                            }
                        }
                    ]
                }
            };
        }
        changeFirst(e){
            console.log(e.target.value)
        }
        initChart(ele) {
            echarts.init(ele)
        }
        changeOptions() {
            //获取地图实例
            let chart = this.curChart.getEchartsInstance();
            chart.setOption({
                title: {
                    text: '堆叠区域图'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {normal: {}},
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            }
            );
        }
        clickSpan(e) {
            if(e.target.className.indexOf('act')==-1){
                this.setState({
                    act: 1 - this.state.act
                })
                this.changeOptions();
            }
            
        }
        dealSelectChange(val){
            console.log(val)
        }
        render() {
            return ( <div className = "chart_wrapper">
                 {
                    // this.props.title ? (
                    //     <div className="chart_title">
                    //         <span className={this.state.act?'act':''} onClick={(e) => {this.clickSpan(e)}}> 选项1 </span> / 
                    //         <span className={this.state.act?'':'act'} onClick={(e) => {this.clickSpan(e)}}> 选项2 </span>
                    //     </div>
                    // ) : '123'
                }
                <div className="select_list_wrapper">
                    <SelectComponent style={{width:'150px'}} title="城市：" val="id" data={[
                        {id:123,name:'成都'},
                        {id:124,name:'重庆'},
                        {id:125,name:'攀枝花'},
                        {id:126,name:'贵阳'}
                    ]} showName="name" changeOption={this.dealSelectChange}/>
                    <SelectComponent  style={{width:'150px'}} title="钢厂：" val="id" data={[
                        {id:123,name:'成都'},
                        {id:124,name:'重庆'},
                        {id:125,name:'攀枝花'},
                        {id:126,name:'贵阳'}
                    ]} showName="name" changeOption={this.dealSelectChange}/>
                    <SelectComponent title="钢厂：" val="id" data={[
                        {id:123,name:'成都'},
                        {id:124,name:'重庆'},
                        {id:125,name:'攀枝花'},
                        {id:126,name:'贵阳'}
                    ]} showName="name" changeOption={this.dealSelectChange}/>
                </div>
                <ReactEcharts 
                ref={e => {this.curChart = e}}
                option = {this.state.options}
                style = {{height: '400px',width: '800px'}} /> 
                </div>)
            }

        }

        // <div style={{display:'inlineBlock'}} onClick={e => this.showList()}>成都</div>