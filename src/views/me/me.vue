<template>
    <div class="me">
        <div class="m-banner">
            <div class="b-act">
                <img src="../../assets/image/home/facae.png" />
            </div>
            <div class="b-info">
                <h3>Yaoyi</h3>
                <p>15006008042</p>
            </div>
            <div class="b-qd">每日签到</div>
        </div>
        <div class="m-tab">
            <div class="tab" @click="$router.push('/my-list')">
                <img src="../../assets/image/home/tab1.png" />
                我的订单
            </div>
             <div class="tab">
                <img src="../../assets/image/home/tab3.png" />
                联系客服
            </div>
             <div class="tab" @click="$router.push('/personal')">
                <img src="../../assets/image/home/tab4.png" />
                账户信息
            </div>
             <div class="tab">
                <img src="../../assets/image/home/tab1.png" />
                我的消息
            </div>
        </div>
        <div style="height:.05rem;background: #f2f2f2;"></div>
        <div class="m-list">
            <van-cell title="车辆" icon="logistics" value="13部" is-link to="/my-car"/>
            <van-cell title="油卡" icon="debit-pay" value="23张" is-link to="/my-oil"/>
            <van-cell title="贷款" icon="paid" value="3笔" is-link to="/my-loan"/>
            <van-cell title="保单" icon="description" value="40张" is-link to="/my-policy"/>
            <van-cell title="分销" icon="friends-o" value="0人" is-link to="/broker"/>
        </div>
        <div style="height:.05rem;background: #f2f2f2;"></div>
        <div class="m-list">
            <van-cell title="积分商城" icon="gem-o" value="13部" is-link />
            <van-cell title="推荐有礼" icon="point-gift-o" value="23张" is-link/>
            <van-cell title="优惠券" icon="coupon-o" value="3笔" is-link to="/coupon"/>
        </div>
        <div style="height:.1rem;background: #f2f2f2;"></div>
    </div>
</template>
<script>
import { Cell, CellGroup } from 'vant';
export default {
    name:'Me',
    components:{
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup
    }    
}
</script>
<style lang="less" scoped>
    .me{
        font-size: .12rem;
        .m-banner{
            color: #ffffff;
            width: 100%;
            height: 1.3rem;
            background-color: rgb(71,141,255);
            display: flex;
            align-items: center;
            .b-act{
                padding-left: .35rem;
            }
            .b-info{
                padding-left: .09rem;
                h3{
                    font-size: .14rem;
                    color: #fafafa;
                    padding-bottom: .03rem;
                }
            }
            .b-qd{
                margin-left: auto;
                width: .95rem;
                height: .25rem;
                background: #85E8A2;
                text-align: center;
                line-height: .25rem;
                border-radius: .15rem 0 0 .15rem ;
            }
        }
        .m-tab{
            width: 100%;
            padding: .2rem .34rem;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .tab{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #333333;
                img{
                    width: .35rem;
                    height: .35rem;
                    margin-bottom: .03rem;
                }
            }
        }
    }
</style>
