import { Tabs } from 'antd';
import React, { useRef, useState } from 'react';
import CarAddModal from './car-add-modal';
import TabTagCom from './tab-tag-com';

const initialItems = [
  { label: 'Tab 1', children: <TabTagCom itemsData={[]} />, key: '1' },
  { label: 'Tab 2', children: 'Content of Tab 2', key: '2' },
  {
    label: 'Tab 3',
    children: 'Content of Tab 3',
    key: '3',
    closable: false,
  },
];

const TabsForm: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const [isCarVisible, setIsCarVisible] = useState(false);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = (name = '') => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: `${name}`,
      children: <TabTagCom items={[]} />,
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
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
      setIsCarVisible(true);
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
