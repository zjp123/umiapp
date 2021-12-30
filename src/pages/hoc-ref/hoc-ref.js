import React, { Component } from 'react';

class MyClassComponent extends Component {
  // componentDidMount () {
  //   console.log(this.props.forwardRef);
  // }
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props, 'MyClassComponentprops');
    return <div>ccccc</div>;
  }
}
// 结论： 反向继承时  不可做refs透传

// const HAAAA = React.forwardRef((props, ref) => <MyClassComponent {...props} ref={ref} />);

function withLogging(WrappedComponent) {
  // console.log(WrappedComponent, 'WrappedComponent');
  class Enhance extends WrappedComponent {
    // state = {
    //   name: 'haha',
    // };
    constructor(props) {
      super(props);
    }
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    componentDidMount() {
      console.log(this.props, 'hahh');
      // this.setState({
      //   name: 'xixi',
      // });
    }
    render() {
      const { forwardedRef, ...rest } = this.props;
      // 把 forwardedRef 赋值给 ref
      return <WrappedComponent kk="haha" {...rest} ref={forwardedRef} />;
    }
  }
  // const Enhance = (props) => {
  //     const { forwardedRef, ...other } = props;
  //     console.log(forwardedRef);
  //     return <WrappedComponent {...other} ref={forwardedRef} />;
  // };

  // React.forwardRef 方法会传入 props 和 ref 两个参数给其回调函数
  // 所以这边的 ref 是由 React.forwardRef 提供的
  // function forwardRef(props, ref) {
  //   return <Enhance {...props} forwardRef={ref} />;
  // }

  // return React.forwardRef(forwardRef);
  return React.forwardRef((props, ref) => {
    // console.log(ref);
    return <Enhance {...props} forwardedRef={ref} />;
  });
}
const EnhancedComponent = withLogging(MyClassComponent);

export default EnhancedComponent;

// const FancyButton = React.forwardRef((props, ref) => (
//   // <button ref={ref} className="FancyButton">
//   //   {props.children}
//   // </button>
//   <EnhancedComponent {...props} ref={ref} />
//   // <MyClassComponent {...props} forwardRef={ref}/>
// ));

// export default FancyButton

// 如果你命名了渲染函数，DevTools 也将包含其名称（例如 “ForwardRef(myFunction)”）：

// const WrappedComponent = React.forwardRef(
//   function myFunction(props, ref) {
//     return <LogProps {...props} forwardedRef={ref} />;
//   }
// );

// 你甚至可以设置函数的 displayName 属性来包含被包裹组件的名称：

// function LogPropsHoc(Component) {
//   class LogProps extends React.Component {
//     render() {
//       const { forwardedRef, ...rest } = this.props;
//       // 把 forwardedRef 赋值给 ref
//       return <Component {...rest} ref={forwardedRef} />;
//     }
//   }

//   function forwardRef(props, ref) {
//     return <LogProps {...props} forwardedRef={ref} />;
//   }

//   // 在 DevTools 中为该组件提供一个更有用的显示名。
//   // 例如 “ForwardRef(logProps(MyComponent))”
//   const name = Component.displayName || Component.name;
//   forwardRef.displayName = `logProps(${name})`;

//   return React.forwardRef(forwardRef);
// }

// const WrappedComponent = React.forwardRef((props, ref) => {
//   return <LogPropsHoc {...props} forwardedRef={ref} />;
// });

// export default LogPropsHoc(MyClassComponent)
