import React, { Component } from 'react'

export default class Demo extends Component {
    state = {
        count:0
    }
    add = ()=>{
        /* 
            1、this.setState的第一种写法
            this.setState方法是一个异步方法
            this.setState对象式写法，第一个参数是一个对象，传入需要修改的state；第二个参数是一个函数，用于返回修改之后的state
        */
        // this.setState({count:this.state.count+1},()=>{
        //     console.log('修改state后count的值是：',this.state.count);
        // })

        /* 
            2、this.setState的第二种写法，第一个参数是一个函数,函数体里面可以接收两个参数，一个是state对象，另一个是外部传过来的props
        */
       this.setState((state,props)=>{
        return {count:state.count+1}
       })

    }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我加1</button>
      </div>
    )
  }
}
