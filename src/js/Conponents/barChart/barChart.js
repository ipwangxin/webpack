import React from 'react';
// import the core library.
import ReactEchartsCore from 'echarts-for-react/lib/core';
// then import echarts modules those you have used manually.
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import './barChart.scss'

// The usage of ReactEchartsCore are same with above.

var percent =60;

function getData() {
    return [{
        value: percent,
        itemStyle: {
            normal : {"color":  '#ff8d7c'
            }
        }
    },{
        value:100 -  percent,
        itemStyle: {
            normal : {"color":  'transparent'
            }
        }
    }
];
}

export default class BarChart extends React.Component {
    
    constructor(props){
        super(props)
        this.getOption = this.getOption.bind(this);
        this.state = {
            barData: {
                backgroundColor: 'transparent',
                title: {
                    text: (percent * 1) + '%',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        color: '#444',
                        fontWeight: 'bolder',
                        fontSize: 24,
                    }
                },
                series: [{
                        type: 'pie',
                        radius: ['35%', '50%'],
                        silent: true,
                        label: {
                            normal: {
                                show: false,
                            }
                        },
            
                        data: [{
                            value: 1,
                            itemStyle: {
                                normal : {"color":  new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#ff575a'
                                }, {
                                    offset: 1,
                                    color: '#ff917f'
                                }])
                                }
                            }
                        }],
            
                        animation: false
                    },
            
                    {
                        type: 'pie',
                        radius: ['35%', '50%'],
                        silent: true,
                        label: {
                            normal: {
                                show: false,
                            }
                        },
            
                        data: [{
                            value: 1,
                            itemStyle: {
                                normal : {"color":  new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#ff575a'
                                }, {
                                    offset: 1,
                                    color: '#ff917f'
                                }])
                                }
                            }
                        }],
            
                        animation: false
                    },
            
                    {
                        name: 'main',
                        type: 'pie',
                        radius: ['54%', '56%'],
                        startAngle: 225,
                        label: {
                            normal: {
                                show: false,
                            }
                        },
                        data: getData(),
            
                        animationEasingUpdate: 'cubicInOut',
                        animationDurationUpdate: 1000
                    }
                ]
            }
        }
    }

    getOption() {
        return this.state.barData;
    }

    render() {
        let style = {
            width:'280px',
            height:'280px',
            backgroundImage:`url(${this.props.bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
        }
        return <div className="bar_wrapper">
        <div style={style}>
        <ReactEchartsCore
            echarts={echarts}
            option={this.getOption()}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            style={{width:'280px',
            height:'280px',backgroundColor:'transparent'}} />
        </div>
            
            <span className="bar_list_title" style={{color:this.props.color}}> - {this.props.children} -</span>

            <div className="div_btn">我要{this.props.children}</div>
            </div>  
    }
}
