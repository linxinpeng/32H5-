<template>
    <div class="forget">
        <h3>忘记密码</h3>
        <div class="f-info">
            <div class="i-item">
                <input type="text" maxlength="11" placeholder="请输入手机号" @input="phone = phone.replace(/[^\d+]/g,'')" v-model="phone"/>
            </div>
            <div class="i-item">
                <input type="text" v-model="vcode" placeholder="请输入验证码"/>
                <div class="i-send">
                    <span v-if="!isSend" @click="onSend">获取验证码</span>
                    <span v-else>{{time}}s</span>
                </div>
            </div>
            <div class="i-item">
                <input type="password" v-model="password" placeholder="请输入新密码"/>
            </div>
            <div class="i-item">
                <input type="password" v-model="repassword" placeholder="请再次输入密码"/>
            </div>
        </div>
        <div class="btn"><van-button round type="info" size="large" @click="onLogin">登录</van-button></div>
        <div class="image"><img src="../../assets/image/login/logo.png"/></div>
    </div>
</template>
<script>
export default {
    name:'Forget',
    data(){
        return{
            phone:'',
            vcode:'',
            password:'',
            repassword:'',
            time: 60,
            isSend: false
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
        onSend(){
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
                    message: '请输入验证码'
                }).then(() => {});
                return
            }
            if(!this.password.trim()){
                this.$dialog.alert({
                    title: '提示',
                    message: '请输入新密码'
                }).then(() => {});
                return
            }
            if(!this.repassword.trim()){
                this.$dialog.alert({
                    title: '提示',
                    message: '请再次输入密码'
                }).then(() => {});
                return
            }
            if(this.repassword != this.password){
                this.$dialog.alert({
                    title: '提示',
                    message: '两次密码输入不一致请重新输入'
                }).then(() => {});
                return
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .forget{
        padding: 0 .3rem;
        box-sizing: border-box;
        padding-top: .8rem;
        h3{
            font-size: .24rem;
            // font-weight: 500;
            color: #333333;
        }
        .f-info{
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
                input::-webkit-input-placeholder{
                    color: #999999;
                }
                input:-ms-input-placeholder{
                    color: #999999;
                }
                input::-moz-placeholder{
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
         .image{
            text-align: center;
            margin-top: .3rem;
            img{
                width: 1.5rem;
            }
        }
    }
</style>

