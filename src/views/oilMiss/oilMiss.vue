<template>
    <div :style="`height:${h}px;${tp == 0?'padding-top: 46px':'padding-top: 0'}`" class="oil-apply" >
        <van-nav-bar v-if="tp == 0" title="账户充值"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="a-inner">
            <div class="i-img">
                <img class="img1" src="../../assets/image/oil/gs.png" />
                <div class="desc">
                    <p>闽D 889Q3</p>
                    <p>2019-09-09</p>
                </div>
                <img class="img2" src="../../assets/image/oil/zgsy.png"/>
            </div>
            <div class="i-content">
                <img src="../../assets/image/oil/gs1.png" />
            </div>
            <div class="i-btn">
                重新申请
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'OilApply',
    data(){
        return{
            h: window.innerHeight
        }
    }
}
</script>
<style lang="less" scoped>
    .oil-apply{
        font-size: .12rem;
        padding-top: 46px;
        background: rgba(246,246,246,1);
        box-sizing: border-box;
        position: relative;
        .a-inner{
            .i-img{
                padding: .24rem .25rem;
                background: #ffffff;
                position: relative;
                img.img1{
                    width: 100%;
                }
                .desc{
                    position: absolute;
                    top: 0.9rem;
                    left: 0.53rem;
                    color: #333333;
                }
                .img2{
                    width: .34rem;
                    position: absolute;
                    bottom: 0.5rem;
                    right: 0.45rem;
                }
            }
            .i-content{
                padding-top: 1.3rem;
                box-sizing: border-box;
                text-align: center;
                img{
                    width: 2.5rem;
                }
            }
            .i-btn{
                width: 3.35rem;
                height: .44rem;
                border-radius: 1.5px;
                background: #0063FF;
                color: #ffffff;
                text-align: center;
                line-height: .44rem;
                position: absolute;
                bottom: .2rem;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
</style>

