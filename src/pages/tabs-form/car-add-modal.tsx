import React, { useState } from 'react';
import { Modal, Select } from 'antd';

const CarAddModal: React.FC<any> = (props) => {
  const { isCarVisible, sureAdd, handleCancel } = props;
  const [selVal, setSelVal] = useState([]);
  return (
    <Modal
      title="选择车型"
      open={isCarVisible}
      onOk={() => {
        sureAdd(selVal.join('/'));
        setSelVal([]);
        handleCancel();
      }}
      onCancel={() => {
        setSelVal([]);
        handleCancel();
      }}
    >
      <Select
        mode="multiple"
        value={selVal}
        style={{ width: '160px' }}
        onChange={(val) => {
          // e.target.value
          console.log(val, 'llll');
          // sureAdd(val)
          setSelVal(val);
        }}
      >
        <Select.Option value="C1">C1</Select.Option>
        <Select.Option value="C2">C2</Select.Option>
        <Select.Option value="B1">B1</Select.Option>
      </Select>
    </Modal>
  );
};

export default CarAddModal;
