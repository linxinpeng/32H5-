<template>
    <div class="insu-list">
        <van-nav-bar title="车辆列表页"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="head">
            <div class="search">
                <van-search placeholder="请输入搜索关键词" v-model="value" />
            </div>
            <div class="tabs">
                <van-tabs title-active-color="#0063FF" color="#0063FF" :swipe-threshold="5" v-model="active" sticky>
                    <van-tab title="推荐"></van-tab>
                    <van-tab title="车险"></van-tab>
                    <van-tab title="健康"></van-tab>
                    <van-tab title="财产"></van-tab>
                    <van-tab title="意外"></van-tab>
                </van-tabs>
            </div>
        </div>
        <div style="height: .1rem;background: #f2f2f2;"></div>
        <div class="list">
            <div class="item">
                <div class="l">
                    <img src="../../../assets/image/car/carlist.png" />
                </div>
                <div class="r">
                    <h3>机动车商业险</h3>
                    <p>1元起投，最高赔付100万，加班无忧</p>
                    <div class="bottom"><strong style="font-weight:300;font-size: .12rem;">点击快速获取报价</strong></div>
                </div>
            </div>
            <div class="item" v-for="i in 8" :key="i">
                <div class="l">
                    <img src="../../../assets/image/car/carlist.png" />
                </div>
                <div class="r">
                    <h3>机动车商业险</h3>
                    <p>1元起投，最高赔付100万，加班无忧</p>
                    <div class="bottom"><strong>￥1元</strong> 起 <van-button  size="small" type="info">查看详情</van-button></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Tab, Tabs ,Search} from 'vant';
export default {
    name:'InsuList',
    components:{
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Search.name]: Search,
    },
    data(){
        return{
            value:'',
            active: 0
        }
    }
}
</script>
<style lang="less" scoped>
    .insu-list{
        padding-top: 46px;
        font-size: .12rem;
        .head{
            position: fixed;
            top: 46px;
            left: 0;
            width: 100%;
            background: #ffffff;
            z-index: 99;
        }
        .list{
            padding-top: 90px;
            .item{
                display: flex;
                padding: .2rem;
                box-sizing: border-box;
                border-bottom: 2px solid #f2f2f2;
                .l{
                    flex-grow: 1;
                }
                .r{
                    width: 2.29rem;
                    padding-left: .1rem;
                    display: flex;
                    flex-direction: column;
                    h3{
                        color: #333333;
                        font-size: .14rem;
                        font-weight: 500;
                        padding-bottom: .1rem;
                    }
                    p{
                        color: #666666;
                        font-size: .12rem;
                        font-weight: 300;
                    }
                    .bottom{
                        margin-top: auto;
                        display: flex;
                        align-items: center;
                        strong{
                            color: #FF9141;
                            font-size: .14rem;
                        }
                        button{
                            margin-left: auto;
                        }
                    }
                }
            }
        }
    }
</style>
