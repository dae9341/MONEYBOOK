import Vue from 'vue'
import App from '../components/App.vue'

import Header from '../components/Header'
import Content from '../components/Content/Content'
// import Test from '../components/Test'
// import TestChild from "../components/TestChild"

Vue.component(Header.name, Header);
Vue.component(Content.name, Content);
// Vue.component(Test.name, Test);
// Vue.component(TestChild.name, TestChild);

console.log("ssss",Header);
console.log(JSON.stringify(Header));

new Vue({
    render: h => h(App)
}).$mount('#app22');