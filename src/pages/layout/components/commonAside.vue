<template>
  <el-menu
    active-text-color="#fff"
    background-color="#202a34"
    class="el-menu-vertical-demo"
    default-active="1"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <!-- 菜单一级列表 -->
    <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <!-- 菜单二级列表 -->
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>学校管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">教室管理</el-menu-item>
        <el-menu-item index="2-2">年级管理</el-menu-item>
        <el-menu-item index="2-3">专业管理</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <!-- 第二个多级菜单 -->
    <el-sub-menu index="3">
      <template #title>
        <el-icon><location /></el-icon>
        <span>任务管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">任务管理</el-menu-item>
        <el-menu-item index="3-2">历史任务</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu as IconMenu, Location } from '@element-plus/icons-vue'
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.el-menu {
  height: 100%;
  .el-menu-item-group {
    //设置该节点高度
    height: 0;
    .el-sub-menu .is-opened {
      margin: 0;
      padding: 0;
    }
  }
}
.el-menu-vertical-demo .el-sub-menu {
  background: #202a34;
  height: 48px;
  .el-menu-item is-active {
    height: 50px;
  }
}
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   width: 100%;
//   height: 100%;
// }
</style>
