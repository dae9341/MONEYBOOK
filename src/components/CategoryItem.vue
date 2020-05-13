<template>
    <div class="cpnt-categoryItem">
        <a href="#" v-on:click="toggleFunc()">버튼</a>


        <div class="categoryItemList" id="categoryItemList">
            <a href="#">식비</a>
            <a href="#">교통비</a>
            <a href="#">문화생활</a>
            <a href="#">생필품</a>
            <a href="#">의류</a>
            <a href="#">미용</a>
            <a href="#">의료/건강</a>
            <a href="#">교육</a>
            <a href="#">통신비</a>
            <a href="#">경조사</a>
            <a href="#">저축</a>
            <a href="#">공과금</a>
            <a href="#">카드대금</a>
        </div>
    </div>
</template>

<script>
    export default {
        name:"cpnt-categoryItem",
        data: function (){
            return {
                isList: true
            }
        },
        methods:{
            toggleFunc: function () {
                $("#categoryItemList").toggle();
            }
        }
    }
</script>