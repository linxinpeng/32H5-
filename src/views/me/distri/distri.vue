<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="distri">
        <van-nav-bar v-if="tp == 0" title="我的分销"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="banner">
            <img src="../../../assets/image/me/banner.png" />
            <div class="info">
                <div class="in">
                    <p class="p1">本月预估收益</p>
                    <h3>￥9,1898</h3>
                    <div class="b">
                        <p class="p2">累计收益：￥9,1898</p>
                        <p class="p3">累计收益：￥9,1898</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner">
            <h3>油卡专属链接</h3>
            <div class="tabs">
                <img src="../../../assets/image/me/yk.png" @click="show = true;" />
                <img src="../../../assets/image/me/bx.png" @click="show = true;" />
                <img src="../../../assets/image/me/cd.png" @click="show = true;" />
            </div>
            <h3>收益概览</h3>
            <div class="list">
                <div class="item1 item">
                    <div class="t">
                        油卡收益 <span>查看明显>></span>
                    </div>
                    <div class="b">
                        <div class="i">
                            <h4>9898</h4>
                            <p>本月办卡</p>
                        </div>
                        <div class="i">
                            <h4>￥3434</h4>
                            <p>本月消费</p>
                        </div>
                        <div class="i">
                            <h4 class="colorY">9898</h4>
                            <p>预估收益</p>
                        </div>
                    </div>
                </div>
                <div class="item2 item">
                    <div class="t">
                        油卡收益 <span class="colorB">查看明显>></span>
                    </div>
                    <div class="b">
                        <div class="i">
                            <h4>9898</h4>
                            <p>本月办卡</p>
                        </div>
                        <div class="i">
                            <h4>￥3434</h4>
                            <p>本月消费</p>
                        </div>
                        <div class="i">
                            <h4 class="colorB">9898</h4>
                            <p>预估收益</p>
                        </div>
                    </div>
                </div>
                <div class="item3 item">
                    <div class="t">
                        油卡收益 <span class="colorG">查看明显>></span>
                    </div>
                    <div class="b">
                        <div class="i">
                            <h4>9898</h4>
                            <p>本月办卡</p>
                        </div>
                        <div class="i">
                            <h4>￥3434</h4>
                            <p>本月消费</p>
                        </div>
                        <div class="i">
                            <h4 class="colorG">9898</h4>
                            <p>预估收益</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <van-popup v-model="show" position="top">
            <div class="mask">
                <h3>油卡专属链接</h3>
                <div class="imgs">
                    <img src="../../../assets/image/me/zs.png" />
                </div>
                <p class="p1">免费办理油卡，最高可享 <strong>7%</strong>充值返利，笔笔消费有积分</p>
                <p class="p2">推荐码：<span class="code">98989</span></p>
                <div class="bottom">
                    <img src="../../../assets/image/me/good.png" />
                    长按识别二维码
                    <van-button type="info" size="small">保存图片</van-button>
                </div>
            </div>
        </van-popup>
        <van-popup v-model="show"  position="bottom">
            <div class="mask1">
                <h3>分享至</h3>
                <div class="top">
                    <span>
                        <img src="../../../assets/image/me/lj.png" />
                        复制链接
                    </span>
                    <span>
                        <img src="../../../assets/image/me/wx.png" />
                        微信
                    </span>
                    <span>
                        <img src="../../../assets/image/me/pyq.png" />
                        朋友圈
                    </span>
                    <span>
                        <img src="../../../assets/image/me/qq.png" />
                        QQ
                    </span>
                </div>
                <div style="height: .05rem;background: #f2f2f2;"></div>
                <div class="cancle" @click="show = false">取消</div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import { Popup } from 'vant';
