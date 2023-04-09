<template>
  <div class="form-wrapper">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="设备名称：">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="设备简介：">
        <el-input v-model="form.blurb" />
      </el-form-item>
      <el-form-item label="注意事项：">
        <el-input v-model="form.note" />
      </el-form-item>
      <el-form-item label="设备图片：">
        <el-upload
          class="avatar-uploader"
          :headers="headers"
          :action="FILE_UPLOAD_URL"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="$router.back()">返回</el-button>
        <el-button size="small" type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { deviceAddApi, queryDevicePageApi, updateDevicePageApi } from '@/api/device'
import { getToken } from '@/utils/auth'
import { FILE_UPLOAD_URL } from '@/contants'
export default {

  data() {
    return {
      FILE_UPLOAD_URL,
      headers: { Authorization: getToken() },
      imageUrl: '',
      form: {
        name: '',
        blurb: '',
        id: '',
        image: '',
        note: ''
      }
    }
  },
  mounted() {
    this.form.id = this.$route.params.id
    if (this.form.id) this.getDetail()
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res)
      this.form.image = res.message
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    async getDetail() {
      const { data } = await queryDevicePageApi({ id: this.form.id })
      console.log(data)
      this.form = { id: data.id, name: data.name, blurb: data.blurb, image: data.image, note: data.note }
      this.imageUrl = data.image
    },
    async onSubmit() {
      if (this.form.id) {
        await updateDevicePageApi(this.form)
        this.$message.success('编辑成功')
      } else {
        deviceAddApi(this.form)
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
