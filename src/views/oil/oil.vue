<template>
    <div class="oil" :style="tp == 0?'padding-top: 46px':'padding-top: 0.4rem'">
        <div class="o-head" :style="tp == 0?'top:46px':'top:0'">
            <span class="s1">今日油价</span>
            <div class="price-detail">
                <van-swipe :autoplay="3000" vertical class="van-item" :show-indicators="false">
                    <van-swipe-item class="van-item-item">
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
        <div class="oil-no" v-if="!nearby">
            <div class="o-inner">
                <div class="o-content">
                    <span @click="nearby = true">
                        <img src="../../assets/image/oil/oil1.png" />
                        附近油站
                    </span>
                    <span @click="$router.push('/oil-personal')">
                        <img src="../../assets/image/oil/card1.png" />
                        油卡申请
                    </span>
                    <span @click="$router.push('/oil-card-loss')"> 
                        <img src="../../assets/image/oil/cardmiss.png" />
                        油卡挂失
                    </span>
                    <span @click="$router.push('/my-oil')">
                        <img src="../../assets/image/oil/cardme.png" />
                        我的油卡
                    </span>
                </div>
                <div class="o-accout">
                    <h3>我的账号</h3>
                    <h2>￥ 87,873</h2>
                    <span class="yuan">可用余额（元）</span>
                    <div class="a-btn">
                        <van-button class="btn" type="info" @click="$router.push('/oil-card-Recharge')">账户充值</van-button>
                        <van-button class="btn-fp btn" type="warning" @click="$router.push('/oil-part')">油卡分配</van-button>
                    </div>
                </div>
            </div>
            <div class="o-tab">
                <span @click="$router.push('/match-record')">
                    <img src="../../assets/image/home/tab1.png" />
                    分配记录
                </span>
                <span @click="$router.push('/capital-record')">
                    <img src="../../assets/image/home/tab2.png" />
                    资金记录
                </span>
                <span @click="$router.push('/cardpy')">
                    <img src="../../assets/image/home/tab3.png" />
                    油卡交易
                </span>
            </div>
            <div class="o-banner">
                <img src="../../assets/image/home/banner.png" />
            </div>
            <div class="o-info">
                <div class="i-title">
                    系统公告<span>查看更多>></span>
                </div>
                <div class="i-item" v-for="i in 8" :key="i">
                    <div class="i-left">
                        <span>26</span>
                        <span>4月</span>
                    </div>
                    <div class="i-center">
                        <p>关于中石化系统升级维护期间延迟到账的公告</p>
                        <span>2019-04-09 20:34:44</span>
                    </div>
                    <div class="i-right">
                        <img src="../../assets/image/oil/next.png" />
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="nearby-oil">
             <div class="o-content">
                <span  @click="nearby = false">
                    <img src="../../assets/image/oil/oil1.png" />
                    附近油站
                </span>
                <span @click="$router.push('/oil-personal')">
                    <img src="../../assets/image/oil/card1.png" />
                    油卡申请
                </span>
                <span @click="$router.push('/oil-card-loss')">
                    <img src="../../assets/image/oil/cardmiss.png" />
                    油卡挂失
                </span>
                <span @click="$router.push('/my-oil')">
                    <img src="../../assets/image/oil/cardme.png" />
                    我的油卡
                </span>
            </div>
            <div class="o-box">
                <div class="screen">
                    <van-dropdown-menu>
                        <van-dropdown-item v-model="distance" :options="option1" />
                        <van-dropdown-item v-model="supplier" :options="option2" />
                    </van-dropdown-menu>
                </div>
                <div class="b-inner">
                    <div class="i-item" v-for="item in oils" :key="item.id">
                        <div class="item1">{{item.name}}<span @click="to(item)">到这里去>></span></div>
                        <div class="item2"><img src="../../assets/image/home/cash.png"/>优惠价：5.39元/升 <span>原价：6.09元</span></div>
                        <div class="item3"><img src="../../assets/image/home/position.png"/>{{item.address}}<span>距离：{{item.distance/1000}}km</span></div>
                    </div>
                </div>
            </div>
        </div>     
    </div>
