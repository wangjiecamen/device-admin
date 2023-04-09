<template>
  <div>
    <div class="btn-wrapper">
      <el-button type="primary" size="small" @click="goToAdd">新增</el-button>
      <el-button type="primary" size="small" @click="goDownload">下载模板</el-button>
      <label for="file" style="margin-left: 10px;display: inline-block">
        <span class="import_btn">导入</span>
        <input id="file" hidden type="file" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" @change="onSelectFile">
      </label>
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
import { getUserPageApi, deleteUserApi, importUserApi, updateUserStatusApi } from '@/api/user'
import tableConfig from '@/views/admin/user/config'
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
    goDownload() {
      window.open('http://121.199.2.55/group1/M00/00/07/eccCN2QtFAmABKhqAAAmGyLjdNo83.xlsx')
    },
    async updateUserStatus(id) {
      await updateUserStatusApi({ id })
      await this.getTableData()
      this.$message.success('更新成功')
    },
    async  onSelectFile(e) {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      await importUserApi(formData)
      this.$message.success('导入成功')
    },
    goToAdd() {
      this.$router.push({ name: 'AdminUserAdd' })
    },
    async deleteData(id) {
      await deleteUserApi({ id })
      await this.getTableData()
      this.$message.success('删除成功')
    },
    async  getTableData() {
      const { data } = await getUserPageApi({ currentPage: this.filter.page, pageSize: this.filter.pageSize })
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
