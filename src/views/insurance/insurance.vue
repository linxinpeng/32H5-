<template>
    <div :style="tp == 0?'padding-top: 0':'padding-top: 0'" class="insurance">
        <div class="h-tab">
            <div class="t-item" @click="$router.push('/my-policy')">
                <img src="../../assets/image/home/tab1.png" />
                我的保单
            </div>
            <div class="t-item" @click="$router.push('/load-save')">
                <img src="../../assets/image/home/tab2.png" />
                道路援救
            </div>
            <div class="t-item" @click="$router.push('/risk-report')">
                <img src="../../assets/image/home/tab3.png" />
                出险报案
            </div>
            <div class="t-item" @click="$router.push('/claim-record')">
                <img src="../../assets/image/home/tab4.png" />
                申请理赔
            </div>
        </div>
        <div class="i-banner">
            <img class="banner" src="../../assets/image/home/banner.png" />
            <div class="b-content">
                <h3>车险报价</h3>
                <div class="c-desc">
                    <p>使用32车管家购买车险，享受星级服务待遇。</p>
                    <p>报价快，理赔快。</p>
                    <p>点击下方按钮快速获取报价。</p>
                </div>
                <div class="c-tab">
                    <span>
                        <img src="../../assets/image/home/tab1.png" />
                        优质服务
                    </span>
                    <span>
                        <img src="../../assets/image/home/tab4.png" />
                        快速报价
                    </span>
                    <span>
                        <img src="../../assets/image/home/tab2.png" />
                        理赔迅速
                    </span>
                </div>
                <div class="c-btn" @click="$router.push('/car-report')">一键获取</div>
            </div>
        </div>
        <div class="i-recommend">
            <h3>推荐保险</h3>
            <div class="r-imgs" @click="$router.push('/996')">
                <div class="i-head">
                    <span class="i1">
                        <img src="../../assets/image/insurance/i1.png"/>
                    </span>
                    <span class="i2"><img src="../../assets/image/insurance/i2.png"/></span>
                </div>
                <div class="i-bottom">
                    <span class="i3"><img src="../../assets/image/insurance/i3.png"/></span>
                    <span class="i4"><img src="../../assets/image/insurance/i4.png"/></span>
                    <span class="i5"><img src="../../assets/image/insurance/i5.png"/></span>
                </div>
            </div>
        </div>
        <div class="i-swiper">
            <h3>车辆</h3>
            <div>
                <swiper :options="swiperOption" class="swiper-wrapper">
                    <swiper-slide v-for="(slide, index) in banners" :key="index" class="swiper-slide">
                        <img :src="slide" width="100%"/>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="i-swiper">
            <h3>意外险</h3>
            <div>
                <swiper :options="swiperOption" class="swiper-wrapper">
                    <swiper-slide v-for="(slide, index) in banners" :key="index" class="swiper-slide">
                        <img :src="slide" width="100%"/>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="i-swiper">
            <h3>财产险</h3>
            <div>
                <swiper :options="swiperOption" class="swiper-wrapper">
                    <swiper-slide v-for="(slide, index) in banners" :key="index" class="swiper-slide">
                        <img :src="slide" width="100%"/>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'Insurance',
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
                require('../../assets/image/insurance/b1.png'),
                require('../../assets/image/insurance/b2.png'),
                require('../../assets/image/insurance/b3.png')
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
    .insurance{
        font-size: .12rem;
        .h-tab{
            display: flex;
            justify-content: space-between;
            width: 3.3rem;
            margin: .2rem auto .1rem auto;
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
                    margin-bottom: .04rem;
                }
            }
        }
        .i-banner{
            position: relative;
            margin-bottom: 3.8rem;
            img.banner{
                width: 100%;
            }
            .b-content{
                width: 3.32rem;
                height: 3.96rem;
                box-shadow: 0 4px 8px #ccc;
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translate3d(-50%,-.5rem,0);
                background: #ffffff;
                z-index: 1;
                text-align: center;
                h3{
                    padding: .38rem 0 .3rem 0;
                    font-size: .16rem;
                    color: #333333;
                }
                .c-desc{
                    width: 2.33rem;
                    color: #666666;
                    text-align: left;
                    margin: 0 auto;
                    p{
                        line-height: 1.8;
                        text-align: justify;
                    }
                }
                .c-tab{
                    width: 2.33rem;
                    margin: .3rem auto;
                    display: flex;
                    justify-content: space-between;
                    span{
                        width: .57rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 100%;
                        }
                    }
                }
                .c-btn{
                    width: 2.45rem;
                    height: .4rem;
                    line-height: .4rem;
                    text-align: center;
                    background: #0063FF;
                    color: #ffffff;
                    font-size: .14rem;
                    margin: 0 auto;
                    border-radius:40px;
                }
            }
        }
        .i-recommend{
            width: 3.32rem;
            margin: 0 auto;
            h3{
                font-size: .14rem;
                font-weight: 500;
                padding-bottom: .2rem;
                color: #333333;
            }
            .r-imgs{
                .i-head{
                    display: flex;
                    justify-content: space-between;
                    span{
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .i1{
                        width: 1.85rem;
                        height: .93rem;
                    }
                    .i2{
                        width: 1.35rem;
                        height: .93rem;
                    }
                }
                .i-bottom{
                    display: flex;
                    justify-content: space-between;
                    margin-top: .07rem;
                    span{
                        img{
                            width: 100%;
                        }
                        height: .72rem;
                        width: calc( 33.3% - .07rem);
                    }
                }
            }
        }
        .i-swiper{
            h3{
                width: 3.32rem;
                margin: 0 auto;
                font-size: .14rem;
                color: #333333;
                padding-bottom: .2rem;
                padding-top: .08rem;
            }
            // .swiper-wrapper{
            //     width: 100%;
            //     .swiper-slide{
            //         width: 80%;
            //     }
            // }
        }
    }
</style>

