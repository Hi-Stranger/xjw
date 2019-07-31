<template>
  <div class="notice-box flex full-width border-box">
    <p class="font18">公告：</p>
    <div class="flex1">
      <van-notice-bar
        :text="config.notice"
      />
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "Notice",
    computed: {
      ...mapState(['config'])
    }
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
