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
import { urgeDevicePageApi, urgeDeviceUpdateApi } from '@/api/device'
import tableConfig from '@/views/user/borrowDevice/config'
export default {
  mixins: [tableMixins],
  data() {
    return {
      configs: tableConfig(this)
    }
  },
  methods: {
    async  handleReturn(id) {
      await urgeDeviceUpdateApi({ id })
      this.$message.success('归还成功')
      this.getTableData()
    },
    async  getTableData() {
      const { data } = await urgeDevicePageApi({ currentPage: this.filter.page, pageSize: this.filter.pageSize })
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
