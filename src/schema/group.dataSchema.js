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
    title: '分组名',
    dataType: 'varchar',
    placeholder: '分组名',  // 提示语
  },
  {
    key: 'creator',
    title: '创建人',
    dataType: 'varchar',
  },
  {
    key: 'modifer',
    title: '修改人',
    dataType: 'varchar',
  },
  {
    key: 'createTime',
    title: '创建时间',
    dataType: 'datetime',
    visible: false
  },
  {
    key: 'modifyTime',
    title: '修改时间',
    dataType: 'datetime',
    visible: false
  }
];
