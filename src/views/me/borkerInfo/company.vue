<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="personal">
        <div class="photo">
            <div class="upload">
                <van-uploader :after-read="afterReadSFZ" v-if="!imgUrl1">
                    <div class="d1">
                        <img src="../../../assets/image/drivers/jsz.png"/>
                    </div>
                </van-uploader>
                <div class="d1" v-else style="background: rgba(0,0,0,0.9)" @click="showImage(imgUrl1)">
                    <img :src="imgUrl1"  style="height: 100%;width: auto;" />
                </div>
            </div>
            <div class="upload">
                <van-uploader :after-read="afterReadXSZ" v-if="!imgUrl2">
                    <div class="d1">
                        <img src="../../../assets/image/drivers/xsz.png" />
                    </div>
                </van-uploader>
                <div class="d1" v-else style="background: rgba(0,0,0,0.9)"  @click="showImage(imgUrl2)">
                    <img :src="imgUrl2"  style="height: 100%;width: auto;" />
                </div>
            </div>
        </div>
         <div class="photo">
            <div class="upload">
                <van-uploader :after-read="afterReadSFZ1" v-if="!imgUrl3">
                    <div class="d1">
                        <img src="../../../assets/image/drivers/jsz.png"/>
                    </div>
                </van-uploader>
                <div class="d1" v-else style="background: rgba(0,0,0,0.9)" @click="showImage(imgUrl3)">
                    <img :src="imgUrl3"  style="height: 100%;width: auto;" />
                </div>
            </div>
            <div class="upload">
                <van-uploader :after-read="afterReadXSZ1" v-if="!imgUrl4">
                    <div class="d1">
                        <img src="../../../assets/image/drivers/xsz.png" />
                    </div>
                </van-uploader>
                <div class="d1" v-else style="background: rgba(0,0,0,0.9)"  @click="showImage(imgUrl4)">
                    <img :src="imgUrl4"  style="height: 100%;width: auto;" />
                </div>
            </div>
        </div>
        <div class="content">
            <van-cell-group :border="true">
                <van-field clearable label="企业名" input-align="right" v-model="company.name" placeholder="请输入企业名" />
                <van-field clearable label="身份证" input-align="right" v-model="company.IDCard" placeholder="请输入身份证号" />
                <van-field clearable label="联系电话" input-align="right" v-model="company.phone" placeholder="请输入投保人手机号码" />
                <van-cell  :border="false" title="申请业务" value="" />
                <div class="radios">
                    <van-checkbox-group v-model="result">
                          <van-checkbox :name="1">燃油</van-checkbox>
                          <van-checkbox :name="2">贷款</van-checkbox>
                          <van-checkbox :name="3">保险</van-checkbox>
                    </van-checkbox-group>
                </div>
            </van-cell-group>
            <div style="height: .2rem;"></div>
            <van-checkbox v-model="checked">我已阅读并同意<span class="colorO"  @click.stop="show = true">《保险条款》</span>、<span  @click.stop="show = true" class="colorO">《投保须知》</span>、<span  @click.stop="show = true" class="colorO">《责任免除声明》</span>、<span  @click.stop="show = true" class="colorO">《健康确认函》</span>的全部内容。</van-checkbox>
        </div>
        <div style="height: .76rem;"></div>
        <div class="btns">
            <div  class="btn" @click="$router.push('/distri')">申请成为经纪人</div>
        </div>
         <van-image-preview
            v-model="showImg"
            :images="images"
            :show-index="false"
            >
        </van-image-preview>
        <div class="showbtn" v-if="showImg">
            <img src="../../../assets/image/home/delete.png" @click="toDelete"/>
            <img src="../../../assets/image/home/close2.png" @click="showImg = false"/>
        </div>
         <van-popup v-model="show">
            <div class="popup-content">
                <h3>服务协议及隐私权政策</h3>
                <p>1.1 保宝网的所有权和运营权归深圳市永兴元科技有限公司所有。 
	1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与保宝网之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。 
	1.3 本协议则可由保宝网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</p>
                <div class="popup-btns">
                    <div class="popup-inner">
                        <span @click="checked = false;show =false">不同意</span>
                        <i></i>
                        <span @click="checked = true;show =false">同意</span>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import { Uploader ,Field  ,Popup ,RadioGroup, Radio ,Checkbox, CheckboxGroup } from 'vant';
