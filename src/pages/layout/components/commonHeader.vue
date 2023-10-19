<template>
  <div class="head-bread">
    <div class="head">
      <!-- 顶部左侧 -->
      <div class="top-left">
        <svg style="width: 30px; height: 30px">
          <use xlink:href="#icon-fold" fill="#fff"></use>
        </svg>
        <div class="title">心理健康教育平台</div>
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
        <div class="icon-text">
          <svg style="width: 24px; height: 24px">
            <use xlink:href="#icon-fa-user" fill="#fff"></use>
          </svg>
          <span>学校管理员1111</span>
        </div>
        <div class="text">全屏切换</div>
        <div class="text">退出</div>
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
// import {ref,reactive} from 'vue'
</script>

<style lang="scss">
.head-bread {
  height: 75px;
  .head {
    display: flex;
    width: 97%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    .top-left {
      // width: 15%;
      font-size: 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      line-height: 70px;
      color: #fff !important;
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
    padding-left: 20px;
    .el-breadcrumb-item {
      float: left;
    }
  }
}
</style>
