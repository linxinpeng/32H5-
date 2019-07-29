<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="logis-info">
        <van-nav-bar v-if="tp == 0" title="查看物流"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
           <div class="banner">
                <img src="../../../assets/image/me/order.png" />
                <p>JFDH2390423482349549</p>
            </div>
            <div class="list">
                <van-steps direction="vertical" :active="0">
                    <van-step>
                        <h2>您的快件已签收，签收人：本人</h2>
                        <p>2018-12-12 12:00:22</p>
                    </van-step>
                    <van-step>
                        <h3>【城市】物流状态1</h3>
                        <p>【正在投递，投递员：小白龙】</p>
                        <p>2016-07-12 12:40</p>
                    </van-step>
                    <van-step>
                        <h3>【城市】物流状态2</h3>
                        <p>【正在投递，投递员：小白龙】</p>
                        <p>2016-07-11 10:00</p>
                    </van-step>
                    <van-step>
                        <h3>快件已发货</h3>
                        <p>【正在投递，投递员：小白龙】</p>
                        <p>2016-07-10 09:30</p>
                    </van-step>
                      <van-step>
                        <h3>【城市】物流状态2</h3>
                        <p>【正在投递，投递员：小白龙】</p>
                        <p>2016-07-11 10:00</p>
                    </van-step>
                    <van-step>
                        <h3>快件已发货</h3>
                        <p>【正在投递，投递员：小白龙】</p>
                        <p>2016-07-10 09:30</p>
                    </van-step>
                      <van-step>
                        <h3>【城市】物流状态2</h3>
                        <p>【正在投递，投递员：小白龙】</p>
                        <p>2016-07-11 10:00</p>
                    </van-step>
                    <van-step>
                        <h3>快件已发货</h3>
                        <p>【正在投递，投递员：小白龙】</p>
                        <p>2016-07-10 09:30</p>
                    </van-step>
                </van-steps>
            </div>
        </div>
    </div>
</template>
<script>
import { Step, Steps } from 'vant';
export default {
    name:'LogisInfo',
    components:{
        [Step.name]: Step,
        [Steps.name]: Steps
    }
}
</script>
<style lang="less" scoped>
    .logis-info{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            .banner{
                width: 100%;
                position: relative;
                img{
                    width: 100%;
                }
                p{
                    position: absolute;
                    top: .62rem;
                    left: .21rem;
                    color: #A1EFC6;
                }
            }
            .list{
                padding-top: .2rem;
                padding-left: .2rem;
                width: 100%;
                box-sizing: border-box;
                h2{
                    font-size: .14rem;
                    font-weight: 400;
                    color: #333333;
                }
                h3{
                    font-size: .14rem;
                    color: #999999;
                    font-weight: 400;
                }
                p{
                    font-size: .12rem;
                    color: #999999;
                }
            }
        }
    }
</style>
