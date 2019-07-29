<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 0'" class="update-password">
        <van-nav-bar v-if="tp == 0" title="修改密码"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
            <div class="head">
                <img src="../../../assets/image/me/b.png" />
            </div>
            <div class="info">
                <van-cell-group :border="false">
                    <van-field clearable label="账号" v-model="user.account" placeholder="请输入账号" />
                    <van-field clearable label="验证码" v-model="user.VRCode" placeholder="请输入验证码" >
                        <van-button slot="button" size="small">点击获取</van-button>
                    </van-field>
                    <van-field clearable label="新密码" type="password" v-model="user.newPassword" placeholder="请输入新密码" />
                    <van-field clearable label="确认新密码" type="password" v-model="user.oldPassword" placeholder="请再次输入密码" />       
                </van-cell-group>
            </div>
            <div class="btn">修改密码</div>
        </div>
    </div>
</template>
<script>
import { Field } from 'vant';
export default {
    name:'UpdatePassword',
    components:{
        [Field.name]: Field,
    },
    data(){
        return{
            user:{
                account:'10095950132135',
                VRCode: '1234',
                newPassword:'12345454',
                oldPassword:'12345454'
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .update-password{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            .head{
                width: 100%;
                img{
                    width: 100%;
                }
            }
            .info{
                width: 3.35rem;
                margin: auto;
                .van-cell{
                    padding: 10px 0;
                }
            }
        }
        .btn{
            width: 3.35rem;
            height: .44rem;
            background: #0063FF;
            color: #ffffff;
            text-align: center;
            line-height: .44rem;
            font-size: .14rem;
            position: fixed;
            bottom: .2rem;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>

