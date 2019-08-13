import React from 'react';
import { ConfigProvider } from 'antd'

import {
  BrowserRouter as Router
} from 'react-router-dom'

import Home from './page/home/Home'
import zhCN from 'antd/es/locale/zh_CN';


import './App.css';

function App() {
  return (
    <Router>
      <ConfigProvider locale={zhCN}>
        <Home></Home>
      </ConfigProvider>
    </Router>
  );
}

export default App;
