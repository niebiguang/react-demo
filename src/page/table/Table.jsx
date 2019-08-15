import React, { Component } from 'react'
import {Table, Button} from 'antd' 

// const dataSource = [
//   {
//     key: '1',
//     name: '胡彦斌',
//     age: 32,
//     address: '西湖区湖底公园1号',
//   },
//   {
//     key: '2',
//     name: '胡彦祖',
//     age: 42,
//     address: '西湖区湖底公园1号',
//   },
// ];

// const columns = [
//   {
//     title: '姓名',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: '年龄',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: '住址',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: '操作',
//     dataIndex: 'operate',
//     key: 'operate',
//     render: () => <Button type="primary" onClick={console.log(this)}>点击</Button>
//   }
// ];



export default class Tables extends Component {
  constructor() {
    super() 
    this.state = {
      dataSource: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ]
    }
    
    
  }
  // handleClick = (e) => {
  //   console.log(e)
  // }
  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (e,text, record, index) => {
        return <Button type="primary" onClick={(e) => {
          console.log(e)
        }}>点击</Button>}
      }
    ]
    return (
      <div>
        <Table
          dataSource={this.state.dataSource}
          columns={columns}
        ></Table>
      </div>
    )
  }
}
