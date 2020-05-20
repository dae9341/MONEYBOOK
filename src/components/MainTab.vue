<template>
    <div class="mainTabWrap">
        <div class="mainTab" id="mainTab">
            <ul>
                <li v-for="items in tabTitle"><a href="#" v-on:click="currentTab = items">{{items}}</a></li>
            </ul>
        </div>

        <div class="mainTabContent" >
            <!--<div v-bind="setStatus()"></div>-->
            <div v-if="currentTab === '지출'">
                <ExpendContent></ExpendContent>
            </div>
            <div v-else-if="currentTab === '수입'">
                <IncomeContent></IncomeContent>
            </div>
            <div v-else="currentTab === '종합'">
                <div>all</div>
            </div>
        </div>
    </div>
</template>

<script>
    import ExpendContent from '../components/ExpendContent.vue'
    import IncomeContent from '../components/IncomeContent.vue'

    export default {
        name:"cpnt-mainTab",
        data(){
            return {
                currentTab:"종합",
                tabTitle:["종합","수입","지출"],
            }
        },
        components:{
            ExpendContent,IncomeContent
        },
        methods:{

        }
    }

</script>