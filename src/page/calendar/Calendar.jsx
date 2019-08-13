import React, { Component } from 'react'

import { Calendar, Alert } from 'antd';
import { LocaleProvider } from 'antd';

import zh_CN from 'antd/lib/locale-provider/zh_CN';

import 'moment/locale/zh-cn'; 
import moment from 'moment'


export default class Calendars extends Component {
  state = {
    value: moment(),
    selectedValue: moment(),
  };

  // componentDidMount() {
  //   let nowDay = moment().format("YYYY-MM-DD");
  //   this.setState({
  //     value: nowDay,
  //     selectedValue: nowDay
  //   })
  // }

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };


  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <LocaleProvider locale={zh_CN}>
          <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />  
        </LocaleProvider>  
        
      </div>
    )
  }
}
