

export default function(vm) {
  const h = vm.$createElement
  return [
    {
      prop: 'index',
      type: 'index',
      label: '序号',
      width: 50
    },
    {
      prop: 'deviceId',
      label: '设备ID'
    },
    {
      prop: 'repairId',
      label: '报修人'
    },
    {
      prop: 'content',
      label: '故障描述'
    },
    {
      prop: 'repairStatus',
      label: '报修状态'
    },
    {
      prop: 'upkeepId',
      label: '维修人'
    },
    {
      prop: 'createBy',
      label: '创建人'
    },
    {
      prop: 'createTime',
      label: '创建时间'
    },

    {
      prop: 'updateBy',
      label: '更新人'
    },
    {
      prop: 'updateTime',
      label: '更新时间'
    }

  ]
}
