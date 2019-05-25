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
  body, html {
    font-family: MicrosoftYaHei;
    line-height: unset;
    color: unset;
  }

  .main-box {
    background: rgba(6, 9, 18, 1);
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    left: 0;
    top: 0;
    z-index: 9;

    > div > .content {
      transform: translate(0, -125px);
      z-index: 1;
    }
  }

  .demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
  }

  @keyframes ani-demo-spin {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .demo-spin-col {
    /*height: 100px;*/
    /*position: relative;*/
    /*border: 1px solid #eee;*/
  }

  .ivu-spin-fix {
    background-color: rgba(0, 0, 0, .3);
    position: fixed;
  }

  .van-dialog {
    width: auto !important;
    min-width: 300px;
  }
</style>
