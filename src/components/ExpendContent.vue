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

        <button v-on:click="dataUpdate()">입력!</button>
        <!--<ListItem></ListItem>-->
    </div>
</template>

<script>
    import ListItem from "../components/ListItem"
    import axios from "axios"

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
            },

            dataUpdate: function () {
                var url = "https://script.google.com/macros/s/AKfycbxWqIKpUnzxDMD6feaIrjY2yBNXBTSO2RH8vxkQUGLGki8U2tI/exec";
                // var url = "https://script.google.com/macros/s/AKfycbyGLVBZeVViz2yKoQ1HumXwD4OEQNAA-ZBv3kOAVSsYFMwXw9YB/exec";
               /* axios.get(url).then(function (response) {
                    console.log(response.data);
                });*/
                $.ajax({
                    url: url,
                    method:"POST",
                    data:{
                        "ID":"20200527001",
                        "날짜":"20200527"
                    },
                    dataType:"json",
                    cache: false,
                    async:true
                    , success: function (data, status, xhr) {
                        console.log(data);
                        alert("success");
                    }, error: function (jqXHR, textStatus, errorThrown) {
                        console.log(arguments);
                    }
                });
            }
        }

    }
</script>