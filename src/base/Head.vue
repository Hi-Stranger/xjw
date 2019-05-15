<template>
  <div class="header min-1000">
    <div class="content flex just-between max-1000 full-height overflow-hidden margin-auto">
      <div class="logo-box flex just-between">
        <div class="logo flex col just-center full-height pointer">
          <img src="../../static/img/logo.png" alt="图片显示错误">
        </div>
        <div class="city-box flex col just-end">
          <img src="../../static/img/t_img.png" alt="图片显示错误">
        </div>
      </div>
      <div class="sign-box flex just-end flex1 relative">
        <div class="control absolute flex just-between font12">
          <p class="pointer hover">设为首页</p>
          <p class="pointer hover relative">加入收藏</p>
          <img src="../../static/img/s_img.png" alt="图片显示错误">
        </div>
        <div v-if="user" class="sign-in flex just-between">
          <div class="flex col just-between full-height">
            <input class="font12" type="text" placeholder="请输入账号">
            <input class="font12" type="password" placeholder="请输入密码">
          </div>
          <div class="sign-group flex col just-between">
            <p class="sign-btn font12 text-center pointer opacity8">登入</p>
            <p class="font12 text-center colorWhite pointer hover">忘记密码</p>
          </div>
          <router-link to="/register" tag="div" class="join-box">
            <img class="pointer full-width opacity8" src="../../static/img/jion_us.png" alt="图片显示错误">
          </router-link>
        </div>
        <div v-else class="user-info flex col just-between">
          <div class="flex just-end">
            <span class="colorWhite font12">欢迎您，</span>
            <span class="colorRed font13">aa123</span>
            <span class="colorWhite font12">余额：￥</span>
            <span class="colorRed font13">0.00</span>
          </div>
          <div class="flex just-between colorWhite font13">
            <p class="pointer hover">会员中心</p>
            <p class="relative division pointer hover">游戏记录</p>
            <p class="relative division pointer hover">充值记录</p>
            <p class="relative division pointer hover">登出</p>
          </div>
        </div>
      </div>
    </div>
    <div class="to-page">
      <div class="flex margin-auto max-1000 text-center colorWhite">
        <router-link to="/" tag="p">首页</router-link>
        <p>体育投注</p>
        <router-link to="/entertainment" tag="p" class="relative">
          真人娱乐
          <img class="absolute" src="../../static/img/hot.png" alt="图片显示错误">
        </router-link>
        <p>电子游艺</p>
        <p>时时彩</p>
        <p class="other-color">六合投注</p>
        <p>彩票游戏</p>
        <p class="relative">
          棋牌游戏
          <img class="absolute" src="../../static/img/hot.png" alt="图片显示错误">
        </p>
        <p class="relative other-color">
          优惠活动
          <img class="absolute" src="../../static/img/hot.png" alt="图片显示错误">
        </p>
        <p>在线客服</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Head",
    data() {
      return {
        user: true
      }
    }
  }
</script>

<style lang="less">
  .header {
    background: url("../../static/img/top_bg.jpg") repeat-x center/cover;

    .content {
      height: 119px;

      .logo {
        background: url("../../static/img/l_guang.png") no-repeat top center/contain;

        img {
          width: 273px;
        }
      }

      .city-box {
        margin-left: 23px;

        img {
          width: 276px;
        }
      }

      .control {
        top: 6px;
        right: 0;

        p:first-child {
          color: #bec13e;
          margin-right: 7.5px;
        }

        p:nth-child(2) {
          color: #5e6d9c;
          margin-left: 7.5px;

          &:before {
            content: "";
            position: absolute;
            left: -7.5px;
            top: 50%;
            height: 13px;
            width: 1px;
            border-left: 1px solid #5e6d9c;
            transform: translate(0, -50%);
          }
        }

        img {
          margin-left: 15px;
        }
      }

      .sign-in {
        margin-top: 45px;
        height: 50px;

        input {
          width: 140px;
          height: 20px;
          line-height: 20px;
          color: #5266a2;
          background-color: #1f2c56;
          border: solid 1px #37456b;
          text-indent: 5px;
        }

        .sign-group {
          margin: 0 15px;
          width: 55px;

          p {
            line-height: 20px;
          }

          .sign-btn {
            color: #fefefe;
            /*<!--background: url("../../static/img/dengru_btn.png") no-repeat 100% 100%/contain;-->*/
          }
        }

        .join-box {
          width: 137px;
        }
      }

      .user-info {
        margin-top: 45px;
        height: 50px;

        div:last-child {
          p {
            margin: 0 7.5px;
          }

          p:last-child {
            margin-right: 0;
          }

          .division:after {
            content: '';
            position: absolute;
            left: -7.5px;
            top: 50%;
            height: 100%;
            width: 1px;
            border-left: 1px solid #ffffff;
            transform: translate(0, -50%);
          }
        }
      }
    }

    .to-page {
      height: 44px;
      line-height: 44px;
      background-image: linear-gradient(#334c98, #334c98), linear-gradient(#37509c, #37509c);
      background-blend-mode: normal, normal;
      border: solid 1px #4e68b7;

      p {
        flex: 1;
        cursor: pointer;
        font-size: 15px;
        height: 100%;

        img {
          right: 20px;
          top: 2px;
          width: 20px;
        }
      }

      .other-color {
        color: #ffff00;
      }

      p:hover {
        background: url("../../static/img/nav_hover_bg.jpg") repeat-x 100% 100%/contain;
        color: #314787;
      }
    }
  }
</style>
