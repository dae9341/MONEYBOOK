import Vue from 'vue'
import App from '../components/App.vue'

import Header from '../components/Header'
import Test from '../components/Test'
import Content from '../components/Content/Content'
import TestChild from "../components/TestChild"

Vue.component(Header.name, Header);
Vue.component(Test.name, Test);
Vue.component(Content.name, Content);
Vue.component(TestChild.name, TestChild);

new Vue({
    render: h => h(App)
}).$mount('#app22');