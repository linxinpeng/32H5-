<template>
    <div class="search-val">
        <van-nav-bar title="我要询价"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="banner">
            <img src="../../../assets/image/car/carbg.png"/>
        </div>
        <div class="inner">
            <div class="title">
                <h3>江淮 帅铃H330 220马力 3.85米排半仓栅式轻卡(BJ5048XXY-FE)</h3>
                <span @click="show = true">选择车型</span>
            </div>
            <h4>输入联系方式，立即获取车型底价啊</h4>
            <van-cell-group>
                <van-cell title="姓名" value="请输入真实姓名" />
                <van-cell title="联系电话" value="请输入联系电话" />
                <van-cell title="所在地" :value="address" is-link @click="showarea = true"/>
            </van-cell-group>
        </div>
        <div class="btn" @click="showmask = true">立即获取底价</div>
        <transition name="fade">
            <div class="mask" v-if="showmask">
                <div class="box">
                    <img src="../../../assets/image/car/ssuccess.png" />
                    <div class="close" @click="showmask = false"></div>
                </div>
            </div>
        </transition>
        <van-action-sheet v-model="show" title="请选择车型">
            <div class="i-item" v-for="i in 3" :key="i" @click="toChoose">
                <div class="item">
                    <div class="l">
                        <h3>江淮 帅铃H330 220马力 3.85米排半仓栅式轻卡(BJ5048XXY-FE)</h3>
                        <div><span>最大马力：240</span><span>核定载重：2259</span><span>变速箱：CVT</span></div>
                    </div>
                    <div class="r">
                        <span>32尊享价：</span>
                        <strong>11.88万</strong>
                    </div>
                </div>
            </div>
        </van-action-sheet>
        <van-popup v-model="showarea" position="bottom">
            <van-area :area-list="areaList" value="110101" @confirm="select" @cancel="showarea = false"/>
        </van-popup>
        
    </div>
</template>
<script>
import areaList from '../../../assets/js/areaList'
import { ActionSheet,Area,Popup   } from 'vant';
export default {
    name:'SearchVal',
    components:{
        [ActionSheet.name]: ActionSheet,
        [Area.name]: Area,
        [Popup.name]: Popup 
    },
    data(){
        return{
            show: false,
            showmask: false,
            areaList:'',
            showarea: false,
            address:'福建省/漳州市/龙文区'
        }
    },
    created(){
        this.areaList = areaList
    },
    methods:{
        select(list){
            this.address = `${list[0].name}/${list[1].name}/${list[2].name}`;
            this.showarea = false;
        },
        toChoose(){
            this.show = false;
        }
    }
}
</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
    .search-val{
        padding-top: 46px;
        font-size: .12rem;
        .banner{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .inner{
            padding: .17rem .2rem;
            box-sizing: border-box;
            .title{
                display: flex;
                padding-bottom: .1rem;
                border-bottom: 1px solid #f2f2f2;
                h3{
                    padding-right: .3rem;
                    font-size: .14rem;
                    color: #333333;
                    // font-weight: 500;
                }
                span{
                    width: 1.38rem;
                    height: .3rem;
                    margin-left: auto;
                    text-align: center;
                    line-height: .3rem;
                    background: #0063FF;
                    color: #ffffff;
                    border-radius: 1.5px;
                    font-weight: 300;
                    font-size: .12rem;
                }
            }
            h4{
                margin: .2rem auto;
                color: #ED7000;
                font-weight: 500;
                padding-left: .1rem;
                border-left: 0.025rem solid #0063FF;
            }
            .van-cell{
                padding: 10px 0;
            }
        }
        .item{
            display: flex;
            padding: .13rem .2rem;
            box-sizing: border-box;
            .l{
                flex-grow: 1;
                // padding-right: .2rem;
                box-sizing: border-box;
                h3{
                    font-size: .12rem;
                    font-weight: 500;
                    color: #333333;
                }
                div{
                    margin-top: .08rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span{
                        font-size: .09rem;
                        padding: 0.02rem 0.03rem;
                        color: #666666;
                        background: #F2F2F2;
                    }
                }
            }
            .r{
                width: .9rem;
                display: flex;
                align-items: flex-end;
                flex-direction: column;
                span{
                    color: #666666;
                    font-size: .1rem;
                    font-weight: 300;
                }
                strong{
                    font-size: .14rem;
                    color: #FF9141;
                    margin-top: auto;
                }
            }
        }
        .i-item{
            border-bottom: 1px solid #f2f2f2;
        }
        .btn{
            width: 3.35rem;
            height: .44rem;
            border-radius: 1.5px;
            background: #0063FF;
            color: #ffffff;
            text-align: center;
            line-height: .44rem;
            margin: .2rem auto 0 auto;
            font-size: .14rem;
        }
        .mask{
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0,0,0,.4);
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            z-index: 100;
            justify-content: center;
            .box{
                width: calc(100% - .4rem);
                position: relative;
                img{
                    width: 100%;
                }
                .close{
                    position: absolute;
                    width: .5rem;
                    height: .5rem;
                    background: #ffffff;
                    top: 100%;
                    left: 50%;
                    transform: translate3d(-50%,-100%,0);
                    border-radius: 50%;
                    z-index: 100;
                    opacity: 0;
                }
            }
        }
    }
</style>
