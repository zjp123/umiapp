import React, { useRef, useState } from 'react';
import { Tabs } from 'antd';
import PointAddModal from './point-add-modal';
import HuaShu from './huashu';

const TabTagCom: React.FC<any> = (props) => {
  const { itemsData } = props;
  const [activeKey, setActiveKey] = useState(
    itemsData.length ? itemsData[0].key : itemsData,
  );
  const newTabIndex = useRef(0);
  const [isPointVisible, setIsPointVisible] = useState(false);
  const [items, setItems] = useState(itemsData);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = (name = '') => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: `${name}`,
      children: <HuaShu />,
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item: { key: string }, i: number) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter(
      (item: { key: string }) => item.key !== targetKey,
    );
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
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
      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={items}
      />
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
