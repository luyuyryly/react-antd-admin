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
      return text;
    },
  },
  {
    key: 'name',
    title: '机器名',
    dataType: 'varchar',
    placeholder: '机器名',  // 提示语
  },
  {
    key: 'creator',
    title: '创建人',
    dataType: 'varchar',
  }
];
