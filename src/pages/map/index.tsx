import React, { useState } from 'react';
import { Button } from 'antd';
import BaiduMap from '../baidu-map';

const MapTest = () => {
  const [isOpenMap, setIsOpenMap] = useState(false);

  const baiduMap = () => {
    return (
      isOpenMap && (
        <BaiduMap
          title="地图测试"
          key="signupAdd"
          isOpenMap={isOpenMap}
          // getPosition={getPosition}
          // position={{
          //     lng: form.getFieldValue('longitude'),
          //     lat: form.getFieldValue('latitude'),
          // }}
          // addressText={form.getFieldValue('resideAddress')}
          isLimitRegion={false}
          onClosed={() => {
            setIsOpenMap(false);
          }}
        />
      )
    );
  };
  return (
    <>
      <Button
        onClick={() => {
          setIsOpenMap(true);
        }}
      >
        打开地图
      </Button>
      {baiduMap()}
    </>
  );
};
export default MapTest;
