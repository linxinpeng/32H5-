<template>
  <div class="home" :style="tp == 0?'padding-top: 46px':'padding-top: 0.4rem'">
    <div class="h-head" :style="tp == 0?'top:46px':'top:0'">
      <span>
        <img src="../../assets/image/home/ddw.png" />
        {{city}}
      </span>
      <span>
        <img src="../../assets/image/home/tq.png" />
        {{temp.weather}} {{days}} {{temp.temperature}} °C
      </span>
    </div>
    <div class="h-banner">
      <img src="../../assets/image/home/banner.png" />
      <div class="b-oil">
        <div class="o-o">
          <span class="o-left">今日油价</span>
          <div class="price-detail">
            <van-swipe :autoplay="3000" vertical class="van-item" :show-indicators="false">
              <van-swipe-item class="van-item-item">
                <div class="price-d1">
                  <span>
                    <b>92#</b> ￥5.98/升
                  </span>
                  <span>
                    <b>95#</b> ￥6.98/升
                  </span>
                </div>
              </van-swipe-item>
              <van-swipe-item class="van-item-item">
                <div class="price-d2">
                  <span>
                    <b>0#</b> ￥4.98/升
                  </span>
                  <span>
                    <b>97#</b> ￥8.98/升
                  </span>
                </div>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
      </div>
    </div>
    <div class="h-tab">
      <div class="t-item" @click="$router.push('/layout/insurance')">
        <img src="../../assets/image/home/tab1.png" />
        买保险
      </div>
      <div class="t-item" @click="$router.push('/apply-loan')">
        <img src="../../assets/image/home/tab2.png" />
        办车贷
      </div>
      <div class="t-item" @click="$router.push('/rules')">
        <img src="../../assets/image/home/tab3.png" />
        查违章
      </div>
      <div class="t-item" @click="$router.push('/driver')">
        <img src="../../assets/image/home/tab4.png" />
        查驾照
      </div>
    </div>
    <div class="h-swiper" v-if="showActive">
      <div class="s-swiper">
        <img src="../../assets/image/home/notice.png" />
        <div class="s-inner">
          <van-swipe :autoplay="3000" vertical class="van-item" :show-indicators="false">
            <van-swipe-item class="van-item-item" v-for="(item,index) in swiperSlides" :key="index">
              <p @click="$router.push('/new-detail')">{{item}}</p>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="s-close" @click="showActive = false">
        <img src="../../assets/image/home/close.png" />
      </div>
    </div>
    <div style="width: 100%;height: 10px;background: #F2F2F2"></div>
    <div class="h-road">
      <h3>线路信息</h3>
      <div class="r-item">
        <div class="i-inner">
          <img src="../../assets/image/home/car.png" />
          <select>
            <option>闽E 6692G</option>
            <option>闽D P6W71</option>
          </select>
        </div>
      </div>
      <div class="r-item">
        <div class="i-goto">
          <div class="i-to">
            <span class="t1">你在哪出发</span>
            <div class="address" @click="$router.push('/map/to')">{{toAddress.name || toAddress.formattedAddress || '定位失败，请手动定位'}}</div>
          </div>
          <div class="i-go">
            <span class="t2">你要去哪儿</span>
            <div class="address" @click="$router.push('/map/from')">{{goAddress.name || toAddress.formattedAddress || '定位失败，请手动定位'}}</div>
          </div>
        </div>
      </div>
      <div class="r-item" @click="toRoadGH">
        <div class="xl">
          <h3>
            <img src="../../assets/image/home/dw.png" />线路规划
          </h3>
          <div class="i-xl">
            <div class="x-info">
              <p>
                预计用时
                <b>最快</b>
              </p>
              <h3>{{time}}</h3>
            </div>
            <div class="x-lk">
              <span v-for="(item,index) in roads" :key="index" :style="`display:inline-block;width:${item.width}rem;height: 0.04rem;background:${item.color}`"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="r-item" @click="toLimit" v-if="false">
        <div class="xx">
          <h3>
            <img src="../../assets/image/home/carstop.png" />限行信息
          </h3>
          <div class="x-xl">
            <h3>未发现限行信息</h3>
            <img src="../../assets/image/home/facae.png" />
          </div>
        </div>
      </div>
      <div class="r-item" @click="toNearbyOil">
        <div class="xx">
          <h3>
            <img src="../../assets/image/home/jy.png" />沿途油站
          </h3>
          <div class="x-xl">
            <h3>
              沿途共有
              <em style="color: #03BF56;font-style: normal;">{{oils.length}}</em>个加油站
            </h3>
            <img src="../../assets/image/home/star.png" />
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%;height: 10px;background: #F2F2F2"></div>
    <div class="h-active">
      <div class="a-title">
        精彩活动
        <span @click="$router.push('/news?index=3')">更多活动</span>
      </div>
      <div class="a-img">
        <img src="../../assets/image/home/active1.png" />
      </div>
      <div class="a-img">
        <img src="../../assets/image/home/active2.png" />
      </div>
      <div class="a-img">
        <img src="../../assets/image/home/active3.png" />
      </div>
    </div>
    <div style="width: 100%;height: 10px;background: #F2F2F2"></div>
    <div class="h-active">
      <div class="a-title">
        行业资讯
        <span @click="$router.push('/news?index=2')">更多资讯</span>
      </div>
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
    <div id="container"></div>
  </div>
