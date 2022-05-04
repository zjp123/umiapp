import React, { Component } from 'react';
import { arr } from '../../appinfo';
// import EnhancedComponent from '../hoc-ref2/hoc-ref2';
import EnhancedComponent from '../hoc-ref/hoc-ref';
// import event from '../../customEvent';

const ref = React.createRef();

class MyClassComponent extends Component {
  componentDidMount() {
    // document.addEventListener("cat",function(){
    //   console.log('MyClassComponent', arr)
    // },false)
    setTimeout(() => {
      console.log('MyClassComponent', arr);
    }, 15000);
  }
  render() {
    return <div>ccccc{String(arr)}</div>;
  }
}

// const MyFuncComponent = (props) => {
//   return <div>bbbb</div>;
// };

class WrappedComponent extends Component {
  componentDidMount() {
    console.log(ref.current, 'ref.currentref.current');
  }
  render() {
    return (
      <div>
        <div>
          <span>aaaa</span>
        </div>
        {/* <MyFuncComponent /> */}
        <MyClassComponent />
        <EnhancedComponent ref={ref} />
      </div>
    );
  }
}

// const HOC = (WrappedComponent) =>
//   class extends WrappedComponent {
//     render() {
//       const elementsTree = super.render();
//       console.log(elementsTree, 'elementsTree');
//       return elementsTree;
//     }
//   };

// export default HOC(WrappedComponent);
export default WrappedComponent;
