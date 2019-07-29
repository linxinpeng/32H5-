<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="borker-info">
        <van-nav-bar v-if="tp == 0" title="申请经纪人"  @click-left="$router.go(-1)" fixed left-arrow :z-index="109"/>
        <div class="inner">
            <div class="tabs">
                <span :class="active == 1&&'active'" @click="active = 1">个人</span>
                <span :class="active == 2&&'active'" @click="active = 2">企业</span>
            </div>
            <personal v-if="active == 1"></personal>
            <company v-else></company>
        </div>
    </div>
</template>
<script>
import Personal from './personal'
import Company from './company'
export default {
    name:'BorkerInfo',
    components:{
        Personal,
        Company
    },
    data(){
        return{
            active: 1,
        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
    .borker-info{
        padding-top: 46px;
        font-size: .12rem;
        
        .inner{
            padding: .1rem .2rem;
            .tabs{
                span{
                    display: inline-block;
                    width: .36rem;
                    padding-bottom: .06rem;
                    color: #666666;
                    // transition: all .1s ease;
                }
                span:nth-child(1){
                    margin-right: .32rem;
                }
                .active{
                    font-size: .16rem;
                    color: #333333;
                    font-weight: bold;
                    border-bottom: 1.5px solid #333333;
                }
            }

        }
    }
</style>
