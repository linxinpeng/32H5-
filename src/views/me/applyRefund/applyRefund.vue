<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="apply-refund">
        <van-nav-bar v-if="tp == 0" title="申请退货"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
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
            <div class="list">
                <van-cell-group>
                   <van-field clearable label="订单编号" v-model="order.id" placeholder="请输入订单编号" />
                   <van-field clearable label="退货联系人" v-model="order.name" placeholder="请输入联系人姓名" />
                   <van-field clearable label="联系电话" type="number" v-model="order.phone" placeholder="请输入联系电话" />
                   <van-field clearable label="退货原因" v-model="order.reason" placeholder="请输入退货原因" />
                </van-cell-group>
            </div>
            <div class="btn" @click="show = true">申请退货</div>
            <van-popup v-model="show">
                <div class="mask">
                    <img src="../../../assets/image/me/tkcgtc.png" />
                    <div class="close" @click="show = false"></div>
                </div>
            </van-popup>
        </div>
    </div>
</template>
<script>
import { Field ,Popup } from 'vant';
export default {
    name:'ApplyRefund',
    components:{
        [Field.name]: Field,
        [Popup.name]: Popup
    },
    data(){
        return{
            order:{
                id:'JFDH2390423482349549',
                name:'',
                phone:'',
                reason:''
            },
            show: false
        }
    }
}
</script>
<style lang="less" scoped>
    .apply-refund{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
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
                        text-align: justify;
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
            .list{
                padding-top: .15rem;
                .van-cell{
                    padding: 10px 0;
                }
            }
            .btn{
                // width: calc(100% - .4rem);
                margin: .5rem auto;
                text-align: center;
                line-height: .44rem;
                height: .44rem;
                background: #FF7800;
                color: #f9f9f9;
                font-size: .14rem;
            }
            .van-popup{
                background: transparent;
            }
            .mask{
                width: 2.71rem;
                margin: 0 auto;
                position: relative;
                vertical-align: middle;
                img{
                    width: 100%;
                }
                .close{
                    width: .33rem;
                    height: .33rem;
                    // background: #ffffff;
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translate3d(-50%,-100%,0);
                    border-radius: 50%;
                    z-index: 99;
                }
            }
        }
    }
</style>
