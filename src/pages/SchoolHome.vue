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

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { reqCardList } from '@/api/user/index'
// 定义 card 卡片数组
let cardObj = reactive([
  { name: '学生总数', background: '#4a89dc', evryTotal: 1 },
  { name: '重点学生人数', background: 'rgb(217, 83, 79)', evryTotal: 1 },
  { name: '心理测评人次', background: '#3bafda', evryTotal: 1 },
  { name: '心理访谈人次', background: '#f6bb42', evryTotal: 1 },
  { name: '心理训练人次', background: '#967adc', evryTotal: 1 },
])
// onMounted(() => {
//   //  调用card组织机构数据接口
//   getReqCardList()
// })
let getReqCardList = async () => {
  console.log(1)

  let res = await reqCardList()
  console.log(2)

  console.log('调用card组织机构数据接口', res)
}
getReqCardList()
</script>

<style lang="scss">
.home-main {
  height: 100%;
  margin-left: 10px;
  .card {
    display: flex;
    justify-content: space-evenly;

    .card-item {
      flex: 1;
      height: 100px;
      margin: 0 10px;
      background: #746868;
      border-radius: 10px;
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
