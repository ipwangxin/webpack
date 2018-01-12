import React, { Component } from 'react';

import HttpService from './../../Service/HttpService'
import BarChart from './../barChart/barChart';

import './guessPrice.scss';

export default class GuessPrice extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    componentDidMount(){
        console.log(HttpService.query({
            url: 'http://221.237.162.142:12120//api/v1.3.0/func/getResult.json',
            data: {
                a:123,
                b:456
            },
            success: res => {
                console.log(res)
            }
        }
           
        ))
    }

    render() {
        return <div className="guess_wrapper">
            <BarChart>我要看涨</BarChart>
            <BarChart>我要看平</BarChart>
            <BarChart>我要看跌</BarChart>
        </div>
    }
}