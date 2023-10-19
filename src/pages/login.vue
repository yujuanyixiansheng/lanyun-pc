<template>
  <div class="loginPage">
    <div class="login-centent">
      <div class="login-left">
        <p>心海蓝韵</p>
        <p>心理健康教育平台</p>
        <img src="../assets/imgs/ly_logo.png" alt="" />
      </div>
      <!-- 右侧登录表单 -->
      <div class="login_right">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="formRef"
        >
          <h1>用户登录/Login</h1>
          <h2>用户名<span>/Username</span></h2>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              autocomplete="off"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <h2>密码<span>/Password</span></h2>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              autocomplete="off"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <!-- :loading="loading" -->
          <el-form-item>
            <el-button class="login_btn" @click="handleSubmit(formRef)">
              登&nbsp;录
            </el-button>
          </el-form-item>
          <div class="row">
            <p>校外人员答题</p>
            <p>忘记密码？</p>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { ElNotification } from 'element-plus'
import { userStore } from '@/store/modules/user'
const user = userStore()
//收集账号与密码数据
let loginForm = reactive({ username: 'lyysxx002', password: 'lyxl123456' })
const router = useRouter()
// onMounted(() => {
//   reqLogin(loginForm)
// })
const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      min: 8,
      max: 12,
      message: '请输入用户名',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      min: 8,
      max: 12,
      message: '请输入8-12位密码',
      trigger: 'blur',
    },
  ],
})
// 定义按钮节点
const formRef = ref<FormInstance>()
// let loading = ref(false)
// 登录按钮回调
const handleSubmit = async (formRef: any) => {
  //按钮加载效果
  // loading.value = true
  await formRef.validate(async (valid: any) => {
    if (!formRef) return
    if (valid) {
      console.log('登录成功了', valid)
      try {
        await user.userLogin(loginForm)
        router.push('/')
        ElNotification.success('登录成功')
      } catch (error) {
        console.log(error)
      }

      // console.log(res, '登录了哟')
    } else {
      console.log('失败了')
    }
  })
  //点击登录按钮以后干什么
  //通知仓库发起请求
  //请求成功->路由跳转
  //请求失败->弹出登陆失败信息
}
</script>
<style lang="scss">
.loginPage {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #04185b, #38a9cf);
  position: relative;
  .login-centent {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    width: 960px;
    height: 540px;
    transform: translate(-50%, -50%);
    border-radius: 3%;
    .login-left {
      // float: left;
      background: skyblue;
      width: 50%;
      height: 100%;

      border-top-left-radius: 3%;
      border-bottom-left-radius: 3%;
      background: url('@/assets/imgs/login_box_bg.jpg') no-repeat 100% 100%;

      p:first-child {
        text-align: center;
        color: #fff;
        margin-top: 55px;
        font-size: 38px;
      }
      p:nth-child(2) {
        text-align: center;
        color: #fff;
        text-align: center;
        margin-top: 10px;
        font-size: 22px;
      }
      img {
        width: 300px;
        vertical-align: middle;
        margin-left: 80px;
      }
    }
    .login_right {
      background: #fff;
      border-top-right-radius: 3%;
      border-bottom-right-radius: 3%;
      width: 50%;
      height: 100%;
      .el-form {
        margin: 40px;
        h1 {
          color: #01058a;
          font-size: 32px;
          font-weight: 400;
          text-align: left;
          margin-bottom: 30px;
        }
        h2 {
          color: #01058a;
          font-size: 20px;
          margin-bottom: 10px;
          span {
            font-weight: 400;
            font-size: 14px;
            color: #918d9a;
            margin-left: 4px;
          }
        }
        .el-form-item {
          .el-input .el-input__wrapper {
            height: 48px;
            border: none;
            border-bottom: 1px solid #dcdfe6;
            box-shadow: none;
            font-size: inherit;
          }
        }

        .el-form-item.asterisk-left {
          .el-form-item__content {
            overflow: hidden;
            .el-button.login_btn {
              margin-bottom: 20px;
              text-align: center;
              color: white;
              height: 48px;
              width: 100%;
              font-size: 18px;
              font-weight: 900;
              background-color: #091d7c;
            }
          }
        }
        .row {
          display: flex;
          justify-content: space-between;
          color: #918d9a;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
