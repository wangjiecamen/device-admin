
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
      prop: 'id',
      label: 'ID'
    },
    {
      prop: 'startTime',
      label: '开始时间',

    },
    {
      prop: 'endTime',
      label: '结束时间',

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
        const handleBooking = () => {
          vm.handleBooking(scope.row.id)
        }
        return (
          <div>
            {scope.row.status === '空闲' && <el-button type='text' onClick={handleBooking}>预约</el-button>}
          </div>
        )
      }
    }
  ]
}
