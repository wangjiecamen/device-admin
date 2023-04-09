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
        <el-input v-model="form.password" />
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
        <el-button type="primary" size="small" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUserPageApi, updateUserApi } from '@/api/user'
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
  async  mounted() {
    const { data } = await getUserPageApi()
    console.log(data)
    this.form = data.rows[0]
    this.form.sex = this.form.sex === '女' ? '1' : '0'
  },
  methods: {
    async onSubmit() {
      await updateUserApi(this.form)
      this.$message.success('编辑成功')
    }
  }
}
</script>

<style scoped lang="scss">
.form-wrapper{
  padding: 50px 100px;
}
</style>
