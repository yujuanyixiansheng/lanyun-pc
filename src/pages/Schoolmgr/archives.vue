<!-- 档案管理 -->
<template>
  <div class="archive-container">
    <div class="archive-all">
      <!-- 标题  -->
      <div class="title">
        <div class="text">学生档案管理</div>
      </div>
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
        <el-col :span="2"><el-select v-model="selectValue" size="large" placeholder="请选择性别">
            <el-option v-for=" item  in  options" :key="item.value" :label="item.label" :value="item.label" />
          </el-select></el-col>
        <el-col :span="2"><el-select v-model="selectValue" size="large" placeholder="请选择在校状态">
            <el-option v-for=" item  in  isOnSchool" :key="item.value" :label="item.label" :value="item.label" />
          </el-select></el-col>
        <el-col :span="3">
          <!-- 查找输入 -->
          <el-input v-model="input3" size="large" placeholder="请输入学生身份证号/姓名" :suffix-icon="Search" /></el-col>
        <el-col :span="6"><el-button class="search" size="large">查询</el-button>
          <el-button class="search" size="large">导出档案</el-button></el-col>
      </el-row>
      <!-- 查询结果 -->
      <div class="total-operate">共查询结果 <span>{{ archiveTotal }}</span> 条</div>
      <!-- 表格 -->
      <el-table :data="tableArchiveData" style="width: 100%" cellspacing="0" cellpadding="0">
        <el-table-column type="index" label="#" width="70" />
        <el-table-column prop="name" label="姓名" width="150">
          <template #default="scope"><span style="color:#409EFF;">{{ scope.row.name }}</span></template>
        </el-table-column>
        <el-table-column prop="idcard" label="身份证号" width="250" />
        <el-table-column prop="schoolName" label="所属学校" width="250" />
        <el-table-column prop="className" label="班级" width="180" />
        <el-table-column prop="recordNum" label="测评次数" align="center" width="100"><template #default="scope">{{
          scope.row.recordNum === 1 ? '1' : '0' }}</template></el-table-column>
        <el-table-column prop="severityDescription" label="最近测评程度" width="240" />
        <el-table-column prop="sex" label="性别" width="100"><template #default="scope"><span>{{
          scope.row.sex === 1 ? '男' : '女' }}</span></template></el-table-column>
        <el-table-column prop="age" label="年龄" width="100"></el-table-column>

        <el-table-column prop="status" label="在校状态" width="80"><template #default="state"><span>{{
          state.row.status === 0 ? '在校' : state.row.status === 1 ? '转校' : state.row.status === 2 ? '休学' : '毕业'
        }}</span></template></el-table-column>
        <el-table-column prop="contact" label="联系方式" width="220" />
        <el-table-column fixed="right" label="详情" width="60" header-align="center">
          <template #default>
            <el-button link type="primary">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
          :page-sizes="[5, 10, 20, 50, 100, 200]" :small="small" :disabled="disabled"
          layout="sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { reqOrganList, reqArchivesList } from '@/api/schoolmgr/index'  //学生管理 在线
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
const isOnSchool = reactive([
  {
    value: '0',
    label: '在校',
  },
  {
    value: '1',
    label: '转校',
  },
  {
    value: '2',
    label: '休学',
  }, {
    value: '3',
    label: '毕业',
  },
])
const input3 = ref('')

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const disabled = ref(false)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
// 定义班级列表变量
const classInfo: Array<number> = reactive([])
// 定义年级级列表变量
const gradeInfo: Array<string> = reactive([])
reqOrganList().then(res => {
  classInfo.push(...res.data.classList)
  gradeInfo.push(...res.data.gradeList)

})
let archiveTotal: any = ref()
// 获取档案管理列表
let tableArchiveData: Array<any> = reactive([])

reqArchivesList({ pageNum: 1, pageSize: 50 }).then(res => {
  if (res.data && res.data.list && res.data.list.length > 0) {
    tableArchiveData.push(...res.data.list)
  }
  archiveTotal.value = res.data.total
})

</script>

<style lang="scss">
.archive-container {
  height: 98%;
  width: 100%;
  padding: 6px;

  .archive-all {
    height: 96%;
    width: 97%;
    padding: 10px 20px;
    box-shadow: 0 0 32px #ccc;
    border-radius: 5px;
    background: #fff;

    .title {
      width: 100%;
      border-bottom: 2px solid #e4e7ed;
      margin-bottom: 16px;
      height: 40px;

      .text {
        color: #01058a;
        font-size: 18px;
        width: 108px;
        font-weight: bold;
        height: 38px;
        line-height: 38px;
        border-bottom: 4px solid #01058a;
      }
    }

    .el-row {
      margin-left: -2.5px;
      margin-right: -2.5px;
      height: 50px;

      .el-col {
        padding-left: 2.5px;
        padding-right: 2.5px;
        font-size: 14px;

        &.el-col-5 {
          flex: none;
        }

        .el-select .el-input .el-input__inner {
          font-size: 14px;
        }

        .el-input__suffix .el-input__suffix-inner .el-icon {
          width: 14px;
          height: 14px;
        }

        .el-button {
          background-color: #091d7c !important;
          border-color: #091d7c !important;
          color: #fff;

        }

        &.el-col-3 .el-input .el-input__inner {
          font-size: 14px;
        }

      }
    }

    .total-operate {

      font-size: 14px;
      color: #a29faa;

      span {
        color: #01058a;
        font-weight: 700;
        padding: 0 5px;
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
        padding-left: 4px;
      }

      //表主体样式设置
      .el-table__body-wrapper tbody tr td .cell {
        font-size: 16px;
        font-weight: bold;
        color: #2d3037;
      }
    }

    .page {
      padding-top: 12px;
      display: flex;
      justify-content: flex-end;

      .el-pagination {
        padding: 2px 5px;
        color: #303133;
        height: 26px;

        .el-input .el-input__wrapper {
          font-size: 12px;
        }
      }
    }

  }
}
</style>
