import { Carousel } from 'antd';
import React from 'react';
import './index.less';

const contentStyle: React.CSSProperties = {
  //   height: '160px',
  color: '#fff',
  //   lineHeight: '160px',
  //   width: '100vw',
  //   height: '100vh',
  textAlign: 'center',
  background: '#364d79',
};

const AntdSwiper: React.FC = () => (
  <div className="box">
    <Carousel autoplay dots={false}>
      <div className="leval-one">
        <h3 style={contentStyle}>1</h3>
      </div>
      <div className="leval-one">
        <h3 style={contentStyle}>2</h3>
      </div>
      <div className="leval-one">
        <h3 style={contentStyle}>3</h3>
      </div>
      <div className="leval-one">
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </div>
);

export default AntdSwiper;
