<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="claim-record">
        <van-nav-bar v-if="tp == 0" title="理赔记录"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
            <div class="search">
                <van-search placeholder="请输入搜索关键词" v-model="value" />
            </div>
            <div class="content">
                <div class="item" v-for="i in 2" :key="i" @click="$router.push('/claim-details')">
                    <div class="head">
                        <h3>闽D98544</h3>
                        <van-tag type="primary">待理赔</van-tag>
                    </div>
                    <div class="bottom">
                        <p>出险原因：碰撞</p>
                        <p>报案时间：2019-07-09</p>
                        <p>案件编号：CXV1442258855<span>￥98,549.45</span></p>
                    </div>
                </div>
            </div>
            <!-- <div style="height: .05rem;background: #f4f4f4;"></div> -->
        </div>
    </div>
</template>
<script>
import { Search ,Tag } from 'vant';
export default {
    name:'ClaimRecord',
    components:{
        [Search.name]: Search,
        [Tag.name]: Tag
    },
    data(){
        return{
            value:''
        }
    }
}
</script>
<style lang="less" scoped>
    .claim-record{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            padding: .1rem .2rem;
            .search{
                // background: #F4F4F4;
                .van-search{
                    padding: 10px 0;
                }
            }
            .content{
                .item{
                    padding: .15rem .2rem;
                    box-shadow:0px 1.5px 4px 0px rgba(35,24,21,0.11);
                    border-radius: 1.5px;
                    margin-bottom: .1rem;
                    .head{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding-bottom: .15rem;
                        border-bottom: 1px dashed #f2f2f2;
                        h3{
                            color: #333333;
                            font-size: .14rem;
                            font-weight: 500;
                        }
                    }
                    .bottom{
                        padding-top: .125rem;
                        p{
                            font-size: .1rem;
                            color: #666666;
                            line-height: 1.5;
                        }
                        p:last-child{
                            display: flex;
                            align-items: center;
                            span{
                                margin-left: auto;
                                font-size: .14rem;
                                color: #f86828;
                                font-weight: 500;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
