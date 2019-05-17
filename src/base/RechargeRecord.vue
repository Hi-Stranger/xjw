<template>
  <div class="rechargerecord-box full-height full-width backgroundWhite flex col border-box">
    <div class="data-box flex font14">
      <span>日期：</span>
      <DatePicker type="datetime"></DatePicker>
      <span class="mar-l10 mar-r10">至</span>
      <DatePicker type="datetime"></DatePicker>
      <p class="text-center mar-l10 pointer hover colorWhite">查询</p>
    </div>
    <div class="flex1 table-box relative">
      <table class="full-width font14 colorBlack">
        <thead>
        <tr>
          <th class="relative pointer">
            序号
            <span class="flex col absolute">
              <i class="iconfont font12 colorGray current">&#xe643;</i>
              <i class="iconfont font12 colorGray">&#xe642;</i>
            </span>
          </th>
          <th>被操作账号</th>
          <th>被操作姓名</th>
          <th>转账类型</th>
          <th>余额</th>
          <th>上分金额</th>
          <th>下分金额</th>
          <th>上级出入账户</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="l in dataList">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        </tbody>
      </table>
      <div class="page-box absolute full-width flex just-center">
        <Page class="margin-auto" :total="dataList" :page-size="1" show-elevator/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Record",
    data() {
      return {
        dataList: 10
      }
    }
  }
</script>

<style lang="less">
  .rechargerecord-box {
    padding: 20px 25px;

    .data-box {
      height: 35px;
      line-height: 35px;
      margin-bottom: 20px;

      input {
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        width: 175px;
      }

      p {
        width: 105px;
        height: 35px;
        line-height: 35px;
        background-color: #4e68b7;
        border-radius: 4px;
      }
    }

    .table-box {
      line-height: 35px;

      table, table tr th, table tr td {
        border: 1px solid #ffffff;
      }

      table {
        text-align: center;
        border-collapse: collapse;
        padding: 2px;
      }

      thead tr {
        background-color: #ece8e9;
      }

      tbody tr:nth-child(2n) {
        background-color: #ece8e9;
      }

      tbody tr:nth-child(2n+1) {
        background-color: #edf0f8;
      }

      th span {
        right: 15px;
        top: 50%;
        transform: translate(0, -50%);

        i {
          line-height: 1;

          &.current {
            color: #53a1f3;
          }
        }
      }

      .page-box {
        bottom: 0;
      }
    }
  }
</style>
