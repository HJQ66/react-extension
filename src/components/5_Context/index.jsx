import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
const {Provider,Consumer} = MyContext
export default class Demo extends Component {
  state = {name:'Tom',age:18}

  render() {
    const {name,age} = this.state
    return (
      <div className='a_box'>
        <h1>我是A组件，我的姓名是：{name}--年龄：{age}</h1>
        <Provider value={{name,age}}>
            <B {...this.state}/>
        </Provider>
      </div>
    )
  }
}

class B extends Component{
    render(){
    const {name,age} = this.props
    return(
            <div className='b_box'>
                <h1>我是B组件，我是通过props传递的：{name}---{age}</h1>
                <C />
            </div>
        )
    }
}

//类式组件
// class C extends Component{
//     //接受祖组件传递过来的数据
//     static contextType = MyContext
//     render(){
//         const {name,age} = this.context
//         return(
//             <div className='c_box'><h1>我是C类式组件，祖组件通过context传递的：{name}---{age}</h1></div>
//         )
//     }
// }

//函数式组件
function C() {
    return(
        <div className='c_box'><h1>我是C函数式组件，祖组件通过context传递的：
            <Consumer>
            {
                value => {
                    return `${value.name}---${value.age}`
                }
            }
            </Consumer>
            </h1>
        </div>
    )
}

