<template>
    <div class="claim-details">
        <van-nav-bar title="理赔详情"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
            <div class="current">
                <h3>基础信息</h3>
                <van-cell-group>
                    <van-cell title="案件编号" title-class="lableClass" value="CXBA201909090001" />
                    <van-cell title="车牌号码" title-class="lableClass" value="内容" />
                    <van-cell title="报案时间" title-class="lableClass" value="内容" />
                    <van-cell title="出险原因" title-class="lableClass" value="内容" />
                    <van-cell title="事故地点" title-class="lableClass" value="福建省漳州市龙文区水仙大街1888号" />
                    <van-cell title="事故责任方" title-class="lableClass" value="内容" />
                    <van-cell title="事故责任" title-class="lableClass" value="内容" />
                    <van-cell title="是否超载" title-class="lableClass" value="内容" />
                    <van-cell title="是否人伤" title-class="lableClass" value="内容" />
                    <van-cell title="事故描述" title-class="lableClass" value="" />
                    <div class="content">车主在路上超速飙车，啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊 啊啊啊啊啊啊啊 啊啊啊啊 啊啊啊啊 啊啊啊啊啊啊啊啊</div>
                </van-cell-group>
            </div>
            <div class="pay">
                <h3>付款信息</h3>
                 <van-cell-group>
                    <van-cell title-class="lableClass" title="户名" value="CXBA201909090001" />
                    <van-cell title-class="lableClass" title="户号" value="内容" />
                    <van-cell title-class="lableClass" title="理赔金额" value="内容" />
                </van-cell-group>
            </div>
            <div class="enclosure">
                <h3>附件</h3>
                <div class="content">
                    <img src="../../../assets/image/insurance/lbgh.png" />
                    <img src="../../../assets/image/insurance/wxgs.png" />
                    <img src="../../../assets/image/insurance/jdcl.png" />
                    <img src="../../../assets/image/insurance/jdcl2.png" />
                </div>
            </div>
             <div class="btns">
                <div class="btn" @click="isTB = true">立即投保</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ClaimDetails'
}
</script>
<style lang="less" scoped>
    .claim-details{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            min-height: 1.15rem;
            background-image: url(../../../assets/image/insurance/ajjd.png);
            background-size: 100%;
            background-repeat: no-repeat;
            padding-top: .87rem;
            h3{
                font-size: .14rem;
                color: #333333;
                font-weight: 500;
                display: flex;
                align-items: center;
            }
            h3::before{
                width: 0.025rem;
                height: 0.13rem;
                content: '';
                display: inline-block;
                background: #0063FF;
                margin-right: .1rem;
            }
            .lableClass{
                    flex: none;
            }
            .van-cell{
                font-size: .12rem;
            }
            .current{
                margin: auto;
                padding: .15rem;
                width: 3.35rem;
                background: #ffffff;
                box-sizing: border-box;
                box-shadow:0px 1.5px 9px 0px rgba(105,105,105,0.1);
                border-radius:1.5px;
                .content{
                    padding: .1rem .15rem;
                    color: #666666;
                    background: #f2f2f2;
                    box-shadow:0px 1px 7px 0px rgba(35,24,21,0.05);
                    text-align: justify;
                }
            }
            .pay{
                margin: .1rem auto;
                padding: .15rem;
                width: 3.35rem;
                background: #ffffff;
                box-sizing: border-box;
                box-shadow:0px 1.5px 9px 0px rgba(105,105,105,0.1);
                border-radius:1.5px;
            }
            .enclosure{
                margin: auto;
                padding: .15rem;
                width: 3.35rem;
                background: #ffffff;
                box-sizing: border-box;
                .content{
                    padding-top: .1rem;
                    padding-bottom: .5rem;
                    img{
                        width: 100%;
                    }
                }
            }
            .btns{
                width: 100%;
                position: fixed;
                bottom: 0rem;
                left: 0;
                background: #ffffff;
                padding-bottom: .10rem;
                z-index: 99;
                .btn{
                    width: 3.35rem;
                    height: .44rem;
                    background: #0063FF;
                    color: #ffffff;
                    text-align: center;
                    line-height: .44rem;
                    margin: 0 auto;
                }
            }
        }
    }
</style>

