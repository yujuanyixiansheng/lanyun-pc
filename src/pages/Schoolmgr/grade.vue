<!-- 年级管理 -->
<template>
  <div class="grade-container">
    <div class="grade-all">
      <!-- 顶部标题 -->
      <div class="line">
        <h3>年级列表</h3>
      </div>
      <!-- 中间输入内容 -->
      <el-row>
        <!-- 下拉选项 -->
        <el-col :span="5">
          <el-select v-model="selectValue" size="large" placeholder="用户角色">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-col>
        <el-col :span="8">
          <!-- 查找输入 -->
          <el-input v-model="input3" size="large" placeholder="关键字" :suffix-icon="Search" /></el-col>
        <!-- 查询按钮 -->
        <el-col :span="5">
          <el-button class="search" size="large">查询</el-button></el-col>
        <el-col :span="6">
          <el-button size="large">添加</el-button>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <div class="grade-list">
        <div class="totals">
          共查询结果 <span>{{ 0 }}</span> 条
        </div>
        <div class="showList">
          <el-table :data="tableData" style="width: 100%" cellspacing="0" cellpadding="0">
            <el-table-column type="selection" width="100">
              <el-checkbox v-model="checked"></el-checkbox>
            </el-table-column>
            <el-table-column prop="numindex" label="#" width="100" />
            <el-table-column prop="name" label="年级名称" width="200" />
            <el-table-column prop="loginName" label="学段" width="200" />
            <el-table-column prop="isConsultant" label="显示名称" width="350" />
            <el-table-column prop="educationName" label="备注信息" width="350" />
            <el-table-column label="操作" width="120" header-align="center" class="dis-button">
              <template #default>
                <el-button link type="primary">修改</el-button>
                <el-button link type="primary">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
// import { reqGradeList } from '@/api/schoolmgr/index'

const selectValue = ref('')
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

const checked = ref(false)

const tableData: Array<object> = reactive([])

</script>

<style lang="scss">
.grade-container {
  height: 98%;
  width: 100%;
  padding: 6px;

  .grade-all {
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
        padding-left: 5px;
        padding-right: 5px;
      }

      .el-col-8 {
        width: 12.5%;
      }

      .el-col-6 {
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

    .grade-list {
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

        .el-table {
          width: 100%;
          height: 564px;
          font-weight: 900;

          .el-table__header thead tr>th.is-leaf.el-table__cell .cell {
            overflow: hidden;
            color: #a29faa !important;
            height: 30px;
            font-size: 14px !important;
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
  }
}
</style>
