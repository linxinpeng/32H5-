<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="oil-card-record">
        <van-nav-bar v-if="tp == 0" title="账户充值"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="banner">
            <p class="p1">账户余额（元）</p>
            <h3>9,889.00</h3>
            <div class="b-input">
                <div class="i-box">
                    <input type="number" placeholder="请输入充值金额" v-model="cash" />
                    <p class="p2">可使用代金券叠加使用</p>
                </div>
            </div>
        </div>
        <div class="content">
            <van-cell-group :border="false">
                <van-cell title="代金券" value="暂无可用代金券" :border="false" />
                <van-cell value="￥ 1000" value-class="color-red" :border="false">
                    <template slot="title">
                        <span class="custom-title">实付金额</span>
                        <van-icon name="info" color="#387FF4"/>
                    </template>
                </van-cell>
                <van-cell :border="false" title="支付方式" :value="type" is-link @click="show = true"/>
                <van-cell :border="false" title="支付说明" value="" />
            </van-cell-group>
            <div class="desc">
                <p>1.微信支付免手续费，支持信用卡支付；</p>
                <p>2.微信支付限额可在微信【我】-【钱包】-【银行卡】 内查看对应银行卡的限额。</p>
            </div>
            <div class="btn-box"><div class="btn" @click="$router.push('/card-Recharge-success')">确认</div></div>
            <van-action-sheet v-model="show" :actions="actions" @select="onSelect"/>
        </div>
    </div>
</template>
<script>
import { Cell, CellGroup,Icon,ActionSheet   } from 'vant';
export default {
    name:'OilCardRecord',
    components:{
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Icon.name]: Icon,
        [ActionSheet.name]: ActionSheet 
    },
    data(){
        return{
            cash: '',
            type:'微信支付',
            show: false,
            actions:[
                {name:'微信支付',type:'wechat'},
                {name:'支付宝支付',type:'paypal'},
                {name:'银行卡支付',type:'bank'},
                {name:'POS机刷卡',type: 'pos'}
            ]
        }
    },
    methods:{
        onSelect(item){
            this.show = false;
            this.type = item.name
        }
    }
}
</script>
<style lang="less" scoped>
.color-red{
    color: #D83B3B;
}
    .oil-card-record{
        padding-top: 46px;
        font-size: .12rem;
        .banner{
            background: #D83B3B;
            color: #ffffff;
            height: 1.89rem;
            width: 100%;
            padding-top: .47rem;
            box-sizing: border-box;
            text-align: center;
            box-shadow:0px 6px 10px 0px rgba(0, 0, 0, 0.43);
            position: relative;
            .p1{
                // padding-bottom: .08rem;
            }
            h3{
                font-size: .27rem;
            }
            .b-input{
                width: 3.18rem;
                height: 1.34rem;
                background: #ffffff;
                box-shadow:0px 1px 8px 0px rgba(76,76,76,0.11);
                border-radius: 1.5px;
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translate3d(-50%,-50%,0);
                .i-box{
                    display: flex;
                    width: 100%;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    color: #c3c3c3;
                    input{
                        border: none;
                        text-align: center;
                        font-size: .18rem;
                        border-bottom: 1px solid #f6f6f6;
                        padding-bottom: .03rem;
                        width: 1.26rem;
                        color: #000000;
                    }
                    .p2{
                        padding-top: .05rem;
                        font-weight: 300;
                    }
                }
            }
        }
        .content{
            padding-top: .79rem;
            .desc{
                padding: 0 .52rem;
                box-sizing: border-box;
                p{
                    font-size: .1rem;
                    color: #666666;
                    font-weight: 300;
                    line-height: .28rem;
                }
            }
            .btn-box{
                position: fixed;
                bottom: 0px;
                // left: .2rem;
                z-index: 99;
                width: 100%;
                background: #ffffff;
                padding-bottom: .1rem;
                .btn{
                    width: 3.35rem;
                    height: .4rem;
                    text-align: center;
                    line-height: .4rem;
                    background: #0063FF;
                    border-radius: 1.5px;
                    color: #f9f9f9;
                    font-size: .14rem;
                    margin: 0 auto;
                }
            }
        }
    }
</style>


