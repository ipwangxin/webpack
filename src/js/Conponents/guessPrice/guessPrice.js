import React, { Component } from 'react';

import httpUtil from './../../Service/httpUtil'
import BarChart from './../barChart/barChart';
import { format } from './../../util/date.util'

import './guessPrice.scss';

export default class GuessPrice extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            today: format(null, '/')
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
        <div className="guess_title_time">{this.state.today}</div>
        <div className="history_entry"><span>查看历史 <img src={require('./../../../assets/images/icon/more_data.png')} alt=""/></span></div>
        <div className="guess_wrapper container">
        <BarChart color={'#ff917f'} bgImage={require('./../../../assets/images/icon/red_circle.png')}>看涨</BarChart>
        <BarChart color={'#8bd7ff'} bgImage={require('./../../../assets/images/icon/blue_circle.png')}>看平</BarChart>
        <BarChart color={'#9df2ac'} bgImage={require('./../../../assets/images/icon/green_circle.png')}>看跌</BarChart>
    </div>
        </div> 
    }
}