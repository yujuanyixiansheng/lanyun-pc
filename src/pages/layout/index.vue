<template>
  <el-container>
    <el-header>
      <common-header />
    </el-header>
    <el-container>
      <el-aside :class="{ fold: LayoutSettingStore.fold ? true : false }">
        <Menu :menuList="usestore.menuRoutes" />
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
import { userStore } from '@/store/modules/user'
import useLayoutSettingStore from '@/store/modules/setting'
let LayoutSettingStore = useLayoutSettingStore()
let usestore = userStore()
// console.log(toRaw(usestore.menuRoutes), '动态路由列表')
</script>

<style lang="scss">
.el-container {
  min-width: 100%;
  height: 100%;
  overflow: hidden; //关键,不必外面多一层div 加上overflow页面就没有两层滚动条了 !!!!!

  .el-header {
    height: 110px;
    padding: 0;
    overflow: hidden;
  }

  .el-container {
    // padding: 10px;

    .el-aside {
      transition: all 0.5s;
      width: 240px;
      height: 100%;
      // opacity: 0.9;
      text-align: center;
      // line-height: 200px;
      position: fixed;
      z-index: 999;
      top: 70px;
      left: 0;

      &.fold {
        left: -240px;
      }
    }

    .el-main {
      padding: 0 20px;
      overflow-x: hidden;
    }
  }
}

// }
</style>
