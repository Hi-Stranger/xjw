<template>
  <div class="xjw-home main-box">
    <Head></Head>
    <Banner></Banner>
    <div class="content relative min-1000 max-1000 margin-auto">
      <Notice></Notice>
      <About></About>
    </div>
    <Foot :translate="425"></Foot>
  </div>
</template>

<script>
  import About from '../base/About';

  export default {
    name: "Home",
    components: {About}
  }
</script>

<style lang="less"></style>
