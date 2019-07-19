<template>
    <div class="worry-free">
        <van-nav-bar title="996无忧险"  @click-left="$router.go(-1)" left-arrow fixed :z-index="109"/>
        <div class="banner">
            <img src="../../../assets/image/insurance/996.png" />
            <div class="info-wrap">
                <div class="info">
                    <div class="d1">
                        <h3>200万</h3>
                        <p>最高保额</p>
                    </div>
                    <i></i>
                    <div class="d1">
                        <h3>1-60周岁</h3>
                        <p>承包年龄</p>
                    </div>
                    <i></i>
                    <div class="d1">
                        <h3>1年</h3>
                        <p>保额期限</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner">
            <h3>套餐方案</h3>
            <div class="tabs">
                <div class="t1" :class="active==1&&'t-active'" @click="active = 1">
                    <p>方案1</p>
                    <h2>100万</h2>
                </div>
                <div class="t1" :class="active==2&&'t-active'" @click="active = 2">
                    <p>方案2</p>
                    <h2>150万</h2>
                </div>
                <div class="t1" :class="active==3&&'t-active'" @click="active = 3">
                    <p>方案3</p>
                    <h2>200万</h2>
                </div>
            </div>
            <div class="content">
                <van-cell-group>
                    <van-cell :border="false" title="意外伤害身故和残疾" value="5万元" />
                    <van-cell :border="false" title="普通重大疾病保证金" value="5万元" />
                    <van-cell :border="false" title="其他重大疾病保证金" value="5万元" />
                    <van-cell :border="false" title="意外住院和门急诊" value="5万元" />
                    <van-cell :border="false" title="找寻费用" value="5万元" />
                    <van-cell :border="false" title="第三者死亡伤残" value="5万元" />
                    <van-cell :border="false" title="第三者医疗费用" value="5万元" />
                    <van-cell :border="false" title="第三者财产损失" value="5万元" />
                    <van-cell :border="false" title="法律费用" value="5万元" />
                </van-cell-group>
            </div>
        </div>
        <div style="height: .05rem;background: #f2f2f2;"></div>
        <div v-if="!isTB">
            <div class="inner" style="padding-top: .15rem;">
                <h3>产品特色</h3>
                <div class="imgs">
                    此处有图片
                </div>
            </div>
            <div style="height: .05rem;background: #f2f2f2;"></div>
            <div class="inner" style="padding-top: .15rem;padding-bottom: .54rem;">
                <van-tabs v-model="tabActive" color="#0063FF"  :border="false" title-active-color="#0063FF">
                    <van-tab title="投保须知">
                        <div class="box">
                            <div class="imgs">
                                此处有图片
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="理赔流程">
                        <div class="imgs">
                                此处有文字
                            </div>
                    </van-tab>
                    <van-tab title="常见问题">
                        <div class="imgs">
                                此处有文字32
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
            <div class="btns">
                <div class="btn" @click="isTB = true">立即投保</div>
            </div>
        </div>
        <div v-else>
            <div class="inner" style="padding-top: .15rem;">
                <h3>保障情况</h3>
                <div class="box">
                    <h2>保障期限：<strong>1</strong>年</h2>
                    <div class="in">
                        <img src="../../../assets/image/insurance/in.png" />
                        <span class="start">2019-09-09</span>
                        <span class="end">2019-09-09</span>
                    </div>
                </div>
                <h3 style="padding-top: .2rem;">投保人</h3>
                <van-cell-group :border="false">
                    <van-field clearable label="姓名" v-model="name" placeholder="请输入用户名" />
                    <van-field clearable label="身份证" v-model="IDCard" placeholder="请输入身份证号" />
                    <van-field type="number" clearable label="手机号码" v-model="phone" placeholder="请输入手机号码" />
                    <van-field clearable label="邮箱" v-model="email" placeholder="请输入邮箱" />
                </van-cell-group>
                <h3 style="padding-top: .2rem;">投保人</h3>
                <div class="tbs">
                    <span :class="TBIndex == 1&&'tb-active'" @click="TBIndex = 1">本人</span>
                    <span :class="TBIndex == 2&&'tb-active'" @click="TBIndex = 2">配偶</span>
                    <span :class="TBIndex == 3&&'tb-active'" @click="TBIndex = 3">父母</span>
                    <span :class="TBIndex == 4&&'tb-active'" @click="TBIndex = 4">子女</span>
                    <span :class="TBIndex == 5&&'tb-active'" @click="TBIndex = 5">其他</span>
                </div>
                <van-cell-group :border="false">
                    <van-field v-if="TBIndex == 5" clearable label="与本人的关系" v-model="GX" placeholder="请输入与投保人的关系" />
                    <van-field clearable label="姓名" v-model="GXNanem" placeholder="请输入姓名" />
                    <van-field clearable label="身份证" v-model="GXIDCard" placeholder="请输入身份证号" />
                    <van-field type="number" clearable label="手机号码" v-model="GXPhone" placeholder="请输入投保人手机号码" />
                </van-cell-group>
                <van-checkbox v-model="checked"><span style="font-size: .09rem;">我已阅读并同意<strong style="color:#FF9900;">《保险条款》、《投保须知》、《责任免除声明》、《健康确认函》</strong>的全部内容。</span></van-checkbox>
                <div  style="height: .48rem;"></div>
            </div>
            <div class="submit">
                <div class="l">保费<strong>111.88</strong>元</div>
                <div class="r">确认并投保</div>
            </div>
        </div>
    </div>
