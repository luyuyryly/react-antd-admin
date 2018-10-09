
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import ajax from '../../utils/ajax';

let xAxisData = [];
let data = [];
for (let i = 0; i < 7 ; i++) {
  const date = new Date();
  xAxisData.push(date.getFullYear()+"."+date.getMonth()+"."+date.getDay());
  putCount(i);
}

function putCount(i) {
  const res =  ajax.countFailWithInterval(i);
  data[i] = res.data;
  res.then(function(value){
    data[6-i] = value.data;
  })
}


class EchartsProjects2 extends React.PureComponent{

  constructor(props){
    super();
    this.state = {

    }
  }

  async componentDidMount(){
  }

  getOption() {
    console.log("getOption="+data);
    return {
      title: {
        text: '任务失败数量(周围度)',
        left: 'center',
        textStyle: {
          color: '#ccc',
          fontSize: 12
        }
      },
      backgroundColor: '#08263a',
      xAxis: [{
        show: false,
        data: xAxisData,
        axisLabel: {
          textStyle: {
            color: '#ccc'
          }
        }
      }, {
        show: false,
        data: xAxisData
      }],
      tooltip: {},
      visualMap: {
        show: false,
        min: 0,
        max: 50,
        dimension: 0,
        inRange: {
          color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
        }
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#ccc'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#08263f'
          }
        },
        axisTick: {
          show: false
        }
      },
      series: [
        {
          name: 'Simulate Shadow',
          type: 'line',
          data: data,
          z: 2,
          showSymbol: false,
          animationDelay: 0,
          animationEasing: 'linear',
          animationDuration: 1200,
          lineStyle: {
            normal: {
              color: 'transparent'
            }
          },
          areaStyle: {
            normal: {
              color: '#08263a',
              shadowBlur: 50,
              shadowColor: '#000'
            }
          }
        }, {
          name: '完成项目数',
          type: 'bar',
          data: data,
          xAxisIndex: 1,
          z: 3,
          itemStyle: {
            normal: {
              barBorderRadius: 5
            }
          }
        }],
      animationEasing: 'elasticOut',
      animationEasingUpdate: 'elasticOut',
      animationDelay: function (idx) {
        return idx * 20;
      },
      animationDelayUpdate: function (idx) {
        return idx * 20;
      }
    };
    }

  render() {
    return (

          <ReactEcharts option={this.getOption()}
                        style={{height: '212px', width: '100%'}}
                        className={'react_for_echarts'}/>


        );};

  //获取当日失败的任务数量
  // async pushCount(){
  //   const res = await ajax.countFail();
  //   console.log("res = "+res.data);
  //   this.setState({
  //     data : [res.data]
  //   })
  // }
}

export default EchartsProjects2;
