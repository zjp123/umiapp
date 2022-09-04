import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';
import logo from '../../images/logo.png';
import ReactDOMServer from 'react-dom/server';

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
  const [rowData, setRowData] = useState<any>([]);
  useEffect(() => {
    //   1rem = 100px
    // 1920 / 19.2 = 100

    // 100vw/19.2 = 5.20833vm
    document.documentElement.style.fontSize = '5.20833vw';
    // const boxId = document.body
    // boxId && (boxId.style.fontSize = '100px')
  }, []);
  const getList = () => {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve([]);
      }, 2000);
    });
  };
  useEffect(() => {
    (async () => {
      await getList();
      // console.log(123)
      setRowData([1, 2, 3]);
    })();
  }, []);

  // const _renderInfoWindow: any = () => {
  //   return ReactDOMServer.renderToString(
  //     <div>
  //       <h4>来了</h4>
  //       <p>啪啪啪</p>
  //     </div>
  //   );
  // }
  const _renderInfoWindow: any = (str: any) => {
    return ReactDOMServer.renderToString(str);
  };

  useEffect(() => {
    // const virBox = document.getElementById('vir-box')
    const numListObj: any = document.getElementById('num-list');
    // let str = ''
    // const htmlObj = rowData.map((item: any) => {
    //   const objEle = <div key={item} className='num-list-row'>
    //       <div className='num-item'>
    //         <div className='haoma'>A004</div>
    //         <div className='num-name'>张*先</div>
    //       </div>
    //       <div className='num-item'>
    //         <div className='haoma'>A004</div>
    //         <div className='num-name'>张*先</div>
    //       </div>
    //       <div className='num-item'>
    //         <div className='haoma'>A004</div>
    //         <div className='num-name'>张*先</div>
    //       </div>
    //       <div className='num-item'>
    //         <div className='haoma'>A004</div>
    //         <div className='num-name'>张*先</div>
    //       </div>
    //       <div className='num-item'>
    //         <div className='haoma'>A004</div>
    //         <div className='num-name'>张*先</div>
    //       </div>
    //       <div className='num-item'>
    //         <div className='haoma'>A004</div>
    //         <div className='num-name'>张*先</div>
    //       </div>
    //     </div>
    //     str += _renderInfoWindow(objEle) + ''
    //     return objEle
    // })
    // virBox && (virBox.innerHTML = str)
    if (numListObj) {
      const firstChildObj = numListObj.firstChild;
      if (firstChildObj) {
        const rect: any = (
          firstChildObj as HTMLElement
        ).getBoundingClientRect();
        const { height = 0 } = rect;
        console.log(height, 'heightheight');
      }
    }
    // console.log('>>>>>>>>')
    // virBox.onload = () => {

    // }
  }, [rowData]);

  return (
    <div className="box" id="box-level">
      <div id="flex-box">
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
            <div className="center-box">
              <div className="center-box-top"></div>
              <div className="center-box-bottom">
                {/* 正在叫号中title */}
                <div className="call-text-box">
                  <div className="call-long"></div>
                  <div className="call-duan"></div>
                </div>
                <div className="line-row-box">
                  {[1].map((item: any) => {
                    return (
                      <div key={item} className="num-list-row">
                        <div className="num-item">
                          <div className="haoma">A004</div>
                          <div className="num-name">张*先</div>
                        </div>
                        <div className="num-item">
                          <div className="haoma">A004</div>
                          <div className="num-name">张*先</div>
                        </div>
                        <div className="num-item">
                          <div className="haoma">A004</div>
                          <div className="num-name">张*先</div>
                        </div>
                        <div className="num-item">
                          <div className="haoma">A004</div>
                          <div className="num-name">张*先</div>
                        </div>
                        <div className="num-item">
                          <div className="haoma">A004</div>
                          <div className="num-name">张*先</div>
                        </div>
                        <div className="num-item">
                          <div className="haoma">A004</div>
                          <div className="num-name">张*先</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="bottom-box"></div>
            {/* 正在叫号中title */}
            {/* <div className="call-text-box">
              <div className="call-long"></div>
              <div className="call-duan"></div>
            </div> */}
            {/* 叫号中的数码 */}
            {/* <div id="num-list">
              {rowData.map((item: any) => {
                return (
                  <div key={item} className="num-list-row">
                    <div className="num-item">
                      <div className="haoma">A004</div>
                      <div className="num-name">张*先</div>
                    </div>
                    <div className="num-item">
                      <div className="haoma">A004</div>
                      <div className="num-name">张*先</div>
                    </div>
                    <div className="num-item">
                      <div className="haoma">A004</div>
                      <div className="num-name">张*先</div>
                    </div>
                    <div className="num-item">
                      <div className="haoma">A004</div>
                      <div className="num-name">张*先</div>
                    </div>
                    <div className="num-item">
                      <div className="haoma">A004</div>
                      <div className="num-name">张*先</div>
                    </div>
                    <div className="num-item">
                      <div className="haoma">A004</div>
                      <div className="num-name">张*先</div>
                    </div>
                  </div>
                );
              })}
            </div> */}
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
        {/* <div id='vir-box'></div> */}
      </div>
    </div>
  );
};

export default AntdSwiper;