</template>
<script>
import { Tab, Tabs ,Field , Checkbox, CheckboxGroup} from 'vant';
export default {
    name:'Worry',
    components:{
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Field.name]: Field,
        [Checkbox.name]: Checkbox,
        [CheckboxGroup.name]: CheckboxGroup
    },
    data(){
        return{
            active: 1,
            tabActive: 0,
            TBIndex: 1,
            name:'陈欢欢',
            IDCard:'352227199308070666',
            phone:'',
            email:'',
            GX:'',
            GXNanem:'',
            GXIDCard:'',
            GXPhone:'',
            checked: false,
            isTB: false
        }
    }
}
</script>
<style lang="less" scoped>
.tb-active{
    color: #ffffff !important;
    background: #0063FF !important;
}
    .worry-free{
        padding-top: 46px;
        font-size: .12rem;
        .banner{
            width: 100%;
            position: relative;
            img{
                width: 100%;
            }
            .info-wrap{
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translate3d(-50%,-30%,0);
                .info{
                    width: 3.33rem;
                    height: .805rem;
                    box-shadow: 0px 0px 3px 0px rgba(105,105,105,0.11);
                    border-radius: 1.5px;
                    background: #ffffff;
                    display: flex;
                    padding: .2rem;
                    box-sizing: border-box;
                    justify-content: space-around;
                    align-items: center;
                    .d1{
                        text-align: center;
                        h3{
                            font-size: .18rem;
                            font-weight: 500;
                            color: #333333;
                        }
                        p{
                            font-size: .12rem;
                            color: #666666;
                            margin-top: .07rem;
                        }
                    }
                    i{
                        content: '';
                        width: 1px;
                        height: .335rem;
                        background: #dcdcdc;
                        display: inline-block;
                    }
                }
            }
        }
        .inner{
            padding: 0 .2rem;
            padding-top: .7rem;
            box-sizing: border-box;
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
            .tabs{
                display: flex;
                justify-content: space-between;
                margin-top: .1rem;
                .t1{
                    width: 1.07rem;
                    height: .715rem;
                    border: 1px solid rgba(220,220,220,1);
                    border-radius: 1.5px 0px 0px 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    transition: all .2s ease;
                    p{
                        color: #666666;
                    }
                    h2{
                        color: #333333;
                        font-size: .23rem;
                        font-weight: 500;
                    }
                }
                .t-active{
                    background: #0063FF;
                    position: relative;
                    p{
                        color: #ffffff !important;
                    }
                    h2{
                        color: #ffffff !important;
                    }
                }
                .t-active::before{
                    content: '';
                    position: absolute;
                    top: 100%;
                    // left: 70%;
                    width: 0; 
                    height: 0;
                    border-width: .125rem;
                    border-style: solid;
                    border-color:#0063FF transparent transparent transparent;
                }
            }
            .content{
                margin-top: .2rem;
                .van-cell{
                    padding: 10px 0;
                }
            }
            .imgs{
                margin-top: .1rem;
                width: 100%;
                height: 5.45rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .box{
                margin-top: .1rem;
                height: 1.23rem;
                background: #FAFAFA;
                padding: .19rem 0;
                box-sizing: border-box;
                text-align: center;
                h2{
                    color: #333333;
                    font-size: .14rem;
                    font-weight: 500;
                    strong{
                        font-size: .18rem;
                    }
                }
                .in{
                    width: calc(100% - .3rem);
                    position: relative;
                    margin: auto;
                    img{
                        margin-top: .1rem;
                        width: 100%;
                    }
                    .start{
                        position: absolute;
                        top: 0.06rem;
                        left: 0.5rem;
                        color: #333333;
                        font-size: .14rem;
                        font-weight: 500;
                    }
                    .end{
                        position: absolute;
                        top: 0.06rem;
                        right: 0.5rem;
                        color: #333333;
                        font-size: .14rem;
                        font-weight: 500;
                    }
                }
            }
            .tbs{
                padding: .2rem .15rem;
                display: flex;
                justify-content: space-between;
                span{
                    width: .5rem;
                    height: .22rem;
                    background: #F2F2F2;
                    color: #666666;
                    font-size: .12rem;
                    line-height: .22rem;
                    text-align: center;
                    border-radius: 1.5px;
                }
            }
        }
        .submit{
            width: 100%;
            position: fixed;
            bottom: 0;
            left: 0;
            height: .44rem;
            background: #ffffff;
            z-index: 99;
            display: flex;
            font-size: .14rem;
            .l{
                flex-grow: 1;
                text-align: center;
                line-height: .44rem;
                strong{
                    color: #FF9900;
                    font-size: .19rem;
                }
            }
            .r{
                width: 1.89rem;
                background: #0063FF;
                color: #ffffff;
                text-align: center;
                line-height: .44rem;
            }
        }
        .btns{
            width: 100%;
            position: fixed;
            bottom: .1rem;
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
</style>
