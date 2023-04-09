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
import { getRepairPageApi } from '@/api/repair'
import tableConfig from '@/views/user/repair/config'
export default {
  mixins: [tableMixins],
  data() {
    return {
      configs: tableConfig(this)
    }
  },
  methods: {
    async  getTableData() {
      const { data } = await getRepairPageApi({ currentPage: this.filter.page, pageSize: this.filter.pageSize })
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
