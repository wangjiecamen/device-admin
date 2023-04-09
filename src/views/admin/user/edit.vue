<template>
  <div class="form-wrapper">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="账号：">
        <el-input v-model="form.userName" />
      </el-form-item>
      <el-form-item label="手机号：">
        <el-input v-model="form.phonenumber" />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item label="昵称：">
        <el-input v-model="form.nickName" />
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="性别：">
        <el-radio v-model="form.sex" label="0">男</el-radio>
        <el-radio v-model="form.sex" label="1">女</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="$router.back()">返回</el-button>
        <el-button size="small" type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addUserApi, updateUserApi, queryUserApi } from '@/api/user'

export default {

  data() {
    return {
      form: {
        'email': '',
        'id': '',
        'nickName': '',
        'password': '',
        'phonenumber': '',
        'sex': '',
        'userName': ''
      }
    }
  },
  mounted() {
    this.form.id = this.$route.params.id
    if (this.form.id) this.getDetail()
  },
  methods: {

    async getDetail() {
      const { data } = await queryUserApi({ id: this.form.id })
      console.log(data)
      this.form = {
        id: data.id,
        email: data.email,
        nickName: data.nickName,
        password: data.password,
        phonenumber: data.phonenumber,
        sex: data.sex,
        userName: data.userName
      }
    },
    async onSubmit() {
      if (this.form.id) {
        await updateUserApi(this.form)
        this.$message.success('编辑成功')
      } else {
        await addUserApi(this.form)
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
