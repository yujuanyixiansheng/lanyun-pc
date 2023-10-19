<!-- 首页 -->
<template>
  <div class="home-main">
    <div class="card">
      <div class="card-item" v-for="item in 5" :key="item">12313</div>
    </div>
    <div class="echart">echart</div>
    <div class="scale-class">class</div>
    <div class="scale-introduce">introduce</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.home-main {
  height: 100%;
  margin-left: 10px;
  .card {
    display: flex;

    .card-item {
      flex: 1;
      height: 100px;
      background: #746868;
    }
    .card-item:first-child {
      margin-left: 0;
    }
    .card-item:last-child {
      margin-right: 0;
    }
  }
  .echart {
    margin-top: 10px;
    height: 340px;
    background: #333;
  }
  .scale-class {
    margin-top: 10px;
    height: 120px;
    background: #333;
  }
  .scale-introduce {
    margin-top: 10px;
    height: 320px;
    background: #333;
  }
}
</style>
