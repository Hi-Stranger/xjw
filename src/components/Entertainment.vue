<template>
  <div class="xjw-entertainment main-box">
    <div class="full-height full-width overflowY">
      <Head></Head>
      <Banner2></Banner2>
      <div class="content relative min-1000 max-1000 margin-auto">
        <Notice></Notice>
        <div class="entertainment-box min-1000 max-1000 border-box flex col">
          <p class="entertainment-title font14">视讯直播</p>
          <div class="flex warp flex1 border-box">
            <div v-for="l in activeList" class="active-box border-box pointer">
              <div class="flex active-title just-center">
                <img class="full-height" src="../../static/img/logo2.png" alt="图片显示错误">
                <p class="font18 colorWhite">鼎盛国际</p>
              </div>
              <div class="active-img relative">
                <img class="full-width" src="../../static/img/tupian1.png" alt="图片显示错误">
                <div class="absolute full-width full-height border-box">
                  <p @click="goGame" class="font16 colorWhite text-center margin-auto pointer hover">进入游戏</p>
                </div>
              </div>
              <p class="font14 colorWhite text-center">美女荷官性感刺激</p>
            </div>
            <div class="active-box border-box flex col just-center">
              <img class="margin-auto" src="../../static/img/upcoming.png" alt="图片显示错误" style="width: 96px;">
            </div>
          </div>
        </div>
      </div>
      <Foot :translate="600"></Foot>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "Entertainment",
    data() {
      return {
        activeList: 1
      }
    },
    computed: {
      ...mapState(['userinfo'])
    },
    methods: {
      goGame() {
        if (!this.userinfo.para) {
          this.$dialog.alert({
            title: '重要提醒',
            message: '请先登陆',
            lockScroll: false,
          });
          setTimeout(() => {
            this.$dialog.close();
          }, 2000);
          return;
        }
        window.open(this.userinfo.para);
      }
    }
  }
</script>

<style lang="less">
  .xjw-entertainment {
    > div > .content {
      transform: translate(0, -300px);
    }

    .entertainment-box {
      height: 820px;
      background-color: #060c1d;
      border: solid 1px #333843;

      .entertainment-title {
        color: #e8d095;
        text-indent: 10px;
        line-height: 40px;
        border-bottom: 1px solid #403e50;
      }

      > div {
        padding: 30px;

        .active-box {
          width: 300px;
          height: 285px;
          border: solid 2px #403e50;
          margin-bottom: 10px;
          margin-right: 23px;
          padding: 0 10px;

          &.pointer:hover {
            border: solid 2px #dc7200;

            .active-img div {
              display: block;
            }
          }

          .active-title {
            line-height: 40px;
            margin: 20px 0 15px 0;
          }

          .active-img {
            margin-bottom: 10px;

            div {
              background-color: rgba(6, 9, 18, .7);
              left: 0;
              top: 0;
              display: none;

              p {
                width: 155px;
                line-height: 33px;
                background-color: #dc7200;
                border-radius: 6px;
                margin-top: 50px;
              }
            }
          }
        }
      }
    }
  }
</style>
