<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="oil-card-choose">
        <van-nav-bar v-if="tp == 0" title="油卡申请"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="c-inner">
            <div class="i-title">
                <h3>油卡选择</h3>
                <p><img src="../../assets/image/oil/note.png" />只能选择一张油卡</p>
            </div>
            <div class="">
                <swiper :options="swiperOption" class="swiper-wrapper">
                    <swiper-slide v-for="(slide, index) in banners" :key="index" class="swiper-slide">
                        <img :src="slide" width="100%"/>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="i-title">
                <h3>上传行驶证</h3>
                <p>请保持照片完整，清晰</p>
            </div>
            <div class="i-uplaod">
                <van-uploader v-if="!imgIDCard" :after-read="uploadIDCard">
                    <div class="u-left">
                        <img src="../../assets/image/drivers/xsz.png" />
                    </div>
                </van-uploader>
                <div v-else style="background: rgba(0,0,0,0.8)" class="u-left">
                    <img :src="imgIDCard" />
                </div>
                <div class="u-right">
                    <img src="../../assets/image/drivers/kpxx.png"/>
                </div>
            </div>
            <div class="i-info">
                <van-cell-group  :border="false">
                    <van-field
                        label-width="120px"
                        input-align="center"
                        label-align="center"
                        v-model="carNumber"
                        clearable
                        label="车牌号："
                        placeholder="上传行驶证后自动识别"
                    />

                    <van-field
                        label-width="120px"
                        input-align="center"
                        label-align="center"
                        v-model="carID"
                        label="车辆识别代号："
                        placeholder="上传行驶证后自动识别"
                    />
                </van-cell-group>
            </div>
            <div style="height: 5px;background: #f2f2f2;"></div>
            <div class="i-send">
                <h3>送达方式</h3>
                <div class="s-item">
                    <div class="i-info" @click="onChoose('kh')">
                        <p>
                            <img src="../../assets/image/oil/bl.png" />
                            客户经理送达
                        </p>
                        <img v-if="!isKh" src="../../assets/image/oil/c.png"/>
                        <img v-else src="../../assets/image/oil/cActive.png"/>
                    </div>
                    <transition name="fade">
                        <div class="i-content" v-if="isKh">
                            <van-cell-group :border="false">
                                <van-field
                                    v-model="name"
                                    clearable
                                    placeholder="请输入客户经理名称"
                                />
                        </van-cell-group>
                        </div>
                    </transition>
                </div>
                <div class="s-item">
                    <div class="i-info" @click="onChoose('kd')">
                        <p>
                            <img src="../../assets/image/oil/gr.png" />
                            快递寄送
                        </p>
                        <img v-if="isKh" src="../../assets/image/oil/c.png"/>
                        <img v-else src="../../assets/image/oil/cActive.png"/>
                    </div>
                    <transition name="fade">
                <div class="i-content" v-if="!isKh">
                    <van-cell-group :border="false">
                        <van-field
                            label-width="120px"
                            v-model="kd.name"
                            input-align="right"
                            clearable
                            label="收件人："
                            placeholder="请输入收件人"
                        />

                        <van-field
                            label-width="120px"
                            input-align="right"
                            v-model="kd.phone"
                            label="收件人电话："
                            placeholder="请输入手机人电话"
                            type="number"
                        />
                        <van-field
                            label-width="120px"
                            input-align="right"
                            v-model="kd.add"
                            label="收件人地址："
                            placeholder="请输入收件人地址"
                        />
                        <van-field
                            label-width="120px"
                            input-align="right"
                            v-model="kd.addree"
                            label="详细地址："
                            placeholder="请输入详细地址"
                        />
                    </van-cell-group>
                    </div>
                    </transition>
                </div>
            </div>
        </div>
        <div class="btn-box"><div class="btn">确认</div></div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Field ,Cell, CellGroup,Collapse, CollapseItem,Uploader } from 'vant';
export default {
    name:'OilCardChoose',
    components: {
        swiper,
        swiperSlide,
        [Field.name]: Field,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Collapse.name]: Collapse,
        [CollapseItem.name]: CollapseItem,
        [Uploader.name]: Uploader
    },
    data(){
        return{
            carNumber:'',
            carID:'',
            imgIDCard: '',
            swiperOption: {
                loop: true,
            },
            banners:[
                require('../../assets/image/oil/banner1.png'),
                require('../../assets/image/oil/banner1.png'),
                require('../../assets/image/oil/banner1.png')
            ],
            name:'',
            isKh: true,
            kd:{
                name:'',
                phone:'',
                add:'',
                address:''
            }
        }
    },
    methods:{
        onChoose(ty){
            this.isKh = ty == 'kh'?true: false;
        },
        uploadIDCard(file){
            this.imgIDCard = file.content
        }
    }
}
</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
 .swiper-slide{
    width: 90%!important;
    margin: 0 5%;
    transition: all ease .1s;
 }
.swiper-slide-prev{
    right: -12%;
    transform: scale(0.9);
}
.swiper-slide-next{
    left: -12%;
    transform: scale(0.9);
}
    .oil-card-choose{
        padding-top: 46px;
        font-size: .12rem;
        .i-title{
            padding: .2rem;
            box-sizing: border-box;
            h3{
                color: #333333;
                font-size: .14rem;
                padding-bottom: .05rem;
            }
            p{
                font-size: .1rem;
                color: #c3c3c3;
                display: flex;
                align-items: center;
                img{
                    width: .12rem;
                    margin-right: .05rem;
                }
            }
        }
        .i-uplaod{
            display: flex;
            justify-content: space-between;
            padding: 0 .20rem;
            box-sizing: border-box;
            .u-left,.u-right{
                width: 1.67rem;
                height: 1rem;
                text-align: center;
                border-radius: 1.5px;
                img{
                    height: 100%;
                }
            }
        }
        .i-info{
            padding: .1rem .2rem;
            box-sizing: border-box;
        }
        .i-send{
            padding: .1rem .2rem;
            box-sizing: border-box;
            h3{
                padding-bottom: .15rem;
            }
            .s-item{
                padding: .1rem 0;
                margin-bottom: .1rem;
                box-sizing: border-box;
                border-radius: 2.5px;
                box-shadow:0px 1px 8px 0px rgba(76,76,76,0.11);
                .i-info{
                    display: flex;
                    align-items: center;
                    p{
                        display: flex;
                        align-items: center;
                        img{
                            width: .15rem;
                            margin-right: .05rem;
                        }
                    }   
                    img{
                        width: .15rem;
                        margin-left: auto;
                    }
                }
            }
            .i-content{
                padding-left: .2rem;
            }
        }
        .c-inner{
            padding-bottom: .55rem;
        }
        .btn-box{
            position: fixed;
            bottom: 0px;
            // left: .2rem;
            z-index: 99;
            width: 100%;
            background: #ffffff;
            padding-bottom: .1rem;
            .btn{
                width: 3.35rem;
                height: .4rem;
                text-align: center;
                line-height: .4rem;
                background: #0063FF;
                border-radius: 1.5px;
                color: #f9f9f9;
                font-size: .14rem;
                margin: 0 auto;
            }
        }
    }
</style>
