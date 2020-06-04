<template>
    <div class="cpnt-expendContent" v-bind="dataLoad()">
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

            dataLoad:function () {
                //key: 1tdRANwPOnOJTOmKJOfj9v-filWw8x8Z3Td1vZgFkF_A
                //id: AKfycbxWqIKpUnzxDMD6feaIrjY2yBNXBTSO2RH8vxkQUGLGki8U2tI
                // var url = "https://sheets.googleapis.com/v4/spreadsheets/AKfycbxWqIKpUnzxDMD6feaIrjY2yBNXBTSO2RH8vxkQUGLGki8U2tI/values/A1%3AA200?includeValuesInResponse=false&valueInputOption=RAW&key=AIzaSyAdvMK0V-SuuDKa6PYuqg3Xz33JR4Pwg-4"
                var url = "https://sheets.googleapis.com/v4/spreadsheets/AKfycbxWqIKpUnzxDMD6feaIrjY2yBNXBTSO2RH8vxkQUGLGki8U2tI/values/시트1";
                var param = {"key":"1tdRANwPOnOJTOmKJOfj9v-filWw8x8Z3Td1vZgFkF_A"};
                $.ajax({
                    url: url,
                    method:"GET",
                    dataType:"json",
                    data:param,
                    cache: false,
                    async:true,
                    success: function (data, status, xhr) {
                        alert("success");
                        console.log(data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("error");
                        console.log(arguments);
                    }
                });
            }
        }

    }
</script>