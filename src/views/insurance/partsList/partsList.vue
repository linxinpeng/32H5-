<template>
    <div class="parts-list">
        <van-nav-bar title="零部件更换项目清单"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
            <h3>零部件更换项目</h3>
            <p>共有4份表单<span>1/4</span></p>
            <div class="box">此处有一份清单</div>
        </div>
        <div class="btns">
            <div class="btn" @click="isTB = true">立即投保</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'PartsList'
}
</script>
<style lang="less" scoped>
    .parts-list{
        padding-top: 70px;
        font-size: .12rem;
        .inner{
            padding: 0 .2rem;
            h3{
                color: #333333;
                font-size: .14rem;
                font-weight: 400;
            }
            p{
                color: #666666;
                font-size: .12rem;
                display: flex;
                span{
                    margin-left: auto;
                }
            }
            .box{
                margin-top: .1rem;
                color: #ffffff;
                width: 100%;
                height: 4.45rem;
                background: #0063FF;
            }
        }
         .btns{
                width: 100%;
                position: fixed;
                bottom: 0rem;
                left: 0;
                background: #ffffff;
                padding-bottom: .10rem;
                z-index: 99;
                .btn{
                    width: 3.35rem;
                    height: .44rem;
                    background: #0063FF;
                    color: #ffffff;
                    text-align: center;
                    line-height: .44rem;
                    margin: 0 auto;
                }
            }
    }
</style>

