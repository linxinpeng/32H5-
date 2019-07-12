<template>
    <div class="driver">
        <van-nav-bar title="驾照扣分查询"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="d-inner">
            <div class="d-photo">
                <van-uploader v-if="!imgUrl"  :after-read="afterRead" >
                    <div class="p-img">
                        <img src="../../assets/image/drivers/jsz.png" />
                    </div>
                </van-uploader>
                    <div class="p-img" style="background: rgba(0,0,0,.9);"  v-else>
                        <img :src="imgUrl" />
                    </div>
            </div>
            <div class="d-input">
                <div class="i-item">
                    <span>驾驶证号</span>
                    <input type="text" paceholder="请输入完整发动机号" />
                </div>
                <div class="i-item">
                    <span>档案编号</span>
                    <input type="text" placeholder="请输入完成车架号码" />
                </div>
            </div>
            <div class="d-record">l
                <h3>查询记录</h3>
                <p v-for="i in 3" :key="i">452630 1987****0012</p>
            </div>
            <div class="d-btn">查询</div>
        </div>
    </div>
</template>
<script>
import { Uploader } from 'vant';

export default {
    name:'DriverSearch',
    components:{
        [Uploader.name]: Uploader
    },
    data(){
        return{
            imgUrl:''
        }
    },
    methods: {
        afterRead(file) {
        // 此时可以自行将文件上传至服务器
            // alert(file.data);
             this.imgUrl = file.content
        }
    }

}
</script>
<style lang="less" scoped>
    .driver{
        padding-top: 40px;
        font-size: .12rem;
        .d-inner{
            padding: 0 .3rem;
            box-sizing: border-box;
            .d-photo{
                width: 2.66rem;
                height: 1.7rem;
                margin: .3rem auto;
                .p-img{
                    width: 100%;
                    height: 1.7rem;
                    text-align: center;
                    overflow: hidden;
                    border-radius: 5px;
                    img{
                        // width: 100%;
                        height: 100%;
                        display: inline-block;
                    }
                }
            }
            .d-input{
                .i-item{
                    width: 100%;
                    height: .4rem;
                    align-items: center;
                    display: flex;
                    border-bottom: 1px solid #eeeeee;
                    margin-bottom: .1rem;
                    span{
                        color: #333333;
                        font-size: .14rem;
                        width: 1.48rem;
                    }
                    input{
                        font-size: .14rem;
                        border: none;
                    }
                    input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                        color: #c3c3c3;
                    }
                    input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                        color: #c3c3c3;
                    }
                    input::-moz-placeholder { /* Mozilla Firefox 19+ */
                        color: #c3c3c3;
                    }
                    input:-ms-input-placeholder { /* Internet Explorer 10-11 */
                        color: #c3c3c3;
                    }
                }
            }
            .d-record{
                text-align: center;
                h3{
                    font-size: .12rem;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    padding-bottom: .15rem;
                }
                p{
                    width: 1.48rem;
                    height: .25rem;
                    background:rgba(238,238,238,1);
                    // border:1px solid rgba(105, 105, 105, 0.14);
                    line-height: .25rem;
                    color: #333333;
                    margin: .1rem auto;

                }
            }
            .d-btn{
                width: 3.17rem;
                height: .44rem;
                background:rgba(0,99,255,1);
                border-radius: .22rem;
                color: #ffffff;
                font-size: .16rem;
                text-align: center;
                line-height: .44rem;
                margin-top: .3rem;
            }
        }
    }
</style>
