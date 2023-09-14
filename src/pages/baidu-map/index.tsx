import React, { useState, useEffect } from 'react';
import { Button, message, Modal } from 'antd';
import './style.less';
import { connect } from 'dva';
// import JxtModal from '@/components/JxtModal'
// import fetchJson from 'fetch-jsonp'
// import JxtModal from '@/components/JxtModal'
interface PositionInterface {
  lng: number;
  lat: number;
}

interface BaiduMapProps {
  isOpenMap: boolean; //打开或关闭地图弹窗
  mapStations?: Array<any>; //站点信息
  showBottomBtn?: boolean; //是否显示 底部确定、取消按钮
  canHandleAddMarker?: boolean; //是否可以点选地图选择位置
  onClosed: () => void; //关闭回调函数
  isShowSearch?: boolean; //是否展示搜索框
  isShowCurrentPoint?: boolean; //是否展示当前位置按钮
  isShowSubmit?: boolean; //是否展示确定按钮
  cityName?: string;
  position?: {
    lng: number;
    lat: number;
  };
  getPosition?: (args: any, args1: any) => void;
  addressText?: string;
  isLimitRegion?: boolean; //是否限制地图区域选择
  type?: number; //1 单点  2 多点
  title?: string; //弹窗 标题
  // schoolInfo:any
}

let map: any = null;

