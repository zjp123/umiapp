import React, { Component, createRef } from 'react';

// const FocusInput = React.forwardRef((props, ref) => <input type="text" ref={ref} />);
const FocusInput = React.forwardRef((props, ref) => (
  <MyClassComponent ref={ref} />
));
class MyClassComponent extends Component {
  // componentDidMount () {
  //   console.log(this.props.forwardRef);
  // }
  render() {
    console.log(this.props, 'MyClassComponentprops');
    return <div>ccccc</div>;
  }
}

const bindRef = (WrappedComponent) => {
  const ConvertRef = (props) => {
    const { forwardedRef, ...other } = props;
    console.log(forwardedRef);
    return <WrappedComponent {...other} ref={forwardedRef} />;
  };
  // “ref”是保留字段需要用普通的字段来代替，传递给传入的组件
  return React.forwardRef((props, ref) => {
    console.log(ref);
    return <ConvertRef {...props} forwardedRef={ref} />;
  });
};

const FocusInputWithRef = bindRef(FocusInput);

class ForwardRef extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
    const { current } = this.ref;
    // current.focus();
    console.log(current);
  }

  render() {
    return (
      <div>
        <p>forward ref</p>
        <FocusInputWithRef ref={this.ref} />
      </div>
    );
  }
}
export default FocusInputWithRef;
