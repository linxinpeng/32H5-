<template>
    <div :style="tp == 0?'padding-top: 46px':'padding-top: 46px'" class="login">
       <h3>快速登录注册</h3>
       <div class="l-info">
           <div class="i-item">
               <input type="text" maxlength="11" @input="phone = phone.replace(/[^\d]/g,'')" placeholder="请输入手机号码" v-model="phone" />
           </div>
           <div class="i-item">
               <input type="text" placeholder="请输入验证码" v-model="vcode" />
               <div class="i-send">
                   <span v-if="!isSend" @click="sendVCode" style="cursor: pointer;">获取验证码</span>
                   <span v-else style="color: #999999;">{{time}}s</span>
               </div>
           </div>
       </div>
       <div class="agree"><van-checkbox icon-size="16px" v-model="checked">我已阅读并同意<span style="color:#EC9E22;" @click.stop="showDig = true">《32网络用户协议》</span></van-checkbox></div>
       <div class="btn"><van-button round type="info" size="large" @click="onLogin">登录</van-button></div>
       <p class="desc" @click="$router.push('/logininaccount')">账号密码登录</p>
       <div class="image"><img src="../../assets/image/login/logo.png"/></div>
       <van-popup v-model="showDig">
            <div class="dig">
                <h4 class="dig-title">服务协议及隐私权政策</h4>
                <div class="dig-content">
                    <h5>一，总则</h5>
                    <p>1.1 保保往返三口红偶记八年级吧客户卡厉害或看见看见阿迪王请问请问</p>
                    <p>1.2 保保往返三口红偶记八年级吧客户卡厉害或看见看见阿迪王请问请问</p>
                    <p>1.3 保保往返三口红偶记八年级吧客户卡厉害或看见看见阿迪王请问请问</p>
                    <p>1.4 保保往返三口红偶记八年级吧客户卡厉害或看见看见阿迪王请问请问</p>
                    <p>1.5 保保往返三口红偶记八年级吧客户卡厉害或看见看见阿迪王请问请问</p>
                    <p>1.6 保保往返三口红偶记八年级吧客户卡厉害或看见看见阿迪王请问请问</p>
                </div>
                <div class="dig-btn">
                    <span @click="checked = false;showDig=false">不同意</span>
                    <span @click="checked = true;showDig=false">同意</span>
                </div>
           </div>
       </van-popup>
    </div>
</template>
<script>
import { Checkbox, CheckboxGroup,Popup } from 'vant'
export default {
    name:'Login',
    components:{
        [Checkbox.name]: Checkbox,
        [CheckboxGroup.name]: CheckboxGroup,
        [Popup.name]: Popup
    },
    data(){
        return{
            phone: '',
            vcode: '',
            time: 60,
            checked: false,
            isSend: false,
            showDig: false
        }
    },
    methods:{
        checkPhone(phone){
            if(/^1[3|4|5|7|8|9]\d{9}$/.test(phone)){
                return true
            }else{
                return false
            }
        },
        sendVCode(){
             if(!this.checkPhone(this.phone)){
                this.$dialog.alert({
                    title: '提示',
                    message: '请输入正确的手机号'
                }).then(() => {});
                return
            }
            this.isSend = true;
            let timer = setInterval(()=>{
                this.time--;
                if(this.time == 1){
                    this.time = 60;
                    clearInterval(timer);
                    this.isSend = false;
                }
            },1000)
        },
        onLogin(){
            if(!this.checkPhone(this.phone)){
                this.$dialog.alert({
                    title: '提示',
                    message: '请输入正确的手机号'
                }).then(() => {});
                return
            }
            if(!this.vcode.trim()){
                this.$dialog.alert({
                    title: '提示',
                    message: '验证码不能为空'
                }).then(() => {});
                return
            }
            if(!this.checked){
                this.$dialog.alert({
                    title: '提示',
                    message: '请先阅读并同意《32网络用户协议》'
                }).then(() => {
                });
                return
            }
            this.$router.push('/layout/home')
        }
    }
}
</script>
<style lang="less" scoped>
.dig{
        font-size: .12rem;
        width: 2.84rem;
        height: 4.23rem;
        
        
        overflow-x: auto;
        h4{
            margin-top: .21rem;
            margin-bottom: .15rem;
            font-size: .16rem;
            color: #000000;
            text-align: center;
        }
        .dig-content{
            padding: 0 .17rem;
            font-size: .14rem;
            color: #999999;
            box-sizing: border-box;
            padding-bottom: .58rem;
            h5{
                margin-bottom: 5px;
            }
            p{
                text-indent: .30rem;
                text-align: justify;
                line-height: 1.8;
                // letter-spacing: 1px;
            }
        }
        .dig-btn{
            display: flex;
            height: .57rem;
            background: #f2f2f2;
            position: fixed;
            width: 100%;
            bottom: 0;
            left: 0;
            span{
                flex-grow: 1;
                text-align: center;
                line-height: .57rem;
                font-size: .16rem;
                color: #333333;
            }
        }
    }
    .van-popup{
         border-radius: 10px;
        overflow: hidden;
    }
    .login{
        padding: 0 .3rem;
        box-sizing: border-box;
        padding-top: .8rem;
        h3{
            font-size: .24rem;
            // font-weight: 500;
            color: #333333;
        }
        .l-info{
            margin-top: .475rem;
            width: 100%;
            font-size: .14rem;
            .i-item{
                width: 100%;
                margin-bottom: .15rem;
                position: relative;
                input{
                    width: 100%;
                    border: none;
                    border-bottom: 1px solid #eee;
                    height: 40px;
                    padding-right: .7rem;
                    overflow: hidden;
                    box-sizing: border-box;
                    color: #999999;
                }
                .i-send{
                        position: absolute;
                        top: 50%;
                        right: 0;
                        transform: translateY(-50%);
                        color: #333333;
                        font-size: .12rem;
                    }
            }
        }
        .agree{
            font-size: .12rem;
            color: #333333;
            font-weight: 300;
        }
        .desc{
            font-size: .12rem;
            color: #333333;
            font-weight: 300;
            text-align: center;
            margin-top: .24rem;
        }
        .image{
            text-align: center;
            margin-top: .3rem;
            img{
                width: 1.5rem;
            }
        }
    }
</style>

