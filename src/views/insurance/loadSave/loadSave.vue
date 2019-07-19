<template>
    <div class="load-save">
        <van-nav-bar title="道路救援"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="banner">
            <img src="../../../assets/image/insurance/banner2.png" />
            <div class="info">
                <h3>请选择救援类型</h3>
                <div class="tab">
                    <span :class="active == 1&&'tab-active'" @click="tabClick(1)">拖车</span>
                    <span :class="active == 2&&'tab-active'" @click="tabClick(2)">接电</span>
                    <span :class="active == 3&&'tab-active'" @click="tabClick(3)">送油</span>
                    <span :class="active == 4&&'tab-active'" @click="tabClick(4)">充气</span>
                    <span :class="active == 5&&'tab-active'" @click="tabClick(5)">换胎</span>
                </div>
            </div>
        </div>
        <div class="content">
            <h3>请选择救援信息</h3>
            <div class="map" id="container">

            </div>
            <div class="list">
                <van-field v-model="address" clearable label="救援地址" placeholder="请输入救援地址"/>
                <van-field v-model="carNumber" clearable label="车牌号" placeholder="请输入车牌号" />
                <van-field v-model="concact" clearable label="联系人" placeholder="请输入联系人" />
                <van-field v-model="phone" type="number" clearable label="联系电话" placeholder="请输入联系电话" />
                <van-field v-model="vrCode" clearable label="验证码" placeholder="请输入验证码">
                     <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
            </div>
        </div>
        <div class="check"><van-checkbox icon-size="18" v-model="checked">我已阅读并同意<em @click.stop="showpolicy = true">《道路救援服务协议》</em></van-checkbox></div>
        <div class="btn-wrap">
            <div class="btn" @click="show = true">申请救援</div>
        </div>
        <van-popup v-model="show">
            <div class="mask">
                <img src="../../../assets/image/insurance/tc.png" />
                <div class="close" @click="show = false"></div>
                <div class="number">救援编号：DLYYYYYY21212112</div>
            </div>
        </van-popup>
         <van-popup v-model="showpolicy">
             <div class="policy-content">
                内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
             </div>
         </van-popup>
    </div>
</template>
<script>
import AMap from 'AMap'

// var X,Y,map;
// function success(position){
//     X = position.coords.latitude;
//     Y = position.coords.longitude;
// }
// function erro(msg){
//     // console.log(msg)
// }

import { Field,Checkbox, CheckboxGroup,Popup } from 'vant';
export default {
    name:'LoadSave',
    components:{
        [Field.name]: Field,
        [Checkbox.name]: Checkbox,
        [CheckboxGroup.name]: CheckboxGroup,
        [Popup.name]:Popup
    },
    data(){
        return{
            active: 1,
            address:'水仙大街188号',
            carNumber:'闽D P6W71',
            concact: '林默默',
            phone: '1380000000',
            vrCode: '4456',
            checked: false,
            show: false,
            showpolicy: false,
            X:'',
            Y:''
        }
    },
    created(){
        // window.navigator.geolocation.getCurrentPosition(this.success(),this.erro())
    },
    methods:{
        // success(position){
        //     this.X = position.coords.latitude;
        //     this.Y = position.coords.longitude;
        //     console.log(this.X)
        // },
        // erro(){
            
        // },
        tabClick(num){
            this.active = num
        },
        init(){
            // console.log(X)
            // map = new AMap.Map('container', {
            //     // center: [Y,X],
            //     resizeEnable: true
            // })
        },
       
    },
    mounted(){
        this.init();
    },
}
</script>
<style lang="less" scoped>
    .load-save{
        padding-top: 46px;
        font-size: .12rem;
         h3{
            margin: .1rem;
            font-size: .14rem;
            font-weight: 500;
            display: flex;
            align-items: center;
        }
        h3::before{
            content: '';
            height: .13rem;
            width: .025rem;
            background: #0063FF;
            display: inline-block;
            margin-right: .1rem;
        }
        .banner{
            width: 100%;
            position: relative;
            img{
                width: 100%;
            }
            .info{
                width: 3.33rem;
                height: .95rem;
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translate3d(-50%,-30%,0);
                box-shadow:0px 0px 3px 0px rgba(105,105,105,0.11);
                border-radius: 1.5px;
                background: #ffffff;
                z-index: 99;
                padding-top: .1rem;
                .tab{
                    padding: 0 .2rem;
                    display: flex;
                    justify-content: space-between;
                    span{
                        padding: .05rem .1rem;
                        background: #F2F2F2;
                        border-radius: 1.5px;
                    }
                    .tab-active{
                        background: #0063FF;
                        color: #ffffff;
                    }
                }
            }
        }
        .content{
            margin: 0 auto;
            margin-top: .89rem;
            width: 3.33rem;
            box-sizing: border-box;
            box-shadow:0px 0px 6px 0px rgba(105,105,105,0.11);
            padding-top: .1rem;
            #container{
                width: 2.97rem;
                margin: auto;
                height: 1.83rem;
            }
            .list{
                padding: 0 .2rem;
                box-sizing: border-box;
                .van-cell{
                    padding: 10px 0;
                }
            }
        }
        .check{
            margin-top: .1rem;
            padding: 0 .4rem;
            margin-bottom: .6rem;
            em{
                color: #0063ff;
                font-style: normal;
            }
        }
        .btn-wrap{
                position: fixed;
                width: 100%;
                bottom: 0px;
                left: 50%;
                transform: translateX(-50%);
                background: #ffffff;
                padding-bottom: 10px;
             .btn{
                width: 3.35rem;
                height: .44rem;
                background: #0063FF;
                border-radius:  1.5px;
                text-align: center;
                line-height: .44rem;
                color: #ffffff;
                margin: 0 auto;
              
            }
        }
        .van-popup{
            background: transparent;
        }
        .mask{
            width: 2.7rem;
            position: relative;
            img{
                width: 100%;
                vertical-align: middle;
            }
            .close{
                position: absolute;
                bottom: 0rem;
                left: 50%;
                transform: translateX(-52%);
                width: .33rem;
                height: .33rem;
                // background: #ffffff;
                border-radius: 50%;
            }
            .number{
                position: absolute;
                top: .9rem;
                left: 50%;
                transform: translateX(-33.4%);
                background: #ffffff;
                width: 100%;
                color: #666666;
                padding: 0.01rem 0;
                font-weight: 300;
            }
        }
        .policy-content{
            background: #ffffff;
        }
    }
</style>
