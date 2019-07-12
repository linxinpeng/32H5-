<template>
    <div class="card-record-success">
        <van-nav-bar title="充值成功"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="inner">
            <img src="../../assets/image/oil/czcg.png" />
            <p>当前账户余额为：￥{{cash}}</p>
            <p>温馨提示：账户余额需要分配到油卡内才可以加油哦。</p>
            <div class="btns">
                <div class="btn1 btn">前往分配油卡</div>
                <div class="btn2 btn" @click="$router.push('/layout/home')">返回首页</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'CardRecordSuccess',
    data(){
        return{
            cash: '39,898'
        }
    }
}
</script>
<style lang="less" scoped>
    .card-record-success{
        padding-top: 1.2rem;
        font-size: .12rem;
        .inner{
            img{
                width: 100%;
            }
            p{
                color: #666666;
                text-align: center;
                line-height: .23rem;
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
