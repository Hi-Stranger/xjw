<template>
  <div class="xjw-register main-box">
    <Head></Head>
    <Banner1></Banner1>
    <div class="content relative min-1000 max-1000 margin-auto">
      <Notice></Notice>
      <div class="register-box"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register"
  }
</script>

<style lang="less">
  .xjw-register {
    > .content {
      transform: translate(0, -300px);
    }

    .register-box {

    }
  }
</style>
