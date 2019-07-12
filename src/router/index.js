import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/login/login')
    },
    {
      path:'/logininaccount',
      component: () => import('@/views/login/loginInAccount')
    },
    {
      path:'/forget',
      component: () => import('@/views/forget/forget')
    },
    {
      path: '/layout',
      name: 'Layout',
      component: ()=> import('@/views/layout/layout'),
      children:[
        {
          path:'oil',
          component: () => import('@/views/oil/oil')
        },
        {
          path:'insurance',
          component: () => import('@/views/insurance/insurance')
        },
        {
          path:'home',
          component: () => import('@/views/home/home')
        },
        {
          path:'car',
          component: () => import('@/views/car/index/car')
        },
        {
          path:'me',
          component: () => import('@/views/me/me')
        },
      ]
    },
    {
      path:'/driver',
      component: ()=> import('@/views/driverSearch/driverSearch')
    },
    {
      path:'/rules',
      component: ()=> import('@/views/rulesSearch/rulesSearch')
    },
    {
      path:'/new-detail',
      component: ()=> import('@/views/newDetail/newDetail')
    },
    {
      path:'/news',
      component: ()=> import('@/views/news/news')
    },
    {
      path:'/driver-result',
      component: ()=> import('@/views/driverResult/driverResult')
    },
    {
      path:'/rules-result',
      component: ()=> import('@/views/rulesResult/rulesResult')
    },
    {
      path:'/gas-station',
      component: ()=> import('@/views/gasStation/gasStation')
    },
    {
      path:'/nearby-oil',
      component: ()=> import('@/views/nearbyOil/nearbyOil')
    },
    {
      path:'/my-oil',
      component: ()=> import('@/views/myOil/myOil')
    },
    {
      path:'/oil-detail',
      component: ()=> import('@/views/oilDetail/oilDetail')
    },
    {
      path:'/oil-apply',
      component: ()=> import('@/views/oilApply/oilApply')
    },
    {
      path:'/oil-refuse',
      component: ()=> import('@/views/oilRefuse/oilRefuse')
    },
    {
      path:'/oil-miss',
      component: ()=> import('@/views/oilMiss/oilMiss')
    },
    {
      path:'/oil-part',
      component: ()=> import('@/views/oilPart/oilPart')
    },
    {
      path:'/part-sett',
      component: ()=> import('@/views/partSett/partSett')
    },
    {
      path:'/part-success',
      component: ()=> import('@/views/partSuccess/partSuccess')
    },
    {
      path:'/part-fail',
      component: ()=> import('@/views/partFail/partFail')
    },
    {
      path:'/oil-personal',
      component: ()=> import('@/views/oilPersonal/oilPersonal')
    },
    {
      path:'/oil-choose',
      component: ()=> import('@/views/oilCardChoose/oilCardChoose')
    },
    {
      path:'/oil-card-Recharge',
      component: ()=> import('@/views/oilCardRecharge/oilCardRecharge')
    },
    {
      path:'/card-Recharge-success',
      component: ()=> import('@/views/cardRechargeSuccess/cardRechargeSuccess')
    },
    {
      path:'/card-Recharge-fail',
      component: ()=> import('@/views/cardRechargeFail/cardRechargeFail')
    },
    {
      path:'/capital-record',
      component: ()=> import('@/views/capitalRecord/capitalRecord')
    },
    {
      path:'/cardpy',
      component: ()=> import('@/views/cardPy/cardPy')
    },
    {
      path:'/match-record',
      component: ()=> import('@/views/matchRecord/matchRecord')
    },
    {
      path:'/oil-card-loss',
      component: ()=> import('@/views/oilCardLoss/oilCardLoss')
    },
    {
      path:'/card-loss-detail',
      component: ()=> import('@/views/cardLossDetail/cardLossDetail')
    },
    {
      path:'/single-card-loss',
      component: ()=> import('@/views/singleCardLoss/singleCardLoss')
    },
    {
      path:'/batch-success',
      component: ()=> import('@/views/batchSuccess/batchSuccess')
    },
    {
      path:'/apply-loan',
      component: ()=> import('@/views/car/applyLoan/applyLoan')
    },
    {
      path:'/loan-calc',
      component: ()=> import('@/views/car/loanCalc/loanCalc')
    },
    {
      path:'/car-list',
      component: ()=> import('@/views/car/carList/carList')
    },
    {
      path:'/car-detail',
      component: ()=> import('@/views/car/carDetail/carDetail')
    },
    {
      path:'/old-car-list',
      component: ()=> import('@/views/car/oldCarList/oldCarList')
    },
    {
      path:'/old-car-detail',
      component: ()=> import('@/views/car/oldCarDetail/oldCarDetail')
    },
    {
      path:'/car-photo',
      component: ()=> import('@/views/car/carPhoto/carPhoto')
    },
  ]
})
