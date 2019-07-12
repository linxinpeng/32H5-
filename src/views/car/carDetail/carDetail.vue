<template>
    <div class="car-detail">
        <van-nav-bar title="车辆详情页"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="inner">
            <div class="banner">
                <img class="i1" src="../../../assets/image/car/carbg.png" />
                <div class="btn">
                    <img src="../../../assets/image/car/photo.png" />
                </div>
            </div>
            <div class="info">
                <h3>江淮 帅铃H330 </h3>
                <p class="p1">220马力 3.85米排半仓栅式轻卡(BJ5048XXY-FE)</p>
                <div class="d2">厂家指导价：<i>10.8-13.88万</i></div>
                <div class="d3"><van-tag type="primary">标签</van-tag><van-tag type="primary">标签</van-tag><van-tag type="primary">标签</van-tag><van-tag type="primary">标签</van-tag><van-tag type="primary">标签</van-tag></div>
                <div class="list">
                    <div class="title">基础参数</div>
                    <div class="item">
                        <span class="s1">车型代号</span>
                        <span class="s2">BJ5048XXY-FE</span>
                    </div>
                    <div class="item">
                        <span class="s1">车型代号</span>
                        <span class="s2">BJ5048XXY-FE</span>
                    </div>
                    <div class="item">
                        <span class="s1">车型代号</span>
                        <span class="s2">BJ5048XXY-FE</span>
                    </div>
                    <div class="item">
                        <span class="s1">车型代号</span>
                        <span class="s2">BJ5048XXY-FE</span>
                    </div>
                    <div class="item">
                        <span class="s1">车型代号</span>
                        <span class="s2">BJ5048XXY-FE</span>
                    </div>
                    <div class="item">
                        <span class="s1">车型代号</span>
                        <span class="s2">BJ5048XXY-FE</span>
                    </div>
                    <div class="item">
                        <span class="s1">车型代号</span>
                        <span class="s2">BJ5048XXY-FE</span>
                    </div>
                    <span class="morelist" v-if="more">
                        <div class="item">
                            <span class="s1">车型代号</span>
                            <span class="s2">BJ5048XXY-FE</span>
                        </div>
                        <div class="item">
                            <span class="s1">车型代号</span>
                            <span class="s2">BJ5048XXY-FE</span>
                        </div>
                        <div class="item">
                            <span class="s1">车型代号</span>
                            <span class="s2">BJ5048XXY-FE</span>
                        </div>
                        <div class="item">
                            <span class="s1">车型代号</span>
                            <span class="s2">BJ5048XXY-FE</span>
                        </div>
                    </span>
                    <div class="more" @click="more = true" v-if="!more">查看更多参数</div>
                    <div class="more" @click="more = false" v-if="more">点击收起  <van-icon name="arrow-up" /></div>
                </div>
                <div class="list2">
                    <h3 class="title">车辆列表</h3>
                    <div class="item" v-for="i in 3" :key="i">
                        <h3>江淮 帅铃H330 220马力 3.85米排半仓栅式轻卡(BJ5048XXY-FE)</h3>
                        <div class="r1"><span>最大马力：240</span><span>核定载重：2259</span><span>变速箱：CVT</span></div>
                        <div class="r2">
                            <span>32尊享价：<i>11.88万</i></span>
                            <span class="s2">查看详情</span>
                        </div>
                    </div>
                </div>
                <div class="info2">
                    <h3>车辆详情</h3>
                    <div class="d1">
                        <img src="../../../assets/image/car/carbg.png" />
                    </div>
                    <p>	关于经济型家用车的选购问题（尤其是十万元级别的），是笔者日常被问得最多的，他们要经济又要实用，对空间、动力甚至外观造型都有所要求。例如本文的三位主角也是经常被提到的。锋范与威驰，它们身段差不多，售价也在同一区间，是争锋相对的死敌，而对于高一级别的卡罗拉，则是鸡头凤尾的取舍，也是潜在消费者经常纠结的问题。那它们在实际用起…</p>
                    <div class="btn">立即询价</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Tag,Icon  } from 'vant';
