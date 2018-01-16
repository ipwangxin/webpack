import React, { Component } from 'react';

import httpUtil from './../../Service/httpUtil'
import BarChart from './../barChart/barChart';

import './guessPrice.scss';

export default class GuessPrice extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    componentDidMount(){
        
        httpUtil.get('api/v1.3.0/func/getResult.json').then(res =>{
            console.log(res)
        })
    }

    render() {
        return <div className="guess">
        <span className="icon_title_top"></span>
        <div className="guess_title">下周行情预判</div>
        <div className="guess_title_time">2017/11/24</div>
        <div className="history_entry"><span>查看历史</span></div>
        <div className="guess_wrapper container">
        <BarChart color={'#ff917f'}>看涨</BarChart>
        <BarChart color={'#8bd7ff'}>看平</BarChart>
        <BarChart color={'#9df2ac'}>看跌</BarChart>
    </div>
        </div> 
    }
}