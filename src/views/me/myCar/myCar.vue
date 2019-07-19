<template>
    <div class="my-car">
        <van-nav-bar title="我的车辆"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
            <div class="search">
                <div class="l">
                    <van-search placeholder="请输入搜索关键词" v-model="value" />
                </div>
            </div>
            <div class="content">
                <div class="item" v-for="i in 3" :key="i" @click="$router.push('/my-car-info')">
                    <div class="top">
                        <span class="s1">闽D955G6</span>
                        <Span class="s2">LA9898DSF9******54</Span>
                    </div>
                    <div class="bottom">
                        <p>交强险到期：2019-09-09<span class="s3">续保</span></p>
                        <p>商业险到期：2019-10-09</p>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
import { Search } from 'vant';
export default {
    name:'MyCar',
    components:{
        [Search.name]: Search
    },
    data(){
        return{
            value:''
        }
    }
}
</script>
<style lang="less" scoped>
    .my-car{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            .search{
                    display: flex;
                    background: #F4F4F4;
                    padding: .1rem .2rem;
                    .l{
                        flex-grow: 1;
                        margin-right: .1rem;
                        .van-search{
                            padding: 0;
                        }
                        .van-search__content{
                            background: #ffffff;
                        }
                    }
                }
                .content{
                    padding: .15rem .2rem;
                    .item{
                        padding: .15rem .2rem;
                        box-shadow:0px 1.5px 4px 0px rgba(35,24,21,0.11);
                        border-radius: 1.5px;
                        margin-bottom: .15rem;
                        .top{
                            padding-bottom: .15rem;
                            border-bottom: 1px dashed #f2f2f2;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            .s1{
                                font-size: .14rem;
                                color: #333333;
                                font-weight: 500;
                            }
                        }
                        .bottom{
                            padding-top: .15rem;
                            p{
                                padding-bottom: .15rem;
                                display: flex;
                                justify-content: space-between;
                                color: #666666;
                                span{
                                    color: #00A950;
                                }
                            }
                            p:last-child{
                                padding-bottom: 0;
                            }
                        }
                    }
                }
            }
        }
</style>
