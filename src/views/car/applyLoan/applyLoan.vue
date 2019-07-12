<template>
    <div class="apply-loan" :style="`height: ${h}px`">
        <van-nav-bar title="我要贷款"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="inner">
            <div class="banner">
                <h2>￥ 150,000</h2>
                <p class="p1">最高可贷</p>
                <div class="tags">
                    <span>申请快捷</span>
                    <span>放款高效</span>
                    <span>期限灵活</span>
                </div>
                <div class="box">
                    <div class="b1">
                        <h3>￥800,000</h3>
                        <p>最高可贷</p>
                    </div>
                    <i></i>
                    <div class="b2">
                        <h3>36期</h3>
                        <p>最长期数</p>
                    </div>
                    <i></i>
                    <div class="b3">
                        <h3>最长期数</h3>
                        <p>最低月利</p>
                    </div>
                </div>
            </div>
            <div class="info">
                <van-cell-group>
                    <van-field input-align="right" label="姓名" v-model="name" placeholder="请输入真实姓名" />
                    <van-field input-align="right" label="联系电话" v-model="phone" placeholder="请输入联系电话" />
                    <van-cell title="选择产品" value="车易贷1号" is-link />
                </van-cell-group>
                <span class="jsq"><img src="../../../assets/image/car/jsq.png" />贷款计算器</span>
            </div>
            <div class="bottom">
                <p>手续简单，1张身份证即可贷款，推荐新车购买用户使用。</p>
                <div class="btn">立即申请</div>
            </div>
        </div>
    </div>
</template>
<script>
import { Field } from 'vant';
export default {
    name:'ApplyLoan',
    components:{
        [Field.name]: Field
    },
    data(){
        return{
            name:'',
            phone:'',
            h: window.innerHeight - 46
        }
    }
}
</script>
<style lang="less" scoped>
    .apply-loan{
        padding-top: 46px;
        font-size: .12rem;
        background: #F8F7F7;
        .inner{
            .banner{
                width: 100%;
                height: 1.85rem;
                background-image: url(../../../assets/image/car/banner.png);
                background-size: 100% auto;
                background-repeat: no-repeat;
                text-align: center;
                color: #ffffff;
                box-sizing: border-box;
                h2{
                    font-size: .36rem;
                    padding-top: .46rem;

                }
                .p1{
                    padding-top: .07rem;
                    color: #fffefe;
                    font-weight: 100;
                }
                .tags{
                    padding-top: .22rem;
                    span{
                        width: .79rem;
                        display: inline-block;
                        text-align: center;
                        border-right: 1px solid #fffefe;
                    }
                    span:last-child{
                        border: none;
                    }
                }
                .box{
                    width: calc( 100% - .4rem);
                    margin: .15rem auto;
                    height: .77rem;
                    background: #ffffff;
                    box-shadow:0px 0px 6px 0px rgba(105,105,105,0.11);
                    border-radius: 1.5px;
                    display: flex;
                    align-items: center;
                    color: #333333;
                    div{
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        justify-content: center;
                        flex-grow: 1;
                        h3{
                            padding-bottom: .08rem;
                            font-weight: 400;
                        }
                    }
                    i{
                        width: 1px;
                        height: .19rem;
                        background: #6D6A63;
                    }
                }
            }
            .info{
                padding: .8rem .2rem .6rem .2rem;
                box-sizing: border-box;
                background: #ffffff;
                .van-cell{
                    padding: 10px 0;
                }
                span.jsq{
                    background: #0078FF;
                    height: .21rem;
                    width: .84rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    float: right;
                    // margin-right: ,
                    margin-top: 10px;
                    text-align: center;
                    color: #ffffff;
                    font-size: .1rem;
                    border-radius: 1.5px;
                    img{
                        width: .1rem;
                    }
                }
            }
            .bottom{
                padding: .24rem .2rem;
                box-sizing: border-box;
                p{
                    color: #666666;
                    font-size: .1rem;
                }
                .btn{
                    position: fixed;
                    bottom: .29rem;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #0063FF;
                    text-align: center;
                    width: 3.35rem;
                    height: .44rem;
                    line-height: .44rem;
                    color: #ffffff;
                    font-size: .14rem;
                }
            }
        }
    }
</style>
