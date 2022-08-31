import { DatePicker, Radio, Space, Tag, TimePicker } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button, Form, Input, Popconfirm, Table, Select } from 'antd';
// import type { FormInstance } from 'antd/es/form';
import _ from 'lodash';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './index.less';
const { Option } = Select;

const AddTable: React.FC = () => {
  // const paramsArr: [any] = [{name: undefined, age: undefined, address: undefined}]
  // const [arr, setArr] = useState<any>([{name: 19}, {age: 20, arr: [1]}])
  const [form] = Form.useForm();

  const dataInit: any = [
    {
      id: 1,
      name: null,
      age: null,
      address: null,
      // tags: ['nice', 'developer'],
    },
    {
      id: 2,
      name: null,
      age: null,
      address: null,
      // tags: ['loser'],
    },
  ];

  const [data, setData] = useState(dataInit);

  const columns: any = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      // render: text => <a>{text}</a>,
      render: (text: any, record: any, index: any) => (
        <Form.Item name={`name-diy${index}`} noStyle>
          <Select
            style={{ width: '150px' }}
            placeholder="请选择"
            // onChange={(value) => {
            //   // console.log(value)
            //   // setName(value)
            //   // console.log(record, index)
            //   // text = value
            //   data[index].name = value
            //   setData(data)
            // }}
          >
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="json">json</Select.Option>
            <Select.Option value="marui">marui</Select.Option>
          </Select>
        </Form.Item>
      ),
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
      // render: text => <a>{text}</a>,
      render: (text: any, record: any, index: any) => (
        <Form.Item name={`age-diy${index}`} noStyle>
          <Select
            style={{ width: '150px' }}
            value={text}
            placeholder="请选择"
            // onChange={(value) => {
            //   // console.log(value)
            //   // setName(value)
            //   text = value
            //   // setData(data[index].age = value)
            //   data[index].age = value
            //   console.log(data, text, '>>>>>>')
            //   setData(data)

            // }}
          >
            <Select.Option value={18}>18</Select.Option>
            <Select.Option value={28}>28</Select.Option>
            <Select.Option value={30}>30</Select.Option>
          </Select>
        </Form.Item>
      ),
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
      // render: text => <a>{text}</a>,
      render: (text: any, record: any, index: any) => (
        <Form.Item name={`address-diy${index}`} noStyle>
          <Radio.Group
          // onChange={(e) => {
          //   // setData(data[index].address = value)
          //   data[index].address = e.target.value
          //   setData(data)

          // }}
          >
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
          </Radio.Group>
        </Form.Item>
      ),
    },
    {
      title: 'time',
      dataIndex: 'time',
      key: 'time',
      // render: text => <a>{text}</a>,
      render: (text: any, record: any, index: any) => (
        <Form.Item name={`time-diy${index}`}>
          <TimePicker.RangePicker placeholder={['开始时间', '结束时间']} />
        </Form.Item>
      ),
    },
  ];

  // const [name, setName] = useState('')

  // const data: any = [
  //   {
  //     key: '1',
  //     name: <Select style={{width: '150px'}} value={paramsArr[0].name} placeholder='请选择' onChange={(value) => {
  //       // console.log(value)
  //       // setName(value)
  //       paramsArr[0].name = value
  //     }}>
  //       <Select.Option value="lucy">Lucy</Select.Option>
  //       <Select.Option value="json">json</Select.Option>
  //       <Select.Option value="marui">marui</Select.Option>
  //     </Select>,
  //     age: <Select style={{width: '150px'}} value={paramsArr[0].age} placeholder='请选择' onChange={(value) => {
  //       // console.log(value)
  //       // setName(value)
  //       paramsArr[0].age = value
  //     }}>
  //       <Select.Option value={18}>Lucy</Select.Option>
  //       <Select.Option value={28}>json</Select.Option>
  //       <Select.Option value={30}>marui</Select.Option>
  //     </Select>,
  //     address: <Radio.Group onChange={(value) => {
  //       paramsArr[0].address = value

  //     }} value={paramsArr[0].address}>
  //       <Radio value={1}>A</Radio>
  //       <Radio value={2}>B</Radio>
  //     </Radio.Group>,
  //     // tags: ['nice', 'developer'],
  //   },
  //   // {
  //   //   key: '2',
  //   //   name: 'Jim Green',
  //   //   age: 42,
  //   //   address: 'London No. 1 Lake Park',
  //   //   tags: ['loser'],
  //   // },
  //   // {
  //   //   key: '3',
  //   //   name: 'Joe Black',
  //   //   age: 32,
  //   //   address: 'Sidney No. 1 Lake Park',
  //   //   tags: ['cool', 'teacher'],
  //   // },
  // ];
  // const aa = paramsArr.map((item) => {
  //   return 99
  // })
  // console.log(aa, 'llll')

  useEffect(() => {
    console.log(data, 'pppp');
  }, [data]);

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
    console.log(form.getFieldsValue(), '>>>>>>>>>');
  };

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select style={{ width: 70 }} onChange={() => {
  //       form.setFieldsValue({'phone': 88})
  //     }}>
  //       <Option value="86">+86</Option>
  //       <Option value="87">+87</Option>
  //     </Select>
  //   </Form.Item>
  // );

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
      <Form
        form={form}
        initialValues={{
          prefix: '86',
        }}
      >
        <div className="row-style">
          <Form.Item name="prefix" noStyle>
            <Select
              style={{ width: 80 }}
              onChange={() => {
                form.setFieldsValue({ phone: 88 });
              }}
            >
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>
          </Form.Item>
          <Form.Item name="phone">
            {/* <Input addonBefore={prefixSelector} style={{ width: '100%' }} /> */}
            <DatePicker.RangePicker style={{ width: '100%' }} />
          </Form.Item>
        </div>

        <Table bordered dataSource={data} columns={columns} rowKey="id" />
      </Form>
    </div>
  );
};

export default AddTable;
