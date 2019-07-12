<template>
    <div class="nearby">
        <van-nav-bar title="加油"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="n-inner">
            <div class="o-head">
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
            <div class="o-content">
                <span>
                    <img src="../../assets/image/oil/oil1.png" />
                    附近油站
                </span>
                <span>
                    <img src="../../assets/image/oil/card1.png" />
                    附近油站
                </span>
                <span>
                    <img src="../../assets/image/oil/cardmiss.png" />
                    附近油站
                </span>
                <span>
                    <img src="../../assets/image/oil/cardme.png" />
                    附近油站
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
                    <div class="i-item" v-for="i in 8" :key="i">
                        <div class="item1">漳州相城加油站<span>到这里去>></span></div>
                        <div class="item2"><img src="../../assets/image/home/cash.png"/>优惠价：5.39元/升 <span>原价：6.09元</span></div>
                        <div class="item3"><img src="../../assets/image/home/position.png"/>芗城区迎宾路188号<span>距离：0.6km</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Swipe, SwipeItem,DropdownMenu, DropdownItem } from 'vant';
export default {
    name:'NearbyOil',
    components: { 
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem
     },
     data(){
         return{
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
            ]
         }
     }
}
</script>
<style lang="less" scoped>
    .nearby{
        font-size: .12rem;
        .n-inner{
            .o-head{
                height: .4rem;
                display: flex;
                align-items: center;
                position: fixed;
                background: #ffffff;
                top: 46px;
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
            .o-content{
                margin-top: 90px;
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
