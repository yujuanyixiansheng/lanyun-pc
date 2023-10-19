<template>
  <!-- <div class="common-layout"> -->
  <el-container>
    <el-header>
      <common-header />
    </el-header>
    <el-container>
      <el-aside>
        <common-aside />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  <!-- </div> -->
</template>

<script setup lang="ts">
import commonHeader from './components/commonHeader.vue'
import commonAside from './components/commonAside.vue'
</script>

<style lang="scss">
.el-container {
  width: 100%;
  height: 100%;
  overflow: hidden; //关键,不必外面多一层div 加上overflow页面就没有两层滚动条了 !!!!!
  .el-header {
    --el-header-height: 110px;
    // --el-header-padding-top: 0;
    // height: 100%;
    --el-header-padding: 0;
  }
  .el-container {
    padding: 10px;
    // margin-top: -10px;
    .el-aside {
      width: 240px;
      height: 100%;
      text-align: center;
      line-height: 200px;
      display: none;
      // display: none;
    }
    .el-main {
      // margin-bottom: 10px;
      // --el-main-padding-top: 0;
      padding: 10px;
      padding-top: 0 !important;
    }
  }
}
// }
</style>
