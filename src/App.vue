<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">
  .main-box {
    background: rgba(6, 9, 18, 1);

    > .content {
      transform: translate(0, -125px);
      z-index: 1;
    }
  }

</style>
