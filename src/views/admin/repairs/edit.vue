<template>
  <div class="form-wrapper">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="报修设备：">
        <el-input v-model="form.deviceId" />
      </el-form-item>
      <el-form-item label="故障描述：">
        <el-input v-model="form.content" />
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="$router.back()">返回</el-button>
        <el-button size="small"  type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addRepairApi, updateRepairApi, queryRepairPageApi } from '@/api/repair'

export default {

  data() {
    return {
      form: {
        deviceId: '',
        id: '',
        content: ''
      }
    }
  },
  mounted() {
    this.form.id = this.$route.params.id
    if (this.form.id) this.getDetail()
  },
  methods: {
    async getDetail() {
      const { data } = await queryRepairPageApi({ id: this.form.id })
      console.log(data)
      this.form = { id: data.id, content: data.content, deviceId: data.deviceId }
    },
    async onSubmit() {
      if (this.form.id) {
        await updateRepairApi(this.form)
        this.$message.success('编辑成功')
      } else {
       await addRepairApi(this.form)
        this.$message.success('新增成功')
      }
      this.$router.back()
    }
  }
}
</script>

<style >
.form-wrapper{
  padding: 50px 100px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
