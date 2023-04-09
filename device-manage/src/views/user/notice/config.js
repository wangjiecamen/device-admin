
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
      prop: 'title',
      label: '标题'
    },
    {
      prop: 'content',
      label: '内容'
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
        const handleDetail = () => {
          vm.$router.push({ name: 'UserNoticeDetail', params: { id: scope.row.id }})
        }
        return (
          <div>
            <el-button type='text' onClick={handleDetail}>查看</el-button>
          </div>
        )
      }
    }
  ]
}
