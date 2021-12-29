import React, { Component, useEffect } from 'react';
import { setMain, getMain } from './main';
import arr from '../../appinfo';
import MyFuncComponent from './moduletest';
const Filelet = () => {
  useEffect(() => {
    // setMain(appinfo)
    setTimeout(() => {
      // arr = {kk: 'oo'}
      arr.name = 'kk';
      console.log(arr);
    }, 3000);
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          // let main = getMain()
          // main.appInfo.changeStatus()
          // appinfo.appInfo.status = 'llllll'
          // arr.push('jwwjk')
          // arr = {hh: 'oo'}
          // console.log(arr, '999');
        }}
      >
        设置全局变量
      </button>
      <MyFuncComponent></MyFuncComponent>
    </div>
  );
};

export default Filelet;
