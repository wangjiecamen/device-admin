
import { MessageBox } from 'element-ui'
import { updateUserStatusApi } from '@/api/user'
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
      prop: 'userName',
      label: '账号'
    },
    {
      prop: 'userRole',
      label: '用户权限'
    },
    {
      prop: 'userType',
      label: '用户类型'
    },
    {
      prop: 'email',
      label: '邮箱'
    },
    {
      prop: 'nickName',
      label: '昵称'
    },
    {
      prop: 'phonenumber',
      label: '手机号'
    },
    {
      prop: 'status',
      label: '账号状态',
      width:180,
      render: scope => {
        const onChange = () => {
          vm.updateUserStatus(scope.row.id)
        }
        return <el-switch
          value={scope.row.status}
          onChange={onChange}
          active-text='正常'
          active-value='正常'
          inactive-value='停用'
          inactive-text='停用'>
        </el-switch>
      }
    },
    {
      prop: 'sex',
      label: '性别'
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
          vm.$router.push({ name: 'AdminUserEdit', params: { id: scope.row.id }})
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
