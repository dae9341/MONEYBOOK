import Vue from 'vue'
import App from '../components/App.vue'

import Header from '../components/Header'
import Test from '../components/Test'

Vue.component(Header.name, Header);
Vue.component(Test.name, Test);

new Vue({
    render: h => h(App)
}).$mount('#app22');