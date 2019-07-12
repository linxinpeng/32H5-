// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
// import Vconsole from 'vconsole'

// let vConsole = new Vconsole();

// export default vConsole;
Vue.config.productionTip = false

import { Button,Notify,Dialog,NavBar, Cell, CellGroup    } from 'vant'

Vue.use(Button)
Vue.use(Notify)
Vue.use(Dialog)
Vue.use(NavBar)
Vue.use(Cell).use(CellGroup);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
