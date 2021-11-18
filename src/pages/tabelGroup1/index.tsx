import { Table, Typography } from 'antd';
const { Text } = Typography;

export default function TabelGroup() {

    const columns: any = [
        {
            title: '学员报名时间',
            dataIndex: 'year',
            key: 'year',
            width: 100,
            fixed: 'left',
            // filters: [
            // {
            //     text: 'Joe',
            //     value: 'Joe',
            // },
            // {
            //     text: 'John',
            //     value: 'John',
            // },
            // ],
            // onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
        },
        {
            title: '报名学员总数',
            dataIndex: 'total',
            key: 'total',
            width: 150,
            sorter: (a: any, b: any) => a.age - b.age,
        },
        {
            title: '学员当前状态',
            children: [
                {
                    title: '科一(未受理)',
                    dataIndex: 'keyinot',
                    key: 'keyinot',
                    width: 150,
                },
                {
                    title: '科一(已受理)',
                    dataIndex: 'keyishou',
                    key: 'keyishou',
                    width: 100,
                },
                {
                    title: '科二',
                    dataIndex: 'keer',
                    key: 'keer',
                    width: 100,
                },
                {
                    title: '科三',
                    dataIndex: 'kesan',
                    key: 'kesan',
                    width: 200,
                },
                {
                    title: '科四',
                    dataIndex: 'kesi',
                    key: 'compakesinyName',
                },
                {
                    title: '结业',
                    dataIndex: 'jieye',
                    key: 'jieye',
                    width: 80,
                    fixed: 'right',
                },
                {
                  title: '其他',
                  dataIndex: 'qita',
                  key: 'qita',
                  width: 80,
                  fixed: 'right',
              }
            ]
        }
    ];

    const data = [];
    for (let i = 0; i < 10; i++) {
        data.push({
            key: i,
            year: 200 + '' + i,
            total: i + 1,
            keyinot: 2,
            keyishou: 1,
            keer: 2035,
            kesan: 1,
            kesi: 2,
            jieye: 3,
            qita: 5
        });
    }
    console.log(data);
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
                let totalQita = 0;
        
                pageData.forEach(({ total, keyinot, keyishou, keer, kesan, kesi, jieye, qita }) => {
                  totalage += total;
                  totalstreet += keyinot;
                  totalbuilding += keyishou;
                  totalnumber += keer;
                  totalcompanyAddress += kesan;
                  totalcompanyName += kesi;
                  totalgender += jieye;
                  totalQita += qita
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
                      <Table.Summary.Cell index={totalgender}>
                        <Text type="danger">{totalQita}</Text>
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