import React, { Component } from 'react'
import echarts from 'echarts'
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class Echarts extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChartBar = echarts.init(document.getElementById('bar'));
    var myChartPie = echarts.init(document.getElementById('pie'));
    // 绘制图表
    myChartBar.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
    myChartPie.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        // xAxis: {
        //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        // },
        // yAxis: {},
        
        series: [{
            name: '销量',
            type: 'pie',
            data: [
              {value:5, name:'衬衫'},
              {value:20, name:'羊毛衫'},
              {value:36, name:'雪纺衫'},
              {value:10, name:'裤子'},
              {value:10, name:'高跟鞋'},
              {value:20, name:'袜子'}
            ]
            
            // formatter: '{b}: {d}'
        }]
    });
  }
  render() {
    return (
      <div>
        <div id="bar" style={{ width: 400, height: 400 }}></div>
        <div id="pie" style={{ width: 400, height: 400 }}></div>
      </div>
    )
  }
}