const BaiduMap: React.FC<BaiduMapProps> = ({ getPosition, ...props }) => {
  //loading 默认值
  const [locationImg, setLocationImg] = useState(
    'https://img.58cdn.com.cn/dist/jxt/images/map/default.png',
  );
  //打开关闭弹窗
  const {
    isOpenMap,
    onClosed,
    position,
    addressText,
    cityName,
    type,
    mapStations,
    title,
  } = props;
  //初始化坐标
  const [newPosition, setNewPosition] = useState<PositionInterface>({
    lng: 0,
    lat: 0,
  });

  const [address, setAddress] = useState('');
  const [allpos, setAllpos] = useState<any>([]);

  const handleConform = (e: any) => {
    //鼠标点击下拉列表后的事件
    let _value = e.item.value;
    let myValue =
      _value.province +
      _value.city +
      _value.district +
      _value.street +
      _value.business;
    // setPlace(myValue)
  };

  const handleHighlight = (e: any) => {
    //鼠标放在下拉列表上的事件
    let str = [];
    let _value = e.fromitem.value;
    let value = '';
    if (e.fromitem.index > -1) {
      value =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business;
    }
    str.push(
      <div>
        FromItem index = {e.fromitem.index} value = {value}
      </div>,
    );

    value = '';
    if (e.toitem.index > -1) {
      _value = e.toitem.value;
      value =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business;
    }
    str.push(
      <div>
        ToItem index = {e.toitem.index} value = {value}
      </div>,
    );
  };

  /**
   * 添加地图标记点
   */
  // const addMarker = (point: PositionInterface) => {
  //     let tempAddress = ''
  //     map.clearOverlays()
  //     let p = new BMap.Point(point.lng, point.lat)
  //     let myMarker = new BMap.Marker(point)
  //     map.addOverlay(myMarker)
  //     let gc = new BMap.Geocoder()
  //     gc.getLocation(p, (rs: any) => {
  //         tempAddress = rs.address
  //         setNewPosition(rs.point)
  //         map.centerAndZoom(rs.point, 15)
  //         if (rs.surroundingPois.length > 0) {
  //             tempAddress += rs.surroundingPois[0].title
  //         }
  //         setAddress(tempAddress)
  //     })
  // }

  useEffect(() => {
    if (allpos.length) {
      addAllMarker();
    }
  }, [allpos]);

  const addAllMarker = () => {
    map.clearOverlays();
    let maps: any = [];
    allpos.map((item, i) => {
      let point = new BMap.Point(item.lon, item.lat);
      maps.push(point);
      const mk = new BMap.Marker(point);
      // mk.addEventListener('click', function () {
      //     let opts = {
      //         width: 200, // 信息窗口宽度
      //         height: 100, // 信息窗口高度
      //         title: item.name, // 信息窗口标题
      //         // enableMessage: true, //设置允许信息窗发送短息
      //         message: item.name
      //     }
      //     console.log('----', opts)
      //     let infoWindow = new BMap.InfoWindow('dasdasda', opts) // 创建信息窗口对象
      //     console.log('===', infoWindow)
      //     map.openInfoWindow(infoWindow, point) //开启信息窗口
      // })
      var opts = {
        width: 200,
        height: 100,
        title: '故宫博物院',
      };
      var infoWindow = new BMap.InfoWindow(
        `<div class="haha-clas"><p class="kkkk">哈哈哈</p><p>地址：北京市东城区王府井大街88号乐天银泰百货八层</p></div>`,
        opts,
      );
      // 点标记添加点击事件
      mk.addEventListener('click', () => {
        // map.openInfoWindow(infoWindow, point); // 开启信息窗口
        mk.openInfoWindow(infoWindow, point); // 开启信息窗口
        setTimeout(() => {
          const hahaid: any = document.getElementsByClassName('kkkk')[0];
          console.log(hahaid, 'hahaidhahaid');
          if (hahaid) {
            hahaid.onclick = function name() {
              console.log('llllll');
              onClosed();
            };
          }
        }, 0);
      });
      map.addOverlay(mk);
      const label = new BMap.Label(item.name, {
        offset: new BMap.Size(20, -10),
      });
      mk.setLabel(label);
      // let myMarker = new BMap.Marker(point)
      // map.addOverlay(myMarker)
      map.centerAndZoom(point, 15);
      // setAddress(addressText as string)
      return true;
    });
    let v = map.getViewport(maps);
    map.centerAndZoom(v.center, v.zoom); //让所有标注点都显示在当前视野内
  };

  const LoadBaiduMapScript = () => {
    const BMap_URL =
      'https://api.map.baidu.com/api?v=3.0&ak=hCjkVAemraBBEYR2bAAWSTmVC78OoMeD&s=1&callback=onBMapCallback';
    // const BMap_URL = 'https://api.map.baidu.com/api?v=3.0&ak=hCjkVAemraBBEYR2bAAWSTmVC78OoMeD'
    // @ts-ignore
    return new Promise((resolve, reject) => {
      // 如果已加载直接返回
      if (typeof BMap !== 'undefined') {
        resolve(BMap);
        return true;
      }
      // 百度地图异步加载回调处理
      // @ts-ignore
      window.onBMapCallback = function () {
        resolve(BMap);
      };
      // 插入script脚本
      let scriptNode = document.createElement('script');
      scriptNode.setAttribute('type', 'text/javascript');
      scriptNode.setAttribute('src', BMap_URL);
      document.body.appendChild(scriptNode);
    });
  };

  useEffect(() => {
    LoadBaiduMapScript().then(() => {
      map = new BMap.Map('jxt-baidu-map', {
        enableMapClick: false,
      });
      map.enableScrollWheelZoom(true);
      // map.addEventListener('click', selectedAddress)
      //不展示搜索框不需要渲染搜索框绑定事件
      if (props.isShowSearch) {
        let ac: any = new BMap.Autocomplete({
          input: 'suggestId',
          location: map,
        });
        // ac.addEventListener('onhighlight', handleHighlight);
        ac.addEventListener('onconfirm', handleConform);
      }
      const allps = [
        // {lng: 115.48754503343376, lat: 35.23940742476551},
        { lon: 115.58966269702759, lat: 35.111323663894396, name: '张三' },
        { lon: 115.49901199309919, lat: 35.24000389670641, name: '李四' },
        { lon: 115.54845383006287, lat: 34.83180897804281, name: '大刀王五' },
      ];

      setAllpos(allps);
      // addAllMarker()

      // if (type === 1) {
      //     if (position?.lng && position?.lat) {
      //         map.clearOverlays()
      //         // let p = new BMap.Point(point.lng, point.lat)
      //         let point = new BMap.Point(position.lng, position.lat)
      //         let myMarker = new BMap.Marker(point)
      //         map.addOverlay(myMarker)
      //         map.centerAndZoom(point, 15)
      //         setAddress(addressText as string)
      //         // setNewPosition(point)
      //     } else {
      //         getCurrLocation()
      //     }
      // } else {
      //     if (mapStations.length > 0) {
      //         map.clearOverlays()
      //         let maps = []
      //         mapStations.map((item, i) => {
      //             let point = new BMap.Point(item.lon, item.lat)
      //             maps.push(point)
      //             const mk = new BMap.Marker(point)
      //             // mk.addEventListener('click', function () {
      //             //     let opts = {
      //             //         width: 200, // 信息窗口宽度
      //             //         height: 100, // 信息窗口高度
      //             //         title: item.name, // 信息窗口标题
      //             //         // enableMessage: true, //设置允许信息窗发送短息
      //             //         message: item.name
      //             //     }
      //             //     console.log('----', opts)
      //             //     let infoWindow = new BMap.InfoWindow('dasdasda', opts) // 创建信息窗口对象
      //             //     console.log('===', infoWindow)
      //             //     map.openInfoWindow(infoWindow, point) //开启信息窗口
      //             // })
      //             map.addOverlay(mk)
      //             const label = new BMap.Label(item.name, {
      //                 offset: new BMap.Size(20, -10)
      //             })
      //             mk.setLabel(label)
      //             let myMarker = new BMap.Marker(point)
      //             map.addOverlay(myMarker)
      //             map.centerAndZoom(point, 15)
      //             setAddress(addressText as string)
      //         })
      //         let v = map.getViewport(maps)
      //         map.centerAndZoom(v.center, v.zoom); //让所有标注点都显示在当前视野内
      //     } else {
      //         getCurrLocation()
      //     }
      // }
    });
  }, []);

  return (
    <Modal
      title={title}
      width="800px"
      forceRender
      maskClosable={false}
      onCancel={onClosed}
      visible={isOpenMap}
      key="wewqe"
      className="jxt-modal-large"
      footer={[
        <Button key="mapBack" onClick={onClosed}>
          取消
        </Button>,
      ]}
    >
      <div className="map-wrap">
        {props.isShowSearch && (
          <input placeholder="搜索地址" className="search-map" id="suggestId" />
        )}

        <div
          id="jxt-baidu-map"
          style={{ width: '100%', height: '400px' }}
        ></div>
        {/* {props.isShowCurrentPoint && <div className='jxt-map-location' onClick={() => {
                    getCurrLocation()
                }}>
                    <img src={locationImg} />
                </div>
                } */}
      </div>
    </Modal>
  );
};

BaiduMap.defaultProps = {
  mapStations: [], //站点信息
  showBottomBtn: true, //是否显示 底部确定、取消按钮
  isShowSearch: true, //是否显示 底部确定、取消按钮
  isShowCurrentPoint: true, //是否显示 底部确定、取消按钮
  canHandleAddMarker: true, //是否可以点选地图选择位置
  isLimitRegion: true, //是否选择区域
  isShowSubmit: true, //是否展示确定按钮
  type: 1,
  title: '地图',
  cityName: '北京',
};

export default BaiduMap;
