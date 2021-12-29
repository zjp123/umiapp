import React, { Component } from 'react';
import arr from '../../appinfo';
class MyClassComponent extends Component {
  render() {
    return <div>ccccc{String(arr)}</div>;
  }
}

const MyFuncComponent = (props) => {
  return <div>bbbb</div>;
};

class WrappedComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <span>aaaa</span>
        </div>
        {/* <MyFuncComponent /> */}
        <MyClassComponent />
      </div>
    );
  }
}

const HOC = (WrappedComponent) =>
  class extends WrappedComponent {
    render() {
      const elementsTree = super.render();
      console.log(elementsTree, 'elementsTree');
      return elementsTree;
    }
  };

export default HOC(WrappedComponent);