</template>
<script>
import AMap from "@/assets/js/AMap.js";
import { Swipe, SwipeItem } from "vant";
export default {
  name: "Home",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      showActive: true,
      swiperSlides: [
        "【活动】办卡充值1000送70",
        "【活动】办卡充值1200送660",
        "【活动】办卡充值1300送700",
        "【活动】办卡充值1400送1000"
      ],
      map: null,
      city: "定位中...",
      days: "",
      temp: "",
      toAddress: '',
      goAddress: '',
      time: '',
      roads:[],
      oils:[]
    };
  },
  created(){
     if(sessionStorage.getItem('to')){
        this.toAddress = JSON.parse(sessionStorage.getItem('to'))
        console.log(this.toAddress)
    }
    if(sessionStorage.getItem('from')){
        this.goAddress = JSON.parse(sessionStorage.getItem('from'))
    }
    this.setRoad();
  },
  mounted() {
    this.init();
    this.initAddress();
    this.getDays();
   
  },
  methods: {
    setRoad(){
        if(this.toAddress.location&&this.goAddress.location){
            let that = this;
            AMap().then(AMap => {
                AMap.plugin('AMap.Driving',function(){
                    var driving = new AMap.Driving({
                        // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
                        policy: AMap.DrivingPolicy.LEAST_TIME,
                        extensions: 'all',
                        province: '粤',
                        number: 'A775N5'
                    })
                    driving.setProvinceAndNumber('粤','A775N5')
                    var startLngLat = [that.toAddress.location.lng, that.toAddress.location.lat]
                    var endLngLat = [that.goAddress.location.lng, that.goAddress.location.lat]
                    driving.search(startLngLat, endLngLat, function (status, result) {
                        // console.log(result)
                        var t = result.routes[0].time * 1000
                        var tempTime = that.$moment.duration(t);
                        that.time = tempTime.hours() +'小时'+ tempTime.minutes()+'分';
                        that.setTraffic(result.routes)
                    })
                    
                })
            })
        }
    },
    toRoadGH(){
        if(!this.toAddress.location){
            this.$dialog.alert({
                title: '提示',
                message: '请输入起始点'
            }).then(() => {
                // on close
                
            });
            return
        }
        if(!this.goAddress.location){
            this.$dialog.alert({
                title: '提示',
                message: '请输入目的地'
            }).then(() => {
                // on close
               
            });
            return
        }
        location.href = `//uri.amap.com/navigation?from=${this.toAddress.location.lng},${this.toAddress.location.lat},${this.goAddress.name}&to=${this.goAddress.location.lng},${this.goAddress.location.lat},${this.toAddress.name}&mode=car&policy=1&src=mypage&coordinate=gaode&callnative=1`
    },
    init() {
      let that = this;
      AMap().then(
        AMap => {
          //地图异步改成同步加载
          
          AMap.plugin(["AMap.CitySearch", "AMap.Weather"], function() {
            let citySearch = new AMap.CitySearch();
            citySearch.getLocalCity(function(status, res) {
              if (status === "complete" && res.info === "OK") {
                // console.log(res);
                that.city = res.city;
                let weather = new AMap.Weather();
                weather.getLive(res.city, function(err, data) {
                  that.temp = data;
                });
              } else {
                this.$dialog
                  .alert({
                    title: "提示",
                    message: "定位失败"
                  })
                  .then(() => {
                    // on close
                  });
              }
            });
          });
        },
        e => {
          console.log("地图加载失败", e);
        }
      );
    },
    getDays() {
      this.days = this.$moment().format("dddd");
    },
    initAddress() {
      let that = this;
      AMap().then(
        AMap => {
            that.map = new AMap.Map("container", {
                zoom: 17
            });
          //地图异步改成同步加载
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
              zoomToAccuracy: true
            });
            // console.log(11)
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
        this.toAddress = data;
        this.nearbyOil(data.position.lng,data.position.lat)
        sessionStorage.setItem('posi',JSON.stringify(data))
    },
    onError(data){
        // console.log(data)
        this.$dialog.alert({
            title: '提示',
            message: '地理位置被拒绝。'
        }).then(() => {
            // on close
        });
    },
    //周边油站
    async nearbyOil(lng,lat){
        const resp = await this.axios.get(`https://restapi.amap.com/v3/place/around?key=807f461a61233d5241c7c67bd1ede00c&location=${lng},${lat}&types=010100&radius=1000&sortrule=distance&extensions=all`)
        if(resp.data.infocode == 10000){
            this.oils = resp.data.pois;
            sessionStorage.setItem('oils',JSON.stringify(resp.data.pois))
        }
    },
    toNearbyOil(){
        this.$router.push({path:'/gas-station'})
    },
    //设置路况
    setTraffic(arr){
        console.log(arr)
        if(arr.length > 0){
            arr.forEach(v=>{
                v.steps.forEach( step =>{
                   this.roads = this.roads.concat(step.tmcs)
                })
            })
            this.roads.forEach(item =>{
                item.width = item.distance / arr[0].distance
                if(item.status == '未知'){
                    item.color = "#234cfa";
                }else if(item.status == '畅通'){
                    item.color = '#03a540'
                }else if(item.status == '缓行'){
                    item.color = '#fa7423'
                }else if(item.status == '拥堵'){
                    item.color = '#fa2323'
                }else if(item.status == '严重拥堵'){
                    item.color = "#7e0000"
                }
            })
            
        }
    },
    async toLimit(){
     
        // const resp = await this.$axios.post('https://tsapi.amap.com/v1/restrict',)
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  font-size: 0.12rem;
  background: #ffffff;
  padding-top: 0.4rem;
  .h-head {
    display: flex;
    justify-content: space-around;
    height: 0.4rem;
    align-items: center;
    position: fixed;
    // top: 46px;
    left: 0;
    width: 100%;
    background: #ffffff;
    z-index: 99;
    span {
      img {
        width: 0.11rem;
        margin-right: 3px;
      }
    }
  }
  .h-banner {
    width: 100%;
    position: relative;

    img {
      width: 100%;
    }
    .b-oil {
      width: 3.35rem;
      height: 0.46rem;
      position: absolute;
      bottom: -0.23rem;
      left: 50%;
      transform: translateX(-50%);
      background: #ffffff;
      border-radius: 3px;
      box-shadow: 0 0 1px #cccccc;
      .o-o {
        display: flex;
        text-align: center;
        height: 100%;
        font-size: 0.12rem;
        align-items: center;
        .o-left {
          width: 33.33%;
          line-height: 0.46rem;
          color: #333333;
        }
        .price-detail {
          width: 66.6%;
          float: right;
          overflow: hidden;
          height: 0.4rem;
          .van-item {
            height: 100%;
            .van-item-item {
              height: 100%;
            }
          }
          .price-d1,
          .price-d2 {
            width: 100%;
            height: 0.4rem;
            display: flex;
            align-items: center;
            span {
              float: left;
              width: 50%;
              height: 100%;
              display: flex;
              align-items: center;
              b {
                background: #edb224;
                border-radius: 3px;
                padding: 0.02rem 0.05rem;
                margin-right: 4px;
                font-weight: 400;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
  .h-tab {
    display: flex;
    justify-content: space-between;
    width: 3rem;
    margin: 0.35rem auto 0.1rem auto;
    .t-item {
      width: 19%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #333333;
      font-weight: 500;
      img {
        width: 100%;
      }
    }
  }
  .h-swiper {
    color: red;
    width: 3rem;
    margin: 0 auto;
    display: flex;
    overflow: hidden;
    align-items: center;
    margin-top: 0.16rem;
    margin-bottom: 0.16rem;
    .s-close {
      width: 0.09rem;
      height: 0.09rem;
      img {
        width: 100%;
      }
    }
    .s-swiper {
      flex-grow: 1;
      display: flex;
      align-items: center;
      img {
        width: 0.2rem;
      }
      .s-inner {
        width: calc(3rem - 50px);
        padding-left: 5px;
        font-size: 0.12rem;
        height: 0.4rem;
        .van-item {
          height: 100%;
          .van-item-item {
            height: 0.1%;
            p {
              height: 100%;
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
  .h-road {
    padding: 0.15rem 0.2rem;
    box-sizing: border-box;
    .r-item {
      padding: 0.1rem 0.3rem;
      box-sizing: border-box;
      box-shadow: 0 0 3px #f2f2f2;
      margin-top: 10px;
      .i-inner {
        display: flex;
        align-items: center;
        img {
          width: 0.43rem;
        }
        select {
          border: none;
          outline: none;
          margin-left: 0.5rem;
          background: transparent;
        }
      }
      .i-goto {
        .i-to,
        .i-go {
          display: flex;
          span {
            color: #9f9f9f;
            font-weight: 300;
            display: flex;
            align-items: center;
            width: .89rem;
          }
          .address {
            padding-left: 10px;
            color: #333333;
            flex-grow: 1;
          }
          span.t1::before {
            content: "";
            width: 0.05rem;
            height: 0.05rem;
            border-radius: 50%;
            background: #4e93fb;
            display: inline-block;
            margin-right: 10px;
          }
          span.t2::before {
            content: "";
            width: 0.05rem;
            height: 0.05rem;
            border-radius: 50%;
            background: #0fc320;
            display: inline-block;
            margin-right: 10px;
          }
        }
        .i-to {
          padding-bottom: 30px;
        }
      }
      .xl {
        h3 {
          color: #333333;
          font-weight: 400;
          img {
            width: 0.15rem;
            margin-right: 0.12rem;
          }
        }
        .i-xl {
          display: flex;
          margin-top: 18px;
          .x-info {
            width: 40%;
            text-align: right;
            h3 {
              padding-top: 3px;
              font-weight: bold;
            }
            b {
              background: #285bf1;
              padding: 1px 3px;
              color: #fff;
              margin-left: 3px;
              font-size: 0.1rem;
            }
          }
          .x-lk {
            flex-grow: 1;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
        }
      }
      .xx {
        h3 {
          color: #333333;
          font-weight: 400;
          img {
            width: 0.15rem;
            margin-right: 0.12rem;
          }
        }
        .x-xl {
          display: flex;
          margin-top: 18px;
          h3 {
            padding-left: 0.28rem;
            font-weight: bold;
          }
          img {
            width: 0.22rem;
            align-self: start;
            margin-left: auto;
          }
        }
      }
    }
  }
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
</style>
