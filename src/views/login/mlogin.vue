<template>
  <div class="baselogin"><login-panel /></div>
</template>

<script setup lang="ts">
import LoginPanel from "./c-cpns/login-panel.vue";
// import hyRequest from "@/service";
// hyRequest.get({ url: "/home/multidata" }).then((res) => {
//   console.log(res);
// });
</script>

<style lang="less" scoped>
.baselogin {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
}
</style>
