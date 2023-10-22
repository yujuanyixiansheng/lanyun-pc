<template>
  <!-- 动态路由菜单 -->
  <el-menu
    active-text-color="#fff"
    background-color="#202a34"
    default-active="1"
    text-color="#fff"
  >
    <el-menu-item index="1"> 首页 </el-menu-item>
    <el-menu-item index="2"> 数据 </el-menu-item>
    <!-- 折叠菜单 -->
    <el-sub-menu index="2-4">
      <template #title>权限管理</template>
      <el-menu-item index="2-4-1">用户管理</el-menu-item>
      <el-menu-item index="2-4-2">角色管理</el-menu-item>
      <el-menu-item index="2-4-3">菜单管理</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Menu as IconMenu, Location } from '@element-plus/icons-vue'

// const menuArray=reactive([])
defineProps(['menuList'])

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss">
.el-menu {
  height: 100%;
  // overflow: auto;
}
</style>
