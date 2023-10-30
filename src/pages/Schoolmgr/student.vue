<!-- 学生管理 -->
<template>
  <div class="student-container">
    <el-tabs v-model="activeName" class="student-all" @tab-click="handleClick">
      <el-tab-pane v-for="item in  editableTabs " :key="item.name" :label="item.title" :name="item.name">
        <!-- 级联选择 -->
        <el-row>
          <el-col :span="5">
            <el-select v-model="selectGradeValue" size="large" placeholder="请选择年级">
              <el-option v-for="item in gradeInfo" :key="item" :label="item" :value="item" />
            </el-select>
          </el-col>
          <el-col :span="3"><el-select v-model="selectClassValue" size="large" placeholder="请选择班级">
              <el-option v-for="item in  classInfo" :key="item" :label="item" :value="item + '班'">{{ item + '班'
              }}</el-option>
            </el-select></el-col>
          <el-col :span="3"><el-select v-model="selectValue" size="large" placeholder="请选择性别">
              <el-option v-for=" item  in  options" :key="item.value" :label="item.label" :value="item.label" />
            </el-select></el-col>
          <el-col :span="6">
            <!-- 查找输入 -->
            <el-input v-model="input3" size="large" placeholder="请输入学生身份证号/姓名" :suffix-icon="Search" /></el-col>
          <el-col :span="2"><el-button class="search" size="large">查询</el-button></el-col>
        </el-row>
        <!-- 操作按钮 -->
        <div class="total-operate">
          <div class="total">共查询结果 <span>{{ studentTotal }}</span> 条</div>
          <div class="btn-container">
            <el-button size="large">添加</el-button>
            <el-button size="large">学生注册</el-button>
            <el-button size="large">学生导入</el-button>
            <el-button size="large">下载学生导入模板</el-button>
          </div>
        </div>
        <!-- 表格 -->
        <!-- <div class="showStudentList"> -->
        <el-table :data="tableStudentData" style="width: 100%" cellspacing="0" cellpadding="0">
          <el-table-column type="index" label="#" width="70" />
          <el-table-column prop="name" label="姓名" width="100">
            <template #default="scope"><span style="color:#409EFF;">{{ scope.row.name }}</span></template>
          </el-table-column>
          <el-table-column prop="idcard" label="身份证号" width="220" />
          <el-table-column prop="schoolName" label="所属学校" width="180" />
          <el-table-column prop="className" label="班级" width="130" />
          <el-table-column prop="status" label="在校状态" width="80"><template #default="state"><span>{{
            state.row.status === 0 ? '在校' : '毕业' }}</span></template></el-table-column>
          <el-table-column prop="sex" label="性别" width="80"><template #default="scope"><span>{{
            scope.row.sex === 1 ? '男' : '女' }}</span></template></el-table-column>
          <el-table-column prop="age" label="年龄" width="100"></el-table-column>
          <el-table-column prop="contact" label="联系方式" width="180" />
          <el-table-column prop="loginName" label="学生账号" width="250" />
          <el-table-column fixed="right" label="操作" width="230" header-align="center" class="dis-button">
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
import { ref, reactive, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { reqOrganList, reqStudentInfo, reqOutLine } from '@/api/schoolmgr/index'  //学生管理 在线
import type { TabsPaneContext } from 'element-plus'
const selectValue = ref('')
const selectClassValue = ref('')
const selectGradeValue = ref('')
const options = reactive([
  {
    value: '1',
    label: '男',
  },
  {
    value: '2',
    label: '女',
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
onMounted(() => {
  getNowStudent()
})
// 定义班级列表变量
const classInfo: Array<number> = reactive([])
// 定义年级级列表变量
const gradeInfo: Array<string> = reactive([])
reqOrganList().then(res => {
  classInfo.push(...res.data.classList)
  gradeInfo.push(...res.data.gradeList)

})
let tableStudentData: Array<any> = reactive([])
let studentTotal: any = ref(0)
const getNowStudent = () => {
  // // 在线学生 需要在请求拿到年级班级数据作为参数传入  在校学生列表接口
  reqStudentInfo({ pageNum: 1, pageSize: 50 }).then(res => {
    if (res.data && res.data.list && res.data.list?.length > 0) {
      tableStudentData.push(...res.data.list)
    }
    studentTotal.value = res.data.total
  })
}
//在线学生 往届学生列表接口
const getBefoStudent = () => {
  reqOutLine({ pageNum: 1, pageSize: 50 }).then(res => {
    if (res.data && res.data.list && res.data.list?.length > 0) {
      // console.log(res);
      tableStudentData.push(...res.data.list)
    }
    studentTotal.value = res.data.total
  })
}

const handleClick = (tab: TabsPaneContext) => {
  console.log(tab.props.name)
  if (tab.props.name == 2) {
    getBefoStudent()
  } else {
    getNowStudent()
  }
}
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

          &.el-col-5 {
            flex: none;
          }

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

      .el-table {

        width: 100%;
        height: 564px;
        font-weight: 900;

        // 表头样式设置
        .el-table__header thead tr>th.is-leaf.el-table__cell .cell {
          overflow: hidden;
          color: #a29faa !important;
          height: 30px;
          font-size: 14px !important;
          // .el-table .cell
          padding-left: 4px;
        }

        //表主体样式设置
        .el-table__body-wrapper tbody tr td .cell {
          font-size: 16px;
          font-weight: bold;
          color: #2d3037;
        }

        .el-table-column.dis-button button.el-button {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0 4px;
          font-size: 14px;
        }
      }
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
