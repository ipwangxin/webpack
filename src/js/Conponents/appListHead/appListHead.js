import React from 'react';

import './appListHead.scss';


export default class AppListHead extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let style = {
            display:'inline-block',
            verticalAlign:'middle',
            width:'36px',
            height:'32px',
            backgroundImage: `url(${this.props.icon})`,
            backgroundRepeat: 'no-repeat'
        }
        return <div className="main_item_header">
                    <span style={style}></span>
                    <div className="main_item_title">{this.props.title}</div>
                    <div className="diagonal">/</div>
                    <div className="main_item_intro">{this.props.children}</div>
                </div>
    }
}