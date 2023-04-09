import { MessageBox } from 'element-ui'

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
      label: '设备编号'
    },
    {
      prop: 'status',
      label: '状态'
    },
    {
      prop: 'userId',
      label: '借用人'
    },
    {
      prop: 'urgeCount',
      label: '催还次数'
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
    },
    {
      prop: 'operate',
      label: '操作',
      fixed: 'right',
      width: 150,
      render: scope => {
        const handleReturn = () => {
          MessageBox.confirm('确认归还？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消'
          }).then(() => {
            vm.handleReturn(scope.row.id)
          })
        }
        return (
          <div>
            {scope.row.status === '已借用' && <el-button type='text' onClick={handleReturn}>归还</el-button>}
          </div>
        )
      }
    }
  ]
}
