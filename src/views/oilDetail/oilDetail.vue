<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="oil-detail">
        <van-nav-bar v-if="tp == 0" title="加油"  @click-left="$router.go(-1)" left-arrow right-text="挂失" @click-right="$router.push('/single-card-loss')" fixed/>
        <div class="d-inner">
            <div class="i-card">
                <span>正常</span>
                <img class="logo" src="../../assets/image/oil/card1.png" />
                <h3>卡余额：￥9,889</h3>
                <p class="p1">备付金：￥0</p>
                <h3 class="num">632  493  4938  4938  4934</h3>
                <div class="c1">
                    <div class="d1">
                        <p>闽D 45678</p>
                        <p>2019-09-09</p>
                    </div>
                    <div class="d2">
                        <img src="../../assets/image/oil/zsh.png"/>
                    </div>
                </div>
            </div>
            <div class="i-record">
                <h3>选择分配金额 <span>!</span></h3>
                <div class="r-cash">
                    <div class="row">
                        <div class="item" :class="money == 100&&'item-active'" @click="onClick(100)">100 <span>元</span></div>
                        <div class="item" :class="money == 200&&'item-active'" @click="onClick(200)">200 <span>元</span></div>
                        <div class="item" :class="money == 500&&'item-active'" @click="onClick(500)">500 <span>元</span></div>
                    </div>
                    <div class="row row1">
                        <div class="item" :class="money == 1000&&'item-active'" @click="onClick(1000)">1000 <span>元</span></div>
                        <div class="item" :class="money == 2000&&'item-active'" @click="onClick(2000)">2000 <span>元</span></div>
                        <div class="item" :class="money == 5000&&'item-active'" @click="onClick(5000)">5000 <span>元</span></div>
                    </div>
                    <div class="r-input">
                        <input type="text" v-model="cash" placeholder="请输入自定义金额" @input="cash = cash.replace(/[^0-9-]+/,'')"/>
                    </div>
                    <div class="r-money">
                        账号余额：<span>￥ 878,787</span>
                    </div>
                    <div class="r-btn" @click="toRecord">
                        立即分配
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'OilDetail',
    data(){
        return{
            cash: '',
            money: 100
        }
    },
    methods:{
        toRecord(){
            this.$dialog.alert({
                    showCancelButton:true,
                    confirmButtonText:'充值',
                    title: '标题',
                    message: '当前账户余额不足，是否前往充值账户余额？'
                }).then(() => {
                    this.$router.push('/oil-card-Recharge')
                }).catch(() =>{
                    
                })
        },
        onClick(cash){
            this.money = cash;
        }
    }
}
</script>
<style lang="less" scoped>
    .oil-detail{
        padding: .15rem;
        font-size: .12rem;
        padding-top: 46px;
        .d-inner{
            padding-top: .1rem;
            .i-card{
                padding-left: .2rem;
                padding-top: .1rem;
                padding-bottom: .1rem;
                box-sizing: border-box;
                height: 1.91rem;
                position: relative;
                color: #ffffff;
                background-image: url(../../assets/image/oil/bgred.png);
                background-size: 100% 100%;
                span{
                    position: absolute;
                    top: 0;
                    right: .034rem;
                    background: #FFCC00;
                    color: #ffffff;
                    width: .57rem;
                    height: .24rem;
                    line-height: .24rem;
                    text-align: center;
                    border-radius:0px 10px 0px 10px;
                }
                .logo{
                    width: .2rem;
                }
                h3{
                    font-size: .15rem;
                    margin: .05rem auto;
                }
                h3.num{
                    padding-top:.1rem;
                }
                .p1{

                }
                .c1{
                    display: flex;
                    margin-top: .2rem;
                    .d1{
                        flex-grow: 1;
                        p{
                            padding: .01rem 0;
                            box-sizing: border-box;
                        }
                    }
                    .d2{
                        width: .45rem;
                        display: flex;
                        align-items: center;
                        // justify-content: center;
                        img{
                            width: .35rem;
                        }
                    }
                }
            }
            .i-record{
                padding-top: .19rem;
                h3{
                    color: #333333;
                    font-size: .14rem;
                    font-weight: 500;
                    padding-bottom: .15rem;
                    padding-left: .05rem;
                    box-sizing: border-box;
                    span{
                        display: inline-block;
                        width: .1rem;
                        height: .1rem;
                        line-height: .1rem;
                        text-align: center;
                        background: #387FF4;
                        color: #ffffff;
                        border-radius: 50%;
                        font-size: .09rem;
                    }
                }
                .r-cash{
                    padding-left: .05rem;
                    box-sizing: border-box;
                    .row{
                        display: flex;
                        justify-content: space-between;
                        .item{
                            width: calc(33.33% - .05rem);
                            height: .49rem;
                            text-align: center;
                            line-height: .49rem;
                            border:1px solid rgba(195,195,195,1);
                            font-size: .18rem;
                            color: #C3C3C3;
                            transition: all .3s ease;
                            span{
                                font-size: .12rem;
                            }
                        }
                        .item-active{
                            background: #0063FF;
                            color: #ffffff;
                        }
                    }
                    .row1{
                        margin-top: .1rem;
                    }
                    .r-input{
                        margin-top: .1rem;
                        height: .49rem;
                        border: 1px solid rgba(195,195,195,1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        input{
                            height: .49rem;
                            border: none;
                            font-size: .16rem;
                            text-align: center;
                        }
                        input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                            font-size: .16rem;
                            color:#C3C3C3
                        }
                        input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                            font-size: .16rem;
                            color:#C3C3C3
                        }
                        input::-moz-placeholder { /* Mozilla Firefox 19+ */
                            font-size: .16rem;
                            color:#C3C3C3
                        }
                        input:-ms-input-placeholder { /* Internet Explorer 10-11 */
                            font-size: .16rem;
                            color:#C3C3C3
                        }
                    }
                    .r-money{
                        padding-top: .8rem;
                        text-align: right;
                        span{
                            color: #D73A3A;
                            font-size: .18rem;
                            font-weight: bold;
                        }
                    }
                    .r-btn{
                        height: .44rem;
                        text-align: center;
                        line-height: .44rem;
                        background: #0063FF;
                        color: #ffffff;
                        margin-top: .2rem;
                    }
                }
            }
        }
    }
</style>
