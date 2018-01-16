import React from 'react';

import './appListHead.scss';


export default class AppListHead extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div className="main_item_header">
                    <div className="main_item_title">{this.props.title}</div>
                    <div className="diagonal">/</div>
                    <div className="main_item_intro">{this.props.children}</div>
                </div>
    }
}