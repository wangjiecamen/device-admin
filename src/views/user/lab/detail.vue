<template>
  <div>
    <div class="btn-wrapper">
      <el-button type="primary" size="small" @click="$router.back()">返回</el-button>
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
import { subscribeLabAddApi, getLabNumberApi } from '@/api/lab'
import tableMixins from '@/mixin/tableMixins'
import tableConfig from '@/views/user/lab/bookingConfig'

export default {
  mixins: [tableMixins],
  data() {
    return {
      configs: tableConfig(this),
      list: [],
      form: {
        laboratoryId: '',
        laboratoryNumberId: '',
        name: ''
      }
    }
  },
  mounted() {
    this.form.laboratoryId = this.$route.params.id
  },
  methods: {
    async  getTableData() {
      const { data } = await getLabNumberApi({ laboratoryId: this.$route.params.id, currentPage: this.filter.page, pageSize: this.filter.pageSize })
      this.tableData = data.rows
      this.total = data.total
    },
    handleBooking(id) {
      this.$prompt('请输入课程名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S+/,
        inputErrorMessage: '请输入'
      }).then(async({ value }) => {
        this.form.laboratoryNumberId = id
        this.form.name = value
        await subscribeLabAddApi(this.form)
        this.$message.success('预约成功')
        this.getTableData()
      })
    }
  }
}
</script>

<style scoped>
.form-wrapper{
  padding: 50px 100px;
}
.item{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.btn{
  margin-left: 10px;
}
.btn-wrapper{
  margin: 20px;
  float: right;
}
</style>
