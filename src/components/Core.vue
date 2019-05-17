<template>
  <div class="xjw-core main-box">
    <Head></Head>
    <Banner1></Banner1>
    <div class="content relative min-1000 max-1000 margin-auto">
      <Notice></Notice>
      <div class="core-box border-box flex col">
        <div class="tab-box relative">
          <img class="full-height absolute" src="../../static/img/sjx.png" alt="图片显示错误">
          <div class="flex tab-chose full-height items-center">
            <p @click="current = 0" :class="{'current':current == 0}"
               class="flex col just-between items-center font12 full-height border-box pointer relative">
              <i class="iconfont font25 text-center colorWhite" style="background-color: #f59a2f;">&#xe641;</i>账户首页
            </p>
            <p @click="current = 1" :class="{'current':current == 1}"
               class="flex col just-between items-center font12 full-height border-box pointer relative">
              <i class="iconfont font25 text-center colorWhite" style="background-color: #f16346;">&#xe658;</i>游戏记录
            </p>
            <p @click="current = 2" :class="{'current':current == 2}"
               class="flex col just-between items-center font12 full-height border-box pointer relative">
              <i class="iconfont font25 text-center colorWhite" style="background-color: #2c7fe3;">&#xe61d;</i>充值记录
            </p>
          </div>
        </div>
        <div class="flex1 border-box pad-10">
          <Account v-if="current == 0"></Account>
          <GameRecord v-else-if="current == 1"></GameRecord>
          <RechargeRecord v-else></RechargeRecord>
        </div>
      </div>
    </div>
    <Foot :translate="600"></Foot>
  </div>
</template>

<script>
  import Account from '../base/Account';
  import GameRecord from '../base/GameRecord';
  import RechargeRecord from '../base/RechargeRecord';

  export default {
    name: "Core",
    components: {Account, GameRecord, RechargeRecord},
    data() {
      return {
        current: 1
      }
    }
  }
</script>

<style lang="less">
  .xjw-core {
    > .content {
      transform: translate(0, -300px);
    }

    .core-box {
      height: 820px;
      background-color: #ece8e9;

      .tab-box {
        height: 67px;
        background: #ffffff url("../../static/img/member_center.png") no-repeat left top/contain;

        img {
          right: 0;
          top: 0;
        }

        .tab-chose {
          margin-left: 235px;

          p {
            margin-right: 30px;
            padding: 5px 0;

            &.current {
              color: #ef7a4d;
            }

            &.current:after {
              content: "";
              position: absolute;
              height: 2px;
              bottom: 0;
              width: 100%;
              left: 0;
              background-color: #ed5e17;
            }
          }

          i {
            width: 36px;
            height: 36px;
            line-height: 36px;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>
