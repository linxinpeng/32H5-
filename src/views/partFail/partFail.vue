<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="part-fail">
        <van-nav-bar v-if="tp == 0" title="分配失败"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="s-inner">
            <div class="i-head">
                <img src="../../assets/image/oil/pfail.png"/>
            </div>
            <div class="i-info">
                <p>请尝试重新分配，若仍有问题请 <span>联系客服。</span></p>
            </div>
            <div class="i-btn">
                <div class="btn btn1" @click="$router.push('/oil-part')">确 定</div>
                <div class="btn btn2" @click="$router.push('/oil-part')">返 回</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'PartFail'
}
</script>
<style lang="less" scoped>
.part-fail{
        padding-top: 46px;
        font-size: .12rem;
        .s-inner{
            .i-head{
                img{
                    width: 100%;
                }
            }
            .i-info{
                text-align: center;
                color: #888888;
                padding-top: .2rem;
                p{
                    line-height: 2;
                    span{
                        color: #39D65D;
                    }
                }
            }
            .i-btn{
                margin-top: .5rem;
                .btn{
                    width: 2.44rem;
                    height: .44rem;
                    margin: .1rem auto;
                    text-align: center;
                    line-height: .44rem;
                    color: #ffffff;
                    font-size: .16rem;
                }
                .btn1{
                    background: #39D65D;
                }
                .btn2{
                    background: rgb(195,195,195)
                }
            }
        }
    }
</style>

