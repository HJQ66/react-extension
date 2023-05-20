import React, { Component } from 'react'

import Child from '../Child'
export default class Parent extends Component {
    
    state = {
        hasError : ''//用于标记错误信息
    }

    //当子组件有错误时，就走该钩子，并携带错误信息
    static getDerivedStateFromError(err){
        return {hasError:err}
    }

    componentDidCatch(error, info) {
        // 统计页面的错误。发送请求发送到后台去
        console.log(error, info);
    }

  render() {
    return (
      <div>
        <h1>我是父组件</h1>
        { this.state.hasError ? <h1>子组件有错误</h1>:<Child />}
      </div>
    )
  }
}
