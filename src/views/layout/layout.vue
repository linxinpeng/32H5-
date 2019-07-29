<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="page">
        <van-nav-bar v-if="tp == 0" :title="title"  fixed  :z-index="99"/>
        <router-view></router-view>
        <van-tabbar v-model="active" active-color="#0063FF" inactive-color="#b2b2b2" route>
            <van-tabbar-item replace to="/layout/oil">
                <span>加油</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon.active : icon.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item replace to="/layout/insurance">
                <span>保险</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon1.active : icon1.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item replace to="/layout/home">
                <span>首页</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon2.active : icon2.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item replace to="/layout/car">
                <span>车辆</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon3.active : icon3.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item replace to="/layout/me">
                <span>我的</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? icon4.active : icon4.normal"
                >
            </van-tabbar-item>
        </van-tabbar>
        <div style="height: 50px;"></div>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    name:'Layout',
    components:{
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
    // created(){
    //     console.log(this.tp)
    // },
    data(){
        return{
            active: 0,
            icon:{
                normal: require('../../assets/image/layout/oil1.png'),
                active: require('../../assets/image/layout/oil.png')
            },
            icon1:{
                normal: require('../../assets/image/layout/insurance1.png'),
                active: require('../../assets/image/layout/insurance.png')
            },
            icon2:{
                normal: require('../../assets/image/layout/home1.png'),
                active: require('../../assets/image/layout/home.png')
            },
            icon3:{
                normal: require('../../assets/image/layout/car1.png'),
                active: require('../../assets/image/layout/car.png')
            },
            icon4:{
                normal: require('../../assets/image/layout/me1.png'),
                active: require('../../assets/image/layout/me.png')
            },
        }
    },
    computed:{
        title(){
            if(this.$route.path.includes('/layout/car'))
                return '车辆'
            if(this.$route.path.includes('/layout/insurance'))
                return '保险'
            if(this.$route.path.includes('/layout/home'))
                return '首页'
            if(this.$route.path.includes('/layout/me'))
                return '我的'
            if(this.$route.path.includes('/layout/oil'))
                return '加油'
        }
    }
}
</script>
<style lang="less" scoped>

</style>
