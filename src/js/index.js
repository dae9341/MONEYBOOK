import Vue from 'vue'
import App from '../components/App.vue'

import Header from '../components/Header'

Vue.component(Header.name, Header);

new Vue({
    render: h => h(App)
}).$mount('#app22');