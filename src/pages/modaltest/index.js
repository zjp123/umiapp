import React, { useState } from 'react';
import { Modal, Button } from 'antd';
// import { divide } from '@umijs/deps/compiled/lodash'
import './index.less';

const ModalTest = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const afterCloseFn = () => {
    console.log('object', document.documentElement.scrollTop);
    // window.scrollTo(0, 100)
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        className="modalbox"
        afterClose={afterCloseFn}
        centered={true}
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

const Box2 = () => {
  return (
    <div
      style={{
        height: '1200px',
        border: '1px solid green',
        margin: '100px 100px',
      }}
    >
      这是测试内容
    </div>
  );
};

const Box = () => {
  return (
    <div style={{ height: '1500px', border: '1px solid red' }}>
      这是盒子盒子我侄子已种子在自己
      {Box2()}
      {ModalTest()}
    </div>
  );
};

export default Box;
