
<template>
  <div class="map" :style="tp == 0?'padding-top: 46px':'padding-top: 0'">
    <van-nav-bar v-if="tp == 0" title="高德地图" @click-left="$router.go(-1)" left-arrow fixed />
    <div id="container" :style="`height: ${h}px;width: 100%;`"></div>
    <div class="ser" :style="tp == 0?'top: 46px':'top: 0'">
      <van-search placeholder="请输入搜索关键词" v-model="value" @clear="isShow = false" @input="select" />
      <transition name="fade">
        <div class="box" v-if="isShow">
          <van-cell
            v-for="(item,index) in addrs"
            :key="index"
            :title="item.name"
            :value="item.district"
            @click="onSearch(item.name)"
          />
        </div>
      </transition>
    </div>
    <van-action-sheet v-model="show" :overlay="false">
      <div class="head van-cell"><van-button type="default" size="small" @click="show = false">取消</van-button><van-button type="primary" size="small" @click="toRouter">确定</van-button></div>
      <van-cell @click="onSelect(item,index)" v-for="(item,index) in actions" :key="item.id" :title="item.name" value="" :label="item.address" >
        <van-icon
          v-if="flag == index"
          slot="right-icon"
          color="rgb(0,169,80)"
          name="success"
          style="line-height: inherit;margin-left: auto;"
        />
      </van-cell>
    </van-action-sheet>
  </div>
</template>
<script>
import AMap from "@/assets/js/AMap.js";
import { Search,ActionSheet  } from "vant";
export default {
  name: "Map",
  components: {
    [Search.name]: Search,
    [ActionSheet.name]: ActionSheet
  },
  data() {
    return {
      map: null,
      h: window.innerHeight,
      value: "",
      placeSearch: null,
      addrs: [],
      isShow: false,
      show: false,
      actions:[],
      flag: 0,
      msg:''
    };
  },
  mounted() {
    this.initAMap();
  },
  methods: {
    initAMap() {
      let that = this;
      AMap().then(
        AMap => {
          //地图异步改成同步加载
          that.map = new AMap.Map("container", {
            zoom: 17
          });
          AMap.plugin("AMap.Geolocation", function() {
            var geolocation = new AMap.Geolocation({
              // 是否使用高精度定位，默认：true
              enableHighAccuracy: true,
              // 设置定位超时时间，默认：无穷大
              timeout: 10000,
              // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
              buttonOffset: new AMap.Pixel(10, 20),
              //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
              zoomToAccuracy: true,
              //  定位按钮的排放位置,  RB表示右下
              buttonPosition: "RB",
              zoomToAccuracy: true,
              extensions: 'all'
            });
            that.map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, "complete", that.onComplete);
            AMap.event.addListener(geolocation, "error", that.onError);
          });
        },
        e => {
          console.log("地图加载失败", e);
        }
      );
    },
    onComplete(data){
      this.msg = data.pois[0]
      data.pois.forEach((v,index) =>{
        if(index <=4){
          this.actions.push(v);
        }
      })
      this.show = true;
    },
    onError(data){
      this.$dialog.alert({
        title: '提示',
        message: '地理位置被拒绝。'
      }).then(() => {
        // on close
      });
    },
    select() {
      this.show = false
      let that = this;
      AMap().then(
        AMap => {
          AMap.plugin("AMap.Autocomplete", function() {
            var autoComplete = new AMap.Autocomplete({ city: "全国" });
            autoComplete.search(that.value, function(status, result) {
              if (status == "complete") {
                that.isShow = true;
                that.addrs = result.tips;
              }
            });
          });
        },
        e => {
          console.log("地图加载失败", e);
        }
      );
    },
    onSearch(val) {
      let that = this;
      this.isShow = false;
      AMap().then(
        AMap => {
          AMap.plugin("AMap.PlaceSearch", function() {
            var placeSearch = new AMap.PlaceSearch({
              pageSize: 5, // 单页显示结果条数
              pageIndex: 1, // 页码
              city: "全国", // 兴趣点城市
              citylimit: true, //是否强制限制在设置的城市内搜索
              map: that.map, // 展现结果的地图实例
              autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
            });
            placeSearch.search(val, function(status, result) {
               that.actions = result.poiList.pois;
               console.log(result.poiList)
               that.msg = result.poiList.pois[0];
               that.show = true;
              // 查询成功时，result即对应匹配的POI信息
              // console.log(result,status)
            });
          });
        },
        e => {
          console.log("地图加载失败", e);
        }
      );
    },
    onSelect(item,index){
      this.flag = index
      // this.show =false
      this.msg = item;
    },
    toRouter(){
      this.$route.params.ty == 'to'?sessionStorage.setItem('to',JSON.stringify(this.msg)):sessionStorage.setItem('from',JSON.stringify(this.msg))
      // sessionStorage.setItem('')
      this.$router.push('/layout/home')

    }
  }
};
</script>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
 .van-cell__value{
    flex: none;
  }
  .head{
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 15px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
    justify-content: space-between;
    // border-bottom: 1px solid #ebedf0;
  }
.map {
  // padding-top: 46px;
  font-size: 0.12rem;
  box-sizing: border-box;
 
  .ser {
    position: fixed;
    width: 100%;
    z-index: 99;
    .van-search__content {
      background: #fff;
    }
    .van-search {
      background: transparent !important;
      padding-bottom: 0;
    }
    .box {
      padding: 0 16px;
      height: 220px;
      overflow-y: auto;
    }
  }
}
</style>

