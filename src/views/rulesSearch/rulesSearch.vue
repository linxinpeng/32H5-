<template>
    <div class="rules">
        <van-nav-bar title="违章查询"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="r-inner">
            <div class="d-photo">
                <van-uploader v-if="!imgUrl"  :after-read="afterRead" >
                    <div class="p-img">
                        <img src="../../assets/image/drivers/xsz.png" />
                    </div>
                </van-uploader>
                <div class="p-img" style="background: rgba(0,0,0,.9);"  v-else>
                    <img :src="imgUrl" />
                </div>
            </div>
            <div class="d-input">
                <div class="i-item">
                    <span class="i-number">车牌号码</span>
                    <div class="i-select">
                        <van-dropdown-menu style="height: 30px;background: #0063ff;color:#ffffff;">
                            <van-dropdown-item v-model="number" :options="option" />
                        </van-dropdown-menu>
                    </div>
                    <input type="text" placeholder="请输入车牌号" />
                </div>
                <div class="i-item">
                    <span>车牌类型</span>
                    <div class="i-select2">
                        <van-dropdown-menu style="height: 30px;border: none;">
                            <van-dropdown-item v-model="number1" :options="option1" />
                        </van-dropdown-menu>
                    </div>
                </div>
                <div class="i-item">
                    <span>发动机号</span>
                    <input type="text" placeholder="请输入完整发动机号" />
                </div>
                <div class="i-item">
                    <span>车架号码</span>
                    <input type="text" placeholder="请输入完整车架号码" />
                </div>
            </div>
            <div class="d-record">
                <h3>查询记录</h3>
                <div class="r-in">
                    <p v-for="i in 3" :key="i">闽E 6692G</p>
                </div>
            </div>
            <div class="d-btn">查询</div>
        </div>
    </div>
</template>
<script>
import { DropdownMenu, DropdownItem,Uploader } from 'vant';
export default {
    name:'RulesSearch',
    components:{
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem,
        [Uploader.name]: Uploader
    },
    data(){
        return{
            number: 0,
            number1: 0,
            imgUrl:'',
            option:[
                {text:'闽A',value: 0},
                {text:'闽B',value: 1},
                {text:'闽C',value: 2},
                {text:'闽D',value: 3},
                {text:'闽E',value: 4},
                {text:'闽F',value: 5}
            ],
            option1:[
                {text:'蓝牌',value: 0},
                {text:'绿牌',value: 1},
                {text:'黄牌',value: 2},
            ]
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
    .rules{
        font-size: .12rem;
        padding-top: 40px;
        .r-inner{
            padding: 0 .3rem;
            box-sizing: border-box;
            .d-photo{
                width: 2.66rem;
                // height: 1.06rem;
                margin: .3rem auto;
                .p-img{
                    width: 100%;
                    height: 1.7rem;
                    text-align: center;
                    overflow: hidden;
                    border-radius: 5px;
                    img{
                        height: 100%;
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
                    span.i-number{
                        width: .7rem;
                    }
                    .i-select{
                        width: .68rem;
                        height: .3rem;
                        margin-right: .1rem;
                    }
                    input{
                        font-size: .14rem;
                        border: none;
                        flex-grow: 1;
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
                .r-in{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    p{
                        width: .87rem;
                        height: .25rem;
                        background:rgba(238,238,238,1);
                        // border:1px solid rgba(105, 105, 105, 0.14);
                        line-height: .25rem;
                        color: #333333;
                        margin: .1rem auto;

                    }
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
