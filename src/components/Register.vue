<template>
  <div class="xjw-register main-box">
    <div ref="scrollTo" class="full-height full-width overflowY">
      <Head ref="headId"></Head>
      <Banner1></Banner1>
      <div class="content relative min-1000 max-1000 margin-auto">
        <Notice></Notice>
        <div class="register-box border-box flex col">
          <p class="font24 colorWhite text-center">
            <span>鼎盛国际娱乐</span>-恭迎您的加入
          </p>
          <div class="flex1 relative">
            <p class="absolute font16 text-center">立即加入</p>
            <div class="fill-in">
              <div class="flex">
                <p class="colorWhite font14"><span>*</span> 会员账号：</p>
                <input v-model="InAccount" class="backgroundWhite font14 border-box" type="text">
                <p class="font12">6-12位的数字、字母或其组合</p>
              </div>
              <div class="flex">
                <p class="colorWhite font14"><span>*</span> 会员密码：</p>
                <input v-model="InPassword" class="backgroundWhite font14 border-box" type="password">
                <p class="font12">6-12位的数字和字母组成的密码</p>
              </div>
              <div class="flex">
                <p class="colorWhite font14"><span>*</span> 确认密码：</p>
                <input v-model="ReInPassword" class="backgroundWhite font14 border-box" type="password">
                <p class="font12">请再次输入密码</p>
              </div>
              <div class="flex">
                <p class="colorWhite font14"><span>*</span> 取款密码：</p>
                <input v-model="InMoneyPassword" class="backgroundWhite font14 border-box" type="password">
                <p class="font12">请设置您的取款密码，次密码务必牢记</p>
              </div>
              <div class="flex">
                <p class="colorWhite font14"><span class="visibility-hidden">*</span> 真实姓名：</p>
                <input v-model="InName" class="backgroundWhite font14 border-box" type="text">
                <p class="font12">请填写您的真实姓名，必须与银行卡用户名一致</p>
              </div>
              <div class="flex">
                <p class="colorWhite font14"><span class="visibility-hidden">*</span> 手机号码：</p>
                <input v-model="InTel" class="backgroundWhite font14 border-box" type="text">
                <p class="font12">请填写手机号码</p>
              </div>
              <div class="flex">
                <p class="colorWhite font14"><span class="visibility-hidden">*</span> 微信号码：</p>
                <input v-model="InWx" class="backgroundWhite font14 border-box" type="text">
                <p class="font12">请填写微信号码</p>
              </div>
              <!--<div class="flex">-->
              <!--<p class="colorWhite font14"><span class="visibility-hidden">*</span> <i class="visibility-hidden">入</i>验证码：-->
              <!--</p>-->
              <!--<input class="backgroundWhite font14 border-box" style="width: 100px;" type="text">-->
              <!--<img src="" alt="图片显示错误">-->
              <!--</div>-->
              <div class="flex">
                <van-checkbox v-model="checked" :shape="'square'" style="margin-left: 70px;"></van-checkbox>
                <p class="font14 mar-l15 colorWhite">我已年满18岁，且同意本站用户<span class="pointer hover" style="color: #c4a04b;">注册协议</span>
                </p>
              </div>
              <div class="flex" style="margin-top: 40px;margin-bottom: 20px;">
                <p @click="HandleRegister" class="font15 mar-l15 register-btn text-center pointer opacity8 hover">
                  立即注册</p>
              </div>
              <div class="flex">
                <p class="colorWhite font14" style="margin-left: 100px;">
                  已有鼎盛国际账号？
                  <span @click="scrollTo0" class="pointer hover" style="color: #c4a04b;">立即登录</span>
                </p>
              </div>
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
  import {registerIn} from '../api';

  export default {
    name: "Register",
    data() {
      return {
        checked: true,
        InAccount: '',  //账号
        InPassword: '', //密码
        ReInPassword: '', //确认密码
        InMoneyPassword: '',  //取款密码
        InName: '', //真实姓名
        InTel: '', //电话号码
        InWx: '', //微信号码
      }
    },
    methods: {
      HandleRegister() { //注册
        let msg = '';
        if ((/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(this.InAccount)) || this.InAccount.length < 6 || this.InAccount.length > 12) {
          msg = '会员账号为6-12位的数字、字母或其组合';
        } else if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(this.InPassword)) || this.InPassword.length < 6 || this.InPassword.length > 12) {
          msg = '会员密码为6-12位的数字和字母组成的密码';
        } else if (this.ReInPassword != this.InPassword) {
          msg = '两次密码不一致';
        } else if (!this.InMoneyPassword) {
          msg = '请输入取款密码';
        } else if (!this.checked) {
          msg = '请同意注册协议';
        }
        if (msg) {
          this.$dialog.alert({
            title: '重要提醒',
            message: msg,
            lockScroll: false,
          });
          return;
        }
        registerIn({
          username: this.InAccount,
          password: this.InPassword,
          nickname: this.InName,
          withdrawal_password: this.InMoneyPassword,
          wechat: this.InWx,
          phone: this.InTel,
          domain: localStorage.agent,
        }).then((resp) => {
          if (resp.code != 0) {
            this.$dialog.alert({
              title: '重要提醒',
              message: resp.message,
              lockScroll: false,
            });
            return;
          } else {  //注册成功直接跳转首页并登录
            let _this = this;
            this.$toast.success({
              message: resp.data.msg,
              duration: 2000,
              onClose() {
                if (resp.data.res === 1) {
                  let dom = _this.$refs.headId;
                  dom._data.account = _this.InAccount;
                  dom._data.password = _this.InPassword;
                  dom.SignIn();
                }
              }
            });
          }
        });
      },
      scrollTo0() {  //滚动条到顶部
        this.$refs.scrollTo.scroll(0, 0);
      }
    }
  }
</script>

<style lang="less">
  .xjw-register {
    > div > .content {
      transform: translate(0, -300px);
    }

    .register-box {
      height: 820px;
      background-color: #060c1d;
      border: solid 1px #333843;
      padding: 40px 40px 45px 40px;

      > p {
        margin-bottom: 45px;

        span {
          color: #fdeb84;
        }
      }

      > div {
        border: solid 1px #e8d095;

        > p {
          width: 100px;
          line-height: 37px;
          background-color: #060c1d;
          color: #e8d095;
          left: 55px;
          transform: translate(0, -50%);
        }

        .fill-in {
          margin-top: 58px;
          margin-left: 193px;

          > div {
            height: 28px;
            line-height: 28px;
            margin-bottom: 20px;

            p:first-child {
              &.register-btn {
                margin-left: 100px;
                width: 142px;
                line-height: 35px;
                background-color: #f0e47b;
                height: 35px;
              }

              span {
                color: #f60d0d;
              }
            }

            input {
              margin: 0 15px 0 20px;
              padding: 0 15px;
              width: 220px;
            }

            p:nth-child(3) {
              color: #4e68b7;
            }
          }
        }

        .van-checkbox__icon .van-icon {
          height: 14px;
          width: 14px;
          font-size: 12px;
          line-height: 14px;
        }
      }
    }

    .van-checkbox__icon, .van-checkbox__label {
      line-height: 22px;
    }
  }
</style>
