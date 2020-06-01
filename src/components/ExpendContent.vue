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
                var url = "https://docs.google.com/spreadsheets/d/1tdRANwPOnOJTOmKJOfj9v-filWw8x8Z3Td1vZgFkF_A/edit#gid=0";
                var param = {"key":"AKfycbxWqIKpUnzxDMD6feaIrjY2yBNXBTSO2RH8vxkQUGLGki8U2tI"};
                $.ajax({
                    url: url,
                    method:"GET",
                    dataType:"json",
                    data:param,
                    cache: false,
                    async:true
                    , success: function (data, status, xhr) {
                        alert("success");
                        console.log(data);
                    }, error: function (jqXHR, textStatus, errorThrown) {
                        alert("error");
                        console.log(arguments);
                    }
                });
            }
        }

    }
</script>