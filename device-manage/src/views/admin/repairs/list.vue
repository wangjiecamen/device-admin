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
import { getRepairPageApi, deleteRepairApi, updateRepairStatusApi } from '@/api/repair'
import tableConfig from '@/views/admin/repairs/config'
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
    async  repair(id) {
      await updateRepairStatusApi({ id })
      await this.getTableData()
      this.$message.success('操作成功')
    },
    goToAdd() {
      this.$router.push({ name: 'AdminRepairAdd' })
    },
    async deleteData(id) {
      await deleteRepairApi({ id })
      await this.getTableData()
      this.$message.success('删除成功')
    },
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
