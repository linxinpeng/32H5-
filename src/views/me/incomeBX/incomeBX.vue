<template>
  <div class="income-BX">
    <van-nav-bar title="收益明显" @click-left="$router.go(-1)" left-arrow fixed :z-index="109" />
    <div class="banner">
      <van-search placeholder="请输入客户名称" background="#f6f6f6" v-model="value" />
      <div class="time">
        <div class="start" @click="showTime = true">{{start}}</div>
        <span></span>
        <div class="end" @click="showTime2 = true">{{end}}</div>
      </div>
    </div>
    <div class="inner">
        <div class="item" v-for="i in 3" :key="i">
            <h3>汽车商业险<span class="number">（39489384383434）</span><van-tag type="primary">待结算</van-tag></h3>
            <p>投保金额：￥989，000</p>
            <p>客户名称：陈欢欢</p>
            <p>完成时间：未完成<span>预估收益：<strong>￥45.9</strong></span></p>
        </div>
    </div>
    <van-popup v-model="showTime" position="bottom">
      <van-datetime-picker v-model="startTime" type="date" @confirm="startConfirm" @cancel="showTime = false"/>
    </van-popup>
    <van-popup v-model="showTime2" position="bottom">
      <van-datetime-picker v-model="endTime" type="date"  @confirm="endConfirm" @cancel="showTime2 = false"/>
    </van-popup>
  </div>
</template>
<script>
import { Search, DatetimePicker, Popup ,Tag } from "vant";
export default {
  name: "IncomeBX",
  components: {
    [Search.name]: Search,
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
    [Tag.name]: Tag
  },
  data() {
    return {
      value: "",
      startTime: '2019-09-09',
      start: '2019-09-09',
      end: '2019-09-09',
      endTime: '2019-09-09',
      showTime: false,
      showTime2: false
    }
  },
  methods:{
      startConfirm(value){
          this.start = this.$moment(value).format("YYYY-MM-DD");
          this.showTime = false;
      },
      endConfirm(value){
          this.end = this.$moment(value).format("YYYY-MM-DD");
          this.showTime2 = false;
      }
  }
};
</script>
<style lang="less" scoped>
.income-BX {
  padding-top: 46px;
  font-size: 0.12rem;
  .banner {
    background: #f6f6f6;
    padding: 0.1rem 0.2rem;
    .van-search {
      padding: 10px 0;
    }
    .van-search__content {
      background: #ffffff;
    }
    .time {
      display: flex;
      margin-top: 0.02rem;
      align-items: center;
      padding-bottom: 0.09rem;
      .start,
      .end {
        width: 1.11rem;
        height: 0.3rem;
        background: #ffffff;
        text-align: center;
        line-height: 0.3rem;
        color: #c3c3c3;
      }
      span {
        width: 0.12rem;
        height: 1px;
        background: #c3c3c3;
        margin: 0 0.1rem;
      }
    }
  }
    .inner{
        padding: .15rem .2rem;
        background: #ffffff;
        .item{
            padding: .15rem .2rem;
            box-shadow:0px 1.5px 4.5px 0px rgba(29,29,29,0.18);
            border-radius: 1.5px;
            margin-bottom: .1rem;
            h3{
                display: flex;
                font-size: #333333;
                font-size: .14rem;
                font-weight: 500;
                padding-bottom: .05rem;
                .number{
                    color: #666666;
                    font-size: .12rem;
                }
                .van-tag {
                    margin-left: auto;
                }
            }
            p{
                color: #666666;
                font-size: .12rem;
                line-height: 1.8;
                display: flex;
                align-items: center;
                span{
                    margin-left: auto;
                    strong{
                        color: #FFA115;
                        font-size: .19rem;
                        font-weight: 500;
                    }
                }
            }
        }
    }
}
</style>
