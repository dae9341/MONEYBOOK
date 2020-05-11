<template>
    <div>
        <h1>{{message}}</h1>
        <test-item-child v-bind:tests="tests" ></test-item-child>
    </div>
</template>

<script>
    import test from "../test.json"

    export default {
        name :"test-item",
        computed:{
            tests() {
                console.log(test);
                return test;
            }
        },
        props: ['message'],
    }


</script>