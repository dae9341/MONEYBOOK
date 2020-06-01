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
                    <button v-on:click="isExpendClickFunc(false)" v-bind:class="{on: isExpend === false}">수입</button>
                    <button v-on:click="isExpendClickFunc(true)" v-bind:class="{on: isExpend === true}">지출</button>
                </div>

                <div class="category" v-if="!isExpend">
                    <a href="#" v-for="item in category_in" v-on:click="category = item">{{item}}</a>
                </div>
                <div class="category" v-else="">
                    <a href="#" v-for="item in category_ex">{{item}}</a>
                </div>

                <div class="spendType">
                    <button v-on:click="spendTypeClickFunc('sin')" v-bind:class="{on: spendType === 'sin'}">신용카드</button>
                    <button v-on:click="spendTypeClickFunc('chk')" v-bind:class="{on: spendType === 'chk'}">체크카드</button>
                    <button v-on:click="spendTypeClickFunc('hy')" v-bind:class="{on: spendType === 'hy'}">현금</button>
                </div>

                <button v-on:click="dataUpdate(setMoneyBookDate())" >확인</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"cpnt-addData",
        data(){
            return {
                isOpen:false,
                isExpend:false,
                date:"",
                spendType:"none", //sin:신용카드, chk:체크카드, hy:현금
                category:"none",
                category_in:["급여","용돈","이월","기타","자산인출"],
                category_ex:["식비","교통비","문화/생활","생필품","의류","미용","의료/건강","교육","통신비","회비","경조사","저축"]
            }
        },
        methods:{
            getDate: function () {
                var date = new Date();
                var yyyy = date.getFullYear().toString();
                var mm = date.getMonth() + 1;
                var dd = date.getDate();
                var today;
                mm = ((mm < 10) ? "0"+mm : mm).toString();
                dd = ((dd < 10) ? "0"+dd : dd).toString();



                today = yyyy + "-" + mm + "-" + dd;
                this.date = yyyy + mm + dd;

                return today;
            },

            isExpendClickFunc: function (bool) {
                this.isExpend = bool;
            },

            spendTypeClickFunc: function (type) {
                this.spendType = type;
            },

            setMoneyBookDate: function () {
                var setData ={
                    "날짜": this.date,
                    "구분": this.isExpend == true ? "지출":"수입",
                    "카테고리": this.category,
                    "금액": $("#spendValue").val(),
                    "지불방식" : ""
                };

                switch (this.spendType) {
                    case "sin":
                        setData.지불방식 = "신용카드";
                        break;
                    case "chk":
                        setData.지불방식 = "체크카드";
                        break;
                    case "hy":
                        setData.지불방식 = "현금";
                        break;
                    default:
                        break;
                }

                console.log(setData);
                return setData
            },


            dataUpdate: function (data) {
                var url = "https://script.google.com/macros/s/AKfycbxWqIKpUnzxDMD6feaIrjY2yBNXBTSO2RH8vxkQUGLGki8U2tI/exec";
                // var url = "https://script.google.com/macros/s/AKfycbyGLVBZeVViz2yKoQ1HumXwD4OEQNAA-ZBv3kOAVSsYFMwXw9YB/exec";
                /* axios.get(url).then(function (response) {
                     console.log(response.data);
                 });*/
                setTimeout(function () {
                    $.ajax({
                        url: url,
                        method:"POST",
                        data:data,
                        dataType:"json",
                        cache: false,
                        async:true
                        , success: function (data, status, xhr) {
                            alert("등록되었습니다!");
                        }, error: function (jqXHR, textStatus, errorThrown) {
                            console.log(arguments);
                            alert("실패!");
                        }
                    });
                },1000);
            }
        }

    }
</script>