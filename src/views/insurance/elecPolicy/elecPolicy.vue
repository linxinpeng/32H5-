<template>
    <div class="elec-policy">
        <van-nav-bar title="电子保单"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="content">
        
        </div>
        <div class="btn">保单下载</div>
    </div>
</template>
<script>
export default {
    name:'ElecPolicy'
}
</script>
<style lang="less" scoped>
    .elec-policy{
        padding-top: 46px;
        .content{
            // padding-top: .15rem;
            width: 3.35rem;
            height: 4.61rem;
            background: #0063FF;
            margin: .15rem auto;
        }
        .btn{
             width: 3.35rem;
             height: .44rem;
             background: #0063FF;
             color: #ffffff;
             margin: .2rem auto;
             text-align: center;
             line-height: .44rem;
             font-size: .14rem;
        }
    }
</style>
