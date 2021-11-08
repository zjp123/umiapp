import { Table, Typography } from 'antd';
const { Text } = Typography;

export default function TabelGroup() {

    const columns: any = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 100,
            fixed: 'left',
            filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'John',
                value: 'John',
            },
            ],
            onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 150,
            sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: 'Other',
            children: [
                {
                    title: 'Street',
                    dataIndex: 'street',
                    key: 'street',
                    width: 150,
                },
                {
                    title: 'Building',
                    dataIndex: 'building',
                    key: 'building',
                    width: 100,
                },
                {
                    title: 'Door No.',
                    dataIndex: 'number',
                    key: 'number',
                    width: 100,
                },
                {
                    title: 'Company Address',
                    dataIndex: 'companyAddress',
                    key: 'companyAddress',
                    width: 200,
                },
                {
                    title: 'Company Name',
                    dataIndex: 'companyName',
                    key: 'companyName',
                },
                {
                    title: 'Gender',
                    dataIndex: 'gender',
                    key: 'gender',
                    width: 80,
                    fixed: 'right',
                }
            ]
        }
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: 'John Brown',
            age: i + 1,
            street: 2,
            building: 1,
            number: 2035,
            companyAddress: 1,
            companyName: 2,
            gender: 3,
        });
    }
    return <Table
            columns={columns}
            dataSource={data}
            bordered
            size="middle"
            scroll={{ x: 'calc(700px + 50%)', y: 540 }}
            summary={pageData => {
                let totalage = 0;
                let totalstreet = 0;
                let totalbuilding = 0;
                let totalnumber = 0;
                let totalcompanyAddress = 0;
                let totalcompanyName = 0;
                let totalgender = 0;
        
                pageData.forEach(({ age, street, building, number, companyAddress, companyName, gender }) => {
                  totalage += age;
                  totalstreet += street;
                  totalbuilding += building;
                  totalnumber += number;
                  totalcompanyAddress += companyAddress;
                  totalcompanyName += companyName;
                  totalgender += gender;
                });
        
                return (
                  <>
                    <Table.Summary.Row>
                      <Table.Summary.Cell index={0}>合计</Table.Summary.Cell>
                      <Table.Summary.Cell index={totalage}>
                        <Text type="danger">{totalage}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={totalstreet}>
                        <Text type="danger">{totalstreet}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={totalbuilding}>
                        <Text type="danger">{totalbuilding}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={totalnumber}>
                        <Text type="danger">{totalnumber}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={totalcompanyAddress}>
                        <Text type="danger">{totalcompanyAddress}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={totalcompanyName}>
                        <Text type="danger">{totalcompanyName}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={totalgender}>
                        <Text type="danger">{totalgender}</Text>
                      </Table.Summary.Cell>
                      {/* <Table.Summary.Cell>
                        <Text>{totalRepayment}</Text>
                      </Table.Summary.Cell> */}
                    </Table.Summary.Row>
                    {/* <Table.Summary.Row>
                      <Table.Summary.Cell>Balance</Table.Summary.Cell>
                      <Table.Summary.Cell colSpan={2}>
                        <Text type="danger">{totalBorrow - totalRepayment}</Text>
                      </Table.Summary.Cell>
                    </Table.Summary.Row> */}
                  </>
                );
              }}
            />
}