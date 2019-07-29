<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="oil-card-loss">
        <van-nav-bar v-if="tp == 0" title="批量挂失"  @click-left="$router.go(-1)" right-text="批量" @click-right="onClickRight" left-arrow fixed :z-index="99"/>
        <div class="inner">
            <van-search placeholder="请输入车牌号或油卡号" v-model="value" />
            <div class="box">
                <div class="item" v-for="i in all" :key="i">
                    <div class="i1">
                        <img src="../../assets/image/oil/zgsy1.png" />
                    </div>
                    <div class="i2">
                        <h3>632493493849384934</h3>
                        <p>车牌号：闽E61S98</p>
                    </div>
                    <div class="i3" @click="onCheck(i)">
                        <img v-if="!list.includes(i)" src="../../assets/image/oil/c.png"/>
                        <img v-else src="../../assets/image/oil/cActive.png"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="btns">
            <div class="b1">已选择：<strong>{{list.length}}</strong> 张</div>
            <div class="btn" @click="$router.push('/card-loss-detail')">立即挂失</div>
        </div>
    </div>
</template>
<script>
import { Search  } from 'vant';
export default {
    name:'OilCardLoss',
    data(){
        return{
            value:'',
            list:[],
            all: 8
        }
    },
    components:{
        [Search.name]: Search
    },
    methods:{
        onClickRight(){
            for(let i= 1;i<=8;i++){
                this.list.push(i)
            }
            
        },
        onCheck(i){
            if(this.list.includes(i)){
                let index = this.list.indexOf(i);
                this.list.splice(index,1)
            }else{
                this.list.push(i)
            }
            
        }
    }
}
</script>
<style lang="less" scoped>
    .van-search {
        padding: 2px 0;
    }
    .oil-card-loss{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            padding: .1rem .2rem 1.2rem .2rem;
            box-sizing: border-box;
            .box{
                padding-top: .1rem;
                .item{
                    display: flex;
                    padding: .21rem 0;
                    align-items: center;
                    box-shadow:0px 0px 21px 0px rgba(35,24,21,0.06);
                    margin-bottom: .1rem;
                    .i1{
                        width: .77rem;
                        text-align: center;
                        img{
                            width: .34rem;
                        }
                    }
                    .i2{
                        flex-grow: 1;
                        h3{
                            padding-bottom: .1rem;
                        }
                    }
                    .i3{
                        width: .38rem;
                        img{
                           width: .16rem; 
                        }
                    }
                }
            }
        }
        .btns{
            width: 100%;
            padding: .1rem .2rem .2rem .2rem;
            background: #ffffff;
            position: fixed;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
            .b1{
                text-align: right;
                color: #333333;
                padding-bottom: .05rem;
                strong{
                    font-size: .18rem;
                    color: #D73A3A;
                }
            }
            .btn{
                width: 100%;
                background: #0063FF;
                text-align: center;
                line-height: .44rem;
                height: .44rem;
                color: #ffffff;
                font-size: .14rem;
            }
        }
    }
</style>
