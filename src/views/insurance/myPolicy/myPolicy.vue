<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="my-policy">
        <van-nav-bar v-if="tp == 0" title="我的保单"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="head">
            <div class="search">
                <van-search placeholder="请输入搜索关键词" v-model="value" />
            </div>
            <div class="screen" @click="show = true">
                {{ty}} <van-icon name="arrow-down" />
            </div>
        </div>
        <div class="box">
            <div class="item" v-for="i in 3" :key="i" @click="$router.push('/my-policy-detailYSX')">
                <div class="t">
                    <span class="t-s1">交强险<van-tag type="primary">闽D6692G</van-tag></span>
                    <span class="t-s2">
                        <van-tag type="success">标生效中</van-tag>
                    </span>
                </div>
                <div class="b">
                    <div class="b-d1">
                        <p>被保人：陈欢欢</p>
                        <p>保单号：3245965135485281468</p>
                        <p>有效期：2019-07-08至2020-07-08</p>
                    </div>
                    <div class="b-d2">
                        <span><van-button size="small">查看详情</van-button></span>
                    </div>
                </div>
            </div>
        </div>
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect"/>
    </div>
</template>
<script>
import { Search } from 'vant';
export default {
    name:'MyPolicy',
    components:{
        [Search.name]: Search
    },
    data(){
        return{
            value:'',
            show: false,
            ty:'全部',
            actions:[
                {name:'全部'},
                {name:'交强险'},
                {name:'商业险'}
            ]
        }
    },
    methods: {
        onSelect(item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
            this.show = false;
            this.ty = item.name
        }
   }
}
</script>
<style lang="less" scoped>
    .my-policy{
        padding-top: 46px;
        font-size: .12rem;
        .head{
            display: flex;
            align-items: center;
            .search{
                flex-grow: 1;
            }
            .screen{
                width: .77rem;
                height: 34px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #F4F4F4;
                color: #666666;
                margin-right: .1rem;
                i{
                    padding-left: .1rem;
                }
            }
        }
        .box{
            padding: .25rem .2rem;
            box-sizing: border-box;
            .item{
                padding: .19rem .25rem;
                box-sizing: border-box;
                box-shadow:0px 1.5px 4px 0px rgba(35,24,21,0.11);
                margin-bottom: .1rem;
                .t{
                    display: flex;
                    padding-bottom: .15rem;
                    border-bottom: 1px dashed #eeeeee;
                    .t-s1{
                        font-size: .14rem;
                        font-weight: 500;
                        .van-tag {
                            margin-left: .03rem;
                        }
                    }
                    .t-s2{
                        margin-left: auto;
                    }
                }
                .b{
                    display: flex;
                    align-items: center;
                    padding-top: .125rem;
                    .b-d1{
                        width: 2rem;
                        p{
                            font-size: .1rem;
                            font-weight: 400;
                            color: #666666;
                            line-height: 1.8;
                        }
                    }
                    .b-d2{
                        margin-left: auto;
                    }
                }
            }
        }
    }
</style>


