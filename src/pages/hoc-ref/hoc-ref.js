import React, { Component } from 'react';

class MyClassComponent extends Component {
  // componentDidMount () {
  //   console.log(this.props.forwardRef);
  // }
  render() {
    console.log(this.props, 'MyClassComponentprops');
    return <div>ccccc</div>;
  }
}

function withLogging(WrappedComponent) {
  class Enhance extends WrappedComponent {
    state = {
      name: 'haha',
    };
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    componentDidMount() {
      console.log(this.props, 'hahh');
      this.setState({
        name: 'xixi',
      });
    }
    render() {
      const { forwardedRef, ...rest } = this.props;
      // 把 forwardedRef 赋值给 ref
      return <WrappedComponent {...this.state} {...rest} ref={forwardedRef} />;
    }
  }

  // React.forwardRef 方法会传入 props 和 ref 两个参数给其回调函数
  // 所以这边的 ref 是由 React.forwardRef 提供的
  function forwardRef(props, ref) {
    return <Enhance {...props} forwardRef={ref} />;
  }

  return React.forwardRef(forwardRef);
}
const EnhancedComponent = withLogging(MyClassComponent);

export default EnhancedComponent;
