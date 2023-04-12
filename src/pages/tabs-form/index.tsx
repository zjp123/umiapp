import { Tabs } from 'antd';
import React, { useRef, useState } from 'react';
import CarAddModal from './car-add-modal';
import TabTagCom from './tab-tag-com';
import { AllDataContext, generateUUID } from './all-context';
import { cloneDeep } from 'lodash';

const initialItems: any = [
  {
    label: 'Tab 1',
    key: '1',
    childrenData: [{ label: 'child1', key: generateUUID(), childrenData: [] }],
  },
  //   { label: 'Tab 2', children: 'Content of Tab 2', key: '2' },
  //   {
  //     label: 'Tab 3',
  //     children: 'Content of Tab 3',
  //     key: '3',
  //     closable: false,
  //   },
];

const TabsForm: React.FC = () => {
  //   const [items, setItems] = useState(initialItems);
  //   const newTabIndex = useRef(1);
  const [isCarVisible, setIsCarVisible] = useState(false);
  const [zongData, setZongData] = useState<any>([
    {
      label: '全部车型',
      id: '',
      key: '1',
      childrenData: [
        {
          label: 'child1',
          id: '',
          key: generateUUID(),
          huashuData: [
            {
              key: generateUUID(),
              huashulist: [],
              huashuform: { value: 1, timeqian: null, timehou: null },
            },
          ],
        },
      ],
    },
  ]); // 所有的state
  const [activeKey, setActiveKey] = useState(
    zongData.length ? zongData[0].key : '',
  );

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = (name = '') => {
    // newTabIndex.current += 1
    // const newActiveKey = `${newTabIndex.current}`
    const newPanes = [...zongData];
    if (zongData[0].label === '全部车型') {
      // const cloneZongData = [...zongData]
      newPanes.splice(0, 1);
    }
    const newActiveKey = generateUUID();
    // console.log(newActiveKey, 'newActiveKeynewActiveKey');
    newPanes.push({
      label: `${name}`,
      //   children: <TabTagCom items={[]} />,
      childrenData: [],
      //   key: newActiveKey,
      key: newActiveKey,
    });
    setZongData(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    zongData.forEach((item: any, i: any) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = zongData.filter((item: any) => item.key !== targetKey);

    const delIndex = zongData.findIndex(
      (item: { key: string }) => item.key === targetKey,
    );
    const cloneZongData = cloneDeep(zongData);
    cloneZongData.splice(delIndex, 1);
    console.log(delIndex, cloneZongData, 'delIndexdelIndex---总删除');
    setZongData(cloneZongData);

    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    // setZongData(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit: any = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      console.log(zongData, '>>>>>>>>>>>>>');
      //   add();
      setIsCarVisible(true);
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
      <AllDataContext.Provider value={{ zongData, setZongData }}>
        <Tabs
          type="editable-card"
          onChange={onChange}
          activeKey={activeKey}
          onEdit={onEdit}
        >
          {zongData.map((val: any, index: any) => {
            return (
              <Tabs.TabPane tab={val.label} key={val.key}>
                <TabTagCom numKey={index} />
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </AllDataContext.Provider>
      <CarAddModal
        isCarVisible={isCarVisible}
        sureAdd={add}
        handleCancel={() => {
          setIsCarVisible(false);
        }}
      />
    </>
  );
};

export default TabsForm;
