<template>
  <div class="form-wrapper">
    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="实验室名称：">
        <el-input v-model="form.name" :readonly="isDetail" />
      </el-form-item>
      <el-form-item label="实验室地址位置：">
        <el-input v-model="form.address" :readonly="isDetail" />
      </el-form-item>
      <el-form-item label="实验室容纳人数：">
        <el-input v-model="form.people" :readonly="isDetail" />
      </el-form-item>
      <el-form-item label="实验室描述：">
        <el-input v-model="form.content" :readonly="isDetail" />
      </el-form-item>
      <el-form-item label="实验室开发时间：">
        <el-time-picker
          v-model="time"
          :readonly="isDetail"
          is-range
          value-format="HH:mm:ss"
          range-separator="至"
          start-placeholder="实验室开发开始时间"
          end-placeholder="实验室开发结束时间"
          placeholder="选择时间范围"
        />
      </el-form-item>
      <el-form-item label="实验室图片：">
        <el-upload
          :disabled="isDetail"
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
      <el-form-item
        v-for="(session, index) in laboratoryTemplateList"
        :key="session.key"
        :label="`场次${index+1}`"
      >
        <el-time-picker
          v-model="session.time"
          :readonly="isDetail"
          is-range
          value-format="HH:mm:ss"
          range-separator="至"
          start-placeholder="场次开始时间"
          end-placeholder="场次结束时间"
          placeholder="选择时间范围"
        />
        <el-button v-if="!isDetail" style="margin-left: 10px" @click.prevent="removeSession(session)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button v-if="!isDetail" size="small" type="primary" @click="addSession">新增场次</el-button>
      </el-form-item>
      <el-form-item>
        <el-form-item>
          <el-button size="small" @click="$router.back()">返回</el-button>
          <el-button v-if="!isDetail" size="small" type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form-item></el-form>
  </div>
</template>

<script>
import { labAddApi, updateLabApi, queryLabApi } from '@/api/lab'
import { getToken } from '@/utils/auth'
import { FILE_UPLOAD_URL } from '@/contants'
const ymd = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()

export default {

  data() {
    return {
      FILE_UPLOAD_URL,
      imageUrl: '',
      time: ['08:00:00', '09:00:00'],
      laboratoryTemplateList: [],
      headers: { Authorization: getToken() },
      isDetail: false,
      form: {
        'address': '',
        'content': '',
        'endTime': '',
        'id': '',
        'image': '',
        'laboratoryTemplateList': [],
        'name': '',
        'people': '',
        'startTime': ''
      }
    }
  },
  mounted() {
    this.form.id = this.$route.params.id
    this.isDetail = this.$route.query.type === 1
    if (this.form.id) this.getDetail()
  },
  methods: {
    removeSession(item) {
      const index = this.laboratoryTemplateList.indexOf(item)
      if (index !== -1) {
        this.laboratoryTemplateList.splice(index, 1)
      }
    },
    addSession() {
      this.laboratoryTemplateList.push({
        time: ['08:00:00', '09:00:00'],
        key: Date.now()
      })
    },
    handleAvatarSuccess(res, file) {
      this.form.image = res.message
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    async getDetail() {
      const { data } = await queryLabApi({ id: this.form.id })
      console.log(data)
      this.time = [data.startTime.split(' ')[1], data.endTime.split(' ')[1]]
      this.imageUrl = data.image
      this.laboratoryTemplateList = data.laboratoryTemplateList.map(i => {
        return { time: [i.startTime.split(' ')[1], i.endTime.split(' ')[1]] }
      })
      this.form = {
        'address': data.address,
        'content': data.content,
        'endTime': data.endTime,
        'id': data.id,
        'image': data.image,
        'laboratoryTemplateList': data.laboratoryTemplateList,
        'name': data.name,
        'people': data.people,
        'startTime': data.startTime
      }
    },
    async onSubmit() {
      this.form.laboratoryTemplateList = this.laboratoryTemplateList.map(i => {
        return {
          startTime: ymd + ' ' + i.time[0],
          endTime: ymd + ' ' + i.time[1]
        }
      })
      this.form.startTime = ymd + ' ' + this.time[0]
      this.form.endTime = ymd + ' ' + this.time[1]
      console.log(this.form)
      if (this.form.id) {
        await updateLabApi(this.form)
        this.$message.success('编辑成功')
      } else {
        await labAddApi(this.form)
        this.$message.success('新增成功')
      }
      this.$router.back()
    }
  }
}
</script>

<style>
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
