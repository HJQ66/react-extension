import React, { PureComponent } from "react";

export default class Parent extends PureComponent{
    state = {
        name:'tom'
    }
    render(){
        const {name} = this.state
        return(
            <div>
                我是父组件：{name}
                {/* 相当于vue里面的插槽,可以往B组件里面传值 */}
                <A render={ (name) => <B name={name}/>} name={name}></A>
            </div>
        )
    }
}
class A extends PureComponent{
    render(){
        const {name} = this.props
        return(
            <div>
                我是A组件：{name}
                {/* 插槽预留位置 */}
                {this.props.render(name)}
            </div>
        )
    }
}
class B extends PureComponent{
    render(){
        return(
            <div>我是B组件：{this.props.name}</div>
        )
    }
}