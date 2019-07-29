<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="broker">
        <van-nav-bar v-if="tp == 0" title="申请经纪人"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
            <img src="../../../assets/image/me/borker.png" />
            <div  class="btn" @click="$router.push('/broker-info')">申请成为经纪人</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Broker'
}
</script>
<style lang="less" scoped>
    .broker{
        // margin-top: 46px;
        font-size: .12rem;
        
        .inner{
            img{
                width: 100%;
            }
            .btn{
                position: fixed;
                bottom: .18rem;
                left: 50%;
                transform: translateX(-50%);
                width: 3.335rem;
                height: .44rem;
                line-height: .44rem;
                margin: .1rem auto;
                text-align: center;
                color: #FFFFFF;
                background:linear-gradient(3deg,rgba(38,120,255,1),rgba(38,120,255,1),rgba(33,114,255,1));
                border-radius: 1.5px;
                font-size: .14rem;
            }
        }
    }
</style>
