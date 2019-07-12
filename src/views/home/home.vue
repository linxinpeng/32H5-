<template>
    <div class="home">
        <div class="h-head">
            <span><img src="../../assets/image/home/ddw.png"/>漳州市</span>
            <span><img src="../../assets/image/home/tq.png"/>Sunny 18-24 C</span>
        </div>
        <div class="h-banner">
            <img src="../../assets/image/home/banner.png" />
            <div class="b-oil">
                <div class="o-o">
                    <span class="o-left">今日油价</span>
                    <div class="price-detail">
                        <van-swipe :autoplay="3000" vertical class="van-item" :show-indicators="false">
                            <van-swipe-item class="van-item-item" >
                                <div class="price-d1">
                                    <span><b>92#</b> ￥5.98/升</span>
                                    <span><b>95#</b> ￥6.98/升</span>
                                </div>
                            </van-swipe-item>
                            <van-swipe-item class="van-item-item">
                                <div class="price-d2">
                                    <span><b>0#</b> ￥4.98/升</span>
                                    <span><b>97#</b> ￥8.98/升</span>
                                </div>
                            </van-swipe-item>
                        </van-swipe>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-tab">
            <div class="t-item">
                <img src="../../assets/image/home/tab1.png" />
                买保险
            </div>
            <div class="t-item">
                <img src="../../assets/image/home/tab2.png" />
                买车贷
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
        <div class="h-swiper">
            <div class="s-swiper">
                <img src="../../assets/image/home/notice.png" />
                <div class="s-inner">
                    <van-swipe :autoplay="3000" vertical class="van-item" :show-indicators="false">
                        <van-swipe-item class="van-item-item"  v-for="(item,index) in swiperSlides" :key="index">
                            <p>{{item}}</p>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <div class="s-close"><img src="../../assets/image/home/close.png" /></div>
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
                        <span class="t1">你在哪出发</span><div class="address">【漳州】欣荣盛世榔榆1栋15楼</div>
                    </div>
                    <div class="i-go">
                        <span class="t2">你要去哪儿</span><div class="address">【漳州】欣荣盛世榔榆1栋15楼</div>
                    </div>
                </div>
            </div>
            <div class="r-item">
                <div class="xl">
                    <h3><img src="../../assets/image/home/dw.png" />线路规划</h3>
                    <div class="i-xl">
                        <div class="x-info">
                            <p>预计用时 <b>最快</b></p>
                            <h3>1小时30分</h3>
                        </div>
                        <div class="x-lk">
                            <img src="../../assets/image/home/g1.png" v-for="i in 3" :key="i" />
                            <img src="../../assets/image/home/yellow.png" v-for="i in 3" :key="i+3" />
                            <img src="../../assets/image/home/sred.png" v-for="i in 3" :key="i+6" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="r-item">
                <div class="xx">
                    <h3><img src="../../assets/image/home/carstop.png" />线路规划</h3>
                    <div class="x-xl">
                        <h3>未发现限行信息</h3>
                        <img src="../../assets/image/home/facae.png" />
                    </div>
                </div>
            </div>
            <div class="r-item" @click="$router.push('/gas-station')">
                <div class="xx">
                    <h3><img src="../../assets/image/home/jy.png" />沿途油站</h3>
                    <div class="x-xl">
                        <h3>沿途共有<em style="color: #03BF56;font-style: normal;">3</em>个加油站</h3>
                        <img src="../../assets/image/home/star.png" />
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%;height: 10px;background: #F2F2F2"></div>
        <div class="h-active">
            <div class="a-title">精彩活动<span>更多活动</span></div>
            <div class="a-img"><img src="../../assets/image/home/active1.png" /></div>
            <div class="a-img"><img src="../../assets/image/home/active2.png" /></div>
            <div class="a-img"><img src="../../assets/image/home/active3.png" /></div>
        </div>
        <div style="width: 100%;height: 10px;background: #F2F2F2"></div>
        <div class="h-active">
            <div class="a-title">行业资讯<span>更多资讯</span></div>
            <div class="a-item" v-for="i in 10" :key="i + 10" @click="$router.push('/news')">
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
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    name:'Home',
    components: { 
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem
     },
    data() {
      return {
        swiperSlides: [
            '【活动】办卡充值1000送70',
            '【活动】办卡充值1200送660',
            '【活动】办卡充值1300送700',
            '【活动】办卡充值1400送1000'
        ]
      }
    },
}
</script>
<style lang="less" scoped>
    .home{
        font-size: .12rem;
        background: #ffffff;
        padding-top: .4rem;
        .h-head{
            display: flex;
            justify-content: space-around;
            height: .4rem;
            align-items: center;
            position: fixed;
            top: 46px;
            left: 0;
            width: 100%;
            background: #ffffff;
            z-index: 99;
            span{
                img{
                    width: .11rem;
                    margin-right: 3px;
                }
            }
        }
        .h-banner{
            width: 100%;
            position: relative;
           
            img{
                width: 100%;
            }
            .b-oil{
                width: 3.35rem;
                height: .46rem;
                position: absolute;
                bottom: -0.23rem;
                left: 50%;
                transform: translateX(-50%);
                background: #ffffff;
                 border-radius: 3px;
                box-shadow: 0 0 1px #cccccc;
                .o-o{
                    display: flex;
                    text-align: center;
                    height: 100%;
                    font-size: .12rem;
                    align-items: center;
                    .o-left{
                        width: 33.33%;
                        line-height: .46rem;
                        color: #333333;
                    }
                     .price-detail{
                        width: 66.6%;
                        float: right;
                        overflow: hidden;
                        height: .4rem;
                        .van-item{
                            height: 100%;
                            .van-item-item{
                                height: 100%;
                            }
                        }
                        .price-d1,.price-d2{
                            width: 100%;
                            height: .4rem;
                            display: flex;
                            align-items: center;
                            span{
                                float: left;
                                width: 50%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                b{
                                    background: #EDB224;
                                    border-radius: 3px;
                                    padding: .02rem 0.05rem;
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
        .h-tab{
            display: flex;
            justify-content: space-between;
            width: 3rem;
            margin: .35rem auto .1rem auto;
            .t-item{
                width: 19%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #333333;
                font-weight: 500;
                img{
                    width: 100%;
                }
            }
        }
        .h-swiper{
            color: red;
            width: 3rem;
            margin: 0 auto;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin-top: .16rem;
            margin-bottom: .16rem;
            .s-close{
                width: .09rem;
                height: .09rem;
                img{
                    width: 100%;
                }
            }
            .s-swiper{
                flex-grow: 1;
                display: flex;
                align-items: center;
                img{
                    width: .2rem;
                }
                .s-inner{
                    width: calc( 3rem - 50px);
                    padding-left: 5px;
                    font-size: .12rem;
                    height: .4rem;
                    .van-item{
                        height: 100%;
                        .van-item-item{
                            height: .100%;
                            p{
                                height: 100%;
                                display: flex;
                                align-items: center;
                            }
                        }
                    }
                }
            }
        }
        .h-road{
            padding: .15rem .2rem;
            box-sizing: border-box;
            .r-item{
                padding: .1rem .3rem;
                box-sizing: border-box;
                box-shadow: 0 0 3px #f2f2f2;
                margin-top: 10px;
                .i-inner{
                    display: flex;
                    align-items: center;
                    img{
                        width: .43rem;
                    }
                    select{
                        border: none;
                        outline: none;
                        margin-left: .5rem;
                        background: transparent;
                    }
                }
                .i-goto{
                    .i-to,.i-go{
                        display: flex;
                        span{
                            color: #9f9f9f;
                            font-weight: 300;
                            display: flex;
                            align-items: center;
                        }
                        .address{
                            padding-left: 10px;
                            color: #333333;
                        }
                        span.t1::before{
                            content: '';
                            width: .05rem;
                            height: .05rem;
                            border-radius: 50%;
                            background: #4E93FB;
                            display: inline-block;
                            margin-right: 10px;
                        }
                        span.t2::before{
                            content: '';
                            width: .05rem;
                            height: .05rem;
                            border-radius: 50%;
                            background: #0FC320;
                            display: inline-block;
                            margin-right: 10px;
                        }
                    }
                    .i-to{
                        padding-bottom: 30px;
                    }
                }
                .xl{
                    h3{
                        color: #333333;
                         font-weight: 400;
                        img{
                            width: .15rem;
                            margin-right:.12rem;
                        }
                    }
                    .i-xl{
                        display: flex;
                        margin-top: 18px;
                        .x-info{
                            width: 40%;
                            text-align: right;
                            h3{
                                padding-top: 3px;
                                font-weight: bold;
                            }
                            b{
                                background: #285BF1;
                                padding: 1px 3px;
                                color: #fff;
                                margin-left: 3px;
                                font-size: .10rem;
                            }
                        }
                        .x-lk{
                            flex-grow: 1;
                            text-align: center;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            img{
                                height: .04rem;
                                width: .13rem;
                            }
                        }
                    }
                }
                .xx{
                      h3{
                        color: #333333;
                        font-weight: 400;
                        img{
                            width: .15rem;
                            margin-right: .12rem;
                        }
                    }
                    .x-xl{
                        display: flex;
                        margin-top: 18px;
                        h3{
                            padding-left: .28rem;
                            font-weight: bold;
                        }
                        img{
                            width: .22rem;
                            align-self: start;
                            margin-left: auto;
                        }
                    }
                }
            }
        }
        .h-active{
            padding: .1rem .2rem;
            box-sizing: border-box;
            .a-title{
                font-size: .14rem;
                color: #333333;
                font-weight: 500;
                display: flex;
                margin-bottom: 10px;
                span{
                    color: #696969;
                    font-size: .10rem;
                    margin-left: auto;
                }
            }
            .a-img{
                width: 100%;
                img{
                    width: 100%;
                    margin-bottom: 8px;
                }
            }
            .a-item{
                display: flex;
                padding: .2rem 0;
                border-bottom: 1px solid #f9f8fe;
                box-sizing: border-box;
                cursor: pointer;
                .i-left{
                    width: 1.5rem;
                    box-sizing: border-box;
                    overflow: hidden;
                    img{
                        width: 100%;
                    }
                }
                .i-right{
                    flex-grow: 1;
                    padding-left: .08rem;
                    box-sizing: border-box;
                    p{
                        font-size: .14rem;
                        color: #333333;
                        text-align: justify;
                        line-height: 1.5;
                    }
                    span{
                        padding-top: 10px;
                        font-size: .12rem;
                        color: #999999;
                    }
                }
            }
            .a-item:last-child{
                border: none;
            }
        }
    }
</style>
