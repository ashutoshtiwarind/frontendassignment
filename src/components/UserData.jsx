import React from 'react';
import { Table, Badge } from 'antd';

function UserData({userData}){
  const columns = [
    {
      title: 'Name',
      dataIndex: 'id',
      key: 'id',
      render: (text, row) => {
        return <>{row.id ? `Campagin - ${row.id}`: 'Na'}</>
      }
    },
    {
      title: 'User Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, row) => {
        return <>{row.name ? `${row.name}`: 'Unknown User'}</>
      }
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Active',
      dataIndex: 'startDate',
      key: 'startDate',
      render: () => (
        <span>
          <Badge status="error" />
          Inactive
        </span>
      ),
    },
    {
      title: 'Budget',
      dataIndex: 'Budget',
      key: 'Budget',
      render:(text, row) => {
        return <>{`${row.Budget} USD`}</>
      }
    },
  ];
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];

 
  return (
    <>
     <Table columns={columns} dataSource={userData} />
    </>
   
  )
};
export default UserData;