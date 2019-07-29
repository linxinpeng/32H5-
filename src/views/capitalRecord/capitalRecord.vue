<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="capital-record">
        <van-nav-bar v-if="tp == 0" title="资金记录"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="inner">
            <div class="search">
                <div class="s1">
                    <van-search placeholder="请输入车牌号或油卡" background="#ffffff" v-model="value" />
                </div>
                <div class="r" @click="show = true">
                    {{type}} <van-icon name="arrow-down" />
                </div>
            </div>
            <div class="content">
                <div class="item" v-for="i in 6" :key="i">
                    <div class="time">
                        <span class="t1">2019-05-09 11：23：22</span>
                        <span class="t2">充值</span>
                    </div>
                    <div class="info">
                        <div class="i1">
                            <p>卡号：989898989898989898989</p>
                            <p>充值方式：微信充值</p>
                            <p>账户余额：￥989,900</p>
                        </div>
                        <div class="money">￥1099</div>
                    </div>
                </div>
            </div>
        </div>
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect"/>
    </div>
</template>
<script>
import { Search,Icon ,ActionSheet  } from 'vant';
export default {
    name:'CapitalRecord',
    components:{
        [Search.name]: Search,
        [Icon.name]: Icon,
        [ActionSheet.name]: ActionSheet
    },
    data(){
        return{
            value:'',
            show: false,
            type:'分配状态',
            actions:[
                {name:'已分配'},
                {name:'反分配'}
            ]
        }
    },
    methods:{
        onSelect(item){
            this.type = item.name;
            this.show = false;
        }
    }
}
</script>
<style lang="less" scoped>
.van-search__content{
    background: #ffffff;
}
    .capital-record{
        padding-top: 46px;
        font-size: .12rem;
        background: #F2F2F2;
        .inner{
            padding: .1rem .2rem;
            box-sizing: border-box;
            .search{
                display: flex;
                justify-content: space-between;
                .s1{
                    width: 2.48rem;
                    height: .3rem;
                    overflow: hidden;
                    background: #ffffff;
                    .van-search {
                        padding: 0;
                    }
                }
                .r{
                    width: .77rem;
                    height: .3rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ffffff;
                    color: #666666;
                    i{
                        margin-left: .05rem;
                    }
                }
            }
            .content{
                padding-top: .1rem;
                .item{
                    padding: .16rem .26rem;
                    box-sizing: border-box;
                    background: #ffffff;
                    margin-bottom: .1rem;
                    .time{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-bottom: .09rem;
                        border-bottom: 1px dashed #C3C3C3;
                        .t1{
                            width: 1.52rem;
                        }
                        .t2{
                            width: .64rem;
                            height: .19rem;
                            text-align: center;
                            line-height: .19rem;
                            color: #ffffff;
                            background: #00A950;
                        }
                    }
                    .info{
                        display: flex;
                        justify-content: space-between;
                        padding-top: .1rem;
                        .i1{
                            width: 2.12rem;
                            color: #666666;
                            p{
                                line-height: 1.8;
                            }
                        }
                        .money{
                            display: flex;
                            align-items: center;
                            color: #FFA115;
                            font-size: .19rem;
                        }
                    }
                }
            }
        }
    }
</style>
