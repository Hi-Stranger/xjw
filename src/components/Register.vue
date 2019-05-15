<template>
  <div class="xjw-register main-box">
    <Head></Head>
    <Banner1></Banner1>
    <div class="content relative min-1000 max-1000 margin-auto">
      <Notice></Notice>
      <div class="register-box border-box flex col">
        <p class="font24 colorWhite text-center">
          <span>鼎盛国际娱乐</span>
          -恭迎您的加入
        </p>
        <div class="flex1 relative">
          <p class="absolute font16 text-center">立即加入</p>
          <div class="fill-in">
            <div class="flex">
              <p class="colorWhite font14"><span>*</span> 会员账号：</p>
              <input class="backgroundWhite font14 border-box" type="text">
              <p class="font12">6-12位的数字、字母或其组合</p>
            </div>
            <div class="flex">
              <p class="colorWhite font14"><span>*</span> 会员密码：</p>
              <input class="backgroundWhite font14 border-box" type="password">
              <p class="font12">6-12位的数字和字母组成的密码</p>
            </div>
            <div class="flex">
              <p class="colorWhite font14"><span>*</span> 确认密码：</p>
              <input class="backgroundWhite font14 border-box" type="password">
              <p class="font12">请再次输入密码</p>
            </div>
            <div class="flex">
              <p class="colorWhite font14"><span>*</span> 取款密码：</p>
              <input class="backgroundWhite font14 border-box" type="password">
              <p class="font12">请设置您的取款密码，次密码务必牢记</p>
            </div>
            <div class="flex">
              <p class="colorWhite font14"><span class="visibility-hidden">*</span> 真实姓名：</p>
              <input class="backgroundWhite font14 border-box" type="text">
              <p class="font12">请填写您的真实姓名，必须与银行卡用户名一致</p>
            </div>
            <div class="flex">
              <p class="colorWhite font14"><span class="visibility-hidden">*</span> 手机号码：</p>
              <input class="backgroundWhite font14 border-box" type="text">
              <p class="font12">请填写手机号码</p>
            </div>
            <div class="flex">
              <p class="colorWhite font14"><span class="visibility-hidden">*</span> 微信号码：</p>
              <input class="backgroundWhite font14 border-box" type="text">
              <p class="font12">请填写微信号码</p>
            </div>
            <div class="flex">
              <p class="colorWhite font14"><span class="visibility-hidden">*</span> <i class="visibility-hidden">入</i>验证码：
              </p>
              <input class="backgroundWhite font14 border-box" style="width: 100px;" type="text">
              <img src="" alt="图片显示错误">
            </div>
            <div class="flex">
              <van-checkbox v-model="checked" :shape="'square'" style="margin-left: 70px;"></van-checkbox>
              <p class="font14 mar-l15 colorWhite">我已年满18岁，且同意本站用户<span class="pointer hover" style="color: #c4a04b;">注册协议</span>
              </p>
            </div>
            <div class="flex" style="margin-top: 40px;margin-bottom: 20px;">
              <p class="font15 mar-l15 register-btn text-center pointer opacity8 hover">立即注册</p>
            </div>
            <div class="flex">
              <p class="colorWhite font14" style="margin-left: 100px;">已有鼎盛国际账号？<span class="pointer hover" style="color: #c4a04b;">立即登录</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foot :translate="600"></Foot>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        checked: true,
      }
    }
  }
</script>

<style lang="less">
  .xjw-register {
    > .content {
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
  }
</style>
