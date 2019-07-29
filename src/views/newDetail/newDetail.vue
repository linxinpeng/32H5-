<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="new">
        <van-nav-bar v-if="tp == 0" title="新闻详情"  @click-left="$router.go(-1)" left-arrow fixed>
            <van-icon name="wap-home" slot="right" @click="$router.push('/layout/home')"/>
        </van-nav-bar>
        <div class="n-rela">
            <div class="n-inner">
                <img src="" width="100%" />
                <div class="i-content">
                    <h3>喜大普奔！6月12日油价大降0.35元/升！</h3>
                    <span>2019-06-12</span>
                    <p>在6月11日开启的国内油价调整窗口，将迎来年内的第三次油价下跌，并且油价跌幅程度将创今年的记录。
    　　转眼已6月，在过去的5个月里油价可谓“涨多跌少”呈现“8次上涨2次下跌1次搁浅”局面，直逼高地，完成对广大卡友和车友的一波完美收割。不过呢，这种局面将有望在6月份改变，6月份将迎来两次油价调整。
            价格形成机制，自2019年6月11日24时起，国内汽、柴油价格（标准品，下同）每吨分别降低465元和445元。折升价92汽油约下调0.37元/升，0#柴油约下调0.38元/升。调整后，各省（区、市）和中心城市汽、柴油最高零售价格见附表。相关价格联动及补贴政策按现行规定执行。
        中石油、中石化、中海油三大公司要组织好成品油生产和调运，确保市场稳定供应，严格执行国家价格政策。各地相关部门要加大市场监督检查力度，严厉查处不执行国家价格政策的行为，维护正常市场秩序。消费者可通过12358价格监管平台举报价格违法行为。
        我们正密切跟踪成品油价格形成机制运行情况，结合国内外石油市场形势变化，进一步予以研究完善。
        附：各省区市和中心城市汽、柴油最高零售价格
                    </p>
                </div>
            </div>
        </div>
        <div class="btn">
            <div class="btn-left">上一篇</div>
            <div class="btn-right">下一篇</div>
        </div>
    </div>
</template>
<script>
import { Icon } from 'vant';
export default {
    name:'NewDetail',
    components:{
        [Icon.name]: Icon
    }
}
</script>
<style lang="less" scoped>
    .new{
        font-size: .12rem;
        padding-top: 40px;
        padding-bottom: 50px;
        .n-rela{
            background-image: url(../../assets/image/home/info1.png);
            background-size: 100% 1.7rem;
            background-repeat: no-repeat;
            .i-content{
                margin: 0 auto;
                width: 3.34rem;
                box-shadow:0px 2px 9px 0px rgba(105,105,105,0.5);
                border-radius:10px;
                padding: .18rem;
                box-sizing: border-box;
                background: #ffffff;
                margin-top: 1.25rem;
                margin-bottom: .34rem;
                h3{
                    color: #333333;
                    font-size: .14rem;
                    padding-bottom: .2rem;
                }
                span{
                    font-size: .11rem;
                    color: #666666;
                    font-weight: 500;
                    display: block;
                    padding-bottom: .15rem;
                }
                p{
                    text-align: justify;
                    text-indent: .24rem;
                    line-height: 1.8;
                    color: #666666;
                }
            }
        }
        .btn{
            display: flex;
            justify-content: space-around;
            div{
                width: 1.08rem;
                height: .3rem;
                background:rgba(0,99,255,1);
                border-radius: 3px;
                color: #ffffff;
                font-weight: 300;
                text-align: center;
                line-height: .3rem;
            }
            .btn-right{
                background: #0063FF;
            }
            .btn-left{
                background: #BFBFBF;
            }
        }
    }
</style>
