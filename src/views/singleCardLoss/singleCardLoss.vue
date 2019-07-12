<template>
    <div class="card-loss-detail">
        <van-nav-bar title="批量挂失"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="inner">
            <div class="card">
                <h3>632  493  4938  4938  4934</h3>
                <p>闽D889Q3</p>
                <p class="p1">注：</p>
                <p class="p2">挂失申请成功后约24小时生效，</p>
                <p class="p3">余额将在7个工作日内退回账户余额</p>
                <img src="../../assets/image/oil/zgsy1.png" />
            </div>
            <div class="isBuKa">
                <h3>是否补办油卡</h3>
                <p>已挂失的油卡可以立即在这边办理</p>
                <div class="choose">
                   <div class="c-left" @click="onClick(1)">
                       <img :src="imgUrl1" />是
                   </div>
                   <div class="c-right" @click="onClick(2)">
                       <img :src="imgUrl2" />否
                   </div>
                </div>
            </div>
            <div class="info">
                <van-cell-group>
                    <van-field label="收件人：" input-align="right" v-model="form.name" placeholder="请输入收件人姓名" />
                    <van-field label="收件人电话：" input-align="right" v-model="form.phone" placeholder="请输入收件人电话" />
                    <van-field label="收件人地址：" input-align="right" v-model="form.addr" placeholder="请输入收件人地址" />
                    <van-field label="详 细 地 址：" input-align="right" v-model="form.address" placeholder="请输入详细地址" />
                </van-cell-group>
            </div>
            <div class="btn">确认挂失</div>
        </div>
    </div>
</template>
<script>
import { Field,Cell, CellGroup  } from 'vant';
export default {
    name:'CardLossDetail',
    components:{
        [Field .name]: Field ,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup
    },
    data() {
        return{
            form:{
                name:'',
                phone:'',
                addr:'',
                address:''
            },
            imgUrl1:require('../../assets/image/oil/gou1.png'),
            imgUrl2:require('../../assets/image/oil/error.png')
        }
    },
    methods:{
        onClick(num){
            if(num == 1){
                this.imgUrl1 = require('../../assets/image/oil/gou1.png');
                this.imgUrl2 = require('../../assets/image/oil/error.png')
            }else{
                this.imgUrl1 = require('../../assets/image/oil/gou.png');
                this.imgUrl2 = require('../../assets/image/oil/error1.png')
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .card-loss-detail{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            padding: .23rem .2rem;
            box-sizing: border-box;
            .card{
                padding: .3rem;
                box-sizing: border-box;
                color: #ffffff;
                background: #0063FF;
                width: 100%;
                height: 1.91rem;
                border-radius: 5px;
                box-shadow:0px 0px 6px 0px rgba(106,106,106,0.19);
                position: relative;
                h3{
                    font-size: .18rem;
                    padding-bottom: .08rem;
                }
                p{
                    line-height: 1.5;
                }
                .p1{
                    padding-top: .23rem;
                }
                .p2,.p3{
                    padding-top: .06rem;
                }
                img{
                    width: .34rem;
                    position: absolute;
                    bottom: .25rem;
                    right: .2rem;
                }
            }
            .isBuKa{
                padding-top: .15rem;
                h3{
                    color: #333333;
                    font-size: .14rem;
                }
                p{
                    font-size: .1rem;
                    color: #c3c3c3;
                    padding-top: .03rem;
                }
                .choose{
                    display: flex;
                    align-items: center;
                    padding: .2rem 0;
                    box-sizing: border-box;
                    .c-left,.c-right{
                        width: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: .14rem;
                        color: #333333;
                        img{
                            width: .33rem;
                            margin-right: .16rem;
                        }
                    }
                }
            }
            .btn{
                width: 100%;
                height: .44rem;
                text-align: center;
                line-height: .44rem;
                color: #ffffff;
                background: #0063FF;
                font-size: .14rem;
                margin-top: .3rem;
            }
        }
    }
</style>