</template>
<script>
import {  Swipe, SwipeItem,DropdownMenu, DropdownItem } from 'vant';
export default {
    name:'Oil',
    components: { 
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem
     },
    data(){
        return{
            nearby: false,
            distance:0,
            supplier:0,
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 }
            ],
            option2: [
                { text: '默认排序', value: 0 },
                { text: '好评排序', value: 1 },
                { text: '销量排序', value: 2 },
            ],
            oils:[]
        }
    },
    created(){
         if(sessionStorage.getItem('oils')){
            this.oils = JSON.parse(sessionStorage.getItem('oils'))
        }
        if(sessionStorage.getItem('posi')){
            this.posi = JSON.parse(sessionStorage.getItem('posi'))
            console.log(this.posi)
        }
    },
    methods:{
        to(val){
            location.href = `//uri.amap.com/navigation?from=${this.posi.position.lng},${this.posi.position.lat},${val.name}&to=${val.location},${this.posi.formattedAddress}&mode=car&policy=1&src=mypage&coordinate=gaode&callnative=1`
        }
    }
}
</script>
<style lang="less" scoped>
    .oil{
        font-size: .12rem;
        .o-head{
            height: .4rem;
            display: flex;
            align-items: center;
            position: fixed;
            background: #ffffff;
            // top: 46px;
            left: 0;
            width: 100%;
            z-index: 99;
            .s1{
                width: 33.3%;
                float: left;
                text-align: center;
                line-height: .4rem;
                font-weight: 500;
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
                            padding: .02rem .1rem;
                            margin-right: 4px;
                            font-weight: 400;
                            color: #ffffff;
                        }
                    }
                }
            }
        }
        .oil-no{
            .o-inner{
                position: relative;
                .o-content{
                    width: 100%;
                    height: 1.51rem;
                    background: #285BF1;
                    display: flex;
                    padding: .32rem;
                    box-sizing: border-box;
                    justify-content: space-between;
                    span{
                        width: 23%;
                        display: flex;
                        flex-direction: column;
                        color: #ffffff;
                        align-items: center;
                        font-weight: 300;
                        img{
                            height: .31rem;
                            margin-bottom: 5px;
                        }
                    }
                }
                .o-accout{
                    width: 3.125rem;
                    height: 2.33rem;
                    position: absolute;
                    top: 1rem;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #ffffff;
                    text-align: center;
                    box-shadow: 0 0 2px #eeeeee;
                    padding-top: .2rem;
                    box-sizing: border-box;
                    color: #333333;
                    h3{
                        font-size: .16rem;
                        font-weight: 900;
                        padding-bottom: .12rem;
                    }
                    h2{
                        font-size: .335rem;
                        font-weight: 500;
                        padding-bottom: .11rem;
                    }
                    .yuan{
                        width: 1.156rem;
                        height: .19rem;
                        margin: 0 auto;
                        display: inline-block;
                        background: #F3F3F3;
                        line-height: .19rem;
                        text-align: center;
                        font-size: .1rem;
                        font-weight: 300;
                        color: #c3c3c3;
                        border-radius:19px;
                    }
                    .a-btn{
                        margin-top: .2rem;
                        display: flex;
                        justify-content: center;
                        .btn-fp{
                            background: #ECB123;
                            margin-left: .2rem;
                        }
                    }
                    .btn{
                        padding: 0 .3rem;
                    }
                }
            }
            .o-tab{
                display: flex;
                height: 1.12rem;
                align-items: center;
                padding-top: 2rem;
                justify-content: space-around;
                span{
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    color: #333333;
                    font-weight: 500;
                    img{
                        width: .55rem;
                        margin-bottom: 5px;
                    }
                }
            }
            .o-banner{
                img{
                    width: 100%;
                }
            }
            .o-info{
                padding: .2rem 0;
                .i-title{
                    padding: 0 .11rem;
                    display: flex;
                    color: #333333;
                    font-size: .14rem;
                    padding-bottom: .17rem;
                    span{
                        margin-left: auto;
                        font-size: .11rem;
                        color: #666666;
                    }
                }
                .i-item{
                    height: .78rem;
                    display: flex;
                    border-bottom: 1px solid #eee;
                    .i-left{
                        width: 1rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        span{
                            display: inline-block;
                            width: .37rem;
                        }
                        span:nth-child(1){
                            height: .34rem;
                            text-align: center;
                            line-height: .34rem;
                            border: 1px solid #ccc;
                            box-sizing: border-box;
                        }
                        span:nth-child(2){
                            height: .19rem;
                            background: #216DE9;
                            color: #ffffff;
                            text-align: center;
                            line-height: .19rem;
                        }
                    }
                    .i-center{
                        flex-grow: 1;
                        display: flex;
                        // align-items: center;
                        flex-direction: column;
                        justify-content: center;
                        color: #000000;
                        p{
                            line-height: 1.5;
                        }
                        span{
                            padding-top: .03rem;
                            color: #8B8B8B;
                        }
                    }
                    .i-right{
                        width: 1.2rem;
                        text-align: right;
                        padding-right: .2rem;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        img{
                            width: .07rem;
                        }
                    }
                }
            }
        }
        .nearby-oil{
             .o-content{
                // margin-top: 90px;
                width: 100%;
                // height: 1.51rem;
                background: #285BF1;
                display: flex;
                padding: .2rem;
                box-sizing: border-box;
                justify-content: space-between;
                span{
                    width: 23%;
                    display: flex;
                    flex-direction: column;
                    color: #ffffff;
                    align-items: center;
                    font-weight: 300;
                    img{
                        height: .31rem;
                        margin-bottom: 5px;
                    }
                }
            }
            .o-box{
                background: #f2f2f2;
                .b-inner{
                    padding: .135rem;
                    box-sizing: border-box;
                    .i-item{
                        padding: .17rem .19rem;
                        box-sizing: border-box;
                        background: #ffffff;
                        box-shadow:0px 0px 6px 0px rgba(105,105,105,0.1);
                        border-radius: .05rem;
                        margin-bottom: .17rem;
                        .item1{
                            font-size: .14rem;
                            color: #333333;
                            font-weight: 500;
                            display: flex;
                            padding-bottom: .23rem;
                            span{
                                margin-left: auto;
                                color: #0063FF;
                                font-size: .12rem;
                            }
                        }
                        .item2{
                            color: #FF9900;
                            padding-bottom: .12rem;
                            display: flex;
                            align-items: center;
                            img{
                                width: .16rem;
                                margin-right: .08rem;
                            }
                            span{
                                font-size: .1rem;
                                color: #c3c3c3;
                                margin-left: .08rem;
                            }
                        }
                        .item3{
                            color: #666666;
                            font-weight: 300;
                            display: flex;
                            align-items: center;
                            img{
                                width: .16rem;
                                margin-right: .08rem;
                            }
                            span{
                                margin-left: auto;
                                font-size: .1rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
