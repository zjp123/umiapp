import React, { useState } from 'react';
import { Modal, Select } from 'antd';

const PointAddModal: React.FC<any> = (props) => {
  const { isPointVisible, sureAdd, handleCancel } = props;
  const [selVal, setSelVal] = useState('');
  return (
    <Modal
      title="选择节点"
      open={isPointVisible}
      onOk={() => {
        sureAdd(selVal);
        setSelVal('');
        handleCancel();
      }}
      onCancel={() => {
        setSelVal('');
        handleCancel();
      }}
    >
      <Select
        value={selVal}
        style={{ width: '160px' }}
        onChange={(val) => {
          // e.target.value
          console.log(val, 'llll');
          // sureAdd(val)
          setSelVal(val);
        }}
      >
        <Select.Option value="科一提醒">科一提醒</Select.Option>
        <Select.Option value="科二提醒">科二提醒</Select.Option>
        <Select.Option value="科三提醒">科三提醒</Select.Option>
      </Select>
    </Modal>
  );
};

export default PointAddModal;
