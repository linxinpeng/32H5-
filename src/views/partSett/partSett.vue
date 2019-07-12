<template>
    <div class="part-sett" :style="`height: ${h}px`">
        <van-nav-bar title="分配结算"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="s-inner">
            <div class="i-head">
                <p>可分配金额<span>!</span></p>
                <h3>￥ 989,898</h3>
            </div>
            <div class="i-item">
                <h3>当前可分配金额</h3>
                <p>￥ 989,898</p>
            </div>
            <div class="i-item">
                <h3>分配后剩余金额</h3>
                <p>￥ 989,898</p>
            </div>
        </div>
        <div class="btn" @click="toPart">确定分配</div>
    </div>
</template>
<script>
export default {
    name:'PartSett',
    data(){
        return{
            h: window.innerHeight - 46
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
            // on close
            }).catch(()=>{})
        }
    }
}
</script>
<style lang="less" scoped>
    .part-sett{
        padding-top: 46px;
        font-size: .12rem;
        position: relative;
        .s-inner{
            padding: .1rem .2rem;
            box-sizing: border-box;
            .i-head{
                 height: 1.27rem;
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
            .i-item{
                height: .77rem;
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                justify-content: center;
                background:rgba(255,255,255,1);
                box-shadow:0px 0px 21px 0px rgba(35,24,21,0.06);
                border-radius:3px;
                margin: .08rem auto;
                padding-left: .19rem;
                h3{
                    font-size: .14rem;
                    color: #333333;
                    padding-bottom: .05rem;
                }
                p{
                    color: #666666;
                }
            }
        }
        .btn{
            width: 3.35rem;
            height: .44rem;
            background: #0063FF;
            color: #ffffff;
            text-align: center;
            line-height: .44rem;
            position: absolute;
            bottom: .2rem;
            left: .2rem;
        }
    }
</style>
