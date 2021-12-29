import React, { Component, useEffect } from 'react';
import arr from '../../appinfo';

const MyFuncComponent = (props) => {
  useEffect(() => {
    setTimeout(() => {
      console.log(arr);
    }, 5000);
  }, []);
  return <div>bbbb</div>;
};

export default MyFuncComponent;
