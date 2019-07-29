<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="oil-part">
        <van-nav-bar v-if="tp == 0" title="油卡分配"  @click-left="$router.go(-1)" left-arrow fixed/>
        <van-search placeholder="请输入车牌号或油卡号" v-model="value" />
        <div class="p-inner">
            <div class="i-cash">
                <p>可分配金额<span>!</span></p>
                <h3>￥ 989,898</h3>
            </div>
            <div class="i-content">
                <div class="c-item" v-for="i in 8" :key="i">
                    <div class="item1">
                        <div class="ii">
                            <img src="../../assets/image/oil/zgsy1.png"/>
                        </div>
                    </div>
                    <div class="item2">
                        <h3>632493493849384934</h3>
                        <p class="p1">车牌号：闽E61S98</p>
                        <p class="p2">备付金：￥989</p>
                    </div>
                    <div class="item3">
                        <div class="nac" :class="cash[i]&&'ac'">
                            <span v-if="cash[i]">￥</span>
                            <input type="number" pattern="\d*" v-model="cash[i]" placeholder="分配金额" @input="cash[i] = cash[i].replace(/[^\d]/g,'')"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bb">
                <div class="btn"  @click="toPart">
                    立即分配
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Search } from 'vant';
export default {
    name:'OilPart',
    components:{
        [Search.name]: Search
    },
    data(){
        return{
            value:'',
            cash: []
        }
    },
     methods:{
        toPart(){
            this.$dialog.alert({
                showCancelButton: true,
                confirmButtonText: '充值',
                confirmButtonColor: '#39D65D',
                title: '标题',
                message: '可分配金额不足，请先充值后再分配。是否前往充值？'
            }).then(() => {
                this.$router.push('/oil-card-Recharge')
            }).catch(()=>{
                this.$router.push('/part-sett')
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .oil-part{
        padding-top: 46px;
        font-size: .12rem;
        .van-search{
            padding: 10px .2rem;
        }
        .p-inner{
            padding: 0 .2rem;
            .i-cash{
                height: .9rem;
                background: #0063FF;
                color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                // text-align: center;
                p{
                    display: flex;
                    align-items: center;
                    span{
                        margin-left: .05rem;
                        display: inline-block;
                        width: .08rem;
                        height: .08rem;
                        border-radius: 50%;
                        background: #ffffff;
                        font-size: .1rem;
                        text-align: center;
                        line-height: .08rem;
                        color: #0063FF;
                    }
                }
                h3{
                    font-size: .25rem;
                    padding-top: .1rem;
                }
            }
             .i-content{
                padding: .1rem 0;
                box-sizing: border-box;
                padding-bottom: .7rem;
                .c-item{
                    display: flex;
                    box-shadow:0px 0px 21px 0px rgba(35,24,21,0.06);
                    border-radius:3px;
                    margin-bottom: .1rem;
                    .item1{
                        width: .71rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .ii{
                            width: .43rem;
                            img{
                                width: 100%;
                            }
                        }
                    }
                    .item2{
                        flex-grow: 1;
                        h3{
                            color: #333333;
                            font-size: .14rem;
                            padding-top: .1rem;
                        }
                        .p1{
                            color: #666666;
                            font-weight: 300;
                            padding-bottom: .03rem;
                            padding-top: .1rem;
                        }
                        .p2{
                            color: #666666;
                            font-weight: 300;
                            padding-bottom: .05rem;
                        }
                    }
                    .item3{
                        width: 1.03rem;
                        color: #ffffff;
                        border-radius:0px 1.5px 1.5px 0px;
                        .ac{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            height: 100%;
                            background: #0063FF !important;
                            font-size: .14rem;
                            padding-right: .1rem;
                            box-sizing: border-box;
                            input{
                                background: #0063FF !important;
                                text-align: left !important;
                            }
                        }
                        .nac{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            height: 100%;
                            font-size: .14rem;
                            background: #C3C3C3;
                            // transition: all .1s ease;
                            span{
                                width: 50%;
                                text-align: right;
                            }
                            input{
                                width: 100%;
                                background: #C3C3C3;
                                border: none;
                                color: #ffffff;
                                text-align: center;
                                height: 100%;
                            }
                            input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                                color: #ffffff;
                            }
                            input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                                color: #ffffff;
                            }
                            input::-moz-placeholder { /* Mozilla Firefox 19+ */
                                color: #ffffff;;
                            }
                            input:-ms-input-placeholder { /* Internet Explorer 10-11 */
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
            .bb{
                width: 100%;
                background: #ffffff;
                position: fixed;
                bottom: 0;
                left: 0;
                 .btn{
                    margin: .1rem auto;
                    width: 3.35rem;
                    height: .44rem;
                    background: #0063FF;
                    color: #ffffff;
                    text-align: center;
                    line-height: .44rem;
                    // margin-top: .2rem;
                    // margin-bottom: .2rem;
                }
            }
           
        }
        
    }
</style>
