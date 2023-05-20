import React, { PureComponent } from 'react'

import './index.css'

//PureComponent代替Component，可以用于优化组件
export default class Person extends PureComponent {
    state = {
        carName:'奔驰c63'
    }
  render() {
    console.log('Parent-render');
    const {carName} = this.state
    return (
      <div className='parent'>
        我是父组件，我的座驾是：{carName}
        <br />
        <button onClick={()=>{this.setState({carName:'迈巴赫'})}}>点我切换座驾</button>
        <br />
        {/* PureComponent 使用了PureComponent这个组件，当修改父组件里面的内容，如果子组件不依赖于父组件里面的数据，那么就不会触发渲染，优化性能 */}
        <Child carName='比亚迪'/>
      </div>
    )
  }
}

class Child extends PureComponent{
    render(){
    console.log('Child-render');
    const {carName} = this.props
        return (
            <div className='child'>
                我是子组件，父亲的座驾是：{carName}
            </div>
        )
    }
}