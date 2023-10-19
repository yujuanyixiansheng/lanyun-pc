<template>
  <el-container>
    <el-header>
      <div class="head-top">头部</div>
      <div class="">面包屑</div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <ul>
          <li v-for="n in 100" :key="n" style="height: 30px">菜单</li>
        </ul>
      </el-aside>
      <el-main>
        <div
          v-for="item in 100"
          :key="item"
          style="height: 100px; margin-bottom: 10px"
        >
          内容
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss">
.el-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .el-header {
    padding: 0;
    height: 100px;
    background: #000;
    color: #fff;
    .head-top {
      height: 40px;
      background: #ccc;
    }
  }
  .el-side {
    height: 100%;
    background: #333;
  }
  .el-main {
    height: 100%;
    background: #999;
  }
}
</style>
