import React, { useRef } from 'react';
import MyInput from './child';

// const ForwardRefCom: React.FC<any> = (props: any) => {
//     const parentref = useRef()
//     return (
//         <div>
//             <button type="button" onClick={()=>{
//                 console.log(parentref.current)
//                 // parentref.current
//             }}>获取焦点</button>
//             <Child ref={parentref}/>
//         </div>
//     )

// }

// export default ForwardRefCom

const ForwardRefCom = () => {
  const inputRef: any = useRef();
  // 点击父组件中的搜素按钮
  const onClick = () => {
    const { current } = inputRef;
    current?.focus();
  };
  return (
    <div>
      {/* 在父组件中，当点击搜索按钮，使子组件输入框处于聚焦的状态 
            1、当我们试图给函数式组件给予ref属性的时候，会发现并不支持；
            2、此时需要将子组件用forwardRef进行包裹，它的第二个参数即为我们所需要的元素，当拿到子组件元素的时候，则父组件可以利用此元素对子组件进行操作；
        */}
      <MyInput ref={inputRef} />
      <button onClick={onClick}>父组件搜索按钮</button>
    </div>
  );
};
export default ForwardRefCom;
