/**
 * Select组件模拟select标签，
 * 属性介绍：
 * style,对象，传入的一个对象的包裹层的样式
 * title,字符串，类似于label的标题
 * data：对象数组，用于展示的循环列表。
 * val字符串，对象数组中，对象的唯一标识的字段，也是选中改变后传回回掉函数的值
 * showName字符串，对象数组中的显示字段，也是选中修改后回掉函数的第二个回传值
 * changeOption回掉函数，处理选中对象的val和name值
 * 
 * 
 * <Select title="钢厂" val="id" data={[
 *                      {id:123,name:'成都'},
 *                      {id:124,name:'重庆'},
 *                       {id:125,name:'攀枝花'},
 *                       {id:126,name:'贵阳'}
 *                   ]} showName="name" 
 *                       changeOption={(val,name) => {deal(val,name)})} />
 * 
 */

import React from 'react';

import './select.scss';


export default class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:this.props.data,
            listShow: false,
            choiceIndex: 0,
            choice:this.props.data[0]
        }
    }
    choiceOption(index) {
        console.log(13)
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
    componentDidMount(){
      document.addEventListener('click',(e) => {
        if(this.state.listShow){
          this.setState({
            listShow:false
          })
        }
      },false)
    }
    componentWillUnmount(){
        document.removeEventListener('click',(e) => {
            if(this.state.listShow){
                this.setState({
                    listShow:false
                })
            }
        },false)
    }
    render() {
        return (
            <div 
                className="select_wrapper" onFocus={() => {
                    console.log('====================onFocus')
                }}
                style={this.props.style} 
                onClick={e => {
                    console.log("wrapper");
                  e = e || window.event;
                  e.preventDefault();
                  //e.stopPropagation();
                }}
                >
                    <div className="seletc_title">
                        {this.props.title}
                    </div>
                    <div className="select_body" 
                        onClick={e => {
                          console.log("body");
                             e.nativeEvent.stopImmediatePropagation();
                            this.setState({listShow:!this.state.listShow});
                        }
                        }>
                    <div className="select_choice">
                        {this.state.choice[this.props.showName]}
                    </div>
                    {this.state.listShow ? (
                        <div className="select_option">
                            {this.state.data.map((item,index) => {
                            return (
                                <div className="option_item"
                                 key={index}
                                     data-val={item[this.props.val]}
                                 onClick={
                                   e => {
                                       console.log("item");
                                       e.nativeEvent.stopImmediatePropagation();
                                     this.choiceOption(index);
                                   }
                                 }
                                 >
                            {item[this.props.showName]}
                            </div>)
                            }
                        )}
                    </div>):null}
                </div>
            </div>
        )
    }
}
