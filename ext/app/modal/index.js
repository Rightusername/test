import Vue from 'vue'
import App from './components/App.vue'


Vue.config.productionTip = false

Vue.prototype.$chrome = chrome

/* eslint-disable no-new */
new Vue({
    el: '#edit_root',

    render: h => h(App)
})
