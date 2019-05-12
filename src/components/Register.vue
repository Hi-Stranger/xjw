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

        </div>
      </div>
    </div>
    <Foot :translate="600"></Foot>
  </div>
</template>

<script>
  export default {
    name: "Register"
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
      }
    }
  }
</style>
