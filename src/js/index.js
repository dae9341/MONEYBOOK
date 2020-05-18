import Vue from 'vue'
import App from '../App.vue'

import Header from '../components/Header'
import MainTab from '../components/MainTab'
import ExpendAdd from '../components/ExpendAdd'
import ExpendList from '../components/ExpendList'
import CategoryItem from '../components/CategoryItem'

Vue.component(Header.name, Header);
Vue.component(MainTab.name, MainTab);
Vue.component(ExpendList.name , ExpendList);
Vue.component(CategoryItem.name, CategoryItem);
Vue.component(ExpendAdd.name, ExpendAdd);


new Vue({
    render: h => h(App)
}).$mount('#app22');