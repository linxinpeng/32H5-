<template>
    <div class="oil-personal" :style="person == '个人'?'background-position-y: -0.6rem;':'background-position-y: .4rem;'">
        <van-nav-bar title="油卡申请"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="p-title">
            <h3>上传身份证与行驶证照片</h3>
            <p><img src="../../assets/image/oil/note.png" />首次申请需要完善资料，后续无需再填写。</p>
        </div>
        <div v-if="person == '个人'" class="p-person">
            <div class="p-card">
                <van-uploader v-if="!imgGRIDCard" :after-read="uploadIDCard">
                    <div class="c1">
                        <img src="../../assets/image/drivers/jsz.png" />
                    </div>
                </van-uploader>
                <div v-if="imgGRIDCard" style="background: rgba(0,0,0,0.8)" class="c1">
                    <img :src="imgGRIDCard" />
                </div>
                <van-uploader v-if="!imgGRXSCard" :after-read="uploadXSCard">
                 <div class="c2">
                    <img src="../../assets/image/drivers/xsz.png" />
                </div>
                </van-uploader>
                <div v-if="imgGRXSCard" style="background: rgba(0,0,0,0.8)" class="c2">
                    <img :src="imgGRXSCard" />
                </div>
            </div>
            <div class="p-content">
                <div class="c-item">
                    <div class="i-left">
                        客户类型
                    </div>
                    <div class="i-right" @click="show = true">
                        {{person}} <img src="../../assets/image/drivers/down.png"/>
                    </div>
                </div>
                 <div class="c-item">
                    <div class="i-left">
                        客户名称
                    </div>
                    <div class="i-right">
                        <input type="text" placeholder="请输入真实姓名" v-model="form.name" />
                    </div>
                </div>
                 <div class="c-item">
                    <div class="i-left">
                        联系电话
                    </div>
                    <div class="i-right">
                        <input type="text" placeholder="请输入联系电话" v-model="form.phone" />
                    </div>
                </div>
                 <div class="c-item">
                    <div class="i-left">
                        身份证号
                    </div>
                    <div class="i-right">
                        <input type="text" placeholder="请输入身份证号" v-model="form.IDCard" />
                    </div>
                </div>
                 <div class="c-item">
                    <div class="i-left">
                        车辆识别代号
                    </div>
                    <div class="i-right" >
                        <input type="text" placeholder="请输入完整车架号" v-model="form.number" />
                    </div>
                </div>
            </div>
            <p class="desc">请确认以上信息，如有错误请及时修改或重拍</p>
            <div class="p-btn">
                立即申请
            </div>
            <van-action-sheet v-model="show" :actions="actions" @select="onSelect"/>
        </div>
        <div v-else class="p-enterprise">
            <div class="e-card">
                <div class="c-top">
                    <van-uploader v-if="!imgQYIDCard" :after-read="uploadQYIDCard">
                        <div class="t1">
                            <img src="../../assets/image/drivers/jsz.png" />
                        </div>
                    </van-uploader>
                    <div v-if="imgQYIDCard" style="background: rgba(0,0,0,0.8)" class="t1">
                        <img :src="imgQYIDCard" />
                    </div>
                    <van-uploader v-if="!imgQYXSCard" :after-read="uploadQYXSCard">
                        <div class="t2">
                            <img src="../../assets/image/drivers/xsz.png" />
                        </div>
                    </van-uploader>
                    <div v-if="imgQYXSCard" style="background: rgba(0,0,0,0.8)" class="t2">
                        <img :src="imgQYXSCard" />
                    </div>
                </div>
                <div class="c-bottom">
                    <van-uploader v-if="!imgQYYYCard" :after-read="uploadQYYYCard">
                        <div class="b1">
                            <img src="../../assets/image/drivers/yyzz.png" />
                        </div>
                    </van-uploader>
                    <div v-if="imgQYYYCard" style="background: rgba(0,0,0,0.8)" class="b1">
                        <img :src="imgQYYYCard" />
                    </div>
                    <van-uploader v-if="!imgKPCard" :after-read="uploadKPCard">
                        <div class="b2">
                            <img src="../../assets/image/drivers/kpxx.png" />
                        </div>
                    </van-uploader>
                    <div v-if="imgKPCard" style="background: rgba(0,0,0,0.8)" class="b2">
                        <img :src="imgKPCard" />
                    </div>
                </div>
            </div>
            <div class="p-content">
                <div class="c-item">
                    <div class="i-left">
                        客户类型
                    </div>
                    <div class="i-right" @click="show1 = true">
                        {{person}} <img src="../../assets/image/drivers/down.png"/>
                    </div>
                </div>
                 <div class="c-item">
                    <div class="i-left">
                        客户名称
                    </div>
                    <div class="i-right">
                        <input type="text" placeholder="请输入真实姓名" v-model="form1.name" />
                    </div>
                </div>
                 <div class="c-item">
                    <div class="i-left">
                        身份证号
                    </div>
                    <div class="i-right">
                        <input type="text" placeholder="请输入身份证号" v-model="form1.Id" />
                    </div>
                </div>
                 <div class="c-item">
                    <div class="i-left">
                        组织机构代码
                    </div>
                    <div class="i-right">
                        <input type="text" placeholder="请输入组织机构代码或统一社会信用代码" v-model="form1.IDCode" />
                    </div>
                </div>
                 <div class="c-item">
                    <div class="i-left">
                        联系人
                    </div>
                    <div class="i-right" >
                        <input type="text" placeholder="请输入联系人姓名" v-model="form1.contact" />
                    </div>
                </div>
                <div class="c-item">
                    <div class="i-left">
                        联系电话
                    </div>
                    <div class="i-right" >
                        <input type="text" placeholder="请输入联系电话" v-model="form1.phone" />
                    </div>
                </div>
                <div class="c-item">
                    <div class="i-left">
                        车辆识别代码
                    </div>
                    <div class="i-right" >
                        <input type="text" placeholder="请输入完整车架号" v-model="form1.carNum" />
                    </div>
                </div>
                <div class="c-item">
                    <div class="i-left">
                        开票类型
                    </div>
                    <div class="i-right" @click="show2 = true">
                        {{invoice}} <img src="../../assets/image/drivers/down.png"/>
                    </div>
                </div>
                <van-action-sheet v-model="show1" :actions="actions1" @select="onSelect1"/>
                <van-action-sheet v-model="show2" :actions="actions2" @select="onSelect2"/>
            </div>
            <p class="desc">请确认以上信息，如有错误请及时修改或重拍</p>
            <div class="p-btn">
                立即申请
            </div>
        </div>
    </div>
