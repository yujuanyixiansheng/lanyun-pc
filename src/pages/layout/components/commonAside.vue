<template>
  <el-menu
    active-text-color="#fff"
    background-color="#202a34"
    class="el-menu-vertical-demo"
    default-active="1"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    v-for="item in menuList"
    :key="item.name"
  >
    <!-- 无子路由菜单 -->
    <el-menu-item
      v-if="!item.children && item.children.length == 0"
      :index="item.menuId"
    >
      <el-icon><icon-menu /></el-icon>
      <span>{{ item.displayName }}</span>
    </el-menu-item>
    <!-- 有且仅有一个子路由 -->
    <template v-if="item.children">
      <el-menu-item
        v-if="item.children && item.children.length == 1"
        :index="item.children[0].menuId"
      >
        <template #title>
          <el-menu-item>1111{{ item.children[0].displayName }}</el-menu-item>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且个数大于一个 -->
    <el-sub-menu
      v-if="item.children && item.children.length >= 2"
      :index="item.menuId"
    >
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.displayName }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.name">
        <el-menu-item :index="subItem.menuId">{{
          subItem.displayName
        }}</el-menu-item>
      </el-menu-item-group>
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
  overflow: auto;
}
</style>
