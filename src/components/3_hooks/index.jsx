import React from 'react';
//类式组件
// export default class Demo extends React.Component{
//     state = {
//         name:'tom',
//         count:0,
//         num:1
//     }
//     myRef = React.createRef()
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
//     show = () => {
//         console.log(this.myRef.current.value);
//         alert(`当前输入框的数字是：${this.myRef.current.value}`)
//     }
//     render(){
//         const {name,count,num} = this.state
//         return(
//             <div>
//                 <h1>页面挂载后我每隔一秒自增+1：{num}</h1>
//                 <h1>当前求和为：{count}</h1>
//                 <h1>我的名字为：{name}</h1>
//                 <input type="text" ref={this.myRef} placeholder='输入数字' /><br /><br />
//                 <button onClick={this.add}>点我加1</button>
//                 <button onClick={this.changeName}>点我改名</button>
//                 <button onClick={this.unmount}>点我卸载组件</button>
//                 <button onClick={this.show}>展示输入框的数字</button>
//             </div>
//         )
//     }
// }



//函数式组件 函数式组件里面没有this
export default function Demo(props) {
    //state hook
    const [count,setCount] = React.useState(0)
    const [name,setName] = React.useState('jerry')
    const [num,setNum] = React.useState(0)

    React.useEffect(()=>{
        //相当于类式组件里面componentDidMount
        let timer = setInterval(()=>{
            setNum(num => num + 1)
        },1000)
        //返回值是一个函数，相当于类式组件里面的componentWillUnmount钩子，组件将要卸载时执行这个
        return ()=>{
            clearInterval(timer)
        }
    })

    const myRef = React.useRef()
    
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
    function show() {
        console.log(myRef);
        alert(`当前输入框的数字是：${myRef.current.value}`)
    }
  return (
    <div>
        <h1>页面挂载后我每隔一秒自增:{num}</h1>
        <h1>当前求和为：{count}</h1>
        <h1>我的名字为：{name}</h1>
        <input type="text" ref={myRef} placeholder='输入数字'/><br /><br />
        <button onClick={add}>点我加1</button>
        <button onClick={changeName}>点我改名</button>
        <button onClick={unmount}>点我卸载</button>
        <button onClick={show}>点我展示输入框数字</button>
    </div>

  )
}
