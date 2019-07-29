<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="loan-calc">
        <van-nav-bar v-if="tp == 0" title="贷款计算器"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="banner">
            <img src="../../../assets/image/car/bg.png" />
            <div class="box">
                <p class="p1">还款总额</p>
                <h1>￥110000</h1>
                <div class="money">
                    <div class="m1">
                        <p class="p2">总利息</p>
                        <h3>￥13456</h3>
                    </div>
                    <i></i>
                    <div class="m2">
                        <p>月还款额</p>
                        <h3>￥2345.65</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner">
            <van-cell-group>
                <van-field input-align="right" type="number" label="贷款金额" v-model="cash" placeholder="请输入贷款金额" />
                <van-cell title="贷款期数" :value="ty1" is-link @click="show1 = true"/>
                <!-- <van-field input-align="right" type="number" label="贷款期数" v-model="times" placeholder="请选择贷款期数"/> -->
                <van-field input-align="right" type="number" label="月利率" v-model="interest" placeholder="请输入月利率"><span slot="button">%</span></van-field>
                <van-cell title="还款方式" :value="ty" is-link @click="show = true"/>
            </van-cell-group>
            <van-button style="margin-top: .17rem;background: #0063FF;border-color: #0063FF;" type="primary" size="large" @click="momey = true">开始计算</van-button>
            <div class="record" v-if="momey">
                <h3>还款期数</h3>
                <div class="item" v-for="i in 8" :key="i">
                    <div class="top">期数：0{{i}}</div>
                    <div class="bottom">
                        <div class="b-top b">
                            <span>本金：￥3434.33</span>
                            <span class="s2 s">￥4527.6</span>
                        </div>
                        <div class="b-bottom b">
                            <span>利息：￥1093.33</span>
                            <span class="s2">还款总额</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect"/>
        <van-action-sheet v-model="show1" :actions="actions1" @select="onSelect1"/>
    </div>
</template>
<script>
import { Field,ActionSheet  } from 'vant';
export default {
    name:'LoanCalc',
    components:{
        [Field.name]: Field,
        [ActionSheet.name]: ActionSheet
    },
    data(){
        return{
            momey: false,
            cash:'',
            times:'',
            interest:'',
            show: false,
            ty:'等额本息',
            actions:[
                {name:'等额本息'},
                {name:'等额本金'}
            ],
            show1: false,
            ty1:'请选择贷款期数',
            actions1:[
                {name:'3个月'},
                {name:'6个月'},
                {name:'12个月'}
            ]
        }
    },
    methods:{
        onSelect(item){
            this.show = false;
            this.ty = item.name
        },
        onSelect1(item){
            this.show1 = false;
            this.ty1 = item.name
        }
    }
}
</script>
<style lang="less" scoped>
    .loan-calc{
        padding-top: 46px;
        font-size: .12rem;
        .banner{
            padding: .1rem .15rem;
            box-sizing: border-box;
            position: relative;
            img{
                width: 100%;
            }
            .box{
                position: absolute;
                top: .32rem;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                color: #ffffff;
                width: calc(100% - 0.3rem);
                .p1{
                    padding-bottom: .14rem;
                }
                h1{
                    font-size: .3rem;
                }
                .money{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding-top: .3rem;
                    .m1,.m2{
                        flex-grow: 1;
                        p{
                            margin-left: -0.2rem;
                        }
                        .p2{
                            margin-left: -0.18rem;
                        }
                        h3{
                            padding-top: .05rem;
                        }
                        
                    }
                    i{
                            width: 2px;
                            height: .19rem;
                            background: #f9f9f9;
                            opacity: 0.2;
                        }
                }
            }
        }
        .inner{
            padding: 0 .2rem;
            box-sizing: border-box;
            .van-cell{
                padding: 10px 0;
            }
            .record{
                padding-top: .3rem;
                h3{
                    color: #333333;
                    font-weight: 500;
                    padding-left: .1rem;
                    border-left: 2px solid #0063FF;
                    margin-bottom: .23rem;
                }
                .item{
                    box-shadow:0px 2px 7px 0px rgba(10,2,4,0.06);
                    padding: 0 .3rem;
                    padding-bottom: .05rem;
                    box-sizing: border-box;
                    margin-bottom: .1rem;
                    .top{
                        padding: .1rem 0;
                        color: #333333;
                        font-weight: 500;
                    }
                    .bottom{
                        .b{
                            display: flex;
                            span{
                                padding: .05rem 0;
                                color: #666666;
                                font-weight: 300;
                            }
                            .s{
                                font-size: .16rem;
                                color: #0063FF;
                                font-weight: 500;
                            }
                            .s2{
                                margin-left: auto;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
