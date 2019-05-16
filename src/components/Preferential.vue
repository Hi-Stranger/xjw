<template>
  <div class="xjw-preferential main-box">
    <Head></Head>
    <Banner3></Banner3>
    <div class="content relative min-1000 max-1000 margin-auto">
      <Notice></Notice>
      <div class="preferential-box min-1000 max-1000 border-box flex col">
        <p class="preferential-title font14">优惠活动</p>
        <div class="flex1 border-box pad-10">
          <img class="ful" src="../../static/img/huodong1.png" alt="图片显示错误">
          <div class="table-box border-box">
            <img class="margin-auto" src="../../static/img/hudoong_03.jpg" alt="图片显示错误">
          </div>
          <img class="ful" src="../../static/img/huodong1.png" alt="图片显示错误">
          <img class="ful" src="../../static/img/huodong1.png" alt="图片显示错误">
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

      > div {
        img {
          margin-top: 10px;
        }

        img:first-child {
          margin-top: 8px;
        }

        .table-box {
          border: solid 1px #403e50;
          height: 595px;
          background-color: #060912;
        }
      }
    }
  }
</style>
