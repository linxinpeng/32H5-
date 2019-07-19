<template>
    <van-popup v-model="showImg">
        <div class="popup-mask" :style="`height: ${h}px;width: ${w}px;`">
            <img class="popup-img" :src="imgUrl" :style="`transform:rotate(${rotate}deg) scale(${zoom}); transform-origin: ${psi};`"/>
            <div class="btns">
                <img src="../assets/image/home/rotate.png" @click="toRotate"/>
                <img src="../assets/image/home/zoom.png" @click="toZoom"/>
                <img src="../assets/image/home/close1.png" @click="toClose"/>
                <img src="../assets/image/home/zoomout.png" @click="toZoomOut"/>
                <img src="../assets/image/home/delete.png" @click="toDelete"/>
            </div>
        </div>
    </van-popup>
</template>
<script>
import { Popup } from 'vant';
export default {
    props:{
        show:{
            type: Boolean,
            default: false
        },
        imgUrl:{
            type:String
        }
    },
    watch:{
        show: function(to,from){
            this.showImg = to;
        }
    },
    data(){
        return{
            w: window.innerWidth,
            h: window.innerHeight,
            rotate: 0,
            zoom: 1,
            showImg: this.show || false,
            psi: 'center center'
        }
    },
    components:{
        [Popup.name]: Popup
    },
    methods:{
        toRotate(){
            this.rotate += 90;
            this.psi = 'center center'
        },
        toDelete(){
            this.showImg = false;
            this.$emit('onDelete',this.imgUrl)
        },
        toZoom(){
            this.rotate = 0;
            this.zoom += 0.2;
            this.psi = '0 0'
        },
        toZoomOut(){
            this.rotate = 0;
            this.psi = '0 0'
            if(this.zoom > 0)
                this.zoom -= 0.2;
        },
        toClose(){
            this.showImg = false;
            this.$emit('onClose',false);
        }
    }
}
</script>
<style lang="less" scoped>
    .van-popup{
        background:transparent;
    }
    .popup-mask{
        position: relative;
        overflow: auto;
        .popup-img{
            width: 100%;
            position: absolute;
            top: 10%;
            left: 0;
            transition: all .3s ease;
        }
        .btns{
            position: fixed;
            bottom: 0px;
            left: 0;
            width: 100%;
            text-align: center;
            background: transparent;
            display: flex;
            background: rgba(0,0,0,1);
            justify-content: space-around;
            img{
                width: .28rem;
                vertical-align: middle;
                margin: auto .1rem;
            }
        }
    }
</style>