export default {
    name:'Distri',
    components: {
        [Popup.name]: Popup
    },
    data(){
        return{
            show: false,
        }
    }
}
</script>
<style lang="less" scoped>
    .mask1{
        width: 100%;
        h3{
            text-align: center;
            color: #333333;
            font-size: .16rem;
            padding: .1rem 0;
        }
        .top{
            display: flex;
            justify-content: space-around;
            width: 100%;
            padding-bottom: .2rem;
            span{
                width: 25%;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                font-size: .14rem;
                color: #333333;
                // height: auto;
                img{
                    width: .44rem;
                    margin-bottom: .04rem;
                }
            }
        }
        .cancle{
            height: .44rem;
            text-align: center;
            line-height: .44rem;
            font-size: .16rem;
            color: #FF8748;
            font-weight: 500;
        }
    }
    .mask{
        // width: 3.44rem;
        // height: 4.35rem;
        padding: .15rem .2rem;
        box-sizing: border-box;
        h3{
            color: #0063FF;
            padding-bottom: .15rem;
            text-align: center;
            font-size: .16rem;
            font-weight: 500;
        }
        .imgs{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .p1{
            padding: .05rem .2rem 0 .2rem;
            color: #333333;
            font-size: .14rem;
            line-height: 1.8; 
            font-weight: 500;
            strong{
                color: #FF721F;
                font-size: .18rem;
                font-weight: 500;
            }
        }
        .p2{
            padding: .2rem;
            .code{
                color: #0063FF;
            }
        }
        .bottom{
            display: flex;
            padding-left: .2rem;
            box-sizing: border-box;
            align-items: flex-end;
            color: #666666;
            font-size: .1rem;
            img{
                width: .73rem;
                height: .73rem;
                margin-right: .1rem;
            }
            button{
                margin-left: auto;
            }
        }
    }
    .distri{
        padding-top: 46px;
        font-size: .12rem;
        .banner{
            padding: .2rem .15rem;
            padding-bottom: 0rem;
            position: relative;
            img{
                width: 100%;
            }
            .info{
                position: absolute;
                top: .2rem;
                left: 0.28rem;
                height: 100%;
                padding-top: .35rem;
                padding-left: .2rem;
                color: #ffffff;
                .in{
                    display: flex;
                    flex-direction: column;
                    height: calc(100% - .8rem);
                    .p1{
                        font-size: .135rem;
                        padding-left: .08rem;
                    }
                    h3{
                        font-size: .34rem;
                    }
                    .b{
                        margin-top: auto;
                        padding-left: .08rem;
                        font-size: .14rem;
                    }
                }
            }
        }
        .inner{
            padding: 0 .2rem;
            h3{
                font-size: .14rem;
                font-weight: 500;
                color: #333333;
                padding-bottom: .1rem;
                padding-top: .1rem;
            }
            .tabs{
                display: flex;
                justify-content: space-between;
                img{
                    width: .9rem;
                    height: .9rem;
                }
            }
            .list{
                .item{
                    width: 3.345rem;
                    height: .93rem;
                    margin-bottom: .1rem;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    padding: .1rem .34rem;
                    box-sizing: border-box;
                    .colorY{
                        color: #FF9D2A !important;
                    }
                    .colorB{
                        color: #0063FF !important;;
                    }
                    .colorG{
                        color: #009900 !important;;
                    }
                    .t{
                        display: flex;
                        align-items: center;
                        font-size: .14rem;
                        color: #333333;
                        padding-left: .13rem;
                        span{
                            margin-left: auto;
                            font-size: .12rem;
                            color: #FF9D2A;
                        }
                    }
                    .b{
                        display: flex;
                        justify-content: space-between;
                        padding-top: .1rem;
                        .i{
                            flex-grow: 1;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            h4{
                                color: #333333;
                                font-size: .14rem;
                                font-weight: 500;
                            }
                            p{
                                font-size: .12rem;
                                color: #666666;
                            }
                            
                        }
                        .i:last-child{
                            align-items: flex-end;
                        }
                    }
                }
                .item1{
                    background-image: url(../../../assets/image/me/hs.png);
                }
                .item2{
                    background-image: url(../../../assets/image/me/ls.png);
                }
                .item3{
                    background-image: url(../../../assets/image/me/ls1.png);
                }
            }
        }
    }
</style>

