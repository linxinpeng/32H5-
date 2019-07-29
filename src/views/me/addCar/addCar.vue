<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="add-car">
        <van-nav-bar v-if="tp == 0" title="添加车辆"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
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
        <div class="inner">
            <van-cell-group :border="false">
                <van-field v-model="car.number" label-width="120" clearable placeholder="请输入车牌号">
                    <template slot="label">
                        <div class="l" @click="show = true">
                            <span>车牌号</span>
                            <span class="s1">{{province}} <van-icon name="arrow-down" /></span>
                        </div>
                    </template>
                </van-field>
                <!-- <van-cell title="车辆类型" :value="car.type" title-class="lableClass" @click="showCar = true" arrow-direction="down" value-class="valueClass" is-link/> -->
                <van-field label-width="120" v-model="car.type" label="车辆类型" @click="showCar = true" readonly  placeholder="请选择车辆类型" right-icon="arrow-down"/>
                <van-field label-width="120" v-model="car.carNumber" clearable label="车架号码" placeholder="请输入完整17位车架号" />
                <van-field label-width="120" v-model="car.name" clearable label="联系人" placeholder="请输入联系人姓名" />
                <van-field label-width="120" style="border-bottom: 1px solid #f2f2f2;" :border="true" v-model="car.phone" type="number" clearable label="联系电话" placeholder="请输入联系人电话" />
            </van-cell-group>
            <div class="btn">
                添加车辆
            </div>
        </div>
        <van-action-sheet v-model="showCar" :actions="actions" @select="onSelect"/>
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
        <van-popup v-model="show" position="bottom">
            <div class="box">
                <!-- <div class="head" @click="show = false">完成</div> -->
                <div class="content">
                    <span v-for="item in ChineseList" @click="province = item.name;show = false" :key="item.id">{{item.name}}</span>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import { Field ,Uploader,DropdownMenu, DropdownItem ,Icon ,Popup,ActionSheet   } from 'vant';
export default {
    name:'AddCar',
    components:{
        [Field.name]: Field,
        [Uploader.name]: Uploader,
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem,
        [Popup.name]: Popup,
        [ActionSheet.name]: ActionSheet 
    },
    data(){
        return{
            showCar: false,
            actions: [
                { name: '汽车' },
                { name: '载客' },
                { name: '小车' }
            ],
            province: '闽',
            car:{
                number:'',
                type:'',
                carNumber:'',
                name:'',
                phone:''
            },
            imgUrl: '',
            images:[],
            showImg: false,
            options:[
                {text:'闽A'},
                {text:'闽C'},
                {text:'闽B'},
                {text:'闽D'}
            ],
            show:false,
            ChineseList:[
                {name:'京',id:1},
                {name:'津',id:2},
                {name:'冀',id:3},
                {name:'晋',id:4},
                {name:'蒙',id:5},
                {name:'辽',id:6},
                {name:'吉',id:7},
                {name:'黑',id:8},
                {name:'沪',id:9},
                {name:'苏',id:10},
                {name:'浙',id:11},
                {name:'皖',id:12},
                {name:'闽',id:13},
                {name:'赣',id:14},
                {name:'鲁',id:15},
                {name:'豫',id:16},
                {name:'鄂',id:17},
                {name:'湘',id:18},
                {name:'粤',id:19},
                {name:'桂',id:20},
                {name:'琼',id:21},
                {name:'渝',id:22},
                {name:'川',id:23},
                {name:'贵',id:24},
                {name:'云',id:25},
                {name:'藏',id:26},
                {name:'陕',id:27},
                {name:'甘',id:28},
                {name:'青',id:29},
                {name:'宁',id:30},

            ],
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
        onSelect(item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
            this.showCar = false;
            this.car.type = item.name
        }
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
    .add-car{
        padding-top: 46px;
        font-size: .12rem;
        .upload{
            padding: .34rem .55rem;
            .d1{
                width: 100%;
                height: 1.56rem;
                text-align: center;
                img{
                    height: 100%;
                }
            }
        }
        .inner{
            padding: .2rem;
            padding-top: .0;
            .lableClass{
                width: 120px;
                flex: none;
            }
            .valueClass{
                text-align: left;
            }
            .l{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .s1{
                    margin-left: .01rem;
                    width: .62rem;
                    height: .23rem;
                    text-align: center;
                    line-height: .23rem;
                    background: #0063FF;
                    color: #ffffff;
                    margin-right: .05rem;
                    border-radius: 0.015rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }
            }
            .btn{
                margin-top: .5rem;
                height: .44rem;
                width: 1005;
                background: #0063FF;
                text-align: center;
                line-height: .44rem;
                color: #ffffff;
                font-size: .16rem;
                width: 100%;
            }
        }
    }
    .box{
        .head{
            height: .4rem;
            text-align: right;
            line-height: .4rem;
            font-size: .14rem;
            color: rgb(245,210,102);
            padding-right: .1rem;
        }
        .content{
            background: #F2f2f2;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-top: .16rem;
            padding-bottom: .16rem;
            span{
                width: calc(10% - .02rem);
                height: .4rem;
                text-align: center;
                line-height: .4rem;
                font-size: .18rem;
                background: #ffffff;
                margin-bottom: .08rem;
                border-radius: 6px;
            }
            span:hover{
                background: #1989fa;
                color: #ffffff;
            }
        }
    }
</style>

