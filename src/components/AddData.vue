<template>
    <div class="addData">
        <a class="btnAddData" href="#" v-on:click="isOpen = true">+</a>
        <div class="addDataLayer" v-show="isOpen">
            <a href="#" class="btnClose" v-on:click="isOpen = false"><img src="" alt="닫기"></a>
            addData
        </div>
    </div>
</template>

<script>
    export default {
        name:"cpnt-addData",
        data(){
            return {
                isOpen:false
            }
        },
        methods:{
        }

    }
</script>