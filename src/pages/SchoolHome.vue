<!-- 首页 -->
<template>
  <div class="home-main">
    <div class="card">
      <div
        class="card-item"
        :style="`background:${item.background}`"
        v-for="item in cardObj"
        :key="item.name"
      >
        <svg style="width: 48px; height: 48px">
          <use :xlink:href="`#icon-${item.icon}`" fill="#fff"></use>
        </svg>
        <div class="text">
          <span>{{ item.name }}</span>
          <br />
          <span>{{ item.evryTotal }}</span>
        </div>
      </div>
    </div>
    <div class="echart">
      <div class="alar-total">
        <p>告警总数</p>
        <p>
          <span style="color: #01058a; font-size: 36px; font-weight: bold">{{
            totalAlar
          }}</span
          >个
        </p>
      </div>
      <div class="pie">2</div>
      <div class="bar">3</div>
    </div>
    <div class="scale-class">class</div>
    <div class="scale-introduce">introduce</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRaw, ref } from 'vue'
import { reqCardList, reqAlarmList } from '@/api/user/index'
// 定义 card 卡片数组
let cardObj = reactive<any>([
  { name: '学生总数', background: '#4a89dc', evryTotal: 1, icon: 'fa-users' },
  {
    name: '重点学生人数',
    background: 'rgb(217, 83, 79)',
    evryTotal: 1,
    icon: 'fa-users',
  },
  {
    name: '心理测评人次',
    background: '#3bafda',
    evryTotal: 1,
    icon: 'fa-calerdar',
  },
  {
    name: '心理访谈人次',
    background: '#f6bb42',
    evryTotal: 1,
    icon: 'fa-book',
  },
  {
    name: '心理训练人次',
    background: '#967adc',
    evryTotal: 1,
    icon: 'fa-bar-chart',
  },
])
//调接口获取数组卡片值
reqCardList().then((res) => {
  const {
    studentTotal,
    keyStudentTotal,
    studentEvaluateTimes,
    secondInterviewNum,
    studentCounselingTimes,
    studentTrainTimes,
  } = res.data

  cardObj[0].evryTotal = studentTotal
  cardObj[1].evryTotal = keyStudentTotal
  cardObj[2].evryTotal = studentEvaluateTimes
  cardObj[3].evryTotal = secondInterviewNum * 1 + studentCounselingTimes
  cardObj[4].evryTotal = studentTrainTimes
  return cardObj
})
let totalAlar = ref(1)
//调接口获取echart预警信息
reqAlarmList().then((res) => {
  console.log(res)
  totalAlar.value = res.data.total
})
console.log(totalAlar)
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
      display: flex;
      // justify-content: space-around;
      align-items: center;
      color: #fff;
      box-shadow: 0 0 2px 2px hsla(0, 0%, 52.5%, 0.1);
      padding: 10px;
      svg {
        margin-right: 20px;
      }
      .text {
        span {
          font-size: 16px;
        }
        span:last-child {
          font-size: 32px;
        }
      }
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
    border-radius: 10px;
    display: flex;
    box-shadow: 0 0 2px 2px hsla(0, 0%, 52.5%, 0.1);
    align-items: center;
    padding: 20px;
    background: #fff;
    color: #a29faa;
    margin-bottom: 10px;
    .alar-total {
      width: 200px;
      min-width: 150px;
      height: 300px;
      vertical-align: middle;
    }
    .pie {
      width: 250px;
      height: 300px;
    }
    .bar {
      // background: #ab2cb9;
      width: 100%;
      height: 300px;
    }
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
