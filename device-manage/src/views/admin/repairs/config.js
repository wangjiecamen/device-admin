
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
    },
    {
      prop: 'operate',
      label: '操作',
      fixed: 'right',
      width: 150,
      render: scope => {
        const handleEdit = () => {
          vm.$router.push({ name: 'AdminRepairEdit', params: { id: scope.row.id }})
        }
        const handleDelete = () => {
          MessageBox.confirm('确认删除？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消'
          }).then(() => {
            vm.deleteData(scope.row.id)
          })
        }
        const handleRepair = () => {
          MessageBox.confirm('确认维修？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消'
          }).then(() => {
            vm.repair(scope.row.id)
          })
        }
        return (
          <div>
            <el-button type='text' onClick={handleEdit}>编辑</el-button>
            <el-button type='text' onClick={handleDelete}>删除</el-button>
            {scope.row.repairStatus === '待维修' && <el-button type='text' onClick={handleRepair}>维修</el-button>}
          </div>
        )
      }
    }
  ]
}
