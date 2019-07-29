<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="my-list">
        <van-nav-bar v-if="tp == 0" title="我的订单"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="search">
            <div class="l">
                <van-search placeholder="请输入搜索关键词" v-model="value" />
            </div>
            <div class="r" @click="show = true">
                {{ty}} <van-icon name="arrow-down" />
            </div>
        </div>
        <div class="inner">
            <div class="item" v-for="i in 2" :key="i" @click="$router.push('/order-detail')">
                <div class="head">
                    <h3>BXDD203209485945845984</h3>
                    <van-tag type="primary">已完成</van-tag>
                </div>
                <div class="bottom">
                    <p>出险原因：碰撞</p>
                    <p>报案时间：2019-07-09</p>
                    <p>案件编号：CXV1442258855<span>￥98,549.45</span></p>
                </div>
            </div>
        </div>
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect"/>
    </div>
</template>
<script>
import { Search ,Icon } from 'vant';
export default {
    name:'MyList',
    components:{
        [Search.name]: Search,
        [Icon.name]: Icon
    },
    data(){
        return{
            ty: '类别',
            value:"",
            show: false,
            actions: [
                { name: '选项1' },
                { name: '选项2' },
                { name: '选项3', subname: '描述信息' }
            ]
        }
    },
    methods: {
        onSelect(item) {
            // 点击选项时默认不会关闭菜单，可以手动关闭
            this.ty = item.name;
            this.show = false;
        }
    }
}
</script>
<style lang="less" scoped>
    .my-list{
        padding-top: 46px;
        font-size: .12rem;
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
                .r{
                    width: .77rem;
                    height: .34rem;
                    display: flex;
                    background: #ffffff;
                    align-items: center;
                    justify-content: space-around;
                }
            }
        .inner{
            padding: .1rem .2rem;
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
</style>
