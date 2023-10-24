<template>
  <!-- 动态路由菜单 -->
  <div class="aside-menu">
    <el-menu
      active-text-color="#fff"
      background-color="#202a34"
      :default-active="item.url"
      text-color="#dde6fd"
      v-for="(item, index) in menuList"
      :key="item.menuId"
    >
      <!-- :default-active="$route.path" -->
      <!-- 没有子路由 -->
      <el-menu-item
        v-if="item.children.length == 0"
        :index="item.url"
        @click="goRoute"
      >
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.displayName }}</span>
        </template>
      </el-menu-item>
      <!-- 有子路由且只有一个 -->
      <template v-if="item.children && item.children.length === 1">
        <el-menu-item :index="item.children[0].url" @click="goRoute">
          <template #title>
            <el-icon>
              <component :is="item.children[0].icon"></component>
            </el-icon>
            <span>{{ item.children[0].displayName }}</span>
          </template>
        </el-menu-item></template
      >
      <!-- 有子路由 且个数大于一个 -->
      <el-sub-menu
        :index="item.url"
        v-if="item.children && item.children.length >= 2"
      >
        <template #title>
          <el-icon color="white">
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.displayName }}</span></template
        >
        <Menu :menuList="item.children" style="padding-left: 20px"></Menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

defineProps(['menuList'])

// 点击菜单的回调

// 获取父组件传递过来的全部路由数据
let $router = useRouter()
const goRoute = (vc: any) => {
  console.log(vc)
  $router.push(vc.index)
}
// 获取路由对象
let $route = useRoute()
console.log($route)
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>
<style lang="scss">
.aside-menu {
  height: 100%;
  background: #202a34; //001529 202a34
  .el-menu {
    overflow: auto;
    border-right: none;
    .el-menu-item {
      height: 56px;
      font-size: 18px;
      line-height: 56px;
      span {
        font-size: 18px;
      }
    }
    .el-sub-menu {
      span {
        font-size: 18px;
      }
    }
  }
}
</style>
