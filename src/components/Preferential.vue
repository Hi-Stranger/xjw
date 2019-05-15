<template>
  <div class="xjw-preferential main-box">
    <Head></Head>
    <Banner3></Banner3>
    <div class="content relative min-1000 max-1000 margin-auto">
      <Notice></Notice>
      <div class="preferential-box min-1000 max-1000 border-box flex col">
        <p class="preferential-title font14">优惠活动</p>
        <div class="flex warp flex1 border-box">
        </div>
      </div>
    </div>
    <Foot :translate="600"></Foot>
  </div>
</template>

<script>
  export default {
    name: "Preferential"
  }
</script>

<style lang="less">
  .xjw-preferential {
    > .content {
      transform: translate(0, -300px);
    }

    .preferential-box {
      height: 1145px;
      background-color: #060c1d;
      border: solid 1px #333843;

      .preferential-title {
        color: #e8d095;
        text-indent: 10px;
        line-height: 40px;
        border-bottom: 1px solid #403e50;
      }
    }
  }
</style>
