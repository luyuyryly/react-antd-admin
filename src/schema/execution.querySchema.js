// 定义某个表的querySchema
// schema的结构和含义参考下面的例子
// 注意: 所有的key不能重复

module.exports = [
  {
    key: 'jobName',   // 传递给后端的字段名
    title: '任务名称',    // 前端显示的名称
    dataType: 'varchar',
  },
  {
    key: 'status',
    title: '状态',
    dataType: 'varchar',
  },

  {
    key: 'ip',
    title: 'ip',
    dataType: 'varchar',
  },
];
