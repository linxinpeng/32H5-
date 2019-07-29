<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="gas">
        <van-nav-bar v-if="tp == 0" title="沿途油站"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="g-inner">
            <div class="i-item" v-for="item in oils" :key="item.id">
                <div class="item1">{{item.name}}<span @click="to(item)">到这里去>></span></div>
                <div class="item2"><img src="../../assets/image/home/cash.png"/>优惠价：5.39元/升 <span>原价：6.09元</span></div>
                <div class="item3"><img src="../../assets/image/home/position.png"/>{{item.address}}<span>距离：{{item.distance/1000}}km</span></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'GasStation',
    data(){
        return{
            oils: [],
            posi:[]
        }
    },
    created(){
        if(sessionStorage.getItem('oils')){
            this.oils = JSON.parse(sessionStorage.getItem('oils'))
        }
        if(sessionStorage.getItem('posi')){
            this.posi = JSON.parse(sessionStorage.getItem('posi'))
            console.log(this.posi)
        }
    },
    methods:{
        to(val){
            location.href = `//uri.amap.com/navigation?from=${this.posi.position.lng},${this.posi.position.lat},${val.name}&to=${val.location},${this.posi.formattedAddress}&mode=car&policy=1&src=mypage&coordinate=gaode&callnative=1`
        }
    }
}
</script>
<style lang="less" scoped>
    .gas{
        font-size: .12rem;
        padding-top: 40px;
        background: #f2f2f2;
        .g-inner{
            padding: .135rem;
            box-sizing: border-box;
            .i-item{
                padding: .17rem .19rem;
                box-sizing: border-box;
                background: #ffffff;
                box-shadow:0px 0px 6px 0px rgba(105,105,105,0.1);
                border-radius: .05rem;
                margin-bottom: .17rem;
                .item1{
                    font-size: .14rem;
                    color: #333333;
                    font-weight: 500;
                    display: flex;
                    padding-bottom: .23rem;
                    span{
                        margin-left: auto;
                        color: #0063FF;
                        font-size: .12rem;
                    }
                }
                .item2{
                    color: #FF9900;
                    padding-bottom: .12rem;
                    display: flex;
                    align-items: center;
                    img{
                        width: .16rem;
                        margin-right: .08rem;
                    }
                    span{
                        font-size: .1rem;
                        color: #c3c3c3;
                        margin-left: .08rem;
                    }
                }
                .item3{
                    color: #666666;
                    font-weight: 300;
                    display: flex;
                    align-items: center;
                    img{
                        width: .16rem;
                        margin-right: .08rem;
                    }
                    span{
                        margin-left: auto;
                        font-size: .1rem;
                    }
                }
            }
        }
    }
</style>
