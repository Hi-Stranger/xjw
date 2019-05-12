<template>
  <div class="notice-box flex full-width">
    <p class="font18">公告：</p>
    <div class="flex1">
      <van-notice-bar
        text="拒绝一切与兼职刷单、理财诈骗、洗黑钱等相关非正当资金。一经发现并确认，将永久冻结账号及资金，凡请有涉及会员请自行离开。"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Notice"
  }
</script>

<style lang="less">
  .notice-box {
    line-height: 39px;
    height: 39px;
    background-color: #060912;
    border: solid 1px #333843;
    margin-bottom: 15px;

    > p {
      color: #d9d609;
      margin-left: 10px;
    }

    .van-notice-bar {
      color: #d2d1d1;
      font-size: 13px;
      background: none;
    }
  }
</style>
