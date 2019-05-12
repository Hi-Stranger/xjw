<template>
  <div class="xjw-home">
    <Head></Head>
    <Banner></Banner>
    <div class="content relative min-1000 max-1000 margin-auto">
      <Notice></Notice>
      <About></About>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  import About from '../base/About';

  export default {
    name: "Home",
    components: {About}
  }
</script>

<style lang="less">
  .xjw-home {
    background: rgba(6, 9, 18, 1);

    > .content {
      /*top: -125px;*/
      transform: translate(0, -125px);
      z-index: 1;
    }
  }
</style>
