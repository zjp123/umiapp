import { DatePicker, Radio, Space, Tag, TimePicker } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button, Form, Input, Popconfirm, Table, Select } from 'antd';
// import type { FormInstance } from 'antd/es/form';
import _ from 'lodash';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './index.less';
import moment from 'moment';
const { Option } = Select;

const AddTable: React.FC = () => {
  // const [form] = Form.useForm();
  const dataInit: any = [
    {
      id: 1,
      name: null,
      age: null,
      address: null,
      time: '',
      // tags: ['nice', 'developer'],
    },
    {
      id: 2,
      name: null,
      age: 18,
      address: 1,
      time: '',
      // tags: ['loser'],
    },
  ];
  const [data, setData] = useState(dataInit);

  useEffect(() => {
    console.log(data, '?????');
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      console.log(999999);
      dataInit[1].address = 2;
      setData(dataInit);
    }, 3000);
  }, []);

  const columns: any = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      // render: text => <a>{text}</a>,
      render: (text: any, record: any, index: any) => (
        <Select
          style={{ width: '150px' }}
          placeholder="请选择"
          value={record.name}
          onChange={(value) => {
            const arrnew = _.cloneDeep(data);
            arrnew[index].name = value;
            setData(arrnew);
          }}
        >
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="json">json</Select.Option>
          <Select.Option value="marui">marui</Select.Option>
        </Select>
      ),
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
      render: (text: any, record: any, index: any) => (
        <Select
          style={{ width: '150px' }}
          value={record.age}
          placeholder="请选择"
          onChange={(value) => {
            const arrnew = _.cloneDeep(data);
            arrnew[index].age = value;
            setData(arrnew);
          }}
        >
          <Select.Option value={18}>18</Select.Option>
          <Select.Option value={28}>28</Select.Option>
          <Select.Option value={30}>30</Select.Option>
        </Select>
      ),
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any, index: any) => (
        <Radio.Group
          value={record.address}
          onChange={(e) => {
            const arrnew = _.cloneDeep(data);
            arrnew[index].address = e.target.value;
            setData(arrnew);
          }}
        >
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
        </Radio.Group>
      ),
    },
    {
      title: 'time',
      dataIndex: 'time',
      key: 'time',
      render: (text: any, record: any, index: any) => (
        <TimePicker.RangePicker
          defaultValue={[
            moment('00:00:00', 'HH:mm:ss'),
            moment('23:59:59', 'HH:mm:ss'),
          ]}
          placeholder={['开始时间', '结束时间']}
        />
      ),
    },
  ];

  // useEffect(() => {
  //   console.log(data, 'pppp');
  // }, [data]);

  const handleAdd = () => {
    const arrTemp = _.cloneDeep(data);
    let len = arrTemp.length;
    arrTemp.push({
      id: ++len,
      name: null,
      age: null,
      address: null,
    });
    console.log(arrTemp, 'datadata');
    setData(arrTemp);
  };

  const getForm = () => {
    // console.log(form.getFieldsValue(), '>>>>>>>>>');
  };

  return (
    <div>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button>
      <Button
        onClick={getForm}
        type="primary"
        style={{ marginBottom: 16, marginLeft: '10px' }}
      >
        获取form值
      </Button>
      <Table bordered dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
};

export default AddTable;
