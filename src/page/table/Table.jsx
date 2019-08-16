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
  handleClick = (e) => {
    // let id = 
    console.log(e)
  }
  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        align: 'center'
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
        align: 'center'
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        align: 'center',
        render: (record,text,index) => {
          console.log(record);
          return (
            <a href="##" type="primary" onClick={(record) => {
              console.log(record)
            }}>点击</a>
          )
        }
          
          
      }
    ]
    return (
      <div>
        <Table
          bordered
          pagination={false}
          dataSource={this.state.dataSource}
          columns={columns}
        ></Table>
      </div>
    )
  }
}
