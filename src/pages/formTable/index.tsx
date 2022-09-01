import type { ColumnsType } from 'antd/es/table';
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Table,
  Select,
  DatePicker,
  Radio,
  Space,
  Tag,
  TimePicker,
} from 'antd';
// import type { FormInstance } from 'antd/es/form';
import _ from 'lodash';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

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

  const sights = {
    Beijing: ['Tiananmen', 'Great Wall'],
    Shanghai: ['Oriental Pearl', 'The Bund'],
  };

  type SightsKeys = keyof typeof sights;

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
        // initialValues={{
        //   prefix: '86',
        // }}
      >
        <Form.List name="sights">
          {(fields, { add, remove }) => {
            console.log(fields, 'fieldsfields');
            return (
              <>
                {fields.map((field) => (
                  <Space key={field.key} align="baseline">
                    {/* <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                  }
                >
                  {() => (
                    <Form.Item
                      {...field}
                      label="Sight"
                      name={[field.name, 'sight']}
                      rules={[{ required: true, message: 'Missing sight' }]}
                    >
                      <Select disabled={!form.getFieldValue('area')} style={{ width: 130 }}>
                        {(sights[form.getFieldValue('area') as SightsKeys] || []).map(item => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  )}
                </Form.Item>
                <Form.Item
                  {...field}
                  label="Price"
                  name={[field.name, 'price']}
                  rules={[{ required: true, message: 'Missing price' }]}
                >
                  <Input />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} /> */}
                    <Table
                      bordered
                      dataSource={data}
                      columns={columns}
                      rowKey="id"
                    />
                  </Space>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add sights
                  </Button>
                </Form.Item>
              </>
            );
          }}

          {/* <Table bordered dataSource={data} columns={columns} rowKey="id" /> */}
        </Form.List>
      </Form>
    </div>
  );
};

export default AddTable;
