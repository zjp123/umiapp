import { Carousel } from 'antd';
import React, { useEffect } from 'react';
import './index.less';
import logo from '../../images/logo.png';

const contentStyle: React.CSSProperties = {
  //   height: '160px',
  color: '#fff',
  //   lineHeight: '160px',
  //   width: '100vw',
  //   height: '100vh',
  textAlign: 'center',
  background: '#364d79',
};

const AntdSwiper: React.FC = () => {
  useEffect(() => {
    //   1rem = 100px
    // 1920 / 19.2 = 100

    // 100vw/19.2 = 5.20833vm
    document.documentElement.style.fontSize = '5.20833vw';
    // const boxId = document.body
    // boxId && (boxId.style.fontSize = '100px')
  }, []);
  return (
    <div className="box" id="box-level">
      <Carousel
        // autoplay
        dots={false}
      >
        <div className="leval-one screen-one">
          {/* <h3 style={contentStyle}>1</h3> */}
          <div className="screen-head">
            <div className="head-left">
              <img src={logo} alt="" />
            </div>
            <div className="head-center">
              <div className="head-center-bac"></div>
              <div className="tablist">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>
            <div className="head-right">
              <div className="right-time">
                <div className="time-hours">15:26</div>
                <div className="time-week">
                  <div>09月04</div>
                  <div>星期一</div>
                </div>
              </div>
            </div>
            <div className="title-dec">
              还是很舒适还是很舒 【科二.C1】排队大屏
            </div>
          </div>
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
};

export default AntdSwiper;
