<template>
  <div class="footer min-1000" :style="{'transform':'translate(0, -'+translate+'px)'} ">
    <div class="absolute full-width">
      <div class="max-1000 min-1000 margin-auto">
        <img class="full-width" src="../../static/img/ft_comper.jpg" alt="图片显示错误">
      </div>
      <div class="max-1000 min-1000 margin-auto absolute">
<!--        <img src="../../static/img/footer_img.png" alt="图片显示错误">-->
        <div class="flex col font12">
          <div class="flex just-center mar-b15">
            <p class="pointer hover">关于我们</p>
            <p class="division pointer hover">联系我们</p>
            <p class="division pointer hover">常见问题</p>
            <p class="division pointer hover">存取帮助</p>
            <p class="division pointer hover">代理加盟</p>
            <p class="division pointer hover">客户端</p>
          </div>
          <div class="text-center mar-b25">
            <span>2018鼎盛国际版权所有</span>
            <span class="pad-l15">all rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Foot",
    props: {
      translate: {
        default: 0
      }
    }
  }
</script>

<style lang="less">
  .footer {
    > div {
      height: 600px;
      background: url("../../static/img/bg_body_footer.png") no-repeat center center/cover;

      > div:first-child {
        transform: translate(0, 320px);

        img {
          height: 98px;
        }
      }

      > div:last-child {
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        color: #7f7f7f;
        line-height: 18px;

        img {
          margin-bottom: 18px;
        }

        p {
          margin: 0 7.5px;
          position: relative;
        }

        .division:after {
          content: '';
          position: absolute;
          left: -7.5px;
          top: 55%;
          height: 100%;
          width: 1px;
          border-left: 1px solid #7f7f7f;
          transform: translate(0, -50%) scale(0.7);
        }
      }
    }
  }
</style>
