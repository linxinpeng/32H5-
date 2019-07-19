<template>
    <div class="car-report">
        <van-nav-bar title="车险报价"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="banner">
            <img src="../../../assets/image/insurance/banner2.png" />
        </div>
        <div class="inner">
            <h3>点击上传图片，下方信息自动识别</h3>
            <div class="photo">
                <div class="upload">
                    <van-uploader :after-read="afterReadSFZ" v-if="!imgUrl1">
                        <div class="d1">
                            <img src="../../../assets/image/drivers/jsz.png"/>
                        </div>
                    </van-uploader>
                    <div class="d1" v-else style="background: rgba(0,0,0,0.9)" @click="showImage(imgUrl1)">
                        <img :src="imgUrl1" style="height: 100%;width: auto;"/>
                    </div>
                </div>
                <div class="upload">
                    <van-uploader :after-read="afterReadXSZ" v-if="!imgUrl2">
                        <div class="d1">
                            <img src="../../../assets/image/drivers/xsz.png" />
                        </div>
                    </van-uploader>
                    <div class="d1" v-else style="background: rgba(0,0,0,0.9)"  @click="showImage(imgUrl2)">
                        <img :src="imgUrl2"  style="height: 100%;width: auto;"/>
                    </div>
                </div>
            </div>
            <h3>选择车牌号可自动识别</h3>
            <div class="form-info">
                <div class="head">
                    <span class="s1" @click="show = !show"><img src="../../../assets/image/car/scar1.png" />{{carnumber}}<van-icon name="arrow-down" /></span><span class="s2">注：若您的车辆没有在列表中，请直接上传行驶证即可。</span>
                </div>
                <div class="content" v-if="show">
                    <van-cell-group>
                        <van-field v-model="JQX" clearable label="交强险" placeholder="请输入交强险到期时间" />
                        <van-field v-model="SYX" clearable label="商业险" placeholder="请输入商业险到期时间" />
                        <van-field v-model="carID" clearable label="车架号" placeholder="请输入车架号" />
                        <!-- <van-field v-model="registerTime"  label="注册日期" placeholder="请输入注册日期" /> -->
                        <van-cell title="注册日期" title-style="width: 90px; flex: none;" :value="registerTime" @click="showTime = true" value-class="textLeft"/>
                        <van-field v-model="name" clearable label="姓名" placeholder="请输入真实姓名" />
                        <van-field v-model="IDCard" clearable label="身份证号" placeholder="请输入身份证号" />
                        <van-field v-model="phone" clearable label="联系电话" placeholder="请输入联系电话" />
                    </van-cell-group>
                </div>
                <div class="list" v-else>
                    <van-search placeholder="请输入搜索关键词" v-model="value" />
                    <p>共找到15个车牌</p>
                    <div class="item" v-for="i in 8" :key="i" :class="active ==i&&'car-active' " @click="chooseCar(i)">
                        <div class="l">
                            <span>闽D 669545</span>
                        </div>
                        <div class="r">
                            <p>交强险到期时间：<strong>2019-09-09</strong></p>
                            <p>商业险到期时间：<strong>2019-09-09</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btns" v-if="show">
            <div class="btn" @click="showTC = true">立即报案</div>
        </div>
        <van-popup v-model="showTC">
            <div class="mask">
                <img src="../../../assets/image/insurance/tc1.png" />
                <div class="close" @click="showTC = false"></div>
            </div>
        </van-popup>
        <!-- <image-preview :show="showImg" v-on:onClose="toClose" :imgUrl="img" @onDelete="onDelete"></image-preview> -->
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
        <van-popup v-model="showTime" position="bottom">
            <van-datetime-picker v-model="currentDate" type="date" @confirm="chooseTime" @cancel="showTime - false"/>
        </van-popup>
    </div>
