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

const FormField: React.FC = () => {
  // const paramsArr: [any] = [{name: undefined, age: undefined, address: undefined}]
  // const [arr, setArr] = useState<any>([{name: 19}, {age: 20, arr: [1]}])
  const [form] = Form.useForm();

  // const dataInit: any = [
  //   {
  //     id: 1,
  //     name: null,
  //     age: null,
  //     address: null,
  //     // tags: ['nice', 'developer'],
  //   },
  //   {
  //     id: 2,
  //     name: null,
  //     age: null,
  //     address: null,
  //     // tags: ['loser'],
  //   },
  // ];

  // const [data, setData] = useState(dataInit);

  // useEffect(() => {
  //   console.log(data, 'pppp');
  // }, [data]);

  // const handleAdd = () => {
  //   const arrTemp = _.cloneDeep(data);
  //   let len = arrTemp.length;
  //   arrTemp.push({
  //     id: ++len,
  //     name: null,
  //     age: null,
  //     address: null,
  //   });
  //   console.log(arrTemp, 'datadata');
  //   setData(arrTemp);
  // };

  const getForm = () => {
    console.log(form.getFieldsValue(), '>>>>>>>>>');
  };

  const areas = [
    { label: 'Beijing', value: 'Beijing' },
    { label: 'Shanghai', value: 'Shanghai' },
  ];

  const sights = {
    Beijing: ['Tiananmen', 'Great Wall'],
    Shanghai: ['Oriental Pearl', 'The Bund'],
  };

  type SightsKeys = keyof typeof sights;

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  return (
    <div>
      {/* <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button> */}
      <Button
        onClick={getForm}
        type="primary"
        style={{ marginBottom: 16, marginLeft: '10px' }}
      >
        获取form值
      </Button>
      <Form
        form={form}
        name="dynamic_form_complex"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="area"
          label="Area"
          rules={[{ required: true, message: 'Missing area' }]}
        >
          <Select options={areas} onChange={handleChange} />
        </Form.Item>
        <Form.List name="sights">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Space key={field.key} align="baseline">
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.area !== curValues.area ||
                      prevValues.sights !== curValues.sights
                    }
                  >
                    {() => (
                      <Form.Item
                        {...field}
                        label="Sight"
                        name={[field.name, 'sight']}
                        rules={[{ required: true, message: 'Missing sight' }]}
                      >
                        <Select
                          disabled={!form.getFieldValue('area')}
                          style={{ width: 130 }}
                          onChange={() => {
                            form.setFieldsValue(form.getFieldsValue());
                          }}
                        >
                          {(
                            sights[form.getFieldValue('area') as SightsKeys] ||
                            []
                          ).map((item) => (
                            <Option key={item} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    )}
                  </Form.Item>
                  {form.getFieldValue('sights')[index]?.sight && (
                    <Form.Item
                      {...field}
                      label="Price"
                      name={[field.name, 'price']}
                      rules={[{ required: true, message: 'Missing price' }]}
                    >
                      <Input />
                      {/* {form.getFieldValue('sights')[index]?.sight} */}
                    </Form.Item>
                  )}

                  <MinusCircleOutlined onClick={() => remove(field.name)} />
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
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormField;
