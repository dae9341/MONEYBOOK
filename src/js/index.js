import Vue from "vue"
import App from "../App.vue"

import Header from "../components/Header"
import MainTab from "../components/MainTab"
import CategoryItem from "../components/CategoryItem"
import AddData from "../components/AddData"

Vue.component(Header.name, Header);
Vue.component(MainTab.name, MainTab);
Vue.component(CategoryItem.name, CategoryItem);
Vue.component(AddData.name, AddData);


new Vue({
    render: h => h(App)
}).$mount('#app22');