export default {
    name:'CarDetail',
    components:{
        [Tag.name]: Tag,
        [Icon.name]:Icon 
    },
    data(){
        return{
            more: false
        }
    }
}
</script>
<style lang="less" scoped>
    .car-detail{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            .banner{
                width: 100%;
                position: relative;
                .i1{
                    width: 100%;
                    vertical-align: middle;
                }
                .btn{
                    width: .41rem;
                    height: .41rem;
                    background: #0B0306;
                    opacity: 0.6;
                    border-radius: 50%;
                    text-align: center;
                    line-height: .5rem;
                    color: #ffffff;
                    position: absolute;
                    top: 48%;
                    right: 10px;
                    img{
                        width: .18rem;
                        display: inline-block;
                    }
                }
            }
            .info{
                padding: .1rem .2rem;
                h3{
                    color: #333333;
                    font-size: .18rem;
                    padding-bottom: .07rem;
                }
                .p1{
                    color: #666666;
                    font-weight: 300;
                    line-height: .24rem;
                }
                .d2{
                    color: #666666;
                    line-height: .24rem;
                    i{
                        font-style: normal;
                        font-size: .14rem;
                        font-weight: bold;
                        color: #FF9141;
                    }
                }
                .d3{
                    padding-top: .1rem;
                    .van-tag{
                        background: #0063FF !important;
                        opacity: .5;
                        margin-right: .06rem;
                    }
                }
                .list{
                    margin-top: .2rem;
                    box-shadow:0px 0px 3.5px 0px rgba(76,76,76,0.29);
                    .title{
                        padding-left: .2rem;
                    }
                    .more{
                        text-align: center;
                        padding: 0;
                        justify-content: center;
                    }
                    div{
                        height: .35rem;
                        display: flex;
                        padding: 0 .2rem 0 0;
                        align-items: center;
                        box-sizing: border-box;
                        border-bottom: 1px solid #F2F2F2;
                        span.s1{
                            width: 1.26rem;
                            height: 100%;
                            line-height: .35rem;
                            background:rgba(140,140,140,0.08);
                            padding-left: .2rem;
                            box-sizing: border-box;

                            color: rgba(51,51,51,1);
                        }
                        span.s2{
                            flex-grow: 1;
                            text-align: right;
                        }
                    }
                }
                .list2{
                    padding-top: .15rem;
                    .title{
                        color: #333333;
                        font-size: .14rem;
                    }
                    .item{
                        padding: .15rem .12rem;
                        margin-bottom: .05rem;
                        box-shadow:0px 0px 3.5px 0px rgba(76,76,76,0.29);
                        h3{
                            color: #333333;
                            line-height: 1.2;
                            font-weight: 500;
                            font-size: .12rem;
                        }
                        .r1{
                            padding: .1rem 0;
                            span{
                                font-size: .1rem;
                                color: #666666;
                                padding: .02rem .04rem; 
                                background: #f2f2f2;
                                border-radius: 1.5px;
                                margin-right: .05rem;
                            }
                        }
                        .r2{
                            display: flex;
                            font-size: .1rem;
                            color: #666666;
                            align-items: center;
                            margin-top: .09rem;
                            // padding-bottom: .05rem;
                            i{
                                font-style: normal;
                                color: #FF9141;
                                font-size: .14rem;
                                font-weight: bold;
                            }
                            .s2{
                                margin-left: auto;
                                background: #0063FF;
                                color: #ffffff;
                                padding: .04rem .2rem;
                            }
                        }
                    }
                }
                .info2{
                    // padding: 0 .2rem;
                    padding-top: .15rem;
                    .title{
                        color: #333333;
                        font-size: .14rem;
                    }
                    .d1{
                        margin-top: .1rem;
                        img{
                            width: 100%;
                        }
                    }
                    p{
                        margin-top: .1rem;
                        color: #333333;
                        text-indent: .3rem;
                        line-height: 1.8;
                        text-align: justify;
                    }
                    .btn{
                        background: #0063FF;
                        color: #ffffff;
                        text-align: center;
                        line-height: .44rem;
                        width: 100%;
                        height: .44rem;
                        font-size: .14rem;
                        margin-top: .35rem;
                    }
                }
            }
        }
    }
</style>
