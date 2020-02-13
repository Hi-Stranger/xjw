<template>
  <div v-show="showRight" :style="{'right':config.scrollwidth+'px'}" class="RightSuspension-box fixed">
    <img class="" src="../../static/img/right_bg.png" alt="图片显示错误">
    <div class="absolute full-width text-center">
      <p><b>7X24H</b></p>
      <p class="colorWhite font14">ONLINE SERVICER</p>
      <p class="font24 colorWhite">
        <span>客服热线</span>
        <span v-for="l in config.phone" class="font16 mar-t10">{{l}}</span>
      </p>
      <div class="border-box pad-l10 pad-r10">
        <img class="border-box full-width backgroundWhite" :src="config.qrcode" alt="图片显示错误">
      </div>
      <p class="font14">微信号{{config.wechat}}</p>
      <div class="border-box">
        <router-link to="/register" tag="a" href="javascript:;" class="font17 hover">立即开户</router-link>
      </div>
      <div class="border-box">
        <a :href="config.gameurl+'/?para=3ca31fb7d8e1a1e6b352e33af63e583a'" target="_blank"
           class="font17 hover">免费试玩</a>
      </div>
      <p @click="showRight = false" class="colorWhite font14 pointer hover">关闭</p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "RightSuspension",
    computed: {
      ...mapState(['config'])
    },
    data() {
      return {
        showRight: true,
        scrollwidth: 17
      }
    },
  }
</script>

<style lang="less">
  .RightSuspension-box {
    z-index: 1;
    width: 160px;
    top: 50%;
    transform: translate(0, -50%);
    transition: .3s;

    > div {
      top: 140px;
      bottom: -30px;
      left: 0;
      line-height: 1;
      background-color: #1f326f;

      > p:first-child {
        font-size: 26px;
        margin: 8px 0;
        color: #feff00;
      }

      > p:nth-child(2) {
        margin-bottom: 4px;
      }

      > p:nth-child(3) {
        background: url("../../static/img/guang.png") no-repeat top center;
        padding: 10px 0 8px 0;

        span {
          display: block;
          line-height: 1;
        }
      }

      > div:nth-child(4) {
        padding-top: 14px;
        margin-bottom: 8px;
        background: url("../../static/img/guang.png") no-repeat top center;

        img {
          padding: 3px;
          min-height: 140px;
        }
      }

      > p:nth-child(5) {
        color: #ffe92d;
        margin-bottom: 8px;
      }

      > div:nth-child(6), > div:nth-child(7) {
        padding: 0 10px 10px 10px;
        background: #1f326f url("../../static/img/guang.png") no-repeat top center;

        a {
          display: block;
          color: #181818;
          line-height: 33px;
          border-radius: 17px;
          background-color: #ebd85e;
        }
      }

      > p:last-child {
        background: #1f326f url("../../static/img/guang.png") no-repeat top center;
        line-height: 28px;
        height: 28px;
        width: 100%;
      }
    }
  }
</style>
