<template>
  <div class="xjw-home main-box">
    <div class="full-height full-width overflowY relative">
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
        localStorage.agent = (window.location.href).split(".")[1] + ".com";
        let query = this.$route.query.agent || localStorage.agent;
        this.$store.commit('SETLOAD', true);
        getconfigure(query).then((resp) => {
          this.$store.commit('SETLOAD', false);
          this.$store.commit(Types.NOTICE, resp.message);
        });
      });
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
