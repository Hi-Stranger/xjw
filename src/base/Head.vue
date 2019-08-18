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
          <p @click="headTip(1)" class="pointer hover">设为首页</p>
          <p @click="headTip(2)" class="pointer hover relative">加入收藏</p>
          <img src="../../static/img/s_img.png" alt="图片显示错误">
        </div>
        <div v-if="!userinfo.username" class="sign-in flex just-between">
          <div class="flex col just-between full-height">
            <input v-model="account" @keydown.enter="SignIn" class="font12" type="text" placeholder="请输入账号">
            <input v-model="password" @keydown.enter="SignIn" class="font12" type="password" placeholder="请输入密码">
          </div>
          <div class="sign-group flex col just-between">
            <p @click="SignIn" class="sign-btn font12 text-center pointer opacity8">登入</p>
            <p @click="routerYz" class="font12 text-center colorWhite pointer hover">忘记密码</p>
          </div>
          <router-link to="/register" tag="div" class="join-box">
            <img class="pointer opacity8" src="../../static/img/jion_us.png" alt="图片显示错误">
          </router-link>
        </div>
        <div v-else class="user-info flex col just-between">
          <div class="flex just-end">
            <span class="colorWhite font12">欢迎您，</span>
            <span class="colorRed font13">{{userinfo.username}}</span>
            <span class="colorWhite font12">余额：￥</span>
            <span class="colorRed font13">{{userinfo.balance}}</span>
          </div>
          <div class="flex just-between colorWhite font13">
            <router-link to="/core" tag="p" class="pointer hover">会员中心</router-link>
            <p @click="routerYz" class="relative division pointer hover">游戏记录</p>
            <p @click="routerYz" class="relative division pointer hover">充值记录</p>
            <p @click="SetOut" class="relative division pointer hover">登出</p>
          </div>
        </div>
      </div>
    </div>
    <div class="to-page">
      <div class="flex margin-auto max-1000 text-center colorWhite">
        <router-link :class="{'current':$route.name == 'Home' || $route.name == 'Register' || $route.name == 'Core'}"
                     to="/" tag="p">首页
        </router-link>
        <router-link :class="{'current':$route.name == 'Entertainment'}" to="/entertainment" tag="p" class="relative">
          真人娱乐
          <transition name="flash-enter-active">
            <img v-show="animate" class="absolute" src="../../static/img/hot.png" alt="图片显示错误">
          </transition>
          <div @click="goGame" class="navlogo absolute full-width">
            <img v-show="animate" class="margin-auto" src="../../static/img/s_nav1.png" alt="图片显示错误">
          </div>
        </router-link>
        <p @click="routerYz">体育投注</p>
        <p @click="routerYz">电子游艺</p>
        <p @click="routerYz">时时彩</p>
        <p @click="routerYz" class="other-color">六合投注</p>
        <p @click="routerYz">彩票游戏</p>
        <p @click="routerYz" class="relative">
          棋牌游戏
          <transition name="fade">
            <img class="absolute" src="../../static/img/hot.png" alt="图片显示错误">
          </transition>
        </p>
        <router-link :class="{'current':$route.name == 'Preferential'}" to="/preferential" tag="p"
                     class="relative other-color">
          优惠活动
          <transition name="fade" mode="out-in">
            <img v-show="animate" class="absolute" src="../../static/img/hot.png" alt="图片显示错误">
          </transition>
        </router-link>
        <!--        <p>在线客服</p>-->
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import * as Types from '../store/mutations-type';
  import {login} from '../api';

  export default {
    name: "Head",
    data() {
      return {
        account: '',
        password: '',
        animate: true
      }
    },
    computed: {
      ...mapState(['userinfo'])
    },
    created() {
      // this.$nextTick(() => {
      //   console.log(this.$route);
      // });
    },
    watch: {
      $route: {
        handler(x, o) {
          // if (o.name === 'Register' && sessionStorage.load) {  //从注册页面来
          //   let load = JSON.parse(sessionStorage.load);
          //   this.account = load.name;
          //   this.password = load.pass;
          //   this.SignIn();
          // }
        }
      }
    },
    methods: {
      SignIn() { //登陆
        if (!this.account || !this.password || this.account.length < 6 || this.account.length > 12 || this.password < 6 || this.password.length > 12) {
          this.$dialog.alert({
            title: '重要提醒',
            message: '请输入6-12位字符账户或密码',
            lockScroll: false,
          });
          return;
        }
        this.$store.commit('SETLOAD', true);
        login({
          username: this.account,
          password: this.password,
          domain: localStorage.agent,
        }).then((resp) => {
          sessionStorage.removeItem('load');
          this.$store.commit('SETLOAD', false);
          if (resp.code && resp.code != 0) {
            this.$dialog.alert({
              title: '重要提醒',
              message: resp.message,
              lockScroll: false,
            });
            return;
          } else {
            let _this = this;
            this.$toast.success({
              message: '登陆成功',
              duration: 2000,
              onClose() {
                let encrypt = new Object();
                encrypt.account = _this.account;
                encrypt.password = _this.password;
                let userInfo = JSON.stringify(encrypt);
                let encryptAfter = encryptAES(userInfo);
                resp.data.para = 'http://ds66668.com?para=' + encryptAfter;
                resp.data.a = _this.account;
                resp.data.b = _this.password;
                resp.data.time = new Date().getTime();
                _this.$store.commit(Types.SETINFO, resp.data);
                _this.$router.push('/');
              }
            });
          }
        }).catch((err) => {
          console.log(err);
        });
      },
      SetOut() { //退出
        this.$store.commit(Types.SETOUT);
        this.$router.push('/');
      },
      headTip(state) {  //暂未开放
        let time = true;
        let msg = '功能暂未开通，敬请期待！';
        if (state == 1) msg = '请手动添加到首页！';
        if (state == 2) msg = '请手动加入收藏！';
        this.$dialog.alert({
          title: '重要提醒',
          message: msg,
          lockScroll: false,
        }).then(() => {
          time = false;
        });
        setTimeout(() => {
          if (time) this.$dialog.close();
        }, 2000);
      },
      goGame() {
        if (!this.userinfo.para) {
          let time = true;
          this.$dialog.alert({
            title: '重要提醒',
            message: '请先登陆',
            lockScroll: false,
          }).then(() => {
            time = false;
          });
          setTimeout(() => {
            if (time) this.$dialog.close();
          }, 2000);
          return;
        }
        window.open(this.userinfo.para);
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
            background: url("../../static/img/dengru_btn.png") no-repeat left 100%/contain;
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

        > img {
          right: 20px;
          top: 1px;
          /*top: 2px;*/
          /*width: 20px;*/
        }

        .navlogo {
          z-index: 1;
          display: none;
        }

        &:hover .navlogo {
          display: block;
        }
      }

      .other-color {
        color: #ffff00;
      }

      p.current {
        background: url("../../static/img/nav_hover_bg.jpg") repeat-x 100% 100%/contain;
        color: #314787;
      }

      p:hover {
        background: url("../../static/img/nav_hover_bg.jpg") repeat-x 100% 100%/contain;
        color: #314787;
      }
    }

    /*.flash-enter-active {*/
    /*  animation: bounce-in 5s reverse;*/
    /*}*/

    /*.fade-enter-active, .fade-leave-active {*/
    /*  transition: bounce-in 5s;*/
    /*}*/

    /*.fade-enter { // 类名:初始化状态*/
    /*  opacity: 0;*/
    /*}*/

    /*@keyframes bounce-in {*/
    /*  0% {*/
    /*    opacity: 0;*/
    /*  }*/
    /*  50% {*/
    /*    opacity: .5;*/
    /*  }*/
    /*  100% {*/
    /*    opacity: 1;*/
    /*  }*/
    /*}*/
  }
</style>
