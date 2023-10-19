<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <common-header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <common-aside />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import commonHeader from './components/commonHeader.vue'
import commonAside from './components/commonAside.vue'
</script>

<style lang="scss">
.common-layout {
  height: 100%;
  width: 100%;
  .el-container {
    min-width: 1280px;
    height: 100%;
    .el-header {
      background: linear-gradient(90deg, #000248, #1792c2);
      height: 70px;
      padding: 0;
      line-height: 70px;
      box-shadow: 0px 5px 10px #888888;
    }
    .el-container {
      // padding-top: 10px;
      .el-aside {
        width: 240px;
        height: 100%;
        text-align: center;
        line-height: 200px;
        display: none;
      }
      .el-main {
        padding: 44px 10px 0 10px;
      }
    }
  }
}
</style>
