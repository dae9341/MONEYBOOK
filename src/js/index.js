import Vue from 'vue'
import App from '../App.vue'

import Header from '../components/Header'
import ExpendAdd from '../components/ExpendAdd'
import ExpendList from '../components/ExpendList'
import CategoryItem from '../components/CategoryItem'

Vue.component(Header.name, Header);
Vue.component(ExpendList.name , ExpendList);
Vue.component(CategoryItem.name, CategoryItem);
Vue.component(ExpendAdd.name, ExpendAdd);

console.log("ssss",Header);
console.log(JSON.stringify(Header));

new Vue({
    render: h => h(App)
}).$mount('#app22');