
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
      label: '实验室名称'
    },
    {
      prop: 'address',
      label: '实验室地址'
    },
    {
      prop: 'content',
      label: '实验室描述'
    },
    {
      prop: 'course',
      label: '实验室当前课程'
    },
    {
      prop: 'startTime',
      label: '实验室开发开始时间'
    },
    {
      prop: 'endTime',
      label: '实验室开发结束时间'
    },
    {
      prop: 'image',
      label: '实验室图片',
      render: scope => {
        return <el-image src={scope.row.image} ></el-image>
      }
    },
    {
      prop: 'people',
      label: '实验室容纳人数'
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
      prop: 'status',
      label: '实验室状态'
    },
    {
      prop: 'operate',
      label: '操作',
      fixed: 'right',
      width: 150,
      render: scope => {
        const handleEdit = () => {
          vm.$router.push({ name: 'AdminLabEdit', params: { id: scope.row.id }})
        }
        const handleDelete = () => {
          MessageBox.confirm('确认删除？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消'
          }).then(() => {
            vm.deleteData(scope.row.id)
          })
        }
        return (
          <div>
            <el-button type='text' onClick={handleEdit}>编辑</el-button>
            <el-button type='text' onClick={handleDelete}>删除</el-button>
          </div>
        )
      }
    }
  ]
}
