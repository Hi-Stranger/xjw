<template>
  <div class="xjw-home main-box">
    <div ref="scrollBox" class="full-height full-width overflowY relative">
      <Head></Head>
      <Banner></Banner>
      <div class="content relative min-1000 max-1000 margin-auto">
        <Notice></Notice>
        <About></About>
      </div>
      <Foot :translate="425"></Foot>
      <router-view></router-view>
    </div>
    <div v-show="config.load" class="load-box fixed full-width full-height flex just-center items-center">
      <van-loading type="spinner"/>
    </div>
    <LeftSuspension></LeftSuspension>
    <RightSuspension></RightSuspension>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import * as Types from '../store/mutations-type';
  import About from '../base/About';
  import {getconfigure} from '../api';

  export default {
    name: "Home",
    components: {About},
    data() {
      return {
        spinShow: true,
      }
    },
    computed: {
      ...mapState(['config'])
    },
    created() {
      this.$nextTick(() => {
        this.scrollWidth();
        // let _url = (window.location.host).split(".");
        // localStorage.agent = (_url[0]).toLocaleLowerCase() == 'www' ? _url[1] + ".com" : _url[0] + ".com";
        localStorage.agent = 'ds22229.com';
        let query = this.$route.query.agent || localStorage.agent;
        this.$store.commit('SETLOAD', true);
        this.scrollWidth();
        getconfigure(query).then((resp) => {
          this.$store.commit('SETLOAD', false);
          this.$store.commit(Types.NOTICE, resp.data);
        });
      });
    },
    methods: {
      scrollWidth() {  //计算滚动条宽度
        let a = window.innerWidth;
        let b = this.$refs.scrollBox.clientWidth;
        this.$store.commit(Types.SCROLLWIDTH, a -b);
      }
    }
  }
</script>

<style lang="less">
  .load-box {
    z-index: 10;
    background-color: rgba(0, 0, 0, .3);
    top: 0;
    left: 0;
  }
</style>
