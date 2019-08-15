import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';

import Table from '../table/Table'
import List from '../list/List'
import Calendars from '../calendar/Calendar'
import Echarts from '../echarts/Echarts'

import {
  Link,
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'

import './Home.css'

const { Header, Sider, Content } = Layout;

// import './Home.css'

export default withRouter (class Home extends Component {
  constructor(props) {
    super(props)
    this.state= {
      defaultSelectedKeys: ''
    }
  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handleClick = (e) => {
    console.log(e)
    if(e.key == 1) {
      this.props.history.push('/table')
    }else if(e.key == 2) {
      this.props.history.push('/list')
    }else if(e.key == 3) {
      this.props.history.push('/calendar')
    } else if(e.key == 4) {
      this.props.history.push('/echarts')
    }
  }
  componentDidMount() {
    console.log(this.props.location.pathname)
    switch(this.props.location.pathname) {
      // default:
      case '/table':
        this.setState({
          defaultSelectedKeys: '1'
        })
        break
      case '/list':
        this.setState({
          defaultSelectedKeys: '2'
        })
        break
      case '/calendar':
        this.setState({
          defaultSelectedKeys: '3'
        })
    } 
  }
  render() {
    console.log(this.state.defaultSelectedKeys)
    let keyWord = this.state.defaultSelectedKeys ? this.state.defaultSelectedKeys : '1'
    return (
      <Layout className="container">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[keyWord]} onClick={this.handleClick}>
            <Menu.Item key="1">
              <Icon type="upload" />
              <span>表格</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>列表</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>日历</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="upload" />
              <span>图表</span> 
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}  
          >
            <Switch>
              <Redirect exact from="/" to="/table"></Redirect>
              <Route path="/table" component={Table}></Route>
              <Route path="/list" component={List}></Route>
              <Route path="/calendar" component={Calendars}></Route>
              <Route path="/echarts" component={Echarts}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
})
