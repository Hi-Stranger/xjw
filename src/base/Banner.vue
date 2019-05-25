<template>
  <div class="banner relative min-1000">
    <Flash></Flash>
  </div>
</template>

<script>
  import Flash from './Flash';

  export default {
    name: "Banner",
    components: {Flash}
  }
</script>

<style lang="less">
  .banner {
    height: 655px;
    background: url("../../static/img/bg_body_con.jpg") no-repeat center/cover;
  }
</style>
