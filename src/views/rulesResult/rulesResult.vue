<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="rules">
        <van-nav-bar v-if="tp == 0" title="查询结果"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="r-content">
            <div class="c-info">
                <div>闽D E57441</div>
                <div class="i-info">
                    <span>违章：<strong>3</strong> 次</span>
                    <span>扣分：<strong>3</strong> 次</span>
                    <span>罚款：<strong>300</strong> 元</span>
                </div>
            </div>
            <div class="c-list">
                <div class="l-item" v-for="i in 8" :key="i">
                    <div class="i-left">
                        <div class="l-d1">2019-04-07 15：34：34</div>
                        <div class="l-d2">水仙大街</div>
                        <p>机动车通过有灯控路口时，不按所需行进方向驶入导向车道的</p>
                    </div>
                    <div class="i-right">
                        <div>
                            <span class="kou">3分</span>
                        </div>
                        <div>
                            <span class="fa">150元</span>
                        </div>
                        <div>
                            <span class="zhi">150元</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'rulesResult'
}
</script>
<style lang="less" scoped>
    .rules{
        background: #f2f2f2;
        padding: 0 .17rem;
        box-sizing: border-box;
        padding-top: 40px;
        font-size: .12rem;
        padding-bottom: .4rem;
        .c-info{
            // height: 1.05rem;
            margin: .12rem auto;
            background: #285BF1;
            text-align: center;
            color: #ffffff;
            font-size: .16rem;
            padding: .2rem .3rem;
            box-sizing: border-box;
            .i-info{
                padding-top: .1rem;
                display: flex;
                justify-content: space-around;
                font-size: .12rem;
                strong{
                    font-size: .14rem;
                }
            }
        }
        .c-list{
            .l-item{
                padding: .15rem;
                box-sizing: border-box;
                display: flex;
                background: #ffffff;
                margin: .1rem auto;
                .i-left{
                    width: 2.19rem;
                    .l-d1,.l-d2{
                        font-size: .11rem;
                        color: #333333;
                        font-weight: 500;
                        padding-bottom: .09rem;
                    }
                    p{
                        font-size: .11rem;
                        color: #c3c3c3;
                        font-weight: 300;
                        line-height: 1.5;
                    }
                }
                .i-right{
                    flex-grow: 1;
                    padding-left: .2rem;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    div{
                        margin-bottom: .08rem;
                        .kou::before{
                            display: inline-block;
                            content: '扣';
                            margin-right: .05rem;
                            width: .19rem;
                            height: .19rem;
                            border-radius: 50%;
                            border: 2px dashed #ff0000;
                            text-align: center;
                            line-height: .19rem;
                        }
                        .fa::before{
                            display: inline-block;
                            content: '罚';
                            margin-right: .05rem;
                            width: .19rem;
                            height: .19rem;
                            border-radius: 50%;
                            border: 2px dashed #ff0000;
                            text-align: center;
                            line-height: .19rem;
                        }
                        .zhi::before{
                            display: inline-block;
                            content: '滞';
                            margin-right: .05rem;
                            width: .19rem;
                            height: .19rem;
                            border-radius: 50%;
                            border: 2px dashed #ff0000;
                            text-align: center;
                            line-height: .19rem;
                        }
                    }
                }
            }
        }
    }
</style>
