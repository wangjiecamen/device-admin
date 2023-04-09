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
      prop: 'laboratoryId',
      label: '实验室'
    },
    {
      prop: 'laboratoryNumberId',
      label: '场次时间'
    },
    {
      prop: 'status',
      label: '状态'
    },
    {
      prop: 'userId',
      label: '预约人'
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
        const handleCancel = () => {
          MessageBox.confirm('确认取消？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消'
          }).then(() => {
            vm.handleCancel(scope.row.id)
          })
        }
        return (
          <div>
            {scope.row.status === '正常预约' && <el-button type='text' onClick={handleCancel}>取消预约</el-button>}
          </div>
        )
      }
    }
  ]
}
