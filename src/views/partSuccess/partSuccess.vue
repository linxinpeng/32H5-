<template>
    <div class="part-success">
        <van-nav-bar title="分配成功"  @click-left="$router.go(-1)" left-arrow fixed/>
        <div class="s-inner">
            <div class="i-head">
                <img src="../../assets/image/oil/psuccess.png"/>
            </div>
            <div class="i-info">
                <p>当前备用金为：￥39,365</p>
                <p>温馨提示：备用金需圈存至卡内余额才可使用哦。</p>
            </div>
            <div class="i-btn">
                <div class="btn btn1" @click="$router.push('/part-sett')">确 定</div>
                <div class="btn btn2" @click="$router.push('/oil-part')">返 回</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'PartSuccess',
    data(){
        return{
            
        }
    },
    methods:{
 
    }
}
</script>
<style lang="less" scoped>
    .part-success{
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
                    background: rgb(55,200,117);
                }
                .btn2{
                    background: rgb(195,195,195)
                }
            }
        }
    }
</style>

