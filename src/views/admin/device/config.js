
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
      prop: 'name',
      label: '设备名称',
      render: scope => {
        const goToDetail = () => {
          vm.$router.push({ name: 'AdminDeviceDetail', params: { id: scope.row.id }, query: { type: 1 }})
        }
        return <el-button type='text' onClick={goToDetail}>{scope.row.name}</el-button>
      }
    },
    {
      prop: 'blurb',
      label: '设备简介'
    },

    {
      prop: 'image',
      label: '设备图',
      render: scope => {
        return <el-image src={scope.row.image} ></el-image>
      }
    },
    {
      prop: 'note',
      label: '注意事项'
    },
    {
      prop: 'status',
      label: '设备状态'
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
          vm.$router.push({ name: 'AdminDeviceEdit', params: { id: scope.row.id }})
        }
        const handleDelete = () => {
          MessageBox.confirm('确认删除？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消'
          }).then(() => {
            vm.deleteData(scope.row.id)
          })
        }
        const handleDemandReturn = () => {
          MessageBox.confirm('确认催还？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消'
          }).then(() => {
            vm.demandReturn(scope.row.urgeDevice)
          })
        }
        return (
          <div>
            <el-button type='text' onClick={handleEdit}>编辑</el-button>
            <el-button type='text' onClick={handleDelete}>删除</el-button>
            {scope.row.status === '已被借用' && <el-button type='text' onClick={handleDemandReturn}>催还</el-button>}
          </div>
        )
      }
    }
  ]
}
