<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <main-menu :is-fold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header @fold-change="handleFoldChange"></main-header>
        </el-header>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainHeader from "@/components/main-header/main-header.vue";
import MainMenu from "@/components/main-menu/main-menu.vue";

import { ref } from "vue";

// 处理main-header中折叠的变化
const isFold = ref(false);
function handleFoldChange(flag: boolean) {
  isFold.value = flag;
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.6s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
