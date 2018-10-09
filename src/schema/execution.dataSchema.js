import React from 'react';
import { Link } from 'react-router';
import { UpdateGPA1, UpdateGPA2 } from '../components/UpdateComponentDemo';

module.exports = [
  // {
  //   key: 'id',
  //   title: 'ID',
  //   dataType: 'int',
  //   primary: true,
  //   // 当前列如何渲染
  //   render(text) {
  //     // 只是一个例子, 说明下render函数中可以用this, 甚至可以this.setState之类的
  //     // 我会把this绑定到当前的InnerTable组件上
  //     // 但需要注意, 如果要使用this, render必须是普通的函数, 不能是箭头函数, 因为箭头函数不能手动绑定this
  //     // this不要滥用, 搞出内存泄漏就不好了
  //     // render应该尽量是一个纯函数, 不要有副作用
  //     // console.log(this.props.tableName);
  //     return text;
  //   },
  // },
  {
    key: 'jobName',
    title: '任务名称',
    dataType: 'varchar',
    width: 120,
  },
  {
    key: 'taskStatus',
    title: '结果状态',
    dataType: 'varchar',
  },
  {
    key: 'cronExpression',
    title: 'cron表达式',
    dataType: 'varchar',
  },
  {
    key: 'finishTime',
    title: '完成时间',
    dataType: 'varchar',
  },
  {
    key: 'prefireTime',
    title: '上次触发时间',
    dataType: 'varchar',
  },
  {
    key: 'nextfireTime',
    title: '下次触发时间',
    dataType: 'varchar',
  },
  {
    key: 'timeConsuming',
    title: '耗时',
    dataType: 'varchar',
    sorter: (a, b) => a.timeConsuming - b.timeConsuming,
  },
  {
    key: 'hostAddress',
    title: '机器',
    dataType: 'varchar',
  },
  {
    key: 'cpu',
    title: 'cpu',
    dataType: 'varchar',
    sorter: (a, b) => a.cpu - b.cpu,
  },
  {
    key: 'memory',
    title: '内存',
    dataType: 'varchar',
    sorter: (a, b) => a.memory - b.memory,
  },
];
