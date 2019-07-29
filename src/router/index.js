import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/login/login'),
      meta:{
        title:'登录'
      }
    },
    {
      path:'/logininaccount',
      component: () => import('@/views/login/loginInAccount'),
      meta:{
        title:'账号登录'
      }
    },
    {
      path:'/forget',
      component: () => import('@/views/forget/forget'),
      meta:{
        title:'账号登录'
      }
    },
    {
      path: '/layout',
      name: 'Layout',
      component: ()=> import('@/views/layout/layout'),
      children:[
        {
          path:'oil',
          component: () => import('@/views/oil/oil'),
          meta:{
            title:'加油'
          }
        },
        {
          path:'insurance',
          component: () => import('@/views/insurance/insurance'),
          meta:{
            title:'账号登录'
          }
        },
        {
          path:'home',
          component: () => import('@/views/home/home'),
          meta:{
            title:'首页'
          }
        },
        {
          path:'car',
          component: () => import('@/views/car/index/car'),
          meta:{
            title:'车辆'
          }
        },
        {
          path:'me',
          component: () => import('@/views/me/me'),
          meta:{
            title:'我的'
          }
        },
      ]
    },
    {
      path:'/driver',
      component: ()=> import('@/views/driverSearch/driverSearch'),
      meta:{
        title:'驾照扣分查询'
      }
    },
    {
      path:'/rules',
      component: ()=> import('@/views/rulesSearch/rulesSearch'),
      meta:{
        title:'违章查询'
      }
    },
    {
      path:'/new-detail',
      component: ()=> import('@/views/newDetail/newDetail'),
      meta:{
        title:'新闻详情'
      }
    },
    {
      path:'/news',
      component: ()=> import('@/views/news/news'),
      meta:{
        title:'资讯中心'
      }
    },
    {
      path:'/driver-result',
      component: ()=> import('@/views/driverResult/driverResult'),
      meta:{
        title:'查询结果'
      }
    },
    {
      path:'/rules-result',
      component: ()=> import('@/views/rulesResult/rulesResult'),
      meta:{
        title:'查询结果'
      }
    },
    {
      path:'/gas-station',
      component: ()=> import('@/views/gasStation/gasStation'),
      meta:{
        title:'沿途油站'
      }
    },
    {
      path:'/nearby-oil',
      component: ()=> import('@/views/nearbyOil/nearbyOil'),
      meta:{
        title:'附近油站'
      }
    },
    {
      path:'/my-oil',
      component: ()=> import('@/views/myOil/myOil'),
      meta:{
        title:'我的油卡'
      }
    },
    {
      path:'/oil-detail',
      component: ()=> import('@/views/oilDetail/oilDetail'),
      meta:{
        title:'油卡分配'
      }
    },
    {
      path:'/oil-apply',
      component: ()=> import('@/views/oilApply/oilApply'),
      meta:{
        title:'油卡充值'
      }
    },
    {
      path:'/oil-refuse',
      component: ()=> import('@/views/oilRefuse/oilRefuse'),
      meta:{
        title:'账户充值'
      }
    },
    {
      path:'/oil-miss',
      component: ()=> import('@/views/oilMiss/oilMiss'),
      meta:{
        title:'账户充值'
      }
    },
    {
      meta:{
        title:'油卡分配'
      },
      path:'/oil-part',
      component: ()=> import('@/views/oilPart/oilPart')
    },
    {
      meta:{
        title:'分配结算'
      },
      path:'/part-sett',
      component: ()=> import('@/views/partSett/partSett')
    },
    {
      meta:{
        title:'分配成功'
      },
      path:'/part-success',
      component: ()=> import('@/views/partSuccess/partSuccess')
    },
    {
      meta:{
        title:'分配失败'
      },
      path:'/part-fail',
      component: ()=> import('@/views/partFail/partFail')
    },
    {
      meta:{
        title:'油卡申请'
      },
      path:'/oil-personal',
      component: ()=> import('@/views/oilPersonal/oilPersonal')
    },
    {
      meta:{
        title:'油卡申请'
      },
      path:'/oil-choose',
      component: ()=> import('@/views/oilCardChoose/oilCardChoose')
    },
    {
      meta:{
        title:'账户充值'
      },
      path:'/oil-card-Recharge',
      component: ()=> import('@/views/oilCardRecharge/oilCardRecharge')
    },
    {
      meta:{
        title:'充值成功'
      },
      path:'/card-Recharge-success',
      component: ()=> import('@/views/cardRechargeSuccess/cardRechargeSuccess')
    },
    {
      meta:{
        title:'充值失败'
      },
      path:'/card-Recharge-fail',
      component: ()=> import('@/views/cardRechargeFail/cardRechargeFail')
    },
    {
      meta:{
        title:'资金记录'
      },
      path:'/capital-record',
      component: ()=> import('@/views/capitalRecord/capitalRecord')
    },
    {
      meta:{
        title:'油卡交易'
      },
      path:'/cardpy',
      component: ()=> import('@/views/cardPy/cardPy')
    },
    {
      meta:{
        title:'分配记录'
      },
      path:'/match-record',
      component: ()=> import('@/views/matchRecord/matchRecord')
    },
    {
      meta:{
        title:'批量挂失'
      },
      path:'/oil-card-loss',
      component: ()=> import('@/views/oilCardLoss/oilCardLoss')
    },
    {
      meta:{
        title:'批量挂失'
      },
      path:'/card-loss-detail',
      component: ()=> import('@/views/cardLossDetail/cardLossDetail')
    },
    {
      meta:{
        title:'油卡挂失'
      },
      path:'/single-card-loss',
      component: ()=> import('@/views/singleCardLoss/singleCardLoss')
    },
    {
      meta:{
        title:'挂失成功'
      },
      path:'/batch-success',
      component: ()=> import('@/views/batchSuccess/batchSuccess')
    },
    {
      meta:{
        title:'我要贷款'
      },
      path:'/apply-loan',
      component: ()=> import('@/views/car/applyLoan/applyLoan')
    },
    {
      meta:{
        title:'贷款计算器'
      },
      path:'/loan-calc',
      component: ()=> import('@/views/car/loanCalc/loanCalc')
    },
    {
      meta:{
        title:'车辆列表页'
      },
      path:'/car-list',
      component: ()=> import('@/views/car/carList/carList')
    },
    {
      meta:{
        title:'车辆详情'
      },
      path:'/car-detail',
      component: ()=> import('@/views/car/carDetail/carDetail')
    },
    {
      meta:{
        title:'二手车列表'
      },
      path:'/old-car-list',
      component: ()=> import('@/views/car/oldCarList/oldCarList')
    },
    {
      meta:{
        title:'二手车详情'
      },
      path:'/old-car-detail',
      component: ()=> import('@/views/car/oldCarDetail/oldCarDetail')
    },
    {
      meta:{
        title:'车辆查看'
      },
      path:'/car-photo',
      component: ()=> import('@/views/car/carPhoto/carPhoto')
    },
    {
      meta:{
        title:'我要询价'
      },
      path:'/search-val',
      component: ()=> import('@/views/car/searchVal/searchVal')
    },
    {
      meta:{
        title:'我的保单'
      },
      path:'/my-policy',
      component: ()=> import('@/views/insurance/myPolicy/myPolicy')
    },
    {
      meta:{
        title:'保单详情'
      },
      path:'/my-policy-detailDSX',
      component: ()=> import('@/views/insurance/myPolicyDetail/myPolicyDetail')
    },
    {
      meta:{
        title:'保单详情'
      },
      path:'/my-policy-detailYSX',
      component: ()=> import('@/views/insurance/myPolicyDetailYSX/myPolicyDetailYSX')
    },
    {
      meta:{
        title:'保单详情'
      },
      path:'/my-policy-detailSXZ',
      component: ()=> import('@/views/insurance/myPolicyDetailSXZ/myPolicyDetailSXZ')
    },
    {
      meta:{
        title:'电子保单'
      },
      path:'/elec-policy',
      component: ()=> import('@/views/insurance/elecPolicy/elecPolicy')
    },
    {
      meta:{
        title:'道路救援'
      },
      path:'/load-save',
      component: ()=> import('@/views/insurance/loadSave/loadSave')
    },
    {
      meta:{
        title:'出险报案'
      },
      path:'/risk-report',
      component: ()=> import('@/views/insurance/riskReport/riskReport')
    },
    {
      meta:{
        title:'车险报价'
      },
      path:'/car-report',
      component: ()=> import('@/views/insurance/carReport/carReport')
    },
    {
      meta:{
        title:'车险列表'
      },
      path:'/insu-list',
      component: ()=> import('@/views/insurance/insuList/insuList')
    },
    {
      meta:{
        title:'保险详情'
      },
      path:'/996',
      component: ()=> import('@/views/insurance/996/worry')
    },
    {
      meta:{
        title:'理赔详情'
      },
      path:'/claim-details',
      component: ()=> import('@/views/insurance/claimDetails/claimDetails')
    },
    {
      meta:{
        title:'理赔详情'
      },
      path:'/claim-complete',
      component: ()=> import('@/views/insurance/claimComplete/claimComplete')
    },
    {
      meta:{
        title:'零部件更换项目清单'
      },
      path:'/parts-list',
      component: ()=> import('@/views/insurance/partsList/partsList')
    },
    {
      meta:{
        title:'理赔记录'
      },
      path:'/claim-record',
      component: ()=> import('@/views/insurance/claimRecord/claimRecord')
    },
    {
      meta:{
        title:'个人中心'
      },
      path:'/personal',
      component: ()=> import('@/views/me/personal/personal')
    },
    {
      meta:{
        title:'修改密码'
      },
      path:'/update-password',
      component: ()=> import('@/views/me/updatePassword/updatePassword')
    },
    {
      meta:{
        title:'账户解绑'
      },
      path:'/untying',
      component: ()=> import('@/views/me/Untying/Untying')
    },
    {
      meta:{
        title:'我的订单'
      },
      path:'/my-list',
      component: ()=> import('@/views/me/myList/myList')
    },
    {
      meta:{
        title:'订单详情'
      },
      path:'/order-detail',
      component: ()=> import('@/views/me/orderDetail/orderDetail')
    },
    {
      meta:{
        title:'物流信息'
      },
      path:'/logis-info',
      component: ()=> import('@/views/me/logisInfo/logisInfo')
    },
    {
      meta:{
        title:'查看物流'
      },
      path:'/refund',
      component: ()=> import('@/views/me/refund/refund')
    },
    {
      meta:{
        title:'申请退货'
      },
      path:'/apply-refund',
      component: ()=> import('@/views/me/applyRefund/applyRefund')
    },
    {
      meta:{
        title:'我的车辆'
      },
      path:'/my-car',
      component: ()=> import('@/views/me/myCar/myCar')
    },
    {
      meta:{
        title:'车辆详情'
      },
      path:'/my-car-info',
      component: ()=> import('@/views/me/myCarInfo/myCarInfo')
    },
    {
      meta:{
        title:'添加车辆'
      },
      path:'/add-car',
      component: ()=> import('@/views/me/addCar/addCar')
    },
    {
      meta:{
        title:'我的贷款'
      },
      path:'/my-loan',
      component: ()=> import('@/views/me/myLoan/myLoan')
    },
    {
      meta:{
        title:'贷款详情'
      },
      path:'/loan-detail',
      component: ()=> import('@/views/me/loanDetail/loanDetail')
    },
    {
      meta:{
        title:'申请成为经纪人'
      },
      path:'/broker',
      component: ()=> import('@/views/me/broker/broker')
    },
    {
      meta:{
        title:'申请成为经纪人'
      },
      path:'/broker-info',
      component: ()=> import('@/views/me/borkerInfo/borkerInfo')
    },
    {
      meta:{
        title:'收益明细'
      },
      path:'/incomebx',
      component: ()=> import('@/views/me/incomeBX/incomeBX')
    },
    {
      meta:{
        title:'收益明细'
      },
      path:'/incomecd',
      component: ()=> import('@/views/me/incomeCD/incomeCD')
    },
    {
      meta:{
        title:'收益明细'
      },
      path:'/incomeyk',
      component: ()=> import('@/views/me/incomeYK/incomeYK')
    },
    {
      meta:{
        title:'我的分销'
      },
      path:'/distri',
      component: ()=> import('@/views/me/distri/distri')
    },
    {
      meta:{
        title:'抵用券'
      },
      path:'/Coupon',
      component: ()=> import('@/views/me/coupon/coupon')
    },
    {
      meta:{
        title:'高德地图'
      },
      path:'/map/:ty',
      component: ()=> import('@/views/map/map')
    }
  ]
})

