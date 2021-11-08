import React, {useState} from 'react'
import { Table, Select, Form, Input, Radio, Button, Row, Col} from 'antd'
const Item = Form.Item
import './style.less'

const StatisticalReportCom = () => {
    const [form] = Form.useForm();
    const [params, setParams] = useState({
        name: '张三',
        age: 18
    })
    const formLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 15 },
    }
    // const params = {
    //     name: '炸鸡',
    //     age: 20
    // }
    return (
        <div>
            <Form
                layout='inline'
                // {...formLayout}
                form={form}
                className="ant-advanced-search-form"
                style={{maxWidth: '100%', overflow: 'hidden'}}
                // initialValues={params}
                onFinish={(all) => {
                    console.log(all, 'aaaaa');
                }}
                // onValuesChange={onFormLayoutChange}
            >
                {/* <Item label="Form Layout" name="layout">
                <Radio.Group value={formLayout}>
                    <Button value="horizontal">Horizontal</Button>
                    <Button value="vertical">Vertical</Button>
                    <Button value="inline">Inline</Button>
                </Radio.Group>
                </Item> */}
                {/* <Row gutter={[10, 20]} style={{border: '1px solid red'}}> */}
                <Col span={4}>
                    <Item label="name">
                        <Input value={params.name} placeholder="input placeholder" />
                    </Item>
                </Col>
                <Col span={4}>
                    <Item label="age">
                        <Input value={params.age} placeholder="input placeholder" />
                    </Item>
                </Col>
                <Col span={6}>
                    <Item>
                        <Button htmlType="submit" type="primary">Submit</Button>
                    </Item>
                </Col>
                {/* </Row> */}
                {/* <Row style={{height:'20px', border: '1px solid blue'}}></Row> */}
                {/* <Row gutter={[10, 10]}>
                    <Col span={8}>
                        <Item label="Field A">
                            <Input placeholder="input placeholder" />
                        </Item>
                    </Col>
                    <Col span={8}>
                        <Item label="Field B">
                            <Input placeholder="input placeholder" />
                        </Item>
                    </Col>
                    <Col span={8}>
                        <Item>
                            <Button type="primary">Submit</Button>
                        </Item>
                    </Col>
                </Row> */}
            </Form>
        </div>
    )
}


export default StatisticalReportCom