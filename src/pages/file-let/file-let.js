import React, { Component, useEffect } from 'react';
import { setMain, getMain } from './main';
import arr from '../../appinfo';
import event from '../../customEvent';
import MyFuncComponent from './moduletest';
const Filelet = () => {
  useEffect(() => {
    // console.log(arr);
    // setMain(appinfo)
    // setTimeout(() => {
    //   // arr = {kk: 'oo'}
    //   // arr.name = 'kk';
    //   console.log(arr);
    // }, 3000);
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          // let main = getMain()
          // main.appInfo.changeStatus()
          // appinfo.appInfo.status = 'llllll'
          arr.push('jwwjk');
          document.dispatchEvent(event);
          // arr = 100
          console.log(arr, '999');
        }}
      >
        设置全局变量
      </button>
      <MyFuncComponent></MyFuncComponent>
    </div>
  );
};

export default Filelet;
