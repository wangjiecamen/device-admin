<template>
  <div class="register-container">
    <el-form ref="registerForm" :model="registerForm" :rules="registerFormRules" class="register-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">注册</h3>
      </div>

      <el-form-item prop="userName">

        <el-input
          ref="userName"
          v-model="registerForm.userName"
          placeholder="Username"
          type="text"
        />
      </el-form-item>
      <el-form-item prop="nickName">
        <el-input
          v-model="registerForm.nickName"
          placeholder="NickName"
          name="username"
          type="text"
        />
      </el-form-item>
      <el-form-item prop="phonenumber">
        <el-input
          v-model="registerForm.phonenumber"
          placeholder="Phone Number"
          type="text"
        />
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          v-model="registerForm.email"
          placeholder="Email"
          type="text"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          ref="password"
          :key="passwordType"
          v-model="registerForm.password"
          :type="passwordType"
          placeholder="Password"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item prop="sex">
        <div style="margin-left: 10px">
          <el-radio v-model="registerForm.sex" label="0">男</el-radio>
          <el-radio v-model="registerForm.sex" label="1">女</el-radio>
        </div>
      </el-form-item>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleRegister">注册</el-button>

    </el-form>
  </div>
</template>

<script>
import { registerApi } from '@/api/user'

export default {
  name: 'Register',
  data() {

    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('The password can not be less than 5 digits'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        userName: '',
        password: '',
        email: '',
        nickName: '',
        phonenumber: '',
        sex: ''
      },
      registerFormRules: {
        userName: [{ required: true, trigger: 'blur', message: 'Please enter the username' }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        email: [{ required: true, trigger: 'blur', message: 'Please enter the email' }],
        sex: [{ required: true, trigger: 'change', message: 'Please enter the sex' }],
        phonenumber: [{ required: true, trigger: 'blur', message: 'Please enter the phonenumber' }],
        nickName: [{ required: true, trigger: 'blur', message: 'Please enter the nickName' }]
      },
      loading: false,
      passwordType: 'password'
    }
  },

  methods: {

    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleRegister() {
      this.$refs.registerForm.validate(async valid => {
        if (valid) {
          this.loading = true
          try {
            await registerApi(this.registerForm)
            this.$router.back()
          } catch (e) {
            console.log(e)
          } finally {
            this.loading = false
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .register-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.register-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.register-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .register-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
