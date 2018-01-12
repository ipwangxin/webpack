/**
 * SelectComponent组件模拟select标签，
 * 属性介绍：
 * style,对象，传入的一个对象的包裹层的样式
 * title,字符串，类似于label的标题
 * data：对象数组，用于展示的循环列表。
 * val字符串，对象数组中，对象的唯一标识的字段，也是选中改变后传回回掉函数的值
 * showName字符串，对象数组中的显示字段，也是选中修改后回掉函数的第二个回传值
 * changeOption回掉函数，处理选中对象的val和name值
 * 
 * 
 * <SelectComponent title="钢厂" val="id" data={[
 *                      {id:123,name:'成都'},
 *                      {id:124,name:'重庆'},
 *                       {id:125,name:'攀枝花'},
 *                       {id:126,name:'贵阳'}
 *                   ]} showName="name" 
 *                       changeOption={(val,name) => {deal(val,name)})} />
 * 
 */

import React from 'react';

import './../../scss/component/select.component.scss';


export default class SelectComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:this.props.data,
            choiceIndex: 0,
            choice:this.props.data[0],
            listShow:this.props.show,

        }
    }
    choiceOption(e) {
        console.log(13)
        e.nativeEvent.stopPropagation()
        let index = e.target.getAttribute('index');
        console.log(index)
        this.setState({
            choice: this.props.data[index]
        })
        if(this.state.choiceIndex !== index){
            this.state.choiceIndex = index;
        }
        if(this.props.changeOption){
            let obj = this.props.data[index]
            this.props.changeOption(obj[[this.props.val]],obj[this.props.showName]);
        }
    }
    // componentDidMount(){
    //     document.body.addEventListener('click',() => {
    //         if(this.state.listShow){
    //             this.setState({
    //                 listShow:false
    //             })
    //         }
    //     },true)
    // }
    // componentWillUnmount(){
    //     document.body.removeEventListener('click',() => {
    //         if(this.state.listShow){
    //             this.setState({
    //                 listShow:false
    //             })
    //         }
    //     },true)
    // }
    getOptionList() {
        if(this.state.listShow) {
            return(
            <div className="select_option">
                {this.state.data.map((item,index) => {
                    return (
                        <div className="option_item"
                            key={index} data-val={item[this.props.val]} 
                            onClick={e => {this.choiceOption(e)} }
                            index={index}
                            >
                                {item[this.props.showName]}
                        </div>
                    )
                    }
                )}
            </div>)}
        else{
            return ''
        }
    }
    render() {
        return (
            <div 
                className="select_wrapper" 
                style={this.props.style} 
                >
                    <div className="seletc_title">
                        {this.props.title}
                    </div>
                    <div className="select_body" 
                        onClick={
                            e => {
                                e.stopPropagation();
                                e.nativeEvent.stopImmediatePropagation();
                                this.setState({listShow:!this.state.listShow});
                            }
                        }>
                    <div className="select_choice">
                        {this.state.choice[this.props.showName]}
                    </div>
                    {this.getOptionList()}
                </div>
            </div>
        )
    }
}

