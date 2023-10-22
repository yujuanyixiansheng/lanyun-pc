<template>
  <el-container>
    <el-header>
      <common-header />
    </el-header>
    <el-container>
      <el-aside>
        <Menu />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import commonHeader from './components/commonHeader.vue'
import Menu from './components/menu/index.vue'
import { onMounted, toRaw } from 'vue'
import { userStore } from '@/store/modules/user'
const usestore = userStore()
onMounted(async () => {
  await usestore.userInfo()
})
const menuListArray = toRaw(usestore.menuRoutes)
// usestore
</script>

<style lang="scss">
.el-container {
  min-width: 1000px;
  height: 100%;
  overflow: hidden; //关键,不必外面多一层div 加上overflow页面就没有两层滚动条了 !!!!!
  .el-header {
    --el-header-height: 110px;
    --el-header-padding: 0;
    overflow: hidden;
  }
  .el-container {
    padding: 10px;
    .el-aside {
      width: 240px;
      height: 100%;
      // opacity: 0.9;
      text-align: center;
      line-height: 200px;
      position: fixed;
      top: 70px;
      left: 0;
    }
    .el-main {
      padding: 10px;
      padding-top: 0 !important;
    }
  }
}
// }
</style>
