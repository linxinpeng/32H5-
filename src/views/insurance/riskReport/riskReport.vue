<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="risk-report">
        <van-nav-bar v-if="tp == 0" title="出险报案"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
            <div class="item" v-for="i in 3" :key="i">
                <div class="head">
                    <h3>闽D 9658G<van-tag size="large" type="success">处理中</van-tag></h3>
                </div>
                <div class="bottom">
                    <p><strong>出险原因：</strong>碰撞</p>
                    <p><strong>报案时间：</strong>2019-07-08</p>
                    <p><strong>出险原因：</strong>CXBA201909090001</p>
                </div>
            </div>
        </div>
        <div class="btns" >
            <div class="btn" @click="toCall">立即报案</div>
        </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    name:'RiskReport',
    components:{
        [Dialog.name]: Dialog
    },
    methods:{
        toCall(){
            window.location.href = 'tel:4008888888'
        }
    }
}
</script>
<style lang="less" scoped>
    .risk-report{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            padding: .2rem;
            .item{
                padding: .2rem;
                box-sizing: border-box;
                box-shadow:0px 1.5px 4px 0px rgba(35,24,21,0.11);
                margin-bottom: .2rem;
                .head{
                    padding-bottom: .15rem;
                    border-bottom: 1px dashed #f2f2f2;
                    h3{
                        display: flex;
                        font-size: .14rem;
                        // font-weight: 500;
                        span{
                            margin-left: auto;
                            font-weight: 400;
                        }
                    }
                }
                .bottom{
                    padding-top: .1rem;
                    p{
                        color: #333333;
                        font-size: .12rem;
                        line-height: 1.8;
                    }
                }
            }
        }
        .btns{
            width: 100%;
            position: fixed;
            bottom: 0;
            left: 0;
            background: #ffffff;
            padding-bottom: .1rem;
            z-index: 99;
            .btn{
                width: 3.35rem;
                height: .44rem;
                background: #0063FF;
                text-align: center;
                line-height: .44rem;
                color: #ffffff;
                margin: 0 auto;
            }
        }
    }
</style>

