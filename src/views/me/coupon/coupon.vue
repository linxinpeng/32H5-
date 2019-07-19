<template>
    <div class="coupon">
        <van-nav-bar title="申请经纪人"  @click-left="$router.go(-1)" fixed left-arrow :z-index="109"/>
        <div class="inner">
            <div class="tabs">
                <span :class="active == 1&&'active'" @click="active = 1">未使用</span>
                <span :class="active == 2&&'active'" @click="active = 2">已使用</span>
                <span :class="active == 3&&'active'" @click="active = 3">已过期</span>
            </div>
            <div class="content">
                <div class="item item1">
                    <img src="../../../assets/image/me/yhj1.png"/>
                    <div class="d1">
                        <div>
                            <span>充值600减30抵用券</span>
                            <strong>30元</strong>
                        </div>
                    </div>
                    <div class="d2">
                        <div>
                            <span>仅限充值使用</span>
                            <span class="s2">立即使用</span>
                        </div>
                    </div>
                    <div class="d3">
                        <div>
                            <span>有效期至2019-03-31</span>
                            <span class="s3">数量：8张</span>
                        </div>
                    </div>
                </div>
                <div class="item item2">
                    <img src="../../../assets/image/me/yhjh1.png"/>
                    <div class="d1">
                        <div>
                            <span>充值600减30抵用券</span>
                            <strong>30元</strong>
                        </div>
                    </div>
                    <div class="d2">
                        <div>
                            <span>仅限充值使用</span>
                            <span class="s2">立即使用</span>
                        </div>
                    </div>
                    <div class="d3">
                        <div>
                            <span>有效期至2019-03-31</span>
                            <span class="s3">数量：8张</span>
                        </div>
                    </div>
                </div>
                <div class="item item3">
                    <img src="../../../assets/image/me/yhjh2.png"/>
                    <div class="d1">
                        <div>
                            <span>充值600减30抵用券</span>
                            <strong>30元</strong>
                        </div>
                    </div>
                    <div class="d2">
                        <div>
                            <span>仅限充值使用</span>
                            <span class="s2">立即使用</span>
                        </div>
                    </div>
                    <div class="d3">
                        <div>
                            <span>有效期至2019-03-31</span>
                            <span class="s3">数量：8张</span>
                        </div>
                    </div>
                </div>
                <div class="item item4">
                    <img src="../../../assets/image/me/yhjh.png"/>
                    <div class="d1">
                        <div>
                            <span>充值600减30抵用券</span>
                            <strong>30元</strong>
                        </div>
                    </div>
                    <div class="d2">
                        <div>
                            <span>仅限充值使用</span>
                            <span class="s2">立即使用</span>
                        </div>
                    </div>
                    <div class="d3">
                        <div>
                            <span>有效期至2019-03-31</span>
                            <span class="s3">数量：8张</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Coupon',
    data(){
        return{
            active: 1,
        }
    }
}
</script>
<style lang="less" scoped>
    .coupon{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            padding: .1rem .2rem;
            .tabs{
                span{
                    display: inline-block;
                    // width: .36rem;
                    padding-bottom: .06rem;
                    color: #666666;
                    // transition: all .1s ease;
                }
                span:nth-child(1){
                    margin-right: .32rem;
                }
                span:nth-child(2){
                    margin-right: .32rem;
                }
                .active{
                    font-size: .16rem;
                    color: #333333;
                    font-weight: bold;
                    border-bottom: 1.5px solid #333333;
                }
            }
            .content{
                .item{
                    width: 100%;
                    margin-top: .2rem;
                    position: relative;
                    img{
                        width: 100%;
                    }
                    .d1,.d2{
                        width: 2.5rem;
                        display: flex;
                        position: absolute;
                        top: 0;
                        left: 0;
                        font-size: .14rem;
                        color: #ffffff;
                        transform: translate3d(0.86rem,0.2rem,0);
                        div{
                            display: flex;
                            align-items: center;
                            width: 90%;
                            strong{
                                margin-left: auto;
                                font-size: .25rem;
                                font-weight: 900;
                            }
                        }
                    }
                    .d2{
                        transform: translate3d(0.86rem,.5rem,0);
                        div{
                            color: #FFFCFC;
                            span:first-child{
                                opacity: .55;
                            }
                            .s2{
                                margin-left: auto;
                                font-weight: 300;
                                font-size: .14rem;
                            }
                        }
                    }
                    .d3{
                        position: absolute;
                        bottom: .16rem;
                        left: 0;
                        padding-left: .3rem;
                        width: 100%;
                        box-sizing: border-box;
                        div{
                            width: 100%;
                            display: flex;
                            color: #CFCFCF;
                            font-size: .09rem;
                            font-weight: 500;
                            .s3{
                                margin-left: auto;
                                margin-right: .2rem;
                                color: #287EE9;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
