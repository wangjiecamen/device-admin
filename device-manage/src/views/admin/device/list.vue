<template>
  <div>
    <div class="btn-wrapper">
      <el-button type="primary" size="small" @click="goToAdd">新增</el-button>
    </div>
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
import { getDevicePageApi, deviceDeleteApi, urgeDeviceCountApi } from '@/api/device'
import tableConfig from '@/views/admin/device/config'
export default {
  mixins: [tableMixins],
  data() {
    return {
      configs: tableConfig(this)
    }
  },
  mounted() {

  },
  methods: {
    async  demandReturn(id) {
      await urgeDeviceCountApi({ id })
      await this.getTableData()
      this.$message.success('已催还')
    },
    goToAdd() {
      this.$router.push({ name: 'AdminDeviceAdd' })
    },
    async deleteData(id) {
      await deviceDeleteApi({ id })
      await this.getTableData()
      this.$message.success('删除成功')
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