</template>
<script>
// import ImagePreview from '../../../components/imagePreview'
import { Uploader ,Field ,Search ,Popup ,DatetimePicker, } from 'vant';
export default {
    name:'CarReport',
    components:{
        [Uploader.name]: Uploader,
        [Field.name]: Field,
        [Search.name]: Search,
        [Popup.name]: Popup,
        [DatetimePicker.name]: DatetimePicker
    },
    data(){
        return{
            imgUrl1:'',
            imgUrl2:'',
            img:'',
            carnumber:'闽D 955G6',
            JQX:'2019-09-09 到期',
            SYX: '2019-09-09 到期' ,
            carID:'LADHHH45887522',
            registerTime:'2019-09-09',
            name:'',
            IDCard:'',
            phone:'',
            show: true,
            value:'',
            showTC: false,
            showImg: false,
            w: window.innerWidth,
            h: window.innerHeight,
            du: 0,
            zoom: 1,
            currentDate: new Date(),
            showTime: false,
            active: 1,
            index: 0,
            images: []
        }
    },
    methods:{
        afterReadSFZ(file){
            this.imgUrl1 = file.content;
        },
        afterReadXSZ(file){
            this.imgUrl2 = file.content;
        },
        chooseTime(){
            this.registerTime = this.$moment(this.currentDate).format("YYYY-MM-DD")
            this.showTime = false;
        },
        chooseCar(i){
            this.active = i;
        },
        toDelete(){
            this.images.includes(this.imgUrl1)?this.imgUrl1 = '': this.imgUrl2 = '';
            this.showImg = false;
        },
        showImage(imgurl){
            this.images = [];
            this.images.push(imgurl);
            this.showImg = true;
        },
    }
}
</script>
<style lang="less" scoped>
.textLeft{
    text-align: left;
    color: #323233;
}
.car-active{
    background: #333333;
    color: #ffffff;
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
    .car-report{
        padding-top: 46px;
        font-size: .12rem;
        .banner{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .inner{
            padding: .2rem;
            padding-bottom: .7rem;
            h3{
                font-size: .14rem;
                color: #333333;
                font-weight: 500;
                display: flex;
                align-items: center;
            }
            h3::before{
                content: "";
                width: .025rem;
                height: .13rem;
                background: #0063FF;
                margin-right: .1rem;
                display: inline-block;
            }
            .photo{
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding-top: .1rem;
                padding-bottom: .1rem;
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
            .head{
                display: flex;
                justify-content: space-between;
                padding-top: .1rem;
                .s1,.s2{
                    width: calc(50% - .05rem);
                }
                .s1{
                    display: flex;
                    align-items: center;
                    background: #0063FF;
                    color: #ffffff;
                    justify-content: center;
                    padding: .1rem .02rem;
                    font-size: .14rem;
                    img{
                        width: .24rem;
                        margin-right: .09rem;
                    }
                }
                .s2{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
            .content{
                margin-top: .1rem;
                box-shadow:0px 0px 3px 0px rgba(105,105,105,0.11);
            }
            .list{
                .van-search{
                    padding: 10px 0;
                }
                .item{
                    display: flex;
                    padding: .13rem;
                    margin-top: .1rem;
                    box-sizing: border-box;
                    box-shadow:0px 0px 6.5px 0px rgba(105,105,105,0.13);
                    .l{
                        width: 1.18rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        span{
                            width: .93rem;
                            height: .31rem;
                            text-align: center;
                            line-height: .31rem;
                            color: #ffffff;
                            background: #0063FF;
                        }
                    }
                    .r{
                        p{
                            line-height: 1.8;
                        }
                    }
                }
            }
        }
         .btns{
            width: 100%;
            position: fixed;
            bottom: 0;
            left: 0;
            background: #ffffff;
            padding-bottom: .1rem;
            z-index: 99;
            .btn{
                width: 3.35rem;
                height: .44rem;
                background: #0063FF;
                text-align: center;
                line-height: .44rem;
                color: #ffffff;
                margin: 0 auto;
            }
        }
        .van-popup{
            background:transparent;
        }
        .mask{
            width: 2.71rem;
            position: relative;
            img{
                width: 100%;
                vertical-align: middle;
            }
            .close{
                width: .33rem;
                height: .33rem;
                // background: #ffffff;
                border-radius: 50%;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        .mask-box{
            position: relative;
            overflow: auto;
            .img1{
                width: 100%;
                position: absolute;
                top: 10%;
                left: 0;
                // transform: translate3d(-50%,-50%,0)
            }
            .btns{
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                text-align: center;
                background: transparent;
                display: flex;
                justify-content: space-around;
                img{
                    width: .32rem;
                    vertical-align: middle;
                    margin: auto .1rem;
                }
            }
        }
    }
</style>
