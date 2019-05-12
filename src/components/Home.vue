<template>
  <div class="xjw-home">
    <Head></Head>
    <Banner></Banner>
    <div class="content max-1000 margin-auto">
      <Notice></Notice>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style lang="less">
  .xjw-home {
    .banner-box{
      background: url("../../static/img/bg_body_con.jpg") no-repeat center/contain;
    }
  }
</style>
