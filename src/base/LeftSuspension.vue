<template>
  <div v-show="showLeft" class="LeftSuspension-box fixed">
    <img class="full-width" src="../../static/img/left_bg.png" alt="图片显示错误">
    <div class="absolute full-width text-center">
      <p><b>欢迎光临</b></p>
      <p class="colorWhite font14">WELCOME</p>
      <p class="font24 colorWhite" style="display: none;">加入收藏</p>
      <div class="border-box mar-b10">
        <a @click="routerYz" href="javascript:;" class="font17 hover">苹果下载帮助</a>
      </div>
      <p class="font20 colorWhite">手机版下载</p>
      <div class="border-box pad-l10 pad-r10">
        <img class="border-box full-width backgroundWhite" src="../../static/img/ewm.jpg" alt="图片显示错误">
      </div>
      <div class="flex just-center font12 mar-b10">
        <p class="flex col items-center just-center">
          <img src="../../static/img/ios.png" alt="图片显示错误">
          ios
        </p>
        <p class="flex col items-center just-center">
          <img src="../../static/img/android.png" alt="图片显示错误">
          Android
        </p>
      </div>
      <div>
        <a class="colorWhite" :href="config.qq ? 'tencent://message/?uin='+config.qq+'&Site=&Menu=yes' :
        'javascript:;'" target="_blank">
          <!--          href="tencent://message/?Site=baidu.com&uin=1360316956&Menu=yes"-->
          <i class="iconfont icon-qq"></i>
          在线客服
        </a>
      </div>
      <p @click="showLeft = false" class="colorWhite font14 pointer hover mar-t10">关闭</p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "LeftSuspension",
    computed: {
      ...mapState(['config'])
    },
    data() {
      return {
        showLeft: true
      }
    }
  }
</script>

<style lang="less">
  .LeftSuspension-box {
    z-index: 1;
    width: 160px;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    transition: .3s;

    > div {
      top: 140px;
      bottom: 0;
      left: 0;
      line-height: 1;

      > p:first-child {
        font-size: 26px;
        margin: 8px 0;
        color: #feff00;
      }

      > p:nth-child(2) {
        margin-bottom: 8px;
      }

      > p:nth-child(3) {
        background: url("../../static/img/guang.png") no-repeat top center;
        padding: 10px 0 8px 0;
      }

      > div:nth-child(4) {
        padding: 14px 10px 0 10px;
        background: url("../../static/img/guang.png") no-repeat top center;

        a {
          display: block;
          color: #181818;
          line-height: 33px;
          border-radius: 17px;
          background-color: #ebd85e;
        }
      }

      p:nth-child(5) {
        margin-bottom: 8px;
      }

      > div:nth-child(6) {
        margin-bottom: 8px;

        img {
          padding: 3px;
          min-height: 140px;
        }
      }

      > div:nth-child(7) {
        p {
          color: #fdeb84;

          &:first-child {
            margin-right: 17px;
          }
        }
      }

      > div:nth-child(8) {
        height: 33px;
        padding: 0 10px;
        font-size: 17px;

        a {
          i {
            font-size: 26px;
          }

          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background-color: #5e6dff;
          border-radius: 17px;
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
