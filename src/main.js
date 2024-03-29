// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/reset.css'

Vue.config.productionTip = false

const eventBus = new Vue()
Object.defineProperty(Vue.prototype, '$eventBus', {
  get() {
    return eventBus
  }
})

window.ipc.on('onChangeClipboard', function () {
  eventBus.$emit('onChangeClipboard', ...arguments)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store
})
