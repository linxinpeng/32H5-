<template>
    <div class="my-policy-detail">
        <van-nav-bar title="保单详情"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="box">
            <div class="b1">
                <div class="b1-l">
                    <h3>机动车商业险</h3>
                    <p>保单号：632493493849384943</p>
                </div>
                <div class="b1-r">
                    <img src="../../../assets/image/insurance/dsx.png" />
                </div>
            </div>
            <div class="box1">
                <div class="content">
                    <div class="current">
                        <h3>基础信息</h3>
                        <van-row>
                            <van-col span="8">被保人</van-col>
                            <van-col span="16">陈翻翻</van-col>
                        </van-row>
                        <van-row>
                            <van-col span="8">身份证号</van-col>
                            <van-col span="16">350628********5555</van-col>
                        </van-row>
                        <van-row>
                            <van-col span="8">车牌号</van-col>
                            <van-col span="16">闽DEF345</van-col>
                        </van-row>
                        <van-row>
                            <van-col span="8">车架号</van-col>
                            <van-col span="16">LS54DFKJDF34IODFOI34I5IO</van-col>
                        </van-row>
                        <van-row>
                            <van-col span="8">有效期</van-col>
                            <van-col span="16">2019-07-08 至 2020-07-08</van-col>
                        </van-row>
                        <!-- <hr /> -->
                    </div>
                    <div class="info">
                        <h3>保费信息</h3>
                        <div class="i-table">
                            <table style="width: 100%;" border="0" cellspacing="0" cellpadding="10">
                                <tr>
                                    <td>险种</td>
                                    <td>保额（元）</td>
                                    <td>保费（元）</td>
                                </tr>
                                <tr>
                                    <td>机动车第三者责任险</td>
                                    <td>125,000</td>
                                    <td>688.43</td>
                                </tr>
                                <tr>
                                    <td>机动车自然险</td>
                                    <td>159,485.44</td>
                                    <td>459.54</td>
                                </tr>
                                <tr>
                                    <td>机动车自然险</td>
                                    <td>159,485.44</td>
                                    <td>459.54</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="money">保费合计：<strong>22,150</strong>元</div>
                <van-button class="btn" type="primary" size="large" @click="$router.push('/elec-policy')">查看电子保单</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import { Row, Col  } from 'vant';
export default {
    name:'MyPolicyDetail',
    components:{
        [Row.name]:Row,
        [Col.name]: Col
    }
}
</script>
<style lang="less" scoped>
    .my-policy-detail{
        padding-top: 46px;
        font-size: .12rem;
        .box{
            width: 100%;
            height: 1.15rem;
            background: rgb(0,99,255);
            color: #ffffff;
            padding: 0 .2rem;
            box-sizing: border-box;
            align-items: center;
            .b1{
                display: flex;
                padding-top: .2rem;
                .b1-l{
                    h3{
                        font-size: .16rem;
                        font-weight: 400;
                        color: #f9f9f9;
                    }
                    p{
                        padding-top: .15rem;
                        color: #A3C2F4;
                    }
                }
                .b1-r{
                    width: .6rem;
                    margin-left: auto;
                    img{
                        width: 100%;
                    }
                }
            }
            .box1{
                .content{
                    width: 3.35rem;
                    height: 3.64rem;
                    box-shadow:0px 3px 18px 0px rgba(105,105,105,0.1);
                    background: #ffffff;
                    margin-top: .15rem;
                    color: #333333;
                    padding-top: .1rem;
                    h3{
                        margin-left: .1rem;
                        padding-left: .1rem;
                        border-left: 2.5px solid #0063FF;
                        margin-bottom: .135rem;
                        font-size: .14rem;
                        font-weight: 500;
                        color: #333333;
                    }
                    .current{
                        // padding-bottom: .18rem;
                        .van-row{
                            margin: 0 .2rem;
                            line-height: 20px;
                        }
                        .van-row:last-child{
                            padding-bottom: .17rem;
                            border-bottom: 1px solid #F4F5F7;
                        }
                    }
                    .info{
                        padding-top: .1rem;
                        .i-table{
                            padding: 0rem .2rem;
                            table{
                                border-top: 1px solid rgba(191,191,191,0.3);
                                border-left: 1px solid rgba(191,191,191,0.3);
                            }
                            table tr td{
                                border-right: 1px solid rgba(191,191,191,0.3);
                                border-bottom: 1px solid rgba(191,191,191,0.3);
                                padding: .1rem;
                            }
                        }
                    }
                }
                .money{
                    padding-top: .2rem;
                    text-align: right;
                    color: #333333;
                    strong{
                        font-size: .16rem;
                        font-weight: 500;
                        color: #0063FF;
                    }
                }
                .btn{
                    background: rgb(0,99,255);
                    border-color: rgb(0,99,255);
                    margin-top: .2rem;
                }
            }
        }
    }
</style>

