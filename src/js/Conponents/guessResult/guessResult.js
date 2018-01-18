import React from 'react';

import './guessResult.scss';


export default class GuessResult extends React.Component {
    constructor(props) {
        super(props)
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
                        现货市场信心指数
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
                            <li>
                            <span className="li_circle"><span></span></span>
                            <span className="li_time">01月01日 ~ 01月07日</span>
                                <span className="li_rise">25%</span>
                                <span className="li_wave">25%</span>
                                <span className="li_reduce">50%</span>
                            </li>
                            <li><span className="li_circle"><span></span></span></li>
                            <li><span className="li_circle"><span></span></span></li>
                            <li><span className="li_circle"><span></span></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
} 