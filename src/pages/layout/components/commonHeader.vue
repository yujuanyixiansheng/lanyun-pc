<template>
  <div class="head-bread">
    <div class="head">
      <!-- 顶部左侧 -->
      <div class="top-left">
        <svg style="width: 30px; height: 30px">
          <use xlink:href="#icon-fold" fill="#fff"></use>
        </svg>
        <span class="title">心理健康教育平台</span>
      </div>
      <!-- 顶部中间菜单 -->
      <div class="top-cent">
        <ul>
          <li>
            <svg style="width: 24px; height: 24px; margin-right: 8px">
              <use xlink:href="#icon-home" fill="#fff"></use>
            </svg>
            <span>首页</span>
          </li>
          <li>
            <span>任务管理</span>
            <svg style="width: 24px; height: 24px">
              <use xlink:href="#icon-arrow-down" fill="#fff"></use>
            </svg>
          </li>
          <li>
            <span>心理测评</span>
            <svg style="width: 24px; height: 24px">
              <use xlink:href="#icon-arrow-down" fill="#fff"></use>
            </svg>
          </li>
          <li>
            <span>心理访谈</span>
            <svg style="width: 24px; height: 24px">
              <use xlink:href="#icon-arrow-down" fill="#fff"></use>
            </svg>
          </li>
        </ul>
      </div>
      <!-- 顶部右侧用户信息 -->
      <div class="user">
        <div>四川蓝韵学校</div>
        <svg style="width: 24px; height: 24px; margin-right: 20px">
          <use xlink:href="#icon-message-solid" fill="#fff"></use>
        </svg>
        <svg style="width: 24px; height: 24px; margin-right: 20px">
          <use xlink:href="#icon-manage" fill="#fff"></use>
        </svg>
        <div class="icon-text" style="cursor: pointer">
          <svg style="width: 24px; height: 24px">
            <use xlink:href="#icon-fa-user" fill="#fff"></use>
          </svg>
          <span>学校管理员1111</span>
        </div>
        <span style="margin-right: 10px; cursor: pointer" @click="fullScreen"
          >全屏切换</span
        >
        <span @click="exitLogin" style="cursor: pointer">退出</span>
      </div>
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">任务管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>心理测评</el-breadcrumb-item>
      <el-breadcrumb-item>心理访谈</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { userStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'
const user = userStore()
const router = useRouter()
// import {ref,reactive} from 'vue'
const exitLogin = () => {
  ElMessageBox.confirm('确认退出登录吗?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      // 清空token
      user.logout()
      // 跳转到登录页
      router.push('/login')
    })
    .catch(() => {})
}
const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen() //文档根节点的方法requestFullscreen实现全屏
  } else {
    document.exitFullscreen() //退出全屏
  }
}
</script>

<style lang="scss">
.head-bread {
  height: 110px;
  width: 100%;
  .head {
    display: flex;
    // width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    height: 70px;
    line-height: 70px;
    box-shadow: 0px 5px 10px #888888;
    background: linear-gradient(90deg, #000248, #1792c2);
    .top-left {
      // width: 15%;
      font-size: 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 20px;
      // color: #fff !important;
      .title {
        color: #fff;
        margin-left: 8px;
      }
    }
    .top-cent {
      ul {
        display: flex;
        font-size: 18px;
        justify-content: space-around;
        align-items: center;
        color: #fff;
        li {
          list-style: none;
          height: 100%;
          display: flex;
          // justify-content: space-around;
          align-items: center;
          margin-right: 20px;
          span {
            margin-right: 8px;
          }
        }
      }
    }
    .user {
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #fff;
      margin-right: 20px;
      > div {
        margin-right: 20px;
      }
      .icon-text {
        display: flex;
        justify-content: space-around;
        align-items: center;
        // margin-right: 10px;
        span {
          margin-left: 4px;
        }
      }
    }
  }
  .el-breadcrumb {
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    color: #303133;
    padding-left: 30px;
    .el-breadcrumb-item {
      float: left;
    }
  }
}
</style>
