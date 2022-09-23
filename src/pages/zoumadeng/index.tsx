import { Carousel } from 'antd';
import React, { useEffect, useState, useContext } from 'react';
import ScreenCon from './com';
import './index.less';

const AllDataScreenContext = React.createContext(null);

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
  const [screen, setScreen] = useState<any>([]);
  const pullSocketDataContext = useContext<any>(AllDataScreenContext);

  useEffect(() => {
    setTimeout(() => {
      setScreen([4, 5, 6]);
    }, 2000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setScreen([1, 2, 3]);
    }, 8000);
  }, []);
  return (
    <div className="box">
      {screen.length ? (
        <AllDataScreenContext.Provider value={pullSocketDataContext}>
          <Carousel
            // autoplay
            autoplay={screen.length > 1}
            dots={false}
            autoplaySpeed={3000}
            pauseOnHover={false}
          >
            {/* <div className="leval-one">
          <h3 style={contentStyle}>1</h3>
        </div> */}
            {screen.map((item: any, index: any) => {
              return (
                <ScreenCon
                  contentStyle={contentStyle}
                  key={index}
                  data={item}
                ></ScreenCon>
              );
            })}
            {/* <div className="leval-one">
          <h3 style={contentStyle}>2</h3>
        </div>
        <div className="leval-one">
          <h3 style={contentStyle}>3</h3>
        </div>
        <div className="leval-one">
          <h3 style={contentStyle}>4</h3>
        </div> */}
          </Carousel>
        </AllDataScreenContext.Provider>
      ) : null}
    </div>
  );
};

export default AntdSwiper;
