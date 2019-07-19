<template>
    <div class="personal">
        <van-nav-bar title="个人中心"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="inner">
            <div class="header">
                <img src="../../../assets/image/me/tx.png" />
            </div>
            <div class="info">
                <van-cell-group :border="false">
                    <van-field clearable label="用户id" v-model="user.id" placeholder="请输入用户ID" />
                    <van-field clearable label="账户" v-model="user.account" placeholder="请输入账号" />
                    <van-field clearable label="微信" v-model="user.wechat" placeholder="请输入微信" >
                        <van-button slot="button" size="small" @click="$router.push('/untying')">解绑</van-button>
                    </van-field>
                    <van-field clearable label="姓名" v-model="user.name" placeholder="请输入姓名" />
                    <van-field clearable label="身份证号" v-model="user.IDCard" placeholder="请输入身份证号" />
                    <van-field clearable label="所在地区" v-model="user.area" placeholder="请输入所在地区" @click="show = true"/>
                    <van-field clearable label="详细地址" v-model="user.address" placeholder="请输入详细地址" />
                </van-cell-group>
            </div>
            <div class="btn" @click="$router.push('/update-password')">修改密码</div>
            <van-popup v-model="show" position="bottom">
                <van-area :area-list="areaList" @confirm="onChoose" @cancel="show = false"/>
            </van-popup>
        </div>
    </div>
</template>
<script>
import areaList from '../../../assets/js/areaList'
import { Field ,Area ,Popup } from 'vant';
export default {
    name:'Personal',
    components:{
        [Field.name]: Field,
        [Area.name]: Area,
        [Popup.name]: Popup 
    },
    data(){
        return{
            user:{
                id:'10095950132135',
                account:'13800138000',
                wechat:'已绑定',
                name:'陈耀毅',
                IDCard:'3522719120*******55',
                area:'福建省/漳州市/龙文区',
                address:'水仙大街188号欣隆盛世朗域A栋1501'
            },
            areaList:'',
            show: false
        }
    },
    created(){
        this.areaList = areaList;
    },
    methods:{
        onChoose(item){
            this.user.area = `${item[0].name}/${item[1].name}/${item[2].name}`;
            this.show = false;
        }
    }
}
</script>
<style lang="less" scoped>
    .personal{
        padding-top: 46px;
        font-size: .12rem;
        .inner{
            .header{
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
    }
</style>

