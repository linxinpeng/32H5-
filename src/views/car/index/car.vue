<template>
    <div class="car">
        <div class="c-banner">
            <img src="../../../assets/image/home/banner.png" />
        </div>
        <div class="c-daikuan">
            <h3>我要贷款</h3>
            <div class="d-content" v-if="false">
                <!-- <img src="../../assets/image/oil/card1.png"/> -->
                <h4>还款中</h4>
                <p>车易贷1号</p>
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td>本期应还</td>
                        <td>到期还款日</td>
                        <td>期数</td>
                    </tr>
                    <tr>
                        <td>￥3493</td>
                        <td>6月20日</td>
                        <td>35</td>
                    </tr>
                </table>
            </div>
            <div class="d-content1" v-if="false">
                <h3 class="c-money">￥ 150,000<img src="../../../assets/image/car/tag.png" /></h3>
                <div class="c-get">马上获取额度</div>
                <div class="tags">
                    <span>申请快捷</span>
                    <span>放款高效</span>
                    <span>期限灵活</span>
                </div>
            </div>
            <div class="d-content">
                <h4 style="color:#F7710D;">审核中</h4>
                <p>您的申请已提交，请耐心等待审核结果。</p>
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td>产品名称</td>
                        <td>申请人</td>
                        <td>申请额度</td>
                    </tr>
                    <tr>
                        <td>车易贷1号</td>
                        <td>陈垚伊</td>
                        <td>￥500,000</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="i-swiper">
            <h3>我要买车<span @click="$router.push('/car-list')">更多车型>></span></h3>
            <div>
                <swiper :options="swiperOption" class="swiper-wrapper">
                    <swiper-slide v-for="(slide, index) in banners" :key="index" class="swiper-slide">
                        <img :src="slide" width="100%"/>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
         <div class="c-swiper">
            <h3>二手车<span @click="$router.push('/old-car-list')">更多活动>></span></h3>
            <div class="s-content">
                <div class="c-item" v-for="i in 8" :key="i+30">
                    <div class="i-img">
                        <img src="../../../assets/image/insurance/b1.png" />
                    </div>
                    <div class="i-right">
                        <p>奥迪 Q7 2019款 45 TFSI S Iine 运动型 2.0T</p>
                        <div class="r-bottom">
                            2018年/0.1万公里 <span>￥56.89万</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'Car',
    components: {
        swiper,
        swiperSlide
    },
    data(){
        return{
            swiperOption: {
                loop: true,
        
            },
            banners:[
                require('../../../assets/image/insurance/b1.png'),
                require('../../../assets/image/insurance/b2.png'),
                require('../../../assets/image/insurance/b3.png')
            ]
        }
    }    
}
</script>
<style lang="less" scoped>
 .swiper-slide{
    width: 90%!important;
    margin: 0 5%;
    transition: all ease .1s;
 }
.swiper-slide-prev{
    right: -12%;
    transform: scale(0.9);
}
.swiper-slide-next{
    left: -12%;
    transform: scale(0.9);
}
     .car{
        font-size: .12rem;
        .c-banner{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .c-daikuan{
            padding: .2rem;
            box-sizing: border-box;
            h3{
                color: #333333;
                font-weight: 500;
                padding-bottom: .05rem;
            }
            .d-content1{
                box-shadow:0px 6px 10px 0px rgba(105,105,105,0.16);
                padding: .3rem .43rem;
                text-align: center;
                .c-money{
                    font-size: .28rem;
                    color: #F7710D;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                        width: .49rem;
                    }
                }
                .c-get{
                    width: 1.68rem;
                    height: .27rem;
                    text-align: center;
                    line-height: .27rem;
                    background: #0063FF;
                    color: #ffffff;
                    margin: .1rem auto;
                    border-radius: .14rem;
                }
                .tags{
                    color: #666666;
                    display: flex;
                    justify-content: center;
                    span{
                        margin: .1rem;
                    }
                }
            }
            .d-content{
                // height: 1.6rem;
                box-shadow:0px 6px 10px 0px rgba(105,105,105,0.16);
                padding: .3rem .43rem;
                h4{
                    display: flex;
                    color: #2450f2;
                    font-size: .19rem;
                    img{
                        width: .17rem;
                        margin-right: .06rem;
                    }
                }
                p{
                    font-size: .12rem;
                    color: #666666;
                    padding: .1rem 0;
                }
                table{
                    text-align: center;
                    color: #333333;
                    border: 1px solid #eeeeee;
                    tr{
                        border-bottom: 1px solid #eeeeee;
                        td{
                            width: 33.3%;
                            line-height: 2;
                            border-right: 1px solid #eeeeee;
                        }
                        
                    }
                }
            }
        }
         .i-swiper{
            h3{
                display: flex;
                width: 3.32rem;
                margin: 0 auto;
                font-size: .14rem;
                color: #333333;
                padding-bottom: .2rem;
                padding-top: .08rem;
                span{
                    margin-left: auto;
                    color: #696969;
                    font-size: .1rem;
                }
            }
            
        }
        .c-swiper{
            padding: 0 .2rem;
            box-sizing: border-box;
             h3{
                display: flex;
                width: 100%;
                margin: 0 auto;
                font-size: .14rem;
                color: #333333;
                padding-bottom: .2rem;
                padding-top: .08rem;
                span{
                    margin-left: auto;
                    color: #696969;
                    font-size: .1rem;
                }
            }
            .s-content{
                .c-item{
                    display: flex;
                    padding: .1rem 0;
                    .i-img{
                        width: 1.25rem;
                        max-height: .6rem;
                        overflow: hidden;
                        img{
                            width: 100%;
                        }
                    }
                    .i-right{
                        padding-left: .2rem;
                        flex-grow: 1;
                        p{
                            text-align: justify;
                            color: #333333;
                            line-height: 1.8;
                        }
                        .r-bottom{
                            display: flex;
                            font-size: .1rem;
                            color: #c3c3c3;
                            font-weight: 300;
                            span{
                                margin-left: auto;
                                font-size: .12rem;
                                color: #F7710D;
                                font-weight: 500;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

   


