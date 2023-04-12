import React, { useContext, useRef, useState } from 'react';
import { Modal, Select, Button } from 'antd';
import { AllDataContext, generateUUID } from './all-context';
import { cloneDeep } from 'lodash';
import HuaShuForm from './huashuForm';

const HuaShu: React.FC<any> = (props) => {
  const { parentKey, numKey } = props;
  const { zongData, setZongData } = useContext<any>(AllDataContext);
  console.log(
    parentKey,
    numKey,
    zongData[parentKey].childrenData[numKey].huashuData,
    '当前huashuDatahuashuData',
  );
  // const domRefs = useRef([])
  return (
    <div>
      <span>
        {parentKey}hahahh{numKey}
      </span>
      {/* <Button onClick={() => {
                    const cloneZongData = cloneDeep(zongData)
                    cloneZongData[parentKey].childrenData[numKey].huashuData.push({name: '88djjdjdj'})
                    setZongData(cloneZongData)
                }}>添加</Button> */}
      {zongData[parentKey].childrenData[numKey].huashuData.map(
        (val: any, index: any) => {
          return (
            <HuaShuForm
              key={val.key}
              parentKey={parentKey}
              numKey={numKey}
              huakey={index}
              huashulist={val.huashulist}
              huashuForm={val.huashuForm}
            />
          );
        },
      )}
      {/* <HuaShuForm parentKey={parentKey} numKey={numKey} huakey={}/> */}
    </div>
  );
};

export default HuaShu;
