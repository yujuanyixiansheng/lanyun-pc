<!-- 学生管理 -->
<template>
  <div class="student-container">
    <el-tabs v-model="activeName" class="student-all">
      <!-- <el-tabs v-model="activeName" class="student-all" @tab-click="handleClick"> -->
      <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
        <!-- 级联选择 -->
        <el-row>
          <el-col :span="5">
            <el-select v-model="selectValue" size="large" placeholder="请选择年级">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-col>
          <el-col :span="3"><el-select v-model="selectValue" size="large" placeholder="请选择班级">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select></el-col>
          <el-col :span="3"><el-select v-model="selectValue" size="large" placeholder="请选择性别">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select></el-col>
          <el-col :span="6">
            <!-- 查找输入 -->
            <el-input v-model="input3" size="large" placeholder="请输入学生身份证号/姓名" :suffix-icon="Search" /></el-col>
          <el-col :span="2"><el-button class="search" size="large">查询</el-button></el-col>
        </el-row>
        <!-- 操作按钮 -->
        <div class="total-operate">
          <div class="total">共查询结果 <span>{{ 1 }}</span> 条</div>
          <div class="btn-container">
            <el-button size="large">添加</el-button>
            <el-button size="large">学生注册</el-button>
            <el-button size="large">学生导入</el-button>
            <el-button size="large">下载学生导入模板</el-button>
          </div>
        </div>
        <!-- 表格 -->
        <!-- <div class="showStudentList"> -->
        <el-table :data="tableData" style="width: 100%" cellspacing="0" cellpadding="0">
          <el-table-column prop="numindex" label="#" width="70" />
          <el-table-column prop="name" label="姓名" width="100" />
          <el-table-column prop="loginName" label="身份证号" width="220" />
          <el-table-column prop="isConsultant" label="所属学校" width="180" />
          <el-table-column prop="educationName" label="班级" width="130" />
          <el-table-column prop="idcard" label="在校状态" width="80" />
          <el-table-column prop="contact" label="性别" width="80" />
          <el-table-column prop="sex" label="年龄" width="100"></el-table-column>
          <el-table-column prop="age" label="联系方式" width="180" />
          <el-table-column prop="title" label="学生账号" width="250" />
          <el-table-column fixed="right" label="操作" width="220" header-align="center" class="dis-button">
            <template #default>
              <el-button link type="primary">密码重置</el-button>
              <el-button link type="primary">修改</el-button>
              <el-button link type="primary">删除</el-button>
              <el-button link type="primary">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- </div> -->

      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// import type { TabsPaneContext } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { reqOrganList, reqStudentInfo } from '@/api/schoolmgr/index'  //学生管理 在线
const selectValue = ref('')
const options = reactive([
  {
    value: '是',
    label: '是',
  },
  {
    value: '否',
    label: '否',
  },
])
const activeName = ref('1')
const input3 = ref('')
const editableTabs = reactive([
  {
    title: '在校学生列表',
    name: '1',
  },
  {
    title: '往届学生列表',
    name: '2',
  }
])

// const handleClick = (tab: TabsPaneContext, event: Event) => {
//   console.log(tab, event)
// }
const tableData = reactive([])
// // 在线学生 需要在请求拿到年级班级数据作为参数传入
// 定义班级列表变量
const classInfo: Array<number> = reactive([1])
// 定义年级级列表变量
const gradeInfo: Array<string> = reactive(['初2018级'])
reqOrganList().then(res => {
  console.log('年级班级', res);
  classInfo.push(...res.data.classList)
  gradeInfo.push(...res.data.gradeList)
  console.log(classInfo, gradeInfo);

})
// 定义入参
const _param = {
  beginTime: '2023-10-27', classIdsList: [1], commissionIdsList: [1], departmentIdsList: [1], educationIdsList: [1], endTime: '2023-10-27',
  fileName: 'student', gradeIdsList: ['1'], keyword: '初2018级', majorIdsList: ['1'], pageNum: 1, pageSize: 3, schoolIdsList: [2], sex: 1, status: 1
}
reqStudentInfo(_param).then(res => {
  console.log(res, '在线学生');

})
</script>

<style lang="scss">
.student-container {
  height: 98%;
  width: 100%;
  padding: 6px;

  .student-all {
    height: 96%;
    width: 97%;
    padding: 10px 20px;
    box-shadow: 0 0 32px #ccc;
    border-radius: 5px;
    background: #fff;

    .el-tabs__content {
      font-size: 14px;
      color: #a29faa;
    }

    .el-tab-pane {
      .el-row {
        margin-left: -2.5px;
        margin-right: -2.5px;
        height: 50px;

        .el-col {
          padding-left: 2.5px;
          padding-right: 2.5px;

          .el-select .el-input .el-input__inner {
            font-size: 14px;
          }

          .el-input__suffix .el-input__suffix-inner .el-icon svg {
            width: 14px;
            height: 14px;
          }

          .el-button {
            background-color: #091d7c !important;
            border-color: #091d7c !important;
            color: #fff;

          }

          &.el-col-5 .el-select.el-select--large {
            width: 280px;
          }

          &.el-col-6 .el-input .el-input__inner {
            font-size: 14px;
          }

        }
      }

      .total-operate {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .total {

          font-size: 14px;
          color: #a29faa;

          span {
            color: #01058a;
            font-weight: 700;
            padding: 0 5px;
          }
        }

        .btn-container .el-button {
          background-color: #091d7c !important;
          border-color: #091d7c !important;
          color: #fff;

        }
      }

      // .showStudentList {
      // .el-table--scrollable-x.el-table--scrollable-y {

      //   overflow-y: scroll;
      //   overflow-x: scroll;
      // }

      .el-table {

        width: 100%;
        height: 564px;
        font-weight: 900;
      }

      // }
    }

    .el-tabs__header.is-top {
      .el-tabs__item.is-top {
        font-size: 18px;
        color: #918d9a;

        &.is-active,
        &.el-tabs__item:hover {
          font-weight: 700 !important;
          color: #01058a !important;
        }
      }

      .el-tabs__active-bar {
        background-color: #01058a !important;
        padding-top: 1px !important;
      }
    }
  }
}
</style>
