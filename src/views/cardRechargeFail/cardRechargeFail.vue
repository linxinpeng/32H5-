<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="card-record-fail">
        <van-nav-bar v-if="tp == 0" title="充值失败"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="inner">
            <img src="../../assets/image/oil/czsb.png"/>
            <p>请尝试再次充值，若仍有问题请 <span @click="show = true">联系客户。</span></p>
            <div class="btns">
                <div class="btn1 btn">再次充值</div>
                <div class="btn2 btn" @click="$router.go(-1)">返回</div>
            </div>
        </div>
        <transition name = "fade">
            <div v-if="show" class="mask">
                <div class="center">
                    <img src="../../assets/image/oil/tc.png" />
                    <div class="wx" @click="toWX"></div>
                    <div class="kf" @click="toKF"></div>
                    <div class="close" @click="show = false"></div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name:'CardRecordFail',
    data(){
        return{
            show: false
        }
    },
    methods:{
        toWX(){
            console.log('wx')
        },
        toKF(){
            console.log('KF')
        }
    }
}
</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
    .card-record-fail{
        padding-top: 1.2rem;
        font-size: .12rem;
        .mask{
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,.4);
            display: flex;
            align-items: center;
            .center{
                width: 3.07rem;
                margin: 0 auto;
                position: relative;
                .wx{
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: .64rem;
                    width: .49rem;
                    height: .7rem;
                    z-index: 1;
                }
                .kf{
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: .68rem;
                    width: .49rem;
                    height: .7rem;
                    z-index: 1;
                }
                .close{
                    width: .26rem;
                    height: .26rem;
                    border-radius: 50%;
                    // background: #000000;
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 1;
                }
                img{
                    width: 100%;
                }
            }
        }
        .inner{
            img{
                width: 100%;
            }
            p{
                text-align: center;
                color: #6a6a6a;
                span{
                    color: #0063FF;
                }
            }
             .btns{
                width: 2.44rem;
                margin: .4rem auto;
                .btn{
                    width: 100%;
                    height: .44rem;
                    text-align: center;
                    line-height: .44rem;
                    color: #ffffff;
                    font-size: .14rem;
                    border-radius: 1.5px;
                }
                .btn1{
                    background: #0063FF;
                    margin-bottom: .09rem;
                }
                .btn2{
                    background: #C3C3C3;
                }
            }
        }
    }
</style>
