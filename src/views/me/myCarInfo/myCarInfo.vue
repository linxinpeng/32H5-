<template>
    <div class="my-car-info">
        <van-nav-bar title="车辆详情"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div style="height: .1rem;background: #f2f2f2;"></div>
        <div class="inner">
            <van-cell-group :border="false">
                <van-field v-model="car.number" input-align="right"	 clearable label="车牌号码" placeholder="请输入车牌号码" />
                <van-field v-model="car.belong" input-align="right"  clearable label="车辆所有人" placeholder="请输入车辆所属" />
                <van-field v-model="car.code" input-align="right" clearable label="车辆识别代码" placeholder="请输入识别代码" />
                <van-field v-model="car.JQXTime" label-width="120" input-align="right" clearable label="交强险到期日期" placeholder="请选择交强险到期时间">
                    <van-button slot="button"  size="mini" type="primary" >续保</van-button>
                </van-field>
                <van-field v-model="car.SYXTime" label-width="120" input-align="right" clearable label="商业险到期日期" placeholder="请选择商业险到期时间" />
                <van-field v-model="car.name" input-align="right" clearable label="联系人" placeholder="请输入联系人姓名" />
                <van-field v-model="car.phone" input-align="right" clearable label="联系电话" placeholder="请输入联系电话" />
                <van-cell  :border="false" title="车辆行驶证" value="" />
                <div class="upload">
                    <van-uploader :after-read="afterRead" v-if="!imgUrl">
                        <div class="d1">
                            <img src="../../../assets/image/drivers/xsz.png" />
                        </div>
                    </van-uploader>
                    <div class="d1" v-else style="background: rgba(0,0,0,0.9)" @click="showImage(imgUrl)">
                        <img :src="imgUrl" />
                    </div>
                </div>
            </van-cell-group>
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
    </div>
</template>
<script>
import { Field ,Uploader } from 'vant';
export default {
    name:'MyCarInfo',
    components:{
        [Field.name]: Field,
        [Uploader.name]: Uploader
    },
    data(){
        return{
            car:{
                number: '闽F6692G',
                belong: '厦门赫连城融资租赁有限公司',
                code: 'LA9898DSF9******54',
                JQXTime:'2019-09-09',
                SYXTime:'2019-09-09',
                name:'陈翻翻',
                phone:'1383838438'
            },
            imgUrl:'',
            images:[],
            showImg:false
        }
    },
    methods:{
        afterRead(file){
            this.imgUrl = file.content;
        },
        toDelete(){
            this.imgUrl = '';
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
    .my-car-info{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            padding: 0 .2rem;
            .van-field__control{
                color: #666666;
            }
            .van-cell{
                padding: 10px 0;
            }
            .upload{
                width: 100%;
                text-align: center;
                .d1{
                    width: 100%;
                    height: 2rem;
                    img{
                        height: 100%;
                    }
                }
            }
        }
    }
</style>
