import React,{Fragment} from 'react'

export default function Demo() {
  return (
    // 外面加一层Fragment标签，当解析的时候会忽略掉这个标签
    <Fragment>
        Demo
    </Fragment>
  )
}
