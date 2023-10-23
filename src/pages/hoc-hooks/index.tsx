import { Tooltip } from 'antd';
import React, { useState, useRef, forwardRef } from 'react';

let timeId: any = null;

const withCounter = (WrappedComponent: React.FC) => {
  return function (props: any) {
    const [isShowQiWeiTootip, setIsShowQiWeiTootip] = useState(false);
    const tooltipRef = useRef(null);
    const imgRef = useRef(null);
    const handleDocumentClick = (e: Event) => {
      if (e.target !== imgRef.current) {
        console.log(e.target, imgRef.current);
        setIsShowQiWeiTootip(false);
      }
    };
    // 监听全局的 mousedown 事件
    React.useEffect(() => {
      document.addEventListener('mousedown', handleDocumentClick);

      return () => {
        document.removeEventListener('mousedown', handleDocumentClick);
      };
    }, []);
    console.log(props, 'withCounterwithCounter');
    return (
      <Tooltip
        ref={tooltipRef}
        // trigger='click'
        overlayStyle={{ pointerEvents: 'none' }}
        open={isShowQiWeiTootip}
        title={() => {
          return '哈哈哈';
        }}
      >
        <div>kkkkkkk</div>
        <WrappedComponent
          {...props}
          isShowQiWeiTootip={isShowQiWeiTootip}
          setIsShowQiWeiTootip={setIsShowQiWeiTootip}
          h1Ref={imgRef}
        />
      </Tooltip>
    );
  };
};

const EnhancedComponent = withCounter((props: any) => {
  // console.log(props, 'EnhancedComponent')
  // return forwardRef((props, ref) => {
  // <span ref={ref} onClick={onClick}>
  //   Click me to show Tooltip
  // </span>

  return (
    <img
      ref={props.h1Ref}
      onDoubleClick={(e) => {
        clearTimeout(timeId);
        // return alert(123)
        props.openMsgChatModal(props.record);
      }}
      onClick={(e) => {
        console.log(111);
        clearTimeout(timeId);
        timeId = setTimeout(() => {
          props.setIsShowQiWeiTootip(!props.isShowQiWeiTootip);
          clearTimeout(timeId);
        }, 200);
      }}
      style={{ width: '30px', height: '30px' }}
      // src={props.record.qiwei ? qiwei_icon_active : qiwei_icon}
      src="http://www.baidu.com"
      alt=""
    />
  );
  // })
});

const HocHooks = () => {
  return (
    <EnhancedComponent
      record={{
        age: 18,
      }}
      openMsgChatModal={() => {
        console.log('nnnnnnnn');
      }}
    />
  );
};

export default HocHooks;
