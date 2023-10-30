<!-- //学校管理.教师管理 -->
<template>
  <div class="teacher-container">
    <div class="teacher-all">
      <!-- 顶部标题 -->
      <div class="line">
        <h3>教师列表</h3>
      </div>
      <!-- 中间输入内容 -->
      <el-row>
        <!-- 下拉选项 -->
        <el-col :span="3">
          <el-select v-model="selectValue" size="large" placeholder="是否心理咨询师">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-col>
        <el-col :span="7">
          <!-- 查找输入 -->
          <el-input v-model="input3" size="large" placeholder="请输入教师姓名/身份证号" :suffix-icon="Search" />
        </el-col>
        <!-- 查询按钮 -->
        <el-col :span="3">
          <el-button class="search" size="large">查询</el-button>
        </el-col>
        <el-col :span="11">
          <el-button size="large">添加</el-button>
          <el-button size="large">导入</el-button>
          <el-button size="large">下载模板</el-button>
          <el-button size="large">分配账号</el-button>
        </el-col>
      </el-row>
      <!-- 表格和分页器 -->
      <div class="teacher-list">
        <div class="totals">
          共查询结果 <span>{{ resTotal }}</span> 条
        </div>
        <div class="showList">
          <el-table :data="tableTeachData" style="width: 100%" cellspacing="0" cellpadding="0">
            <el-table-column type="selection" width="70">
              <el-checkbox v-model="checked"></el-checkbox>
            </el-table-column>
            <el-table-column type="index" label="#" width="60" />
            <el-table-column prop="name" label="教师姓名" width="150" />
            <el-table-column prop="loginName" label="账号" width="150" />
            <el-table-column label="是否学校心理咨询师" width="150">
              <template #default="scope">
                <el-tag>{{ scope.row.isConsultant ? '是' : '否' }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="educationName" label="所属教育局" width="200" />
            <el-table-column prop="idcard" label="身份证号码" width="250" />
            <el-table-column prop="contact" label="联系方式" width="200" />
            <el-table-column label="性别" width="100">
              <template #default="scope">
                <span>{{ scope.row.sex === 1 ? '男' : '女' }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="100" />
            <el-table-column prop="title" label="职称" width="150" />
            <el-table-column fixed="right" label="操作" width="170" header-align="center" class="dis-button">
              <template #default>
                <el-button link type="primary">重置密码</el-button>
                <el-button link type="primary">修改</el-button>
                <el-button link type="primary">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="page">
        <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
          :page-sizes="[5, 10, 15, 20, 30, 50, 100]" :small="small" :disabled="disabled"
          layout="sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { reqTeacherList } from '@/api/schoolmgr/index'

const selectValue = ref('')
const checked = ref(true)
const options = [
  {
    value: '是',
    label: '是',
  },
  {
    value: '否',
    label: '否',
  },
]

const input3 = ref('')

let tableTeachData: Array<object> = reactive([])
let resTotal: any = ref(0)
reqTeacherList().then((res) => {
  if (res.data && res.data.list && res.data.list?.length > 0) {
    // tableTeachData.push(...res.data.list)
    tableTeachData.push(...res.data.list)
  }
  resTotal.value = res.data.total

})
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
</script>

<style lang="scss">
.teacher-container {
  height: 98%;
  width: 100%;
  padding: 6px;

  .teacher-all {
    height: 96%;
    width: 97%;
    padding: 10px 20px;
    box-shadow: 0 0 32px #ccc;
    border-radius: 5px;
    background: #fff;

    .line {
      width: 100%;
      height: 39px;
      border-bottom: 2px solid #e4e7ed;
      margin: 0 0 15px;

      h3 {
        font-size: 18px;
        color: #01058a;
        width: 72px;
        height: 38px;
        border-bottom: 4px solid #01058a;
      }
    }

    .el-row {
      margin-left: -2.5px;
      margin-right: -2.5px;

      .el-col {
        padding-left: 2.5px;
        padding-right: 2.5px;
      }

      .el-col-3 {
        width: 12.5%;
      }

      .el-col-11 {
        display: flex;
        justify-content: flex-end;
        padding-right: 2.5px;

        .el-button {
          background-color: #091d7c !important;
          border-color: #091d7c !important;
          color: #fff;
          font-size: 14px;
          padding: 12px 20px;
        }
      }

      .el-select {
        width: 100%;
        cursor: pointer;

        .el-input__inner {
          font-size: 14px;
        }

        .el-input.is-active .el-input__inner,
        .el-input__inner:focus {
          border-color: #091d7c !important;
        }
      }

      .el-input .el-input__inner {
        font-size: 14px;
      }

      .el-button.search {
        background-color: #091d7c !important;
        border-color: #091d7c !important;
        color: #fff;
      }
    }

    .teacher-list {
      .totals {
        color: #a29faa;
        font-size: 14px;
        margin-top: 10px;

        span {
          font-weight: 700;
          color: #01058a;
          padding: 0 5px;
        }
      }

      .showList {
        .el-table--scrollable-x.el-table--scrollable-y {

          overflow-y: scroll;
          overflow-x: scroll;
        }

        // 处理tag标签颜色
        .el-table {
          width: 100%;
          height: 564px;
          font-weight: 900;

          .el-table-row .el-table__cell .cell .el-tag {
            // .el-table-column .el-tag--success {el-tag el-tag--light
            background-color: #f0f9eb !important;
            border-color: #e1f3d8;
            color: #67c23a !important;
          }

          .el-table__header thead tr>th.is-leaf.el-table__cell .cell {
            overflow: hidden;
            color: #a29faa !important;
            height: 30px;
            font-size: 14px !important;
            // .el-table .cell
            padding-left: 4px;
          }

          .el-table__body tbody tr {
            &.current-row>td {
              background-color: #dde6fd !important;
              color: #091d7c;
            }

            td.el-table__cell .cell {
              font-size: 16px !important;
              color: #2d3037 !important;
              height: 30px;
              padding: 0 4px 0;
            }
          }

          .el-checkbox .el-checkbox__input {
            width: 24px;
            height: 24px;
            cursor: pointer;

            .el-checkbox__inner {
              width: 24px;
              height: 24px;
              border-color: #dcdfe6;
              background: #fff;
              // }
            }
          }

          .el-checkbox .el-checkbox__input.is-checked {
            background-color: #fff !important;
            border: 2px solid #091d7c !important;
            position: relative;
            width: 24px;
            height: 24px;

            .el-checkbox__inner {
              &::after {
                border: 3px solid #091d7c !important;
                border-left: 0 !important;
                border-top: 0 !important;
                height: 11px !important;
                left: 8px !important;
                position: absolute;
                background-color: #fff !important;
                top: 1px !important;
                transform: rotate(45deg);
                width: 6px !important;
              }
            }
          }

          .el-checkbox:hover .el-checkbox__input.is-focus .el-checkbox__inner {
            border-color: #409eff;
          }

          .el-table__header thead tr .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            position: relative;

            &::before {
              position: absolute;
              display: block;
              background-color: #091d7c !important;
              height: 6px !important;
              top: 8px;
            }
          }

          .dis-button {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }

    .page {
      padding-top: 8px;
      display: flex;
      justify-content: flex-end;

      .el-pagination {
        padding: 2px 5px;
        color: #303133;
        height: 32px;

        .el-input .el-input__wrapper {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
