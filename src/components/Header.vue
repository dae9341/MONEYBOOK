<template>
    <header>
        <h1>Header</h1>
        <div>
            <button v-on:click="count++">+</button>
            <p>count: {{count}}</p>
            <p>computed: {{doubleCnt_computed}}</p>
            <p>methods: {{doubleCnt_method()}}</p>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'cpnt-header',
        data: function(){
            var count2 = 3;
            return {
                count:0,
                count3:count2
            }
        }, //data를 사용할땐 function으로 사용한다 !
        methods:{
            doubleCnt_method: function () {
                return this.count * 2;
            }
        },
        computed:{
            doubleCnt_computed: function(){
                return this.count * 2;
            }
        }
    }
</script>
