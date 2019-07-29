<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="loan-detail">
        <van-nav-bar v-if="tp == 0" title="贷款详情页"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="banner">
            <div class="info">
                <img src="../../../assets/image/me/card.png" />车易贷1号 <span class="bt">还款中</span>
            </div>
            <div class="box">
                <div class="wrap">
                    <div class="l">
                        <p>本期应还金额</p>
                        <h3>￥3,493.34</h3>
                    </div>
                    <i></i>
                    <div class="r">
                        <p>到期还款日</p>
                        <h3>6月20日</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner">
            <van-cell-group :border="false">
                <van-cell title="贷款金额" value="内容" />
                <van-cell title="贷款利率" value="内容" />
                <van-cell title="还款方式" value="内容" />
                <van-cell title="月还款额" value="内容" />
                <van-cell title="剩余本金" value="内容" />
                <van-cell title="已还期数" value="内容" />
                <van-cell title="" value="" />
            </van-cell-group>
        </div>
        <div style="height: .1rem;background: #f2f2f2;"></div>
        <div class="ZHD">
            <h3>组合贷方案</h3>
            <van-cell-group :border="false">
                <van-cell title="贷款金额" value="内容" />
                <van-cell title="贷款利率" value="内容" />
                <van-cell title="还款方式" value="内容" />
                <van-cell title="月还款额" value="内容" />
                <van-cell title="剩余本金" value="内容" />
                <van-cell title="已还期数" value="内容" />
                <van-cell title="" value="" />
            </van-cell-group>
        </div>
    </div>
</template>
<script>
import { Field } from 'vant';
export default {
    name:'LoanDetail',
    components:{
        [Field.name]: Field 
    }
}
</script>
<style lang="less" scoped>
    .loan-detail{
        padding-top: 46px;
        font-size: .12rem;
        .banner{
            position: relative;
            height: 1.17rem;
            background:linear-gradient(186deg,rgba(13,94,228,1),rgba(38,120,255,1),rgba(33,114,255,1));
            padding: .3rem .2rem;
            box-sizing: border-box;
            .info{
                display: flex;
                // align-content: center;
                align-items: center;
                font-size: .19rem;
                color: #ffffff;
                .bt{
                    width: .65rem;
                    height: .24rem;
                    text-align: center;
                    line-height: .24rem;
                    font-size: .14rem;
                    border: 1px solid #F2F2F2;
                    border-radius: 1.5px;
                    margin-left: auto;
                }
                img{
                    width: .35rem;
                    margin-right: .2rem;
                }
            }
            .box{
                position: absolute;
                width: calc(100% - 0.4rem);
                height: .82rem;
                top: 100%;
                left: 50%;
                background: #ffffff;
                box-shadow:0px 0px 3px 0px rgba(105,105,105,0.11);
                border-radius:3px;
                transform: translate3d(-50%,-30%,0);
                .wrap{
                    display: flex;
                    align-items: center;
                    height: 100%;
                    .l,.r{
                        flex-grow: 1;
                        align-items: center;
                        justify-content: center;
                        display: flex;
                        flex-direction: column;
                        p{
                            color: #666666;
                            font-size: .14rem;
                            padding-bottom: .05rem;
                        }
                        h3{
                            color: #333333;
                            font-size: .16rem;
                        }
                    }
                    i{
                        width: 1px;
                        height: .38rem;
                        border-left: 1px dashed #D2D2D2;
                    }
                }
            }
        }
        .inner{
            padding: 0 .2rem;
            padding-top: 0.574rem;
        }
        .ZHD{
            padding: .1rem .2rem;
            h3{
                font-size: .14rem;
                font-weight: 500;
                color: #333333;
                margin-bottom: .15rem;
            }
            h3::before{
                width: 2.5px;
                height: .13rem;
                background: #0063FF;
                content: '';
                margin-right: .15rem;
                display: inline-block;
            }
        }
    }
</style>
