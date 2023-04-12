import React, { useState } from 'react';
import { Modal, Select } from 'antd';

const carList = [
  { id: 'C1', label: 'C1' },
  { id: 'C2', label: 'C2' },
  { id: 'B1', label: 'B1' },
];

const CarAddModal: React.FC<any> = (props) => {
  const { isCarVisible, sureAdd, handleCancel } = props;
  const [selVal, setSelVal] = useState<any>([]);
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
        onChange={(val, option) => {
          // e.target.value
          console.log(val, option, 'llll');
          // sureAdd(val)
          setSelVal(val);
          //  setSelVal(option)
        }}
      >
        {carList.map((val) => {
          return (
            <Select.Option key={val.id} id={val.id} value={val.id}>
              {val.label}
            </Select.Option>
          );
        })}
        {/* <Select.Option value="C2">C2</Select.Option>
        <Select.Option value="B1">B1</Select.Option> */}
      </Select>
    </Modal>
  );
};

export default CarAddModal;
