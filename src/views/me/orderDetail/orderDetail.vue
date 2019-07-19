<template>
    <div class="order-detail">
        <van-nav-bar title="订单详情"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
            <div class="banner">
                <img src="../../../assets/image/me/order.png" />
                <p>JFDH2390423482349549</p>
            </div>
            <div class="main">
                <div class="name">
                    <img src="../../../assets/image/me/person.png" />
                    <span>陈欢欢</span>
                    <span>13950323418</span>
                </div>
                <div class="address">
                    <img src="../../../assets/image/me/position.png" />
                    <span>福建省漳州市龙文区水仙大街18888号</span>
                </div>
            </div>
            <div style="height: .05rem;background: #f2f2f2;"></div>
            <div class="content">
                <div class="desc">
                    <div class="l">
                        <img src="../../../assets/image/me/good.png" />
                    </div>
                    <div class="r">
                        <h3>爱奇艺黄金VIP会员，影视年卡，价值298元</h3>
                        <div class="b">
                            <span>数量：<strong>3</strong>个</span>
                            <span>单价：<b>￥ 198</b></span>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <van-cell-group :border="false" >
                        <van-cell title="订单时间" value="2019-09-09 12:00:00" />
                        <van-cell :border="false" title="商品总额" value="内容" />
                        <van-cell :border="false" title="运费" value="内容" />
                        <van-cell :border="false" title="积分抵扣" value="内容" />
                        <van-cell title="实付款" value-class="valueStyle" value="￥ 0+299999积分" />
                        <van-cell :border="false"  title="备注" value="" />
                        <div class="meno">车主在路上超速飙车，啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊 啊啊啊啊啊啊啊 啊啊啊啊 啊啊啊啊 啊啊啊啊啊啊啊啊</div>
                    </van-cell-group>
                </div>
            </div>
            <div class="btns">
                <div class="red" @click="$router.push('/apply-refund')">申请退货</div>
                <div class="green" @click="$router.push('/logis-info')">查看物流</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'OrderDetail'
}
</script>
<style lang="less" scoped>
    .order-detail{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            .banner{
                width: 100%;
                position: relative;
                img{
                    width: 100%;
                }
                p{
                    position: absolute;
                    top: .62rem;
                    left: .21rem;
                    color: #A1EFC6;
                }
            }
            .main{
                padding: .15rem .2rem;
                .name,.address{
                    display: flex;
                    align-items: center;
                    color: #333333;
                    span{
                        padding-right: .1rem;
                    }
                    img{
                        width: .16rem;
                        margin-right: .1rem;
                    }
                }
                .name{
                    padding-bottom: .15rem;
                }
            }
            .content{
                padding: .1rem .2rem;
                margin-bottom: .6rem;
                .desc{
                    display: flex;
                    .l{
                        width: 1.3rem;
                        vertical-align: middle;
                        img{
                            width: 100%;
                        }
                    }
                    .r{
                        padding-left: .13rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        h3{
                            color: #333333;
                            font-size: .14rem;
                            font-weight: 400;
                        }
                        .b{
                            font-size: .12rem;
                            color: #333333;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            font-weight: 400;
                            span:first-child{
                                strong{
                                    font-size: .14rem;
                                }
                            }
                            span{
                                b{
                                    font-weight: 400;
                                    color: #00A950;
                                    font-size: .14rem;
                                }
                            }
                        }
                    }
                }
                .info{
                    padding-top: .1rem;
                    .van-cell{
                        padding: 10px 0;
                    }
                    .valueStyle{
                        color: #00A950;
                    }
                    .meno{
                        padding: .15rem .2rem;
                        background: #f4f4f4;
                        color: #666666;
                        text-align: justify;
                    }
                }
            }
            .btns{
                width: 100%;
                position: fixed;
                bottom: 0;
                left: 0;
                padding: 0 .2rem;
                padding-bottom: .15rem;
                display: flex;
                background: #ffffff;
                box-sizing: border-box;
                div{
                    flex-grow: 1;
                    height: .44rem;
                    text-align: center;
                    line-height: .44rem;
                    color: #ffffff;
                    font-size: .14rem;
                }
                div.red{
                    margin-right: .05rem;
                    background: #FC5847;
                }
                 div.green{
                    background: #00A950;
                }
            }
        }
    }
</style>
