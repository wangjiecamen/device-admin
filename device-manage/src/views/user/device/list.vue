<template>
  <div>

    <table-components
      :configs="configs"
      :table-data="tableData"
      :has-checkbox="false"
    />
    <pagination
      :total="total"
      @sizeChange="handleSizeChange"
      @currentChange="handleCurrentChange"
    />
  </div>
</template>

<script>
import tableMixins from '@/mixin/tableMixins'
import { getDevicePageApi, urgeDeviceAddApi } from '@/api/device'
import { addRepairApi } from '@/api/repair'
import tableConfig from '@/views/user/device/config'

export default {
  mixins: [tableMixins],
  data() {
    return {
      configs: tableConfig(this)
    }
  },
  methods: {
    async handleBorrow(id) {
      await urgeDeviceAddApi({ deviceId: id })
      this.$message.success('成功借用')
      this.getTableData()
    },
    async handleRepairs(id) {
      this.$prompt('请输入故障描述', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S+/,
        inputErrorMessage: '请输入'
      }).then(async({ value }) => {
        await addRepairApi({ deviceId: id, content: value })
        this.$message.success('提交成功')
        this.getTableData()
      })
    },

    async  getTableData() {
      const { data } = await getDevicePageApi({ currentPage: this.filter.page, pageSize: this.filter.pageSize })
      console.log(data)
      this.tableData = data.rows
      this.total = data.total
    }
  }
}
</script>

<style scoped lang="scss">
.btn-wrapper{
  margin: 20px;
  float: right;
}
</style>
