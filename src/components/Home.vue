<template>
  <div class="xjw-home main-box">
    <div class="full-height full-width overflowY">
      <Head></Head>
      <Banner></Banner>
      <div class="content relative min-1000 max-1000 margin-auto">
        <Notice></Notice>
        <About></About>
      </div>
      <Foot :translate="425"></Foot>
      <router-view></router-view>
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
        localStorage.agent = '888888.com';
        let query = this.$route.query.agent || localStorage.agent;
        getconfigure(query).then((resp) => {
          this.$store.commit(Types.NOTICE, resp.message);
        });
      });
    }
  }
</script>

<style lang="less"></style>
