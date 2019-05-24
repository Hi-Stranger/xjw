<template>
  <div class="flex account-box full-height full-width">
    <div class="check-box font15">
      <p @click="current = 0" :class="{'current':current == 0}" class="flex mar-b15 pointer relative"><i
        class="iconfont font25 mar-r15 mar-l25">&#xe641;</i>账户首页
      </p>
      <p @click="current = 1" :class="{'current':current == 1}" class="flex pointer relative"><i
        class="iconfont font25 mar-r15 mar-l25">&#xe617;</i>修改密码</p>
    </div>
    <div class="flex1 check-content backgroundWhite">
      <div :style="{'height':current == 0 ? '105px' : '340px'}" class="content-box">
        <div v-if="current == 0" class="check-one flex just-between full-height">
          <div class="flex col pad-l15 border-box full-height font14">
            <p class="colorBlack mar-t10 mar-b15"><i class="visibility-hidden">占位</i><span>会员账号：</span>{{userinfo.username}}
            </p>
            <p class="colorBlack mar-b10"><span>上次登陆时间：</span>{{userinfo.last_login_time}}</p>
            <p @click="SetOut" class="text-center colorWhite pointer hover">退出账号</p>
          </div>
          <div class="check-money flex col just-center">
            <p class="font24">{{userinfo.balance}}</p>
            <p class="flex items-center font14">总余额<i class="iconfont pointer font21">&#xe604;</i></p>
          </div>
        </div>
        <div v-else class="check-two font14">
          <div class="flex">
            <p><i class="visibility-hidden">占</i>旧密码：</p>
            <input v-model="oldPassword" class="border-box" type="password">
          </div>
          <div class="flex">
            <p><i class="visibility-hidden">占</i>新密码：</p>
            <input v-model="newPassword" class="border-box" type="password">
            <span class="font14 colorGray">*6-20个常规字符</span>
          </div>
          <div class="flex">
            <p>确认密码：</p>
            <input v-model="renewPassword" class="border-box" type="password">
            <span class="font14 colorGray">*6-20个常规字符</span>
          </div>
          <p @click="changePassword" class="save-btn font14 colorWhite text-center pointer hover">保存</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import * as Types from '../store/mutations-type';
  import {repassword} from '../api';

  export default {
    name: "Account",
    data() {
      return {
        current: 0,
        oldPassword: '',
        newPassword: '',
        renewPassword: '',
      }
    },
    computed: {
      ...mapState(['userinfo', 'config'])
    },
    created() {
    },
    methods: {
      changePassword() {
        let msg = '';
        if (!this.oldPassword) msg = '请输入旧密码';
        if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(this.newPassword)) || this.newPassword.length < 6 || this.newPassword.length > 12) msg = '会员密码为6-12位的数字和字母组成的密码';
        if (this.renewPassword != this.newPassword) msg = '新密码输入不一致';
        if (msg) {
          this.$dialog.alert({
            title: '重要提醒',
            message: msg,
            lockScroll: false,
          });
          return;
        }
        this.$store.commit('SETLOAD', true);
        repassword({
          user_id: this.userinfo.user_id,
          old_password: this.oldPassword,
          password: this.renewPassword,
          domain: localStorage.agent,
        }, {token: this.userinfo.token}).then((resp) => {
          this.$store.commit('SETLOAD', false);
          if (resp.code != 0) {
            this.$dialog.alert({
              title: '重要提醒',
              message: resp.message,
              lockScroll: false,
            });
            return;
          } else {
            let _this = this;
            this.$toast.success({
              message: resp.data.msg,
              duration: 2000,
              onClose() {
                _this.$store.commit(Types.SETOUT);
                _this.$router.push('/');
              }
            });
          }
        });
      },
      SetOut() { //退出
        this.$store.commit(Types.SETOUT);
        this.$router.push('/');
      },
    }
  }
</script>

<style lang="less">
  .account-box {
    .check-box {
      width: 185px;
      margin-top: 10px;

      p {
        line-height: 50px;
        height: 50px;
        background-color: #ffffff;

        &.current {
          width: 215px;
          background: url("../../static/img/hy_nav_bg.png") no-repeat left center/cover;
          color: #ffffff;
          z-index: 1;
        }
      }
    }

    .check-content {
      margin-left: 10px;
      padding: 30px 40px 0px 40px;

      .content-box {
        background-color: #f8f8f8;
        border-radius: 6px;
        border: solid 1px #ece8e9;

        .check-one > div:first-child {
          p {
            line-height: 1;
          }

          p:nth-child(3) {
            width: 105px;
            height: 33px;
            line-height: 33px;
            background-color: #4e68b7;
            border-radius: 4px;
          }

          span {
            color: #666666;
          }

        }

        .check-money {
          width: 200px;

          p:first-child {
            color: #e09d21;
          }

          p:nth-child(2) {
            color: #666666;

            i {
              color: #4e68b7;
            }
          }
        }

        .check-two {
          margin-left: 90px;
          margin-top: 70px;

          input {
            width: 308px;
            height: 34px;
            background-color: #ffffff;
            box-shadow: inset 0px 1px 1px 0px rgba(136, 136, 136, 0.19);
            border-radius: 6px;
            border: solid 1px #cccccc;
            padding: 0 10px;
            margin: 0px 30px 0px 35px;
          }

          > div {
            line-height: 34px;
            height: 34px;
            margin-bottom: 15px;

          }

          .save-btn {
            width: 105px;
            height: 33px;
            line-height: 33px;
            background-color: #4e68b7;
            border-radius: 4px;
            margin-top: 55px;
            transform: translate(100%, 0);
          }
        }
      }
    }
  }
</style>
