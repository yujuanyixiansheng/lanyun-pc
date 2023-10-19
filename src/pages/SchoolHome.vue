<!-- 首页 -->
<template>
  <div class="home-main">
    <!-- one card 卡片-->
    <div class="all-card">
      <div class="card-left">图标</div>
      <div class="card-right">
        <div class="card-text">文字</div>
        <div class="card-desc">数字</div>
      </div>
    </div>
    <!-- two echarts -->
    <div class="alarm-echarts">22</div>
    <!-- three table-column -->
    <div class="scale-column">33</div>
    <!-- four scale-introduce -->
    <div class="scale-introduce">44</div>
  </div>
</template>

<script setup lang="ts">
// import {ref,reactive} from 'vue'
</script>

<style scoped lang="scss">
.home-main {
  min-width: 1220px;
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  color: #000 !important;
  text-align: center;
  ::v-deep(.all-card) {
    color: #000;
  }
}
</style>
