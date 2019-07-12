<template>
  <div class="news">
    <van-nav-bar title="资讯中心" @click-left="$router.go(-1)" left-arrow fixed />
    <div class="n-tab">
      <van-tabbar v-model="active" fixed style="bottom: auto;">
        <van-tabbar-item>全部</van-tabbar-item>
        <van-tabbar-item>热点新闻</van-tabbar-item>
        <van-tabbar-item>行业资讯</van-tabbar-item>
        <van-tabbar-item>精彩活动</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="n-list">
      <div class="h-active">
        <div class="a-item" v-for="i in 10" :key="i + 10" @click="$router.push('/new-detail')">
          <div class="i-left">
            <img src="../../assets/image/home/info1.png" />
          </div>
          <div class="i-right">
            <p>热点】 喜大普奔！6月12日油价大降0.35元/升</p>
            <span>2019-06-13</span>
          </div>
        </div>
      </div>
    </div>
    <van-tabbar v-model="active" active-color="#0063FF" inactive-color="#b2b2b2" route>
      <van-tabbar-item replace to="/layout/oil">
        <span>加油</span>
        <img slot="icon" src="../../assets/image/layout/oil1.png" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/layout/insurance">
        <span>保险</span>
        <img slot="icon" src="../../assets/image/layout/insurance1.png" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/layout/home">
        <span>首页</span>
        <img slot="icon" src="../../assets/image/layout/home.png" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/layout/car">
        <span>车辆</span>
        <img slot="icon" src="../../assets/image/layout/car1.png" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/layout/me">
        <span>我的</span>
        <img
        slot="icon"
        src=../../assets/image/layout/me1.png
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "News",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0,
    }
  }
};
</script>
<style lang="less" scoped>
.news {
  padding-top: 40px;
  font-size: 0.12rem;
  padding-bottom: 50px;
  .n-list {
      padding-top: 50px;
    .h-active {
      padding: 0.1rem 0.2rem;
      box-sizing: border-box;
      .a-title {
        font-size: 0.14rem;
        color: #333333;
        font-weight: 500;
        display: flex;
        margin-bottom: 10px;
        span {
          color: #696969;
          font-size: 0.1rem;
          margin-left: auto;
        }
      }
      .a-img {
        width: 100%;
        img {
          width: 100%;
          margin-bottom: 8px;
        }
      }
      .a-item {
        display: flex;
        padding: 0.2rem 0;
        border-bottom: 1px solid #f9f8fe;
        box-sizing: border-box;
        cursor: pointer;
        .i-left {
          width: 1.5rem;
          box-sizing: border-box;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .i-right {
          flex-grow: 1;
          padding-left: 0.08rem;
          box-sizing: border-box;
          p {
            font-size: 0.14rem;
            color: #333333;
            text-align: justify;
            line-height: 1.5;
          }
          span {
            padding-top: 10px;
            font-size: 0.12rem;
            color: #999999;
          }
        }
      }
      .a-item:last-child {
        border: none;
      }
    }
  }
}
</style>


