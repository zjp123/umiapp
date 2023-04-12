import React, { useContext, useState } from 'react';
import { Modal, Select, Button, Radio, Input, TimePicker } from 'antd';
import { AllDataContext, generateUUID } from './all-context';
import { cloneDeep } from 'lodash';
import moment from 'moment';

const HuaShuForm: React.FC<any> = (props) => {
  // console.log('啥玩意啊');
  const { parentKey, numKey, huakey } = props;
  const { zongData, setZongData } = useContext<any>(AllDataContext);
  const initState = zongData[parentKey].childrenData[numKey].huashuData[huakey];
  console.log(initState, '啥玩意啊');

  // const [value, setValue] = useState(1);
  // const [timeObj, setTimeObj] = useState<any>({
  //     timeqian: null,
  //     timehou: null,
  // });
  // const {parentKey, numKey} = props
  // const {zongData, setZongData} = useContext<any>(AllDataContext)
  // console.log(parentKey, numKey, zongData[parentKey].childrenData[numKey].huashuData, '当前huashuDatahuashuData');
  return (
    <div>
      <Radio.Group
        onChange={(e) => {
          // setValue(e.target.value);
          const cloneZongData = cloneDeep(zongData);
          console.log(
            cloneZongData[parentKey].childrenData[numKey].huashuData[huakey]
              .huashuform,
            'ppppp',
          );
          cloneZongData[parentKey].childrenData[numKey].huashuData[
            huakey
          ].huashuform.value = e.target.value;
          setZongData(cloneZongData);
        }}
        value={
          zongData[parentKey].childrenData[numKey].huashuData[huakey].huashuform
            .value
        }
      >
        <Radio value={1}>当天</Radio>
        <Radio value={2} style={{ display: 'flex' }}>
          <Input style={{ width: '120px' }} />
          天后
          {zongData[parentKey].childrenData[numKey].huashuData[huakey]
            .huashuform.value === 2 && (
            <TimePicker
              onChange={(time) => {
                console.log(time, moment(time).format('HH:mm'), 'llll');
                // setTimeObj({...timeObj, timehou: time})
                const cloneZongData = cloneDeep(zongData);
                cloneZongData[parentKey].childrenData[numKey].huashuData[
                  huakey
                ].huashuform.timehou = time;
                setZongData(cloneZongData);
              }}
              value={initState?.huashuForm?.timehou}
              format={'HH:mm'}
            />
          )}
        </Radio>
        <Radio value={3} style={{ display: 'flex' }}>
          <Input style={{ width: '120px' }} />
          天前
          {zongData[parentKey].childrenData[numKey].huashuData[huakey]
            .huashuform.value === 3 && (
            <TimePicker
              onChange={(time) => {
                // setTimeObj({...timeObj, timeqian: time})
                const cloneZongData = cloneDeep(zongData);
                cloneZongData[parentKey].childrenData[numKey].huashuData[
                  huakey
                ].huashuform.timeqian = time;
                setZongData(cloneZongData);
              }}
              value={initState?.huashuForm?.timeqian}
              format={'HH:mm'}
            />
          )}
        </Radio>
      </Radio.Group>
    </div>
  );
};

export default HuaShuForm;
