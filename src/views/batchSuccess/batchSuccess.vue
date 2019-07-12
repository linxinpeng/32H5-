<template>
    <div class="batch-success">
        <van-nav-bar title="批量挂失"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="inner">
            <div class="banner">
                <img src="../../assets/image/oil/succ.png" />
            </div>
            <p>当前账户余额为：￥39,898</p>
            <div class="btns">
                <div class="btn btn1">继续分配</div>
                <div class="btn btn2">返回</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'BatchSuccess'
}
</script>
<style lang="less" scoped>
    .batch-success{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            .banner{
                padding-top: .4rem;
                img{
                    width: 100%;
                }
            }
            p{
                text-align: center;
                color: #666666;
            }
            .btns{
                padding-top: .6rem;
                .btn{
                    width: 2.44rem;
                    height: .44rem;
                    text-align: center;
                    line-height: .44rem;
                    color: #ffffff;
                    margin: .1rem auto;
                }
                .btn1{
                    background: #39D65D;
                }
                .btn2{
                    background: #C3C3C3;
                }
            }
        }
    }
</style>

