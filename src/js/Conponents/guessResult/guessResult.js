import React from 'react';

import './guessResult.scss';

import httpUtil from './../../Service/httpUtil'


export default class GuessResult extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
        this.changeBodyStyle = this.changeBodyStyle.bind(this)
        this.hiddenModal = this.hiddenModal.bind(this)

    }
    changeBodyStyle(){
        console.log(1)
        document.body.style.overflow = 'hidden'
    }
    hiddenModal() {
        console.log(this)
        this.props.hindleClick()
    }

    componentWillMount() {
        httpUtil.get('func/getResultList.json').then(data => {
            this.setState({
                list:data
            })
        })
    }
    componentWillUnmount(){
        console.log(2)
        document.body.style.overflow = 'auto'
    }


    render() {
        return (
            <div>
                <div className="modal_bg" 
                    onMouseOver={this.changeBodyStyle} 
                    onClick={this.hiddenModal}>
                </div>
                <div className="guess_result"
                    onMouseOver={this.changeBodyStyle}
                >
                    <div className="modal_header">
                        <span className="icon_modal_left"></span>
                        现货市场信心指数
                        <span className="icon_modal_right"  onClick={this.hiddenModal}></span>
                    </div>
                    <div className="model_body">
                        <ul>
                            <li>
                                <span className="li_circle"><span></span></span>
                                <span className="li_time">时间</span>
                                <span className="li_rise">看涨</span>
                                <span className="li_wave">看平</span>
                                <span className="li_reduce">看跌</span>
                            </li>

                            {  this.state.list.map((item,index) => {
                                let startArr = item.weekStart.split('-');
                                let endArr = item.weekEnd.split('-');
                                return (
                                <li key={index}>
                                    <span className="li_circle"><span></span></span>
                                    <span className="li_time">{startArr[1]}月{startArr[2]}日 ~ {endArr[1]}月{endArr[2]}日</span>
                                    <span className="li_rise">{item.rise}</span>
                                    <span className="li_wave">{item.shock}</span>
                                    <span className="li_reduce">{item.decline}</span>
                                </li>
                            )})}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
} 