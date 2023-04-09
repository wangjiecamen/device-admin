<template>
  <div class="form-wrapper">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="公告标题：">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="公告内容：">
        <el-input
          v-model="form.content"
          type="textarea"
          :rows="2"
        />
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="$router.back()">返回</el-button>
        <el-button size="small" type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addNoticeApi, queryNoticeApi, editNoticeApi } from '@/api/notice'

export default {

  data() {
    return {

      form: {
        content: '',
        title: '',
        id: ''
      }
    }
  },
  mounted() {
    this.form.id = this.$route.params.id
    if (this.form.id) this.getDetail()
  },
  methods: {
    async getDetail() {
      const { data } = await queryNoticeApi({ id: this.form.id })
      console.log(data)
      this.form = { id: data.id, content: data.content, title: data.title }
    },
    async onSubmit() {
      if (this.form.id) {
        await editNoticeApi(this.form)
        this.$message.success('编辑成功')
      } else {
        addNoticeApi(this.form)
        this.$message.success('新增成功')
      }
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.form-wrapper{
    padding: 50px 100px;
}
</style>
