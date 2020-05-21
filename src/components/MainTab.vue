<template>
    <div class="mainTabWrap">
        <div class="mainTab" id="mainTab">
            <ul>
                <li v-for="items in tabTitle" v-bind:class="{'on': currentTab=== items}"><a href="#" v-on:click="currentTab = items">{{items}}</a></li>
            </ul>
        </div>

        <div class="mainTabContent clearfix" >
            <!--<div v-bind="setStatus()"></div>-->
            <div v-if="currentTab === '지출'">
                <ExpendContent v-bind:items="items"></ExpendContent>
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
    import test from "../test.json"

    export default {
        name:"cpnt-mainTab",
        data(){
            return {
                items: test.expendData,
                currentTab:"종합",
                tabTitle:["종합","수입","지출"],
            }
        },
        components:{
            ExpendContent,IncomeContent
        },
        methods:{
            testAA: function () {
                console.log("aaa");
            }
        }
    }

</script>