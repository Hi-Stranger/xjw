<template>
  <div class="xjw-preferential main-box">
    <div class="full-height full-width overflowY">
      <Head></Head>
      <Banner3></Banner3>
      <div class="content relative min-1000 max-1000 margin-auto">
        <Notice></Notice>
        <div class="preferential-box min-1000 max-1000 border-box flex col">
          <p class="preferential-title font14">优惠活动</p>
          <div class="flex1 border-box pad-10">
            <img @click="currentActive = 0" class="ful pointer" src="../../static/img/huodong1.png" alt="图片显示错误">
            <div :class="{'height0':currentActive == 0}" class="table-box border-box">
              <img class="margin-auto" src="../../static/img/hudoong_03.jpg" alt="图片显示错误">
            </div>
            <img @click="currentActive = 1" class="ful pointer" src="../../static/img/huodong1.png" alt="图片显示错误">
            <div :class="{'height0':currentActive == 1}" class="table-box border-box">
              <img class="margin-auto" src="../../static/img/hudoong_03.jpg" alt="图片显示错误">
            </div>
            <img @click="currentActive = 2" class="ful pointer" src="../../static/img/huodong1.png" alt="图片显示错误">
            <div :class="{'height0':currentActive == 2}" class="table-box border-box">
              <img class="margin-auto" src="../../static/img/hudoong_03.jpg" alt="图片显示错误">
            </div>
          </div>
        </div>
      </div>
      <Foot :translate="600"></Foot>
      <LeftSuspension></LeftSuspension>
      <RightSuspension></RightSuspension>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Preferential",
    data() {
      return {
        currentActive: 0
      }
    }
  }
</script>

<style lang="less">
  .xjw-preferential {
    > div > .content {
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

        .table-box.height0 {
          height: 595px;
        }

        .table-box {
          border: solid 1px #403e50;
          height: 0px;
          background-color: #060912;
          overflow: hidden;
          transition: .3s;
        }
      }
    }
  }
</style>
