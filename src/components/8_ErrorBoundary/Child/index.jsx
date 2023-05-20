import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // userList:[
        //     {id:'001',name:'Tom',age:22},
        //     {id:'002',name:'Jerry',age:21},
        //     {id:'003',name:'marry',age:17},
        // ]
        userList:'00'
    }
  render() {
    return (
      <ul>
        <h1>我是子组件</h1>
        {
            this.state.userList.map(item=>{
                return <li key={item.id}>name:{item.name}---age:{item.age}</li>
            })
        }
      </ul>
    )
  }
}
