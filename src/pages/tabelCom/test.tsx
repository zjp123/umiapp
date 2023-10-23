let num = 5;
// export {num}
setTimeout(() => {
  num = 888;
  console.log(num);
}, 3000);
export default num;
// export {num as defalut} // 这俩配套的 import {defalut as num} from './test'
// 等同于
// export default num;
// export {num}
