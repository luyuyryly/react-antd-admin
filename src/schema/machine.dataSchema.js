import React from 'react';
import { Link } from 'react-router';

module.exports = [
  {
    key: 'id',
    title: 'ID',
    dataType: 'int',
    primary: true,
    // 当前列如何渲染
    render(text) {
      // 只是一个例子, 说明下render函数中可以用this, 甚至可以this.setState之类的
      // 我会把this绑定到当前的InnerTable组件上
      // 但需要注意, 如果要使用this, render必须是普通的函数, 不能是箭头函数, 因为箭头函数不能手动绑定this
      // this不要滥用, 搞出内存泄漏就不好了
      // render应该尽量是一个纯函数, 不要有副作用
      // console.log(this.props.tableName);
      return text;
    },
  },
  {
    key: 'ip',
    title: 'IP',
    dataType: 'varchar',

    // 默认值, 可以是string也可以是string array, 跟max有关
    //defaultValue: 'http://jxy.me/about/avatar.jpg',
    //width: 150,  // 图片在表格中显示时会撑满宽度, 为了美观要自己调整下
    placeholder: '机器ip',  // 提示语
  },
  {
    key: 'group',
    title: '机器组',
    dataType: 'varchar',
    //width: 150,
    placeholder: '机器所属组',
  },
];
