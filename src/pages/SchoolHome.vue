<!-- 首页 -->
<template>
  <div class="home-main">
    <div class="card">
      <div class="card-item" :style="`background:${item.background}`" v-for="item in cardObj" :key="item.name">
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
          }}</span>个
        </p>
      </div>
      <div class="pie" ref="pieEchart"></div>
      <div class="bar" ref="lineAndBar"></div>
    </div>
    <div class="scale-class">
      <div class="statistics_title">系统量表分类</div>
      <div class="statistics_total">
        <div class="total_left">
          全部<span>{{ scaleTotal }}</span>
        </div>
        <ul>
          <li v-for="item in scaleArr" :key="item.classId" style="list-style-type: none">
            <span class="circle" :style="`background:${getColor()};`"></span>
            <span class="people">{{ item.className }}:</span>
            <span class="text_num" :style="`color:${getColor()};`">
              {{ item.count }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="scale-introduce">
      <div class="title">量表介绍</div>
      <div class="content">
        <div class="scale-item" v-for="item in introArr" :key="item.id">
          <div class="scale-subtit">{{ item.subtitle }}</div>
          <div class="scaleIntro">
            {{ item.introduce }} <span>【查看详情】</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import {
  reqCardList,
  reqAlarmList,
  reqScaleList,
  reqIntroduceList,
} from '@/api/user/index'
import * as echarts from 'echarts' //引入echarts
import { el } from 'element-plus/es/locale/index.mjs'
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
//调接口获取echart预警信息
let totalAlar = ref(0)
let pieData: Array<object> = reactive([])
reqAlarmList().then((res) => {

  if (res.data && res.data.statuses && res.data.statuses.length > 0) {
    pieData = res.data.statuses.map((item: any) => {
      return { value: item.count, name: item.status }
    })
  }
  totalAlar.value = res.data.total
  pieEcha() //拿到饼图数据后调用饼图渲染方法
})

onMounted(() => {
  // pieEcha()
  linBar()
})

//echarts图
// 饼图
const pieEchart = ref()
const pieEcha = () => {
  let myPieEch = echarts.init(pieEchart.value) //注意加上value
  let pieOption = {
    tooltip: {
      //悬浮提示框
      trigger: 'item',
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderWidth: '0',
      itemStyle: { opacity: 0 },
      // borderColor:,
      textStyle: {
        color: '#fff',
      },
      // formatter: function (para: any) {
      //   //设置悬浮框文字内容
      //   let tip = ''
      //   tip += para[0].name + '<br/>'
      //   for (let i = 0; i < para.length; i++) {
      //     tip += para[i].name + ':' + para[i].value + '%<br/>'
      //   }
      // },
    },
    legend: {
      //图例设置
      top: '5%',
      left: 'center',
      // orient: 'horizonal', //图例组件方向的设置,默认水平
      textStyle: {
        //图例文字颜色
        color: 'black',
        fontSize: 12,
      },
    },
    series: [
      {
        name: '告警状态',
        type: 'pie',
        radius: ['45%', '70%'],
        color: ['#aab2bd', '#8cc152', '#e74c3c'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center', //文字放圆心
        },
        emphasis: {
          //圆心展示
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: pieData,
      },
    ],
    //调整图形图标的位置
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  }
  myPieEch.setOption(pieOption)
}
//折线柱状图
const lineAndBar = ref()
const linBar = () => {
  let linBarEcha = echarts.init(lineAndBar.value)
  let linBarOption = {
    //标题组件
    title: {
      text: '告警学生人数趋势',
      textStyle: {
        //标题字体颜色
        textColor: '#aab2bd',
      },
      subtext: '人数', //副标题
    },
    // x|y轴
    xAxis: {
      type: 'category', //在x轴均匀分布
      // boundaryGap: false, //两侧不留白
      splitLine: { show: true }, //x轴分割线保留 y轴也有该属性
      data: ['2019学年', '2020学年', '2021学年', '2022学年', '2023学年'],
      axisPointer: {
        //坐标轴指示器配置项
        type: 'shadow', //阴影指示器
        shadowStyle: {
          //阴影样式设置
          color: 'rgba(0,0,0,0.4)',
        },
      },
    },
    yAxis: [
      // 数值轴1
      {
        type: 'value',
        // name: '告警总数',
        axisLine: { show: true }, //轴线设置
        axisTick: { show: true }, //刻度设置
        splitLine: { show: true },
      },
      // 数值轴2
      {
        type: 'value',
        // name: '已忽略',
        // min: 0,max: 25,//不设置就只有一侧Y轴有数值
      },
      // 数值轴3
      {
        type: 'value',
        // name: '已解决',
      },
      // 数值轴4
      {
        type: 'value',
        // name: '未解决',
      },
    ],
    tooltip: {
      //悬浮框
      trigger: 'axis',
      axisPointer: {
        //坐标轴指示器配置项
        type: 'cross', // 十字准星指示器
        crossStyle: {
          //触发线y轴的样式
          color: '#c7c7c7', //y横线颜色
          type: 'dotted', // solid deshed dotted
          width: 2,
        },
      },
    },
    // lineStyle: {
    //   //修改折线颜色
    //   color: '#e74c3c',
    // },
    grid: {
      //布局
      left: 30,
      top: 60,
      right: 100,
      bottom: 60,
    },
    legend: {
      //图例设置
      // orient: 'horizontal',
      left: 'center', //位置
      bottom: '0',
      data: ['已忽略', '已解决', '未解决', '告警总数'], //图例文字
      // show: true,
      textStyle: {
        // 图例文字大小颜色
        fontSize: 12,
        color: '#a5a2ad',
      },
    },
    //系列
    series: [
      //折线
      {
        type: 'line',
        name: '告警总数',
        data: [0, 0, 3, 23, 2],
        // areaStyle: { color: 'gay', opacity: 0.5 }, //区域填充样式
        smoth: false, //平滑曲线设置
        itemStyle: {
          // 设置symbol的颜色(折线拐点)
          // normal: {//新版本normal已经被弃用
          color: '#e74c3c',
          // label: { show: true }, //折线拐点显示y轴数字
          // },
        },
      },
      //柱状图
      {
        color: ['#aab2bd'], //分别设置图例颜色
        type: 'bar',
        name: '已忽略',
        data: [0, 0, 0, 0],
      },
      {
        type: 'bar',
        name: '已解决',
        data: [0, 0, 0, 0],
        color: ['#8cc152'],
      },
      {
        type: 'bar',
        name: '未解决',
        data: [0, 0, 3, 23, 2],
        color: ['#e74c3c'],
      },
    ],
  }
  linBarEcha.setOption(linBarOption)
}
//系统量表
const getColor = () => {
  // 随机生成不同背景色
  let str = '#'
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  for (var i = 0; i < 6; i++) {
    str += arr[Math.floor(Math.random() * 16)]
  }
  return str
}
// 系统量表接口调用
// 定义量表总量
const scaleTotal = ref()
let scaleArr: Array<any> = reactive([])
reqScaleList().then((res) => {
  if (
    (res.data && res.data.scaleCnt && res.data.scaleCnt) ||
    (res.data && res.data?.scaleClassList && res.data.scaleClassList.length > 0)
  ) {
    scaleTotal.value = res.data.scaleCnt
    scaleArr.push(...res.data.scaleClassList)
  }
})
//底部详情介绍接口
let introArr: Array<any> = reactive([])
reqIntroduceList().then((res) => {
  introArr.push(...res.data)
})
</script>

<style lang="scss">
.home-main {
  height: 100%;
  margin-left: 10px;

  .card {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
    cursor: pointer;

    .card-item {
      flex: 1;
      margin: 0 10px;
      background: #746868;
      border-radius: 10px;
      display: flex;
      // justify-content: space-around;
      align-items: center;
      color: #fff;
      box-shadow: 0 0 2px 2px hsla(0, 0%, 52.5%, 0.1);
      padding: 20px;

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
    justify-content: space-between;
    box-shadow: 0 0 2px 2px hsla(0, 0%, 52.5%, 0.1);
    align-items: center;
    padding: 20px;
    background: #fff;
    color: #a29faa;
    margin-bottom: 20px;

    .alar-total {
      width: 200px;
      min-width: 180px;
      height: 300px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .pie {
      min-width: 400px;
      height: 300px;
      padding: 10px;
    }

    .bar {
      min-width: 1000px;
      height: 300px;
    }
  }

  .scale-class {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 20px 0 0 20px;
    height: 120px;
    border-radius: 10px;
    box-shadow: 0 0 2px 2px hsla(0, 0%, 52.5%, 0.1);
    font-weight: bold;
    font-size: 16px;
    color: #111416;

    .statistics_total {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .total_left {
        color: #a29faa;
        height: 60px;
        line-height: 60px;
        width: 180px;
        min-width: 180px;
        font-weight: 400;
        margin-right: 46px;

        span {
          margin-left: 10px;
          color: #006dba;
          font-size: 20px;
          font-weight: bold;
        }
      }

      ul {
        flex: 1;
        display: flex;
        flex: auto;
        flex-wrap: wrap;

        li {
          .circle {
            width: 14px;
            height: 14px;
            display: inline-block;
            border-radius: 50%;
            margin-right: 5px;
          }

          .people {
            font-size: 14px;
            color: #687782;
            margin-right: 8px;
            font-weight: 400;
          }

          .text_num {
            margin-right: 28px;
            font-size: 16px;
          }
        }
      }
    }
  }

  .scale-introduce {
    margin: 20px 0 10px;
    padding: 20px;
    height: 320px;
    min-height: 300px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 2px 2px hwb(0 10% 35% / 0.1);
    border-bottom: 1px solid hwb(0 10% 35% / 0.1);

    .title {
      width: 104px;
      padding-bottom: 10px;
      border-bottom: 2px solid #c3c3c3;
      color: #000;
      font-size: 26px;
      font-weight: 500;
      // margin: 20px;
    }

    .content {
      display: flex;
      justify-content: space-between;

      .scale-item {
        width: 33%;
        padding: 20px 30px;

        .scale-subtit {
          margin-bottom: 10px;
          font-size: 18px;
          color: #000;
          text-align: left;
        }

        .scaleIntro {
          margin-bottom: 10px;
          font-size: 15px;
          color: #898989;
          text-align: left;
          line-height: 30px;

          span {
            font-size: 15px;
            color: #409eff;
            cursor: pointer;
          }

          span:hover {
            color: #01058a;
          }
        }
      }
    }
  }
}
</style>
