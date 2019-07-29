// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import qs from 'qs'
import './assets/css/reset.css'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
import moment from 'moment'
Vue.prototype.$moment = moment;

import Vconsole from 'vconsole'
let vConsole = new Vconsole();
export default vConsole;

Vue.use(VueAxios,axios)   //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs 

Vue.config.productionTip = false

import { Button,Notify,Dialog,NavBar, Cell, CellGroup,Icon,Tag,ActionSheet,ImagePreview   } from 'vant'
Vue.use(Button).use(Icon).use(Tag).use(ActionSheet ).use(ImagePreview)
Vue.use(Notify)
Vue.use(Dialog)
Vue.use(NavBar)
Vue.use(Cell).use(CellGroup);


var ua = navigator.userAgent.toLowerCase();
if (ua.match(/MicroMessenger/i) == "micromessenger") {
  sessionStorage.setItem('tp',1)
} else {
  sessionStorage.setItem('tp',0)
}

Vue.prototype.tp = sessionStorage.getItem('tp')
// let url ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0f0c8b6795e6fbf9&redirect_uri=http://app.32wlkj.cn/login/getwxopenid&response_type=code&scope=snsapi_userinfo&state=11#wechat_redirect";
//     location.href = url;
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
