import React, { useRef, useState, useContext } from 'react';
import { Tabs } from 'antd';
import PointAddModal from './point-add-modal';
import HuaShu from './huashu';
import { AllDataContext, generateUUID } from './all-context';
import { cloneDeep } from 'lodash';

const TabTagCom: React.FC<any> = (props) => {
  const { numKey } = props;
  const { zongData, setZongData } = useContext<any>(AllDataContext);
  console.log(numKey, zongData, 'zongDatazongData');
  const len = zongData[numKey].childrenData.length;
  const [activeKey, setActiveKey] = useState(
    // itemsData.length ? itemsData[0].key : itemsData,
    len ? zongData[numKey].childrenData[0]?.key : '',
  );
  //   const newTabIndex = useRef(len ? Number(zongData[numKey - 1].childrenData[0]?.key) : 0);
  const [isPointVisible, setIsPointVisible] = useState(false);
  //   const [tabList, setTabList] = useState(zongData[numKey - 1].childrenData);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = (name = '') => {
    // newTabIndex.current += 1
    // const newActiveKey = `${newTabIndex.current}`;
    const newActiveKey = generateUUID();
    // const newPanes = [...tabList];
    // newPanes.push({
    //   label: `${name}`,
    // //   children: <HuaShu />,
    //   key: newActiveKey,
    // });
    // setTabList(newPanes);
    zongData[numKey].childrenData.push({
      label: `${name}`,
      //   children: <HuaShu />,
      huashuData: [
        {
          key: generateUUID(),
          huashulist: [],
          huashuform: { value: 1, timeqian: null, timehou: null },
        },
      ],
      key: newActiveKey,
    });
    setZongData(zongData);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    zongData[numKey].childrenData.forEach(
      (item: { key: string }, i: number) => {
        if (item.key === targetKey) {
          lastIndex = i - 1;
        }
      },
    );
    const newPanes = zongData[numKey].childrenData.filter(
      (item: { key: string }) => item.key !== targetKey,
    );
    const delIndex = zongData[numKey].childrenData.findIndex(
      (item: { key: string }) => item.key === targetKey,
    );

    console.log(delIndex, 'delIndexdelIndex');
    const cloneZongData = cloneDeep(zongData);

    cloneZongData[numKey].childrenData.splice(delIndex, 1);
    setZongData(cloneZongData);

    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    // setTabList(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit: any = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      //   add();
      // setIsCarVisible(true)
      setIsPointVisible(true);
    } else {
      remove(targetKey);
    }
  };
  return (
    <>
      {/* <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={items}
      /> */}
      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
      >
        {zongData[numKey].childrenData.map((val: any, index: any) => {
          return (
            <Tabs.TabPane tab={val.label} key={val.key}>
              {/* <TabTagCom numKey={val.key}/>    */}
              <HuaShu parentKey={numKey} numKey={index} />
            </Tabs.TabPane>
          );
        })}
      </Tabs>
      <PointAddModal
        isPointVisible={isPointVisible}
        sureAdd={add}
        handleCancel={() => {
          setIsPointVisible(false);
        }}
      />
    </>
  );
};

export default TabTagCom;
