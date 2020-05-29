<template>
    <div class="addData">
        <a class="btnAddData" href="#" v-on:click="isOpen = true">+</a>
        <div class="addDataDimed" v-show="isOpen">
            <a href="#" class="btnClose" v-on:click="isOpen = false"><img src="" alt="닫기"></a>
            <div class="addDataForm">
                <div class="dateLayer">
                    {{getDate()}}
                </div>
                <div class="spendValueLayer">
                    <span>\</span>
                    <input type="text" id="spendValue" />원
                </div>

                <div class="isExpend">
                    <button v-on:click="isExpendClickFunc()" v-bind:class="{on: !isExpend}">수입</button>
                    <button v-on:click="isExpendClickFunc()" v-bind:class="{on: isExpend}">지출</button>
                </div>

                <div class="category" v-if="!isExpend">
                    <a href="#" v-for="item in category_in">{{item}}</a>
                </div>
                <div class="category" v-else="">
                    <a href="#" v-for="item in category_ex">{{item}}</a>
                </div>

                <div class="spendType">
                    <button v-on:click="spendTypeClickFunc('sin')" v-bind:class="{on: spendType === 'sin'}">신용카드</button>
                    <button v-on:click="spendTypeClickFunc('chk')" v-bind:class="{on: spendType === 'chk'}">체크카드</button>
                    <button v-on:click="spendTypeClickFunc('hy')" v-bind:class="{on: spendType === 'hy'}">현금</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"cpnt-addData",
        data(){
            return {
                isOpen:true,
                isExpend:false,
                spendType:"sin", //sin:신용카드, chk:체크카드, hy:현금
                category:"none",
                category_in:["급여","용돈","이월","기타","자산인출"],
                category_ex:["식비","교통비","문화/생활","생필품","의류","미용","의료/건강","교육","통신비","회비","경조사","저축"]
            }
        },
        methods:{
            getDate: function () {
                var date = new Date();
                var yyyy = date.getFullYear();
                var mm = date.getMonth() + 1;
                var dd = date.getDate();
                var today;
                mm = (mm < 10) ? "0"+mm : mm;
                dd = (dd < 10) ? "0"+dd : dd;

                today = yyyy.toString() + "-" + mm.toString() + "-" + dd.toString();

                return today;
            },

            isExpendClickFunc: function () {
                this.isExpend = !this.isExpend;
            },

            spendTypeClickFunc: function (type) {
                this.spendType = type;
            },

            setMoneyBookDate: function () {
                var setData ={
                    date: "",
                    isExpend:"",
                    category: "",
                    spendValue: 0,
                    spendType : ""
                }
            }
        }

    }
</script>