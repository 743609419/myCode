<template>
  <div class="base">
    <!-- <router-link to="/main">主页</router-link>
    <router-link to="/login">登录</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.base {
  width: 100vw;
  height: 100vh;
}
</style>