export default {
    components:{
        [Uploader.name]: Uploader,
        [Field.name]: Field,
        [Popup.name]: Popup,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        [Checkbox.name]: Checkbox,
        [CheckboxGroup.name]: CheckboxGroup
    },
    data(){
        return{
            imgUrl1: '',
            imgUrl2: '',
            imgUrl3:'',
            imgUrl4:'',
            images: [],
            showImg: false,
            result: [],
            checked: false,
            company:{
                name:'陈欢欢',
                IDCard:'3522227199308040666',
                phone:''
            },
            show: false
        }
    },
    methods:{
        afterReadSFZ(file){
            this.imgUrl1 = file.content;
        },
        afterReadXSZ(file){
            this.imgUrl2 = file.content;
        },
        afterReadSFZ1(file){
            this.imgUrl3 = file.content;
        },
        afterReadXSZ1(file){
            this.imgUrl4 = file.content;
        },
        showImage(imgurl){
            this.images = [];
            this.images.push(imgurl);
            this.showImg = true;
        },
        toDelete(){
            if(this.images.includes(this.imgUrl1)){
                this.imgUrl1 = ''
            }else if(this.images.includes(this.imgUrl2)){
                this.imgUrl2 = ''
            }else if(this.images.includes(this.imgUrl3)){
                this.imgUrl3 = ''
            }else{
                this.imgUrl4 = ''
            }
            this.showImg = false;
        },
    }
}
</script>
<style lang="less" scoped>
.van-popup{
    background: transparent;
}
.van-checkbox{
        align-items: flex-start;
    }
    .popup-content{
        width: 2.84rem;
        height: 4.23rem;
        padding: .2rem;
        box-sizing: border-box;
        position: relative;
        border-radius: 9.5px;
        overflow: hidden;
        box-shadow:0px 0px 13px 0px rgba(105,105,105,0.13);
        background: #FFFFFF;
        h3{
            text-align: center;
            color: #000000;
            font-size: .16rem;
            padding-bottom: .1rem;
        }
        p{
            color: #666666;
            text-align: justify;
            text-indent: .4rem;
            line-height: 1.8;
        }
        .popup-btns{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: .57rem;
            .popup-inner{
                display: flex;
                i{
                    width: 1px;
                    height: .57rem;
                    background: #D7D7D7;
                    opacity: 0.6;
                }
                 span{
                    display: inline-block;
                    height: 100%;
                    flex-grow: 1;
                    text-align: center;
                    line-height: .57rem;
                    background: #F2F2F2;
                    font-size: .16rem;
                    color: #333333;
                }
            }

        }
    }
.colorO{
        color: #ff976a;
    }
    .showbtn{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 9999;
        background: rgba(0, 0, 0,1);
        display: flex;
        justify-content: space-around;
        padding: .1rem;
        padding-bottom: .2rem;
        height: 1rem;
        box-sizing: border-box;
        img{
            width: .64rem;
            align-self: center;
        }
    }
    .personal{
        padding-top: .3rem;
        .photo{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-top: .1rem;
            // padding-bottom: .1rem;
            .upload{
                width: calc(50% - .01rem);
                overflow: hidden;
                .d1{
                    text-align: center;
                    height: 1rem;
                }
                img{
                    width: 100%;
                }
            }
        }
        .radios{
            .van-checkbox-group{
                display: flex;
                justify-content: space-around;
                padding: .1rem 0;
            }
        }
        .btns{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #FFFFFF;
            padding-bottom: .18rem;
            .btn{
                margin: auto;
                width: 3.335rem;
                height: .44rem;
                line-height: .44rem;
                margin: .1rem auto;
                text-align: center;
                color: #FFFFFF;
                background:linear-gradient(3deg,rgba(38,120,255,1),rgba(38,120,255,1),rgba(33,114,255,1));
                border-radius: 1.5px;
                font-size: .14rem;
            }
        }
    }
</style>
