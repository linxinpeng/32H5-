<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="logis-info">
        <van-nav-bar v-if="tp == 0" title="查看物流"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
            <div class="main">
                <div class="name">
                    <img src="../../../assets/image/me/person.png" />
                    <span>陈欢欢</span>
                    <span>13950323418</span>
                </div>
                <div class="address">
                    <img src="../../../assets/image/me/position.png" />
                    <span>福建省漳州市龙文区水仙大街18888号</span>
                </div>
            </div>
            <div class="desc">
                <div class="l">
                    <img src="../../../assets/image/me/good.png" />
                </div>
                <div class="r">
                    <h3><img src="../../../assets/image/me/car.png" />顺丰速运</h3>
                    <div class="b">
                        <span>单号: 1345313246123</span>
                        <span><van-button type="default" size="mini">复制</van-button></span>
                    </div>
                </div>
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
            .main{
                padding: .15rem .2rem;
                .name,.address{
                    display: flex;
                    align-items: center;
                    color: #333333;
                    span{
                        padding-right: .1rem;
                    }
                    img{
                        width: .16rem;
                        margin-right: .1rem;
                    }
                }
                .name{
                    padding-bottom: .15rem;
                }
            }
            .desc{
                display: flex;
                width: calc(100% - .4rem);
                margin: auto;
                padding: .15rem .2rem;
                box-sizing: border-box;
                box-shadow:0px 1px 6.5px 0px rgba(105,105,105,0.2);
                .l{
                    width: .72rem;
                    vertical-align: middle;
                    img{
                        width: 100%;
                    }
                }
                .r{
                    padding-left: .13rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    h3{
                        color: #333333;
                        font-size: .12rem;
                        font-weight: 400;
                        display: flex;
                        align-items: center;
                        img{
                            width: .24rem;
                            margin-right: .1rem;
                        }
                    }
                    .b{
                        font-size: .12rem;
                        color: #333333;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-weight: 400;
                    }
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
