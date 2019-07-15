<template>
    <div class="my-oil">
        <van-nav-bar title="我的油卡"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="o-box">
            <van-search placeholder="请输入车牌号或油卡号" v-model="value" />
            <div class="b-content">
                <div class="c-item" v-for="i in 8" :key="i" @click="$router.push('/oil-detail')">
                    <div class="item1">
                        <div class="ii">
                            <img src="../../assets/image/oil/zsh.png"/>
                        </div>
                    </div>
                    <div class="item2">
                        <h3>632493493849384934</h3>
                        <p>车牌号：闽E61S98</p>
                        <p>备付金：￥989</p>
                    </div>
                    <div class="item3">
                        <p>正常</p>
                        <p>￥3434</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Search } from 'vant';
export default {
    name:'MyOil',
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
    .my-oil{
        font-size: .12rem;
        padding-top: 40px;
        .o-box{
            .b-content{
                padding: .1rem .2rem;
                box-sizing: border-box;
                .c-item{
                    display: flex;
                    box-shadow:0px 0px 21px 0px rgba(35,24,21,0.06);
                    border-radius:3px;
                    margin-bottom: .1rem;
                    .item1{
                        width: .71rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .ii{
                            width: .43rem;
                            img{
                                width: 100%;
                            }
                        }
                    }
                    .item2{
                        flex-grow: 1;
                        h3{
                            color: #333333;
                            font-size: .14rem;
                            padding-top: .1rem;
                        }
                        p{
                            color: #666666;
                            font-weight: 300;
                            padding: .05rem 0;
                        }
                    }
                    .item3{
                        width: 1.03rem;
                        background: #00A950;
                        color: #ffffff;
                        border-radius:0px 1.5px 1.5px 0px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                    }
                }
            }
        }
    }
</style>
