import React from 'react';
//类式组件
// export default class Demo extends React.Component{
//     state = {
//         name:'tom',
//         count:0,
//         num:1
//     }
//     //页面挂载时执行的生命周期钩子
//     componentDidMount(){
//         this.timer = setInterval(() => {
//             this.setState({num:this.state.num+1})
//         }, 1000);
//     }
//     //卸载组件前执行的生命周期钩子
//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
//     //卸载组件
//     unmount = () => {
//         // React18 unmountComponentAtNode被弃用警告
//         // ReactDOM.unmountComponentAtNode(document.getElementById('root'))

//         //root是从跟组件传递过来的
//         const {root} = this.props
//         root.unmount()
//     }
//     add = () => {
//         this.setState((state)=>({count:state.count+1}))
//     }
//     changeName = () => {
//         this.setState({name:'Jerry'})
//     }
//     render(){
//         const {name,count,num} = this.state
//         return(
//             <div>
//                 <h1>页面挂载后我每隔一秒自增+1：{num}</h1>
//                 <h1>当前求和为：{count}</h1>
//                 <h1>我的名字为：{name}</h1>
//                 <button onClick={this.add}>点我加1</button>
//                 <button onClick={this.changeName}>点我改名</button>
//                 <button onClick={this.unmount}>点我卸载组件</button>
//             </div>
//         )
//     }
// }



//函数式组件 函数式组件里面没有this
export default function Demo(props) {
    const [count,setCount] = React.useState(0)
    const [name,setName] = React.useState('jerry')
    const [num,setNum] = React.useState(0)

    React.useEffect(()=>{
        let timer = setInterval(()=>{
            setNum(num => num + 1)
        },1000)
        return clearInterval(timer)
    },[])
    
    function add(){
        setCount(count => count+1)
    }
    function changeName(){
        setName('tom')
    }
    function unmount(){
        const {root} = props
        root.unmount()
    }
  return (
    <div>
        <h1>页面挂载后我每隔一秒自增:{num}</h1>
        <h1>当前求和为：{count}</h1>
        <h1>我的名字为：{name}</h1>
        <button onClick={add}>点我加1</button>
        <button onClick={changeName}>点我改名</button>
        <button onClick={unmount}>点我卸载</button>
    </div>

  )
}
