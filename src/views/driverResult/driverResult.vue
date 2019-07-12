<template>
    <div class="driver">
        <van-nav-bar title="查询结果"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="d-content">
            <div class="c-head">
                <p>驾驶证号：452540 124145 0012</p>
                <p>档案编号：4510 0014 8768</p>
            </div>
            <div class="c-bottom">
                <div class="circle">12</div>
                <p>驾驶证剩余分数</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Driver',
}
</script>
<style lang="less" scoped>
    .driver{
        padding-top: 150px;
        font-size: .12rem;
        .d-content{
            width: 3.18rem;
            height: 3.15rem;
            margin: 0 auto;
            box-shadow:0px 2px 9px 0px rgba(105,105,105,0.5);
            .c-head{
                height: .82rem;
                background: #285BF1;
                padding: .24rem .26rem;
                box-sizing: border-box;
                color: #ffffff;
                p{
                    line-height: 1.8;
                }
            }
            .c-bottom{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 2.33rem;
                font-size: .16rem;
                color: #333333;
                .circle{
                    width: 1.09rem;
                    height: 1.09rem;
                    border-radius: 50%;
                    font-size: .55rem;
                    text-align: center;
                    line-height: 1.09rem;
                    color: #ffffff;
                    background: #285BF1;
                    margin-bottom: .1rem;
                }
            }
        }
    }
</style>

