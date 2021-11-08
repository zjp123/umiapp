import { Table, Typography } from 'antd';
const { Text } = Typography;
interface ObjP {
  children: any,
  props: any
}

export default function TabelGroup() {

//  3，4，3，2

    const columns: any = [
        {
            title: '学员当前所在阶段',
            children: [
              {
                title: '科目类别',
                dataIndex: 'subjectType',
                key: 'subjectType',
                width: 100,
                render: (value: any, row: any, index: any) => {
                  console.log(value, 'text');
                  const obj: ObjP = {
                    children: value,
                    props: {},
                  };
            
                  if (index === 0) {
                    obj.props.rowSpan = 3
                  }
                  if (index === 1) {
                    obj.props.rowSpan = 0
                  }
                  if (index === 2) {
                    obj.props.rowSpan = 0
                  }

                  if (index === 3) {
                    obj.props.rowSpan = 4
                  }
                  if (index === 4) {
                    obj.props.rowSpan = 0
                  }
                  if (index === 5) {
                    obj.props.rowSpan = 0
                  }
                  if (index === 6) {
                    obj.props.rowSpan = 0
                  }

                  if (index === 7) {
                    obj.props.rowSpan = 3
                  }
                  if (index === 8) {
                    obj.props.rowSpan = 0
                  }
                  if (index === 9) {
                    obj.props.rowSpan = 0
                  }
                  // if (index === 3) {
                  //   obj.props.rowSpan = 0
                  // }
                  return obj;
                  
                },
              },
              {
                  title: '考试科目',
                  dataIndex: 'scoreType',
                  key: 'scoreType',
                  width: 150,
                  // render: (text: any, row: any, index: any) => {
                  //   if (index === 1) {
                  //     return {
                  //         children: <a>{text}</a>,
                  //         props: {
                  //           rowSpan: 0,
                  //         },
                  //     };
                  //   }
                  //   return <a>{text}</a>;
                  // },
                  // sorter: (a: any, b: any) => a.age - b.age,
              }

            ]
            
            // onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
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
        },
        {
          title: '合计',
          dataIndex: 'total',
          key: 'total',
          width: 80,
          fixed: 'right',
        }
    ];
    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            subjectType: 'John Brown',
            scoreType: i + 1,
            street: 2,
            building: 1,
            number: 2035,
            companyAddress: 1,
            companyName: 2,
            gender: 3,
            total: i + 1
        });
    }
    return <Table
            columns={columns}
            dataSource={data}
            bordered
            rowKey="scoreType"
            size="middle"
            scroll={{ x: 'calc(700px + 50%)', y: 540 }}
            // summary={pageData => {
            //     let totalage = 0;
            //     let totalstreet = 0;
            //     let totalbuilding = 0;
            //     let totalnumber = 0;
            //     let totalcompanyAddress = 0;
            //     let totalcompanyName = 0;
            //     let totalgender = 0;
        
            //     pageData.forEach(({ age, street, building, number, companyAddress, companyName, gender }) => {
            //       totalage += age;
            //       totalstreet += street;
            //       totalbuilding += building;
            //       totalnumber += number;
            //       totalcompanyAddress += companyAddress;
            //       totalcompanyName += companyName;
            //       totalgender += gender;
            //     });
        
            //     return (
            //       <>
            //         <Table.Summary.Row>
            //           <Table.Summary.Cell index={0}>合计</Table.Summary.Cell>
            //           <Table.Summary.Cell index={totalage}>
            //             <Text type="danger">{totalage}</Text>
            //           </Table.Summary.Cell>
            //           <Table.Summary.Cell index={totalstreet}>
            //             <Text type="danger">{totalstreet}</Text>
            //           </Table.Summary.Cell>
            //           <Table.Summary.Cell index={totalbuilding}>
            //             <Text type="danger">{totalbuilding}</Text>
            //           </Table.Summary.Cell>
            //           <Table.Summary.Cell index={totalnumber}>
            //             <Text type="danger">{totalnumber}</Text>
            //           </Table.Summary.Cell>
            //           <Table.Summary.Cell index={totalcompanyAddress}>
            //             <Text type="danger">{totalcompanyAddress}</Text>
            //           </Table.Summary.Cell>
            //           <Table.Summary.Cell index={totalcompanyName}>
            //             <Text type="danger">{totalcompanyName}</Text>
            //           </Table.Summary.Cell>
            //           <Table.Summary.Cell index={totalgender}>
            //             <Text type="danger">{totalgender}</Text>
            //           </Table.Summary.Cell>
            //           {/* <Table.Summary.Cell>
            //             <Text>{totalRepayment}</Text>
            //           </Table.Summary.Cell> */}
            //         </Table.Summary.Row>
            //         {/* <Table.Summary.Row>
            //           <Table.Summary.Cell>Balance</Table.Summary.Cell>
            //           <Table.Summary.Cell colSpan={2}>
            //             <Text type="danger">{totalBorrow - totalRepayment}</Text>
            //           </Table.Summary.Cell>
            //         </Table.Summary.Row> */}
            //       </>
            //     );
            //   }}
            />
}