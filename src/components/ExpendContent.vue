<template>
    <div class="cpnt-expendContent">
        <ul>
            <li class="tableHead">
                <span>구분</span>
                <span>날짜</span>
                <span>사용처</span>
                <span>금액</span>
                <span>지불방법</span>
            </li>
            <li v-for=" (items,index) in dataSet()" class="tableContent">
                <span>{{index+1}}</span>
                <span>{{items.date}}</span>
                <span>{{items.category}}</span>
                <span>{{items.spendValue}}</span>
                <span>{{items.spendType}}</span>
            </li>
        </ul>
        <!--<ListItem></ListItem>-->
    </div>
</template>

<script>
    import ListItem from "../components/ListItem"
    export default {
        name : 'cpnt-expendContent',
        components:{
            ListItem
        },
        props:["items"],
        methods:{
            dataSet:function () {
                var data = this.items;
                data = data.filter((da) => (da.isExpend ==="Y"));

                return data;
            }
        }

    }
</script>