</template>
<script>
import { Uploader,ActionSheet  } from 'vant';
export default {
    name:'OilPersonal',
    components:{
        [Uploader.name]: Uploader,
        [ActionSheet.name]: ActionSheet
    },
    data() {
        return {
            imgGRIDCard:'',
            imgGRXSCard:'',
            imgQYIDCard:'',
            imgQYXSCard:'',
            imgQYYYCard:'',
            imgKPCard:'',
            show: false,
            actions: [
                { name: '个人' },
                { name: '企业' }
            ],
            show1: false,
            actions1: [
                { name: '个人' },
                { name: '企业' }
            ],
            show2: false,
            actions2:[
                {name:'增值税专用发票'},
                {name:'增值税普通发票'},
                {name:'普通机打小票'}
            ],
            form:{
                name:'',
                phone:'',
                IDCard:'',
                number:''
            },
            form1:{
                name:'',
                phone:'',
                Id:'',
                IDCode:'',
                contact:'',
                carNum:''
            },
            invoice: '开票',
            person: '个人'
        };
    },
    methods:{
        uploadQYIDCard(file){
            this.imgQYIDCard = file.content;
        },  
        uploadQYXSCard(file){
            this.imgQYXSCard = file.content;
        },
        uploadQYYYCard(file){
            this.imgQYYYCard = file.content;
        },
        uploadKPCard(file){
            this.imgKPCard = file.content;
        },
        uploadIDCard(file){
            this.imgGRIDCard = file.content;
        },
        uploadXSCard(file){
           this.imgGRXSCard = file.content;
        },
        onSelect(item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
            this.show = false;
            this.person = item.name;
        },
        onSelect1(item){
            this.show1 = false;
            this.person = item.name;
        },
        onSelect2(item){
            this.show2 = false;
            this.invoice = item.name;
        }
    }
}
</script>
<style lang="less" scoped>
    .oil-personal{
        font-size: .12rem;
        padding: .2rem;
        padding-top: 46px;
        box-sizing: border-box;
        background-image: url(../../assets/image/oil/bbg.png);
        background-size: 100%;
        background-repeat: no-repeat;
        .p-title{
            padding-top: .12rem;
            h3{
                color: #333333;
                font-size: .14rem;
            }
            p{
                font-size: .1rem;
                color: #c3c3c3;
                display: flex;
                align-items: center;
                padding-top: .05rem;
                img{
                    width: .12rem;
                    margin-right: .05rem;
                }
            }
        }
        .p-person{
            .p-card{
                padding-top: .2rem;
                display: flex;
                justify-content: space-between;
                .c1,.c2{
                    width: 1.64rem;
                    height: .97rem;
                    text-align: center;
                    img{
                        height: 100%;
                        
                    }
                }
            }
            .p-content{
                padding-top: .2rem;
                .c-item{
                    height: .37rem;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #f4f5f7;
                    .i-left{
                        width: 1.1rem;
                        color: #333333;
                        font-size: .14rem;
                    }
                    .i-right{
                        flex-grow: 1;
                        text-align: right;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        img{
                            width: .1rem;
                            margin-left: .1rem;
                        }
                        input{
                            border: none;
                            color: #c3c3c3;
                            text-align: right;
                            width: 100%;
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
            }
        }
        .p-enterprise{
             .e-card{
                .c-top,.c-bottom{
                    padding-top: .1rem;
                    display: flex;
                    justify-content: space-between;
                    .t1,.t2,.b1,.b2{
                        width: 1.64rem;
                        height: .97rem;
                        text-align: center;
                        img{
                            height: 100%;
                        }
                    }
                }
            }
            .p-content{
                padding-top: .2rem;
                .c-item{
                    height: .37rem;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #f4f5f7;
                    .i-left{
                        width: 1.1rem;
                        color: #333333;
                        font-size: .14rem;
                    }
                    .i-right{
                        flex-grow: 1;
                        text-align: right;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        img{
                            width: .1rem;
                            margin-left: .1rem;
                        }
                        input{
                            border: none;
                            color: #c3c3c3;
                            text-align: right;
                            width: 100%;
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
            }
        }
         .desc{
                padding-top: .5rem;
                color: #c3c3c3;
                font-size: .1rem;
                line-height: .33rem;
                margin-bottom: calc( .4rem + 10px);
            }
            .p-btn{
                width: 3.35rem;
                height: .4rem;
                text-align: center;
                line-height: .4rem;
                background: #0063FF;
                border-radius: 1.5px;
                color: #f9f9f9;
                font-size: .14rem;
                margin-top: .1rem;
                position: fixed;
                bottom: 10px;
                left: .2rem;
                z-index: 99;
            }
    }
</style>
