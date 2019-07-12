<template>
    <div class="car-photo">
        <van-nav-bar title="图片查看器"  @click-left="$router.go(-1)" left-arrow fixed :z-index="99"/>
        <div class="t">
            <div class="tabs">
                <span @click="onChoose(1)" :class="active == 1&&'item-active'">外观</span>
                <span @click="onChoose(2)" :class="active == 2&&'item-active'">内饰</span>
                <span @click="onChoose(3)" :class="active == 3&&'item-active'">上装</span>
                <span @click="onChoose(4)" :class="active == 4&&'item-active'">底盘</span>
            </div>
           <v-touch v-on:swipeleft="onLeft" @swiperight="onRight"> 
                <div class="photo">
                    <transition name="fade">
                        <img :style="`zoom: ${zoom}`" v-if="flag == currentUrl "  :src="currentUrl"/>
                    </transition>
                    <div class="number">{{index}}/{{imglist.length}}</div>
                </div>
            </v-touch>
        </div>
        <div class="inner">
            <span v-for="(url,key) in imglist" :class="key +1 == index&&'img-active'" :key="key" @click="chooseImg(url)">
                <img :src="url" />
            </span>
        </div>
        <div class="bot">
            <span class="b1">厂家指导价：<strong>10.8-13.88万</strong></span>
            <span class="b2">获取底价</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'CarPhoto',
    data(){
        return{
            active: 1,
            currentUrl: require('../../../assets/image/car/banner.png'),
            index: 1,
            h: (window.innerHeight - 46) / 100,
            startX:0,
            zoom: 1,
            flag:require('../../../assets/image/car/banner.png'),
            endX: 0,
            imglist:[
                require("../../../assets/image/car/banner.png"),
                require("../../../assets/image/car/bg.png"),
                require("../../../assets/image/car/carbg.png"),
                require("../../../assets/image/car/carlist.png"),
                require("../../../assets/image/car/banner.png"),
                require("../../../assets/image/car/bg.png"),
                require("../../../assets/image/car/carbg.png"),
                require("../../../assets/image/car/carlist.png"),
                require("../../../assets/image/car/banner.png"),
                require("../../../assets/image/car/bg.png"),
                require("../../../assets/image/car/carlist.png"),
                 require("../../../assets/image/car/carlist.png"),
                require("../../../assets/image/car/banner.png"),
                require("../../../assets/image/car/bg.png"),
                require("../../../assets/image/car/carbg.png"),
                require("../../../assets/image/car/carlist.png"),
                require("../../../assets/image/car/banner.png"),
                require("../../../assets/image/car/bg.png"),
                require("../../../assets/image/car/carlist.png"),
            ]
            
        }
    },
    watch:{
        index(to,from){
            this.currentUrl = this.imglist[to -1]
            let self = this;
            setTimeout(() => {
                self.flag = self.currentUrl
            }, 0);
        }
    },
    methods:{

        onChoose(num){
            this.active = num
        },
        chooseImg(url){

            this.index = this.imglist.indexOf(url) + 1;
            this.total = this.imglist.length;
            this.currentUrl = url
        },
        onRight(){
           if(this.index == 1){
               this.index = this.imglist.length
           }else{
               this.index -=1
           }
        },
        onLeft(){
            if(this.index == this.imglist.length){
               this.index = 1
            }else{
                this.index +=1
            }
        }
    }
}
</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
    .car-photo{
        padding-top: 46px;
        font-size: .12rem;
        .t{
            position: fixed;
            top: 46px;
            left: 0;
            width: 100%;
            z-index: 99;
        }
        .tabs{
            height: .5rem;
            padding: .15rem .2rem;
            box-sizing: border-box;
            background: #FFffff;
            span{
                font-size: .16rem;
                padding-bottom: .05rem;
                margin-right: .3rem;
            }
            .item-active{
                color: #0063FF;
                border-bottom: 2px solid #0063FF;
                font-size: .18rem;
            }
        }
        .photo{
            width: 100%;
            height: 2.5rem;
            display: flex;
            align-items: center;
            background: rgb(0,0,0);
            position: relative;
            overflow: hidden;
            .number{
                position: absolute;
                bottom: .05rem;
                left: .09rem;
                width: .36rem;
                height: .17rem;
                color: #FFffff;
                background: #000000;
                opacity: .9;
                font-size: .12rem;
                text-align: center;
                line-height: .17rem;
            }
            img{
                width: 100%;
            }
        }
        .inner{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-top: 3rem;
            padding-bottom: .44rem;
            // overflow-y: auto;
            span{
                width: 1.24rem;
                height: .77rem;
                display: flex;
                align-items: center;
                overflow: hidden;
                background: rgba(0,0,0,.9);
                margin-top: .02rem;
                box-sizing: border-box;
                img{
                    width: 100%;
                }
            }
            .img-active{
                border: 2px solid red;
            }
        }
        .bot{
            height: .44rem;
            display: flex;
            background: #FFffff;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            .b1{
                flex-grow: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: .12rem;
                color: #666666;
                strong{
                    color: #ff9141;
                    font-size: .14rem;
                    padding-left: .05rem;
                }
            }
            .b2{
                width: 1.43rem;
                height: 100%;
                text-align: center;
                line-height: .44rem;
                background: #0063FF;
                color: #FFffff;
            }
        }
    }
</style>

