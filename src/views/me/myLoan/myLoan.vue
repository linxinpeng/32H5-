<template>
    <div class="my-loan">
        <van-nav-bar title="我的贷款"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
            <div class="item">
                <div class="top">
                    <van-tag type="primary" size="large">还款中</van-tag>
                    <span class="title">车易贷一号</span>
                    <span class="time">2019-07-08</span>
                </div>
                <div class="bottom">
                    <div class="b-item">
                        <p>本期应还</p>
                        <span class="money">￥3493</span>
                    </div>
                    <i></i>
                    <div class="b-item">
                        <p>到期还款日</p>
                        <span>6月20日</span>
                    </div>
                    <i></i>
                    <div class="b-item">
                        <p>期数</p>
                        <span>35</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <van-tag color="#FF9933" size="large">审核中</van-tag>
                    <span class="title">消费贷一号</span>
                    <span class="time">2019-07-08</span>
                </div>
                <div class="bottom">
                    <div class="b-item">
                        <p>申请人</p>
                        <span>陈耀毅</span>
                    </div>
                    <i></i>
                    <div class="b-item">
                        <p>申请额度</p>
                        <span class="money">￥ 50,0000</span>
                    </div>
                    <i></i>
                    <div class="b-item">
                        <p>期数</p>
                        <span>12</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <van-tag color="#cccccc" type="primary" size="large">已结清</van-tag>
                    <span class="title">消费贷一号</span>
                    <span class="time">2019-07-08</span>
                </div>
                <div class="bottom">
                    <div class="b-item">
                        <p>申请人</p>
                        <span>陈耀毅</span>
                    </div>
                    <i></i>
                    <div class="b-item">
                        <p>到期还款日</p>
                        <span class="money">￥ 50,0000</span>
                    </div>
                    <i></i>
                    <div class="b-item">
                        <p>期数</p>
                        <span>36</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="btns">
            <div class="btn">申请新贷款</div>
        </div>
    </div>
</template>
<script>
import { Tag } from 'vant';
export default {
    name:'MyLoan',
    components:{
        [Tag.name]: Tag
    }
}
</script>
<style lang="less" scoped>
    .my-loan{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            padding: .15rem .2rem;
            padding-bottom: .6rem;
            .item{
                padding: .15rem .2rem;
                box-sizing: border-box;
                box-shadow:0px 1.5px 4px 0px rgba(35,24,21,0.11);
                border-radius: 1.5px;
                color: #666666;
                margin-bottom: .2rem;
                .top{
                    display: flex;
                    padding-bottom: .2rem;
                    align-items: center;
                    border-bottom: 1px dashed #f2f2f2;
                    .title{
                        margin-left: .09rem;
                    }
                    .time{
                        margin-left: auto;
                    }
                }
                .bottom{
                    display: flex;
                    padding-top: .2rem;
                    align-items: center;
                    .b-item{
                        flex-grow: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        color: #666666;
                        p{
                            padding-bottom: .05rem;
                        }
                        span{
                            color: #333333;
                        }
                        .money{
                            color: #FF9933;
                        }
                    }
                    i{
                        width: 1px;
                        height: .2rem;
                        background: #F2F2F2;
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
            z-index: 99;
            padding-bottom: .1rem;
            .btn{
                width: calc(100% - .4rem);
                margin: 0 auto;
                background: #0063FF;
                color: #ffffff;
                height: .44rem;
                line-height: .44rem;
                text-align: center;
                font-size: .14rem;
            }
        }
    }
</style>
