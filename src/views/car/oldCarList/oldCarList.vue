<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="car-list">
        <van-nav-bar v-if="tp == 0" title="车辆列表页"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="head">
            <van-search placeholder="请输入车牌号或油卡号" v-model="value" />
            <div class="screen">
                <span @click="show1 = true">{{ty1}} <van-icon name="arrow-down" /></span>
                <span @click="show2 = true">{{ty2}} <van-icon name="arrow-down" /></span>
                <span @click="show3 = true">{{ty3}} <van-icon name="arrow-down" /></span>
                <span @click="show4 = true">{{ty4}} <van-icon name="arrow-down" /></span>
                <span @click="show = true">{{ty}} <van-icon name="arrow-down" /></span>
            </div>
        </div>
       
        <div style="height: .05rem;background: #f2f2f2;"></div>
        <div class="list">
            <div v-for="i in 8" :key="i">
                <div class="item">
                    <div class="l">
                        <img src="../../../assets/image/car/carlist.png"/>
                    </div>
                    <div class="r">
                        <h3>奥迪 Q7 2019款 45 TFSI S line运动型 2.0T</h3>
                        <p>2018 年  /  01.万公里</p>
                        <div class="r2">
                            <span>32尊享价：<i>11.88万</i></span>
                            <span class="s2" @click="$router.push('/old-car-detail')">查看详情</span>
                        </div>
                    </div>
                </div>
                <div style="height: .03rem;background: #f2f2f2;"></div>
            </div>
        </div>
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect"/>
        <van-action-sheet v-model="show4" :actions="actions4" @select="onSelect4"/>
        <van-action-sheet v-model="show1" :actions="actions1" @select="onSelect1"/>
        <van-action-sheet v-model="show2" :actions="actions2" @select="onSelect2"/>
        <van-action-sheet v-model="show3" :actions="actions3" @select="onSelect3"/>
    </div>
</template>
<script>
import { Search,Icon,Tag,ActionSheet   } from 'vant';
export default {
    name:'CarList',
    components:{
        [Search.name]:Search,
        [Icon.name]:Icon,
        [Tag.name]: Tag,
        [ActionSheet.name]: ActionSheet
    },
    data(){
        return{
            value:'',
            truck:'truck1',
            scar: 'scar',
            bus: 'bus',
            show: false,
            ty: '变速箱',
            ty1: '品牌',
            ty2:'价格',
            ty3:'级别',
            ty4:'配置',
            show4: false,
            actions4: [
                { name: '选项' },
                { name: '选项' },
                { name: '选项', subname: '描述信息' }
            ],
            show3: false,
            actions3: [
                { name: '选项' },
                { name: '选项' },
                { name: '选项', subname: '描述信息' }
            ],
            show2: false,
            actions2: [
                { name: '选项' },
                { name: '选项' },
                { name: '选项', subname: '描述信息' }
            ],
            show1: false,
            actions1: [
                { name: '选项' },
                { name: '选项' },
                { name: '选项', subname: '描述信息' }
            ],
            show: false,
            actions: [
                { name: '选项' },
                { name: '选项' },
                { name: '选项', subname: '描述信息' }
            ]
        }
    },
    methods:{
        onClick(item){
            if(item=='truck1'){
                this.truck = item;
                this.scar = 'scar';
                this.bus = 'bus'
            }else if(item == 'scar1'){
                this.scar = item;
                this.truck = 'truck';
                this.bus = 'bus';
            }else{
                this.bus = item;
                this.truck= 'truck';
                this.scar = 'scar'
            }
        },
        onSelect1(item) {
            // 点击选项时默认不会关闭菜单，可以手动关闭
            this.show1 = false;
            this.ty1 = item.name
        },
        onSelect2(item) {
            // 点击选项时默认不会关闭菜单，可以手动关闭
            this.show2 = false;
            this.ty2 = item.name
        },
        onSelect3(item) {
            // 点击选项时默认不会关闭菜单，可以手动关闭
            this.show3 = false;
            this.ty3 = item.name
        },
        onSelect4(item) {
            // 点击选项时默认不会关闭菜单，可以手动关闭
            this.show4 = false;
            this.ty4 = item.name
        },
        onSelect(item) {
            // 点击选项时默认不会关闭菜单，可以手动关闭
            this.show = false;
            this.ty = item.name
        }
    }
}
</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
.car-list{
    padding-top: 46px;
    font-size: .12rem;
    .head{
        // padding: 0 .2rem;
        position: fixed;

        top: 46px;
        left: 0;
        padding: 0 .2rem;
        box-sizing: border-box;
        width: 100%;
        background: #ffffff;
        .van-search{
            padding: 10px 0;
        }
        .screen{
            display: flex;
            padding-bottom: .1rem;
            span{
                flex-grow: 1;
                height: .25rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #666666;
                i{
                    margin-left: .05rem;
                }
            }
         
        }
    }
  
    .list{
        // padding: .2rem 0 0 .2rem;
        padding-top: .85rem;
        box-sizing: border-box;
        .item{
            display: flex;
             padding: .2rem .2rem;
            .l{
                width: 1.63rem;
                height: .74rem;
                img{
                    width: 100%;
                }
            }
            .r{
                padding-left: .08rem;
                box-sizing: border-box;
                p{
                    color: #666666;
                    font-size: .1rem;
                    font-weight: 300;
                }
                h3{
                    color: #333333;
                    padding-bottom: .06rem;
                }
                .r1{
                    display: flex;
                    justify-content: space-between;
                    span{
                        padding: .01rem .05rem;
                        background: #F2F2F2;
                        color: #666666;
                        font-size: .09rem;
                    }
                }
                .r2{
                    display: flex;
                    font-size: .1rem;
                    color: #666666;
                    align-items: center;
                    margin-top: .09rem;
                    // padding-bottom: .05rem;
                    i{
                        font-style: normal;
                        color: #FF9141;
                        font-size: .14rem;
                        font-weight: bold;
                    }
                    .s2{
                        margin-left: auto;
                        background: #0063FF;
                        color: #ffffff;
                        padding: .04rem .2rem;
                    }
                }
            }
        }
    }
}
</style